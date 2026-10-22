import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  AMENITIES,
  FILTERS,
  GALLERY,
  LIFESTYLE_SCENES,
  MAP_EMBED,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  PILLARS,
  PLACES,
  RESIDENCE_FACTS,
  RERA,
  STATS,
  WHATSAPP,
  type GalleryItem,
} from "./content";
import { Footer, Header, Progress, StickyVisit } from "./chrome";
import { Count, Mask, Reveal, RevealText, SplitWords, useInViewOnce, usePrefersReducedMotion } from "./motion";

export function HomePage() {
  return (
    <>
      <a href="#content" className="skip">
        Skip to content
      </a>
      <Progress />
      <Header />
      <main id="content">
        <Hero />
        <Living />
        <Glance />
        <Residences />
        <MasterPlan />
        <Lifestyle />
        <Gallery />
        <Location />
        <Invite />
      </main>
      <Footer />
      <StickyVisit />
    </>
  );
}

const HERO_FRAMES = [
  {
    src: "/media/hero.jpg",
    alt: "Aerial view of the landscaped central court at Zenora, framed by contemporary villas",
    motion: "ken-zoom",
    width: 1600,
    height: 862,
  },
  {
    src: "/media/gallery-4.jpg",
    alt: "Aerial rhythm of villa roofs, courts and planted strips",
    motion: "ken-pan",
    width: 1600,
    height: 900,
  },
  {
    src: "/media/gallery-2.jpg",
    alt: "Contemporary villa at Zenora, with a timber soffit, planted edge and private drive",
    motion: "ken-rise",
    width: 1600,
    height: 1600,
  },
  {
    src: "/media/gallery-1.jpg",
    alt: "A resident crossing stepping stones over a lily pool in the landscape",
    motion: "ken-drift",
    width: 1344,
    height: 768,
  },
  {
    src: "/media/gallery-3.jpg",
    alt: "Calm living and dining room inside a Zenora residence",
    motion: "ken-zoom",
    width: 1600,
    height: 900,
  },
] as const;

const HERO_BEAT = 7800;

function Hero() {
  const reduce = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % HERO_FRAMES.length);
      setCycle((value) => value + 1);
    }, HERO_BEAT);
    return () => window.clearInterval(id);
  }, [reduce, paused]);

  return (
    <section id="top" className="relative min-h-svh bg-ink text-ivory">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="hero-drift">
          {HERO_FRAMES.map((frame, frameIndex) => {
            const active = frameIndex === index;
            return (
              <div key={frame.src} className={`hero-frame ${active ? "is-on" : ""}`} aria-hidden={!active}>
                <img
                  key={active ? `${frame.src}-${cycle}` : frame.src}
                  src={frame.src}
                  alt={active ? frame.alt : ""}
                  width={frame.width}
                  height={frame.height}
                  className={`hero-still ${active ? frame.motion : ""}`}
                  fetchPriority={frameIndex === 0 ? "high" : "low"}
                  decoding={frameIndex === 0 ? "sync" : "async"}
                />
              </div>
            );
          })}
          <div className="shade-hero absolute inset-0" />
          <div className="hero-grain" aria-hidden="true" />
        </div>
      </div>

      <div className="hero-stage relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col justify-end px-5 pb-20 pt-28 lg:px-10 lg:pb-20 lg:pt-32">
        <p className="sr-only">
          Cinematic sequence of the published architecture, landscape and interiors at Zenora. The original project
          site does not publish a video file.
        </p>
        <p className="hero-copy rise eyebrow eyebrow-light" style={{ animationDelay: "0.08s" }}>
          Goldwins, Coimbatore
        </p>
        <h1 className="hero-copy mt-5 max-w-5xl font-serif text-hero text-ivory">
          <span className="block">
            <SplitWords text="Luxury," animate="load" step={70} />
          </span>
          <span className="block">
            <SplitWords text="With Room to Breathe." animate="load" delay={120} step={60} />
          </span>
        </h1>
        <p className="hero-copy mt-6 max-w-xl text-base leading-relaxed text-ivory md:text-lg">
          <SplitWords
            text="Discover a more considered way of living at Zenora by Zenvistas."
            animate="load"
            variant="fade"
            delay={280}
            step={28}
          />
        </p>
        <div className="rise mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.72s" }}>
          <a href="#residences" className="btn btn-bronze">
            Explore the Residences
          </a>
          <a href="#visit" className="btn btn-line">
            Schedule a Private Visit
          </a>
        </div>
        <div
          className="rise mt-10 flex flex-wrap items-end gap-x-8 gap-y-3 border-t border-ivory/30 pt-5 text-xs uppercase tracking-luxe text-ivory"
          style={{ animationDelay: "0.9s" }}
        >
          <span>60 villas</span>
          <span>7 acres</span>
          <span>Luxury 4 BHK</span>
          <span>From ₹ 6.2 Cr*</span>
          <a href="#living" className="scroll-cue">
            Scroll
            <span className="scroll-stem" aria-hidden="true" />
          </a>
          {reduce ? null : (
            <div className="flex items-center gap-3 sm:ml-auto">
              <div className="hero-meter" aria-hidden="true">
                {HERO_FRAMES.map((frame, frameIndex) => (
                  <span
                    key={frame.src}
                    className={frameIndex === index ? "is-on" : frameIndex < index ? "is-done" : ""}
                  >
                    <i key={frameIndex === index ? cycle : "rest"} style={{ animationPlayState: paused ? "paused" : "running" }} />
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="hero-pause"
                aria-pressed={paused}
                onClick={() => setPaused((value) => !value)}
              >
                {paused ? "Play" : "Pause"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Living() {
  return (
    <section id="living" className="cine bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-32">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:pb-16">
            <Reveal>
              <p className="eyebrow">The Art of Living</p>
            </Reveal>
            <h2 className="mt-4 font-serif text-display text-balance">
              <SplitWords text="A quieter kind of address." />
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              <RevealText text="Zenora is shaped by five thoughtful design pillars that guide every decision. Together, they balance form, function, nature, comfort, and future-readiness — quietly working in harmony. Each pillar is woven in to simplify daily living, elevate well-being, and create spaces that feel effortless, timeless, and genuinely better to live in." />
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              <RevealText
                delay={80}
                text="Sixty villas share seven acres at Goldwins, with half the land kept open to landscape — a balanced plan for a more peaceful way of living."
              />
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
              {PILLARS.map((pillar, index) => (
                <Reveal as="li" key={pillar} delay={index * 70} className="text-xs uppercase tracking-luxe text-olive">
                  {pillar}
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="relative lg:col-span-7">
            <Mask>
              <figure className="media parallax media-fill ratio-portrait sm:aspect-square">
                <img
                  src="/media/about.jpg"
                  alt="Garden court between the residences, dense with colour, shade and a small fountain"
                  width={1470}
                  height={1095}
                  className="parallax-target"
                />
              </figure>
            </Mask>
            <Mask delay={120} className="overlap-still relative z-10 -mt-16 lg:absolute lg:-bottom-14 lg:-left-16 lg:ml-0 lg:w-7/12">
              <figure className="media media-fill aspect-video border-8 border-ivory">
                <img
                  src="/media/gallery-3.jpg"
                  alt="Calm living and dining room inside a Zenora residence"
                  width={1600}
                  height={900}
                />
                <figcaption className="bg-paper px-4 py-3 text-xs uppercase tracking-luxe text-muted">
                  <RevealText text="Interior · Living & dining" />
                </figcaption>
              </figure>
            </Mask>
          </div>
        </div>
      </div>
    </section>
  );
}

function Glance() {
  const { ref, seen } = useInViewOnce<HTMLDivElement>();
  return (
    <section id="glance" className="cine border-y border-stone bg-paper">
      <div ref={ref} className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <p className="eyebrow">The Project at a Glance</p>
        </Reveal>
        <h2 className="mt-4 max-w-xl font-serif text-title text-balance">
          <SplitWords text="Measured space. A finite collection." />
        </h2>
        <dl className="mt-14 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {STATS.map((stat, index) => (
            <Reveal as="div" key={stat.label} delay={index * 90} className="border-t border-ink/15 pt-5">
              <dt className="font-serif text-display leading-none text-ink">
                <Count to={stat.value} suffix={stat.suffix} start={seen} />
              </dt>
              <span className="stat-rule" style={{ "--d": `${180 + index * 90}ms` } as CSSProperties} />
              <dd className="mt-4 text-sm uppercase tracking-luxe text-olive">{stat.label}</dd>
              <dd className="mt-2 text-sm text-muted">{stat.note}</dd>
            </Reveal>
          ))}
        </dl>
        <p className="mt-14 max-w-2xl text-base text-muted">
          <RevealText text="Timeless design elements, planned for peaceful living, and spread across expansive open ground. Figures are as published for Zenora by Zenvistas." />
        </p>
      </div>
    </section>
  );
}

function Residences() {
  const [planOpen, setPlanOpen] = useState(false);
  return (
    <section id="residences" className="cine bg-ivory">
      <div className="relative min-h-[78vh] overflow-hidden bg-ink text-ivory">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/media/gallery-2.jpg"
            alt="Contemporary villa at Zenora, with a timber soffit, planted edge and private drive"
            width={1600}
            height={1600}
            className="parallax-fill"
          />
        </div>
        <div className="shade-residence absolute inset-0" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-5 py-16 lg:px-10 lg:py-20">
          <Reveal>
            <p className="eyebrow eyebrow-light">Architectural Residences</p>
          </Reveal>
          <h2 className="mt-4 max-w-xl font-serif text-display text-balance text-ivory">
            <SplitWords text="Four bedrooms, held in a single considered plan." />
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/80 md:text-base">
            <RevealText text="The published residence is a luxury 4 BHK of 7,829.23 sq.ft, offered from ₹ 6.2 Cr*." />
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-12 lg:px-10 lg:py-24">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Specification</p>
          </Reveal>
          <dl className="mt-8">
            {RESIDENCE_FACTS.map((fact, index) => (
              <Reveal as="div" key={fact.k} delay={index * 70} className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] gap-4 border-t border-stone py-4">
                <dt className="min-w-0 text-xs uppercase tracking-luxe text-muted">{fact.k}</dt>
                <dd className="min-w-0 text-right font-serif text-xl leading-tight sm:text-2xl">{fact.v}</dd>
              </Reveal>
            ))}
          </dl>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            <RevealText text="*Starting price as published. The 20:30:50 figure is the published payment plan. Confirm both with the team before you decide." />
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            <RevealText text={`RERA ${RERA}.`} />
          </p>
          <Reveal delay={140}>
            <a href="#visit" className="btn btn-solid mt-8">
              Enquire About This Residence
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={80}>
            <figure className="border border-stone bg-paper p-4 sm:p-8">
              <img
                src="/media/plan-4bhk-real.webp"
                alt="Realistic top-down view of the published 4 BHK plan at Zenora"
                width={1728}
                height={1152}
                className="mx-auto h-auto w-full bg-white"
              />
              <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-luxe text-muted">
                <span>4 BHK · realistic view</span>
                <button type="button" className="btn btn-line-dark" onClick={() => setPlanOpen(true)}>
                  View the drawing
                </button>
              </figcaption>
            </figure>
          </Reveal>
          <p className="mt-4 text-sm text-muted">
            <RevealText text="A flat, realistic view of the published plan. The original drawing is still available." />
          </p>
        </div>
      </div>

      <PlanDialog
        open={planOpen}
        onOpenChange={setPlanOpen}
        src="/media/plan-4bhk-hd.webp"
        alt="Published 4 BHK unit plan for Zenora"
        title="4 BHK unit plan"
        note="Published drawing, enlarged so the rooms stay legible."
      />
    </section>
  );
}

function MasterPlan() {
  const [open, setOpen] = useState(false);
  return (
    <section id="masterplan" className="cine bg-limestone">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <Reveal>
            <p className="eyebrow">Master Plan</p>
          </Reveal>
          <h2 className="mt-4 font-serif text-title text-balance">
            <SplitWords text="How the land is held." />
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/80">
            <RevealText text="Sixty homes sit within seven acres, with half the ground kept open. The drawing below is the published master plan of Zenora by Zenvistas — opened larger so the layout stays legible." />
          </p>
          <Reveal delay={160}>
            <button type="button" className="btn btn-solid mt-8" onClick={() => setOpen(true)}>
              Explore Master Plan
            </button>
          </Reveal>
        </div>
        <Reveal delay={100} className="lg:col-span-8">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="plan-card block w-full overflow-hidden border border-ink/10 bg-paper p-3 text-left sm:p-6"
          >
            <img
              src="/media/masterplan-hd.webp"
              alt="Published master plan of Zenora by Zenvistas"
              width={1664}
              height={1184}
              className="h-auto w-full bg-paper"
            />
            <span className="mt-4 flex items-center justify-between text-xs uppercase tracking-luxe text-muted">
              Published master plan
              <span className="text-olive">Open larger</span>
            </span>
          </button>
        </Reveal>
      </div>
      <PlanDialog
        open={open}
        onOpenChange={setOpen}
        src="/media/masterplan-hd.webp"
        alt="Published master plan of Zenora by Zenvistas"
        title="Master plan"
        note="Published master plan, enlarged so the drawing stays legible."
      />
    </section>
  );
}

function LifestyleStage() {
  const reduce = usePrefersReducedMotion();
  const rail = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const count = LIFESTYLE_SCENES.length;
  const scene = LIFESTYLE_SCENES[index]!;

  useEffect(() => {
    const current = rail.current?.querySelector<HTMLElement>("[aria-selected='true']");
    current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", inline: "center", block: "nearest" });
  }, [index, reduce]);

  function go(next: number) {
    setIndex((next + count) % count);
  }

  return (
    <div className="lg:col-span-7">
      <Mask>
        <figure
          className="media media-stage frame-tall"
          tabIndex={0}
          aria-roledescription="carousel"
          aria-label="Project photographs"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              go(index + 1);
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              go(index - 1);
            }
          }}
        >
          {LIFESTYLE_SCENES.map((item, itemIndex) => (
            <img
              key={item.src}
              src={item.src}
              alt={itemIndex === index ? item.alt : ""}
              width={item.width}
              height={item.height}
              className={itemIndex === index ? "stage-img is-on" : "stage-img"}
              aria-hidden={itemIndex === index ? undefined : true}
            />
          ))}
          <div className="stage-controls">
            <button type="button" className="stage-arrow" aria-label="Previous photograph" onClick={() => go(index - 1)}>
              <ChevronLeft aria-hidden="true" />
            </button>
            <span className="stage-count" aria-live="polite">
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
            <button type="button" className="stage-arrow" aria-label="Next photograph" onClick={() => go(index + 1)}>
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
          <figcaption key={scene.src} className="stage-caption caption-fade pointer-events-none absolute inset-x-0 bottom-0 p-6 text-ivory">
            <span className="eyebrow eyebrow-light">{scene.kicker}</span>
            <span className="mt-2 block font-serif text-3xl">{scene.title}</span>
          </figcaption>
        </figure>
      </Mask>
      <div ref={rail} className="stage-thumbs" role="tablist" aria-label="Choose a photograph">
        {LIFESTYLE_SCENES.map((item, itemIndex) => (
          <button
            key={item.src}
            type="button"
            role="tab"
            aria-selected={itemIndex === index}
            aria-label={item.title}
            className={itemIndex === index ? "stage-thumb is-on" : "stage-thumb"}
            onClick={() => setIndex(itemIndex)}
          >
            <img src={item.src} alt="" width={item.width} height={item.height} />
          </button>
        ))}
      </div>
    </div>
  );
}

function Lifestyle() {
  return (
    <section id="lifestyle" className="cine bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 lg:pt-6">
            <Reveal>
              <p className="eyebrow">Lifestyle & Amenities</p>
            </Reveal>
            <h2 className="mt-4 font-serif text-title text-balance">
              <SplitWords text="The day, arranged outdoors." />
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              <RevealText text="Gardens, water and open sky sit between the villas. The community amenities published for Zenora are listed here as they appear in the project material." />
            </p>
            <ol className="mt-8 border-t border-stone">
              {AMENITIES.map((name, index) => (
                <Reveal as="li" key={name} delay={index * 55} className="amenity-row flex items-baseline justify-between gap-4 border-b border-stone py-3">
                  <span className="text-xs tabular-nums text-bronze-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-serif text-2xl">{name}</span>
                </Reveal>
              ))}
            </ol>
          </div>

          <LifestyleStage />

          <Mask delay={80} className="lg:col-span-7 lg:col-start-2">
            <figure className="media parallax media-fill aspect-video">
              <img
                src="/media/gallery-4.jpg"
                alt="Aerial rhythm of villa roofs, courts and planted strips"
                width={1600}
                height={900}
                className="parallax-target"
              />
              <figcaption className="caption-fade pointer-events-none absolute inset-x-0 bottom-0 p-6 text-ivory">
                <span className="eyebrow eyebrow-light">Architecture</span>
                <span className="mt-2 block font-serif text-3xl">A measured roofscape</span>
              </figcaption>
            </figure>
          </Mask>

          <p className="font-serif text-3xl leading-snug text-olive italic lg:col-span-4">
            <SplitWords text="Half the land is kept open to landscape." step={48} />
          </p>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [index, setIndex] = useState<number | null>(null);
  const items = GALLERY.filter((item) => filter === "All" || item.category === filter);

  return (
    <section id="gallery" className="cine border-t border-stone bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow">The Visual Gallery</p>
            </Reveal>
            <h2 className="mt-4 font-serif text-title">
              <SplitWords text="Published studies of the place." />
            </h2>
          </div>
          <Reveal>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery filters">
            {FILTERS.map((name) => {
              const on = filter === name;
              return (
                <button
                  key={name}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setFilter(name)}
                  className={`filter-chip min-h-11 px-3 text-xs uppercase tracking-luxe ${
                    on ? "bg-ink text-ivory" : "bg-transparent text-muted hover:text-ink"
                  }`}
                >
                  {name}
                </button>
              );
            })}
            </div>
          </Reveal>
        </div>
        <p className="mt-6 max-w-xl text-sm text-muted">
          <RevealText text="Architectural visualisations and drawings published for Zenora. Select an image to view it larger." />
        </p>

        <div key={filter} className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((item, itemIndex) => (
            <figure key={item.src} className="mb-4 break-inside-avoid">
              <button
                type="button"
                className="gallery-hit group block w-full text-left"
                onClick={() => setIndex(itemIndex)}
              >
                <Mask delay={Math.min(itemIndex, 6) * 60}>
                  <span className={item.fit === "contain" ? "media media-still block bg-paper" : "media block"}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      className={
                        item.fit === "contain"
                          ? "h-auto w-full bg-paper object-contain"
                          : "h-auto w-full object-cover"
                      }
                    />
                  </span>
                </Mask>
                <span className="gallery-caption mt-3 flex items-baseline justify-between gap-3">
                  <span className="font-serif text-2xl">{item.caption}</span>
                  <span className="text-xs uppercase tracking-luxe text-muted">{item.category}</span>
                </span>
              </button>
            </figure>
          ))}
        </div>
      </div>
      <Lightbox items={items} index={index} onIndex={setIndex} />
    </section>
  );
}

function Location() {
  const groups = [...new Set(PLACES.map((place) => place.group))];
  return (
    <section id="location" className="cine bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Location</p>
          </Reveal>
          <h2 className="mt-4 font-serif text-title text-balance">
            <SplitWords text="Goldwins, Coimbatore." />
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            <RevealText text="Distances below are published for Zenora. Nothing here is estimated or invented." />
          </p>
          <div className="mt-8 space-y-8">
            {groups.map((group) => (
              <div key={group}>
                <Reveal>
                  <p className="text-xs uppercase tracking-luxe text-bronze-deep">{group}</p>
                </Reveal>
                <ul className="mt-3">
                  {PLACES.filter((place) => place.group === group).map((place, index) => (
                    <Reveal
                      as="li"
                      key={place.name}
                      delay={index * 60}
                      className="flex items-baseline justify-between gap-4 border-b border-stone py-3"
                    >
                      <span>{place.name}</span>
                      <span className="tabular-nums text-sm text-muted">{place.distance}</span>
                    </Reveal>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={80} className="lg:col-span-7">
          <div className="overflow-hidden border border-stone bg-paper">
            <iframe
              title="Map of Zenora by Zenvistas at Goldwins, Coimbatore"
              src={MAP_EMBED}
              className="map-frame w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted">Published project pin · Goldwins, Coimbatore</p>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="group btn btn-line-dark">
              Open the Map
              <ArrowUpRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Invite() {
  return (
    <section id="visit" className="relative overflow-hidden bg-ink text-ivory">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/media/slider-2.jpg"
          alt=""
          width={1300}
          height={700}
          className="parallax-fill opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-ink/72" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow eyebrow-light">A Private Invitation</p>
          </Reveal>
          <h2 className="mt-4 font-serif text-display text-balance text-ivory">
            <SplitWords text="Your Next Chapter Begins Here." />
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/80">
            <RevealText text="Experience Zenora in person. Connect with our team to discover the residences and arrange a private visit." />
          </p>
          <Reveal delay={90}>
            <p className="mt-8 text-sm text-ivory/70">Goldwins, Coimbatore</p>
            <a href={`tel:${PHONE_TEL}`} className="mt-2 block font-serif text-4xl text-ivory no-underline">
              {PHONE_DISPLAY}
            </a>
          </Reveal>
        </div>
        <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  );
}

function EnquiryForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [ready, setReady] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const consent = data.get("consent") === "on";
    const next: Record<string, string> = {};
    if (name.length < 2) next.name = "Please enter your name.";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 13) next.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!consent) next.consent = "Consent is required to request a visit.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const text = [
      "Hello, I would like to request a private visit to Zenora by Zenvistas at Goldwins, Coimbatore.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    setReady(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`);
    form.reset();
  }

  if (ready) {
    return (
      <div className="border border-ivory/25 bg-ink/55 p-6 sm:p-8" role="status">
        <p className="eyebrow eyebrow-light">Request ready</p>
        <h3 className="mt-3 font-serif text-4xl text-ivory">We have not stored your details.</h3>
        <p className="mt-4 text-sm leading-relaxed text-ivory/80">
          Send the note directly to the published Zenora line on WhatsApp, or call to arrange the visit. Nothing
          is saved on this website.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={ready} target="_blank" rel="noreferrer" className="btn btn-bronze">
            Request a Private Visit
          </a>
          <a href={`tel:${PHONE_TEL}`} className="btn btn-line">
            Call {PHONE_DISPLAY}
          </a>
        </div>
        <button type="button" className="mt-6 text-xs uppercase tracking-luxe text-ivory/70" onClick={() => setReady(null)}>
          Write another note
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="border border-ivory/20 bg-ink/50 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} autoComplete="name" />
        <Field label="Phone Number" name="phone" error={errors.phone} autoComplete="tel" inputMode="tel" />
      </div>
      <div className="mt-5">
        <Field label="Email" name="email" error={errors.email} autoComplete="email" inputMode="email" />
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="text-xs uppercase tracking-luxe text-ivory/70">
          Message
        </label>
        <textarea id="message" name="message" rows={3} className="field mt-1 resize-none" placeholder="A preferred day, or a question" suppressHydrationWarning />
      </div>
      <label className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-ivory/80">
        <input name="consent" type="checkbox" className="mt-1 size-4 accent-bronze" suppressHydrationWarning />
        <span>I consent to being contacted about a private visit using the details I provide.</span>
      </label>
      {errors.consent ? (
        <p className="mt-2 text-sm text-bronze-soft" role="alert">
          {errors.consent}
        </p>
      ) : null}
      <button type="submit" className="btn btn-bronze mt-8 w-full sm:w-auto">
        Request a Private Visit
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  autoComplete,
  inputMode,
}: {
  label: string;
  name: string;
  error?: string;
  autoComplete?: string;
  inputMode?: "tel" | "email" | "text";
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-luxe text-ivory/70">
        {label}
      </label>
      <input
        id={name}
        name={name}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="field mt-1"
        suppressHydrationWarning
      />
      {error ? (
        <p id={`${name}-error`} className="mt-2 text-sm text-bronze-soft" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function PlanDialog({
  open,
  onOpenChange,
  src,
  alt,
  title,
  note,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  src: string;
  alt: string;
  title: string;
  note: string;
}) {
  const [close, setClose] = useState(false);
  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        if (!next) setClose(false);
        onOpenChange(next);
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="veil fixed inset-0 z-50 bg-ink/88" />
        <Dialog.Content className="sheet fixed inset-4 z-50 flex flex-col bg-paper text-ink md:inset-10">
          <div className="flex items-center justify-between gap-4 border-b border-stone px-4 py-3">
            <div>
              <Dialog.Title className="font-serif text-2xl">{title}</Dialog.Title>
              <Dialog.Description className="text-xs text-muted">{note}</Dialog.Description>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" className="btn btn-line-dark" onClick={() => setClose((value) => !value)}>
                {close ? "Fit" : "Closer"}
              </button>
              <Dialog.Close className="grid size-11 place-items-center border border-stone" aria-label="Close">
                <X className="size-4" />
              </Dialog.Close>
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-auto p-4">
            <img
              src={src}
              alt={alt}
              className={`mx-auto h-auto bg-paper ${close ? "plan-wide" : "w-full"}`}
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Lightbox({
  items,
  index,
  onIndex,
}: {
  items: GalleryItem[];
  index: number | null;
  onIndex: (index: number | null) => void;
}) {
  const item = index === null ? null : items[index];

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (event.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onIndex]);

  return (
    <Dialog.Root open={item !== null} onOpenChange={(open) => !open && onIndex(null)}>
      <Dialog.Portal>
        <Dialog.Overlay className="veil fixed inset-0 z-50 bg-ink/92" />
        <Dialog.Content className="sheet fixed inset-0 z-50 flex flex-col text-ivory">
          <div className="flex items-center justify-between px-4 py-3">
            <Dialog.Title className="font-serif text-2xl">{item?.caption ?? "Gallery"}</Dialog.Title>
            <Dialog.Description className="sr-only">
              {item ? `${item.caption}. ${item.category}.` : "Gallery image"}
            </Dialog.Description>
            <Dialog.Close className="grid size-11 place-items-center border border-ivory/30" aria-label="Close gallery">
              <X className="size-4" />
            </Dialog.Close>
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center px-4">
            {item ? (
              <img
                src={item.src}
                alt={item.alt}
                className={`max-h-full max-w-full ${item.fit === "contain" ? "object-contain" : "object-contain"}`}
              />
            ) : null}
          </div>
          <div className="flex items-center justify-between px-4 py-4">
            <p className="text-xs uppercase tracking-luxe text-ivory/70">{item?.category}</p>
            <div className="flex gap-2">
              <button
                type="button"
                className="grid size-11 place-items-center border border-ivory/30"
                aria-label="Previous image"
                onClick={() => index !== null && onIndex((index - 1 + items.length) % items.length)}
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                className="grid size-11 place-items-center border border-ivory/30"
                aria-label="Next image"
                onClick={() => index !== null && onIndex((index + 1) % items.length)}
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
