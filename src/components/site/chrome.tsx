import { useEffect, useState, type CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
import { NAV, PHONE_DISPLAY, PHONE_TEL, RERA } from "./content";
import { useActiveSection, useScrolled, useSmoothHash, Reveal } from "./motion";

const SECTION_IDS = NAV.map((item) => item.id);

export function Progress() {
  const { progress } = useScrolled();
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-px" aria-hidden="true">
      <div className="h-full origin-left bg-bronze" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}

export function Header({ solid = false }: { solid?: boolean }) {
  const { scrolled } = useScrolled();
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const [slide, setSlide] = useState(false);
  const grounded = solid || scrolled || open;
  useSmoothHash();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (open) {
      setShown(true);
      if (reduce) {
        setSlide(true);
        return;
      }
      const frame = requestAnimationFrame(() => setSlide(true));
      return () => cancelAnimationFrame(frame);
    }
    setSlide(false);
    const timer = window.setTimeout(() => setShown(false), reduce ? 0 : 520);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!shown) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [shown]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 ${grounded ? "text-ink" : "text-ivory"}`}
      >
        <div
          className={`relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-10 ${
            grounded ? "border-b border-stone bg-ivory/95 backdrop-blur-md" : "bg-transparent"
          }`}
        >
          <Link to="/" hash="top" className="group min-w-0 no-underline" onClick={() => setOpen(false)}>
            <img
              src={grounded ? "/media/logo-original.png" : "/media/logo-hero.png"}
              alt="Zenora, Authorised Channel Partner"
              width={355}
              height={150}
              className="brand-logo"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.id}
                to="/"
                hash={item.id}
                data-active={active === item.id}
                className="nav-link text-xs uppercase tracking-luxe"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/" hash="visit" className={`btn hidden sm:inline-flex ${grounded ? "btn-solid" : "btn-line"}`}>
              Private Visit
            </Link>
            <button
              type="button"
              className="nav-toggle lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span className={`nav-burger ${open ? "is-open" : ""}`} aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </header>

      {shown ? (
        <div
          id="mobile-nav"
          className={`nav-panel lg:hidden ${slide ? "is-open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV.map((item, index) => (
              <Link
                key={item.id}
                to="/"
                hash={item.id}
                data-active={active === item.id || undefined}
                onClick={() => setOpen(false)}
                className="menu-link"
                style={{ "--d": `${index * 50}ms` } as CSSProperties}
              >
                <span className="menu-index">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto border-t border-stone pt-6">
            <a href={`tel:${PHONE_TEL}`} className="font-serif text-3xl text-ink no-underline">
              {PHONE_DISPLAY}
            </a>
            <Link to="/" hash="visit" onClick={() => setOpen(false)} className="btn btn-solid mt-6 w-full">
              Schedule a Private Visit
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function StickyVisit() {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    const nodes = ["visit", "site-footer"]
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    let overSection = false;
    let pastHero = false;
    const sync = () => setHide(overSection || !pastHero);
    const onScroll = () => {
      pastHero = window.scrollY > window.innerHeight * 0.72;
      sync();
    };
    const io = new IntersectionObserver(
      (entries) => {
        overSection = entries.some((entry) => entry.isIntersecting);
        sync();
      },
      { threshold: 0.08 },
    );
    nodes.forEach((node) => io.observe(node));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (hide) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-stone bg-ivory/95 p-3 backdrop-blur md:hidden">
      <a href="#visit" className="btn btn-solid w-full">
        Schedule a Private Visit
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="site-footer" className="bg-ink text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-12 lg:px-10 lg:py-20">
        <Reveal className="lg:col-span-5">
          <img
            src="/media/logo-hero.png"
            alt="Zenora, Authorised Channel Partner"
            width={355}
            height={150}
            className="brand-logo brand-logo-footer"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/75">
            Luxury 4 BHK villas at Goldwins, Coimbatore. Sixty residences across seven acres.
          </p>
        </Reveal>
        <Reveal delay={80} className="lg:col-span-3">
          <p className="eyebrow eyebrow-light">Visit</p>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((item) => (
              <li key={item.id}>
                <Link to="/" hash={item.id} className="footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/privacy" className="footer-link">
                Privacy
              </Link>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={140} className="lg:col-span-4">
          <p className="eyebrow eyebrow-light">Contact</p>
          <p className="mt-5 text-sm text-ivory/75">Goldwins, Coimbatore</p>
          <a href={`tel:${PHONE_TEL}`} className="mt-2 block font-serif text-3xl text-ivory no-underline">
            {PHONE_DISPLAY}
          </a>
          <p className="mt-6 text-xs uppercase tracking-luxe text-bronze-soft">RERA {RERA}</p>
        </Reveal>
      </div>
      <div className="border-t border-ivory/15">
        <div className="mx-auto max-w-7xl space-y-4 px-5 py-8 text-xs leading-relaxed text-ivory/60 lg:px-10">
          <Reveal as="p">
            Privacy & disclaimer. Any content shown here is sourced from the developer / builder for information
            only and is not an official Zenvistas website. It is presented in the manner of an authorised sales
            partner of Zenora by Zenvistas and does not include the Zenora by Zenvistas sales team. Published
            details do not bind Zenvistas. Images are architectural visualisations. The starting price of ₹ 6.2
            Cr* and the 7,829.23 sq.ft 4 BHK plan are as published and may change. Project RERA number as
            published: {RERA}. Confirm registration, pricing, availability, and specifications directly before
            making a decision.
          </Reveal>
          <Reveal as="p" delay={80}>
            © {new Date().getFullYear()} Zenora by Zenvistas. All rights reserved to their respective owners.
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
