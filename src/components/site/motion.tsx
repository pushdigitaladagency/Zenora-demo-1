import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  return reduce;
}

const REPLAY_MARGIN = "0px 0px -24px 0px";

function useReplayFlag<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [on, setOn] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }

    const inView = () => {
      const box = el.getBoundingClientRect();
      const height = window.innerHeight || document.documentElement.clientHeight;
      return box.bottom > 8 && box.top < height - 8 && box.width > 0;
    };

    setOn(inView());

    let io: IntersectionObserver | null = null;
    try {
      io = new IntersectionObserver(
        ([entry]) => {
          if (!entry) return;
          setOn(entry.isIntersecting || inView());
        },
        { threshold: 0, rootMargin: REPLAY_MARGIN },
      );
      io.observe(el);
    } catch {
      setOn(true);
    }

    return () => io?.disconnect();
  }, []);

  return { ref, on };
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "figure" | "p" | "h2" | "span";
}) {
  const { ref, on } = useReplayFlag<HTMLElement>();

  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      className={`reveal ${on ? "in" : ""} ${className}`}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

export function SplitWords({
  text,
  className = "",
  delay = 0,
  step = 62,
  animate = "scroll",
  variant = "mask",
}: {
  text: string;
  className?: string;
  delay?: number;
  step?: number;
  animate?: "load" | "scroll";
  variant?: "mask" | "fade";
}) {
  const { ref, on: seen } = useReplayFlag<HTMLSpanElement>();
  const words = text.split(" ");
  const pace = variant === "fade" ? Math.min(step, 780 / Math.max(words.length, 1)) : step;
  const load = animate === "load";

  return (
    <span ref={load ? undefined : ref} className={className}>
      {words.map((word, index) => {
        const wait = `${delay + index * pace}ms`;
        const token =
          variant === "fade" ? (
            <span className={`prose-word ${load ? "load" : seen ? "in" : ""}`} style={{ "--d": wait } as CSSProperties}>
              {word}
            </span>
          ) : (
            <span className="word-mask">
              <span className={load ? "word-in" : `word-rise ${seen ? "in" : ""}`} style={{ "--d": wait } as CSSProperties}>
                {word}
              </span>
            </span>
          );
        return (
          <span key={`${word}-${index}`}>
            {index > 0 ? " " : null}
            {token}
          </span>
        );
      })}
    </span>
  );
}

export function RevealText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return <SplitWords text={text} className={className} delay={delay} step={24} animate="scroll" variant="fade" />;
}

export function Mask({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, on } = useReplayFlag<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`mask ${on ? "in" : ""} ${className}`}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function Count({
  to,
  suffix = "",
  start,
}: {
  to: number;
  suffix?: string;
  start: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(to);
      return;
    }
    const duration = 1400;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - (1 - p) ** 3;
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    setValue(0);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to]);

  return (
    <span className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export function useSmoothHash() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as HTMLElement | null)?.closest("a");
      if (!link) return;
      const raw = link.getAttribute("href");
      if (!raw || raw.startsWith("tel:") || raw.startsWith("mailto:")) return;
      let url: URL;
      try {
        url = new URL(link.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;
      const el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!el) return;
      event.preventDefault();
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      const next = `${url.pathname}${url.search}${url.hash}`;
      if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== next) {
        history.pushState(null, "", next);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > threshold);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { scrolled, progress };
}

export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit?.target.id) setActive(hit.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.6] },
    );
    nodes.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, [ids]);

  return active;
}

export function useInViewOnce<T extends HTMLElement>() {
  const { ref, on } = useReplayFlag<T>();
  return { ref, seen: on };
}
