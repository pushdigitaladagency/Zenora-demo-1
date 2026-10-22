import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as ChevronLeft, i as ChevronRight, o as ArrowUpRight, t as X } from "../_libs/lucide-react.mjs";
import { C as useInViewOnce, S as WHATSAPP, _ as Reveal, a as GALLERY, b as SplitWords, c as MAP_EMBED, d as PHONE_TEL, f as PILLARS, g as RESIDENCE_FACTS, h as RERA, i as Footer, l as Mask, m as Progress, n as Count, o as Header, p as PLACES, r as FILTERS, s as MAPS_URL, t as AMENITIES, u as PHONE_DISPLAY, v as RevealText, w as usePrefersReducedMotion, x as StickyVisit, y as STATS } from "./chrome-DEswyNmP.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CiCBefje.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#content",
			className: "skip",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "content",
			className: "pb-24 md:pb-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Living, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glance, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Residences, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MasterPlan, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lifestyle, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Location, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Invite, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyVisit, {})
	] });
}
var HERO_FRAMES = [
	{
		src: "/media/hero.jpg",
		alt: "Aerial view of the landscaped central court at Zenora, framed by contemporary villas",
		motion: "ken-zoom",
		width: 1600,
		height: 862
	},
	{
		src: "/media/gallery-4.jpg",
		alt: "Aerial rhythm of villa roofs, courts and planted strips",
		motion: "ken-pan",
		width: 1600,
		height: 900
	},
	{
		src: "/media/gallery-2.jpg",
		alt: "Contemporary villa at Zenora, with a timber soffit, planted edge and private drive",
		motion: "ken-rise",
		width: 1600,
		height: 1600
	},
	{
		src: "/media/gallery-1.jpg",
		alt: "A resident crossing stepping stones over a lily pool in the landscape",
		motion: "ken-drift",
		width: 1344,
		height: 768
	},
	{
		src: "/media/gallery-3.jpg",
		alt: "Calm living and dining room inside a Zenora residence",
		motion: "ken-zoom",
		width: 1600,
		height: 900
	}
];
var HERO_BEAT = 7800;
function Hero() {
	const reduce = usePrefersReducedMotion();
	const [index, setIndex] = (0, import_react.useState)(0);
	const [cycle, setCycle] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (reduce || paused) return;
		const id = window.setInterval(() => {
			setIndex((value) => (value + 1) % HERO_FRAMES.length);
			setCycle((value) => value + 1);
		}, HERO_BEAT);
		return () => window.clearInterval(id);
	}, [reduce, paused]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-svh overflow-hidden bg-ink text-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-drift",
				children: [HERO_FRAMES.map((frame, frameIndex) => {
					const active = frameIndex === index;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `hero-frame ${active ? "is-on" : ""}`,
						"aria-hidden": !active,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: frame.src,
							alt: active ? frame.alt : "",
							width: frame.width,
							height: frame.height,
							className: `hero-still ${active ? frame.motion : ""}`,
							fetchPriority: frameIndex === 0 ? "high" : "low",
							decoding: frameIndex === 0 ? "sync" : "async"
						}, active ? `${frame.src}-${cycle}` : frame.src)
					}, frame.src);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "shade-hero absolute inset-0" })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex min-h-svh max-w-7xl flex-col justify-end px-5 pb-16 pt-32 lg:px-10 lg:pb-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sr-only",
					children: "Cinematic sequence of the published architecture, landscape and interiors at Zenora. The original project site does not publish a video file."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hero-copy rise d1 eyebrow eyebrow-light",
					children: "Goldwins, Coimbatore"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "hero-copy mt-5 max-w-5xl font-serif text-hero text-ivory",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
							text: "Luxury,",
							animate: "load",
							step: 100
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
							text: "With Room to Breathe.",
							animate: "load",
							delay: 180,
							step: 90
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hero-copy mt-6 max-w-xl text-base font-light leading-relaxed text-ivory/90 md:text-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
						text: "Discover a more considered way of living at Zenora by Zenvistas.",
						animate: "load",
						variant: "fade",
						delay: 680,
						step: 32
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rise mt-8 flex flex-col gap-3 sm:flex-row",
					style: { animationDelay: "1.05s" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#residences",
						className: "btn btn-bronze",
						children: "Explore the Residences"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#visit",
						className: "btn btn-line",
						children: "Schedule a Private Visit"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rise mt-12 flex flex-wrap items-end gap-x-8 gap-y-3 border-t border-ivory/20 pt-5 text-xs uppercase tracking-luxe text-ivory/75",
					style: { animationDelay: "1.22s" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "60 villas" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "7 acres" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Luxury 4 BHK" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "From ₹ 5.50 Cr*" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#living",
							className: "scroll-cue",
							children: ["Scroll", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "scroll-stem",
								"aria-hidden": "true"
							})]
						}),
						reduce ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 sm:ml-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hero-meter",
								"aria-hidden": "true",
								children: HERO_FRAMES.map((frame, frameIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: frameIndex === index ? "is-on" : frameIndex < index ? "is-done" : "",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { animationPlayState: paused ? "paused" : "running" } }, frameIndex === index ? cycle : "rest")
								}, frame.src))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "hero-pause",
								"aria-pressed": paused,
								onClick: () => setPaused((value) => !value),
								children: paused ? "Play" : "Pause"
							})]
						})
					]
				})
			]
		})]
	});
}
function Living() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "living",
		className: "cine bg-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-end gap-8 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5 lg:pb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "The Art of Living"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-serif text-display text-balance",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "A quieter kind of address." })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-base leading-relaxed text-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, { text: "Zenora is shaped by five thoughtful design pillars that guide every decision. Together, they balance form, function, nature, comfort, and future-readiness — quietly working in harmony. Each pillar is woven in to simplify daily living, elevate well-being, and create spaces that feel effortless, timeless, and genuinely better to live in." })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-relaxed text-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
								delay: 80,
								text: "Sixty villas share seven acres at Goldwins, with half the land kept open to landscape — a balanced plan for a more peaceful way of living."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 flex flex-wrap gap-x-5 gap-y-2",
							children: PILLARS.map((pillar, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								as: "li",
								delay: index * 70,
								className: "text-xs uppercase tracking-luxe text-olive",
								children: pillar
							}, pillar))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative lg:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mask, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "media parallax media-fill ratio-portrait sm:aspect-square",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/media/about.jpg",
							alt: "Garden court between the residences, dense with colour, shade and a small fountain",
							width: 1470,
							height: 1095,
							className: "parallax-target"
						})
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mask, {
						delay: 120,
						className: "relative z-10 -mt-20 ml-10 sm:ml-20 lg:absolute lg:-bottom-14 lg:-left-16 lg:ml-0 lg:w-7/12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "media media-fill aspect-video border-8 border-ivory",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/media/gallery-3.jpg",
								alt: "Calm living and dining room inside a Zenora residence",
								width: 1600,
								height: 900
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "bg-paper px-4 py-3 text-xs uppercase tracking-luxe text-muted",
								children: "Interior · Living & dining"
							})]
						})
					})]
				})]
			})
		})
	});
}
function Glance() {
	const { ref, seen } = useInViewOnce();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "glance",
		className: "cine border-y border-stone bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref,
			className: "mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "The Project at a Glance"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-xl font-serif text-title text-balance",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "Measured space. A finite collection." })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-14 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8",
					children: STATS.map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						as: "div",
						delay: index * 90,
						className: "border-t border-ink/15 pt-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-serif text-display leading-none text-ink",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Count, {
									to: stat.value,
									suffix: stat.suffix,
									start: seen
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "stat-rule",
								style: { "--d": `${180 + index * 90}ms` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-4 text-sm uppercase tracking-luxe text-olive",
								children: stat.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 text-sm text-muted",
								children: stat.note
							})
						]
					}, stat.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-14 max-w-2xl text-base text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, { text: "Timeless design elements, planned for peaceful living, and spread across expansive open ground. Figures are as published for Zenora by Zenvistas." })
				})
			]
		})
	});
}
function Residences() {
	const [planOpen, setPlanOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "residences",
		className: "cine bg-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-h-[78vh] overflow-hidden bg-ink text-ivory",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/media/gallery-2.jpg",
							alt: "Contemporary villa at Zenora, with a timber soffit, planted edge and private drive",
							width: 1600,
							height: 1600,
							className: "parallax-fill"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "shade-residence absolute inset-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-5 py-16 lg:px-10 lg:py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow eyebrow-light",
								children: "Architectural Residences"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 max-w-xl font-serif text-display text-balance text-ivory",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "Four bedrooms, held in a single considered plan." })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-md text-sm leading-relaxed text-ivory/80 md:text-base",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, { text: "The published residence is a luxury 4 BHK of 7,829.23 sq.ft, offered from ₹ 5.50 Cr*." })
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-12 lg:px-10 lg:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Specification"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-8",
							children: RESIDENCE_FACTS.map((fact, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								as: "div",
								delay: index * 70,
								className: "grid grid-cols-2 gap-4 border-t border-stone py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs uppercase tracking-luxe text-muted",
									children: fact.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-right font-serif text-2xl leading-none",
									children: fact.v
								})]
							}, fact.k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm leading-relaxed text-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, { text: "*Starting price as published. The 20:30:50 figure is the published payment plan. Confirm both with the team before you decide." })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: [
								"RERA ",
								RERA,
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#visit",
							className: "btn btn-solid mt-8",
							children: "Enquire About This Residence"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "border border-stone bg-paper p-4 sm:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/media/plan-4bhk.webp",
								alt: "Published 4 BHK unit plan for Zenora",
								width: 768,
								height: 549,
								className: "mx-auto h-auto w-full bg-paper"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-4 flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-luxe text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Published unit plan · 4 BHK" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "btn btn-line-dark",
									onClick: () => setPlanOpen(true),
									children: "View the Plan"
								})]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted",
						children: "Shown as published. The drawing is not redrawn or annotated beyond the source."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanDialog, {
				open: planOpen,
				onOpenChange: setPlanOpen,
				src: "/media/plan-4bhk.webp",
				alt: "Published 4 BHK unit plan for Zenora",
				title: "4 BHK unit plan",
				note: "Published drawing, shown at source resolution."
			})
		]
	});
}
function MasterPlan() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "masterplan",
		className: "cine bg-limestone",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-start gap-10 px-5 py-20 lg:grid-cols-12 lg:px-10 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-4 lg:sticky lg:top-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Master Plan"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-title text-balance",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "How the land is held." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base leading-relaxed text-charcoal/80",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, { text: "Sixty homes sit within seven acres, with half the ground kept open. The drawing below is the published master plan of Zenora by Zenvistas — opened larger, never redrawn." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "btn btn-solid mt-8",
						onClick: () => setOpen(true),
						children: "Explore Master Plan"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 100,
				className: "lg:col-span-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setOpen(true),
					className: "plan-card block w-full overflow-hidden border border-ink/10 bg-paper p-3 text-left sm:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/masterplan.webp",
						alt: "Published master plan of Zenora by Zenvistas",
						width: 768,
						height: 549,
						className: "h-auto w-full bg-paper"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-4 flex items-center justify-between text-xs uppercase tracking-luxe text-muted",
						children: ["Published master plan", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-olive",
							children: "Open larger"
						})]
					})]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanDialog, {
			open,
			onOpenChange: setOpen,
			src: "/media/masterplan.webp",
			alt: "Published master plan of Zenora by Zenvistas",
			title: "Master plan",
			note: "Published master plan. Shown as provided, without added architectural detail."
		})]
	});
}
function Lifestyle() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "lifestyle",
		className: "cine bg-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-12 lg:gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 lg:pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Lifestyle & Amenities"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-serif text-title text-balance",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "The day, arranged outdoors." })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-base leading-relaxed text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, { text: "Gardens, water and open sky sit between the villas. The community amenities published for Zenora are listed here as they appear in the project material." })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-8 border-t border-stone",
								children: AMENITIES.map((name, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
									as: "li",
									delay: index * 55,
									className: "amenity-row flex items-baseline justify-between gap-4 border-b border-stone py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs tabular-nums text-bronze-deep",
										children: String(index + 1).padStart(2, "0")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex-1 font-serif text-2xl",
										children: name
									})]
								}, name))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mask, {
						className: "lg:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "media parallax media-fill frame-tall",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/media/gallery-1.jpg",
								alt: "A resident crossing stepping stones over a lily pool in the landscape",
								width: 1344,
								height: 768,
								className: "parallax-target frame-tall w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "caption-fade pointer-events-none absolute inset-x-0 bottom-0 p-6 text-ivory",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow eyebrow-light",
									children: "Landscape"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block font-serif text-3xl",
									children: "Water garden"
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mask, {
						delay: 80,
						className: "lg:col-span-7 lg:col-start-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "media parallax media-fill aspect-video",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/media/gallery-4.jpg",
								alt: "Aerial rhythm of villa roofs, courts and planted strips",
								width: 1600,
								height: 900,
								className: "parallax-target"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "caption-fade pointer-events-none absolute inset-x-0 bottom-0 p-6 text-ivory",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow eyebrow-light",
									children: "Architecture"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block font-serif text-3xl",
									children: "A measured roofscape"
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-3xl leading-snug text-olive italic lg:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
							text: "Half the land is kept open to landscape.",
							step: 48
						})
					})
				]
			})
		})
	});
}
function Gallery() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [index, setIndex] = (0, import_react.useState)(null);
	const items = GALLERY.filter((item) => filter === "All" || item.category === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "cine border-t border-stone bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "The Visual Gallery"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "Published studies of the place." })
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						role: "tablist",
						"aria-label": "Gallery filters",
						children: FILTERS.map((name) => {
							const on = filter === name;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								role: "tab",
								"aria-selected": on,
								onClick: () => setFilter(name),
								className: `filter-chip min-h-11 px-3 text-xs uppercase tracking-luxe ${on ? "bg-ink text-ivory" : "bg-transparent text-muted hover:text-ink"}`,
								children: name
							}, name);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-sm text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, { text: "Architectural visualisations and drawings published for Zenora. Select an image to view it larger." })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3",
					children: items.map((item, itemIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "mb-4 break-inside-avoid",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "gallery-hit group block w-full text-left",
							onClick: () => setIndex(itemIndex),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mask, {
								delay: Math.min(itemIndex, 6) * 60,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: item.fit === "contain" ? "media media-still block bg-paper" : "media block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.src,
										alt: item.alt,
										width: item.width,
										height: item.height,
										loading: "lazy",
										className: item.fit === "contain" ? "h-auto w-full bg-paper object-contain" : "h-auto w-full object-cover"
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "gallery-caption mt-3 flex items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif text-2xl",
									children: item.caption
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-luxe text-muted",
									children: item.category
								})]
							})]
						})
					}, item.src))
				}, filter)
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
			items,
			index,
			onIndex: setIndex
		})]
	});
}
function Location() {
	const groups = [...new Set(PLACES.map((place) => place.group))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "location",
		className: "cine bg-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-12 lg:px-10 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Location"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-title text-balance",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "Goldwins, Coimbatore." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base leading-relaxed text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, { text: "Distances below are published for Zenora. Nothing here is estimated or invented." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 space-y-8",
						children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-luxe text-bronze-deep",
							children: group
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3",
							children: PLACES.filter((place) => place.group === group).map((place, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								as: "li",
								delay: index * 60,
								className: "flex items-baseline justify-between gap-4 border-b border-stone py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: place.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-sm text-muted",
									children: place.distance
								})]
							}, place.name))
						})] }, group))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 80,
				className: "lg:col-span-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden border border-stone bg-paper",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Map of Zenora by Zenvistas at Goldwins, Coimbatore",
						src: MAP_EMBED,
						className: "map-frame w-full border-0",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Published project pin · Goldwins, Coimbatore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: MAPS_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "group btn btn-line-dark",
						children: ["Open the Map", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
					})]
				})]
			})]
		})
	});
}
function Invite() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "visit",
		className: "relative overflow-hidden bg-ink text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/slider-2.jpg",
					alt: "",
					width: 1300,
					height: 700,
					className: "parallax-fill opacity-40"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/72" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-12 lg:px-10 lg:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow eyebrow-light",
							children: "A Private Invitation"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-serif text-display text-balance text-ivory",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "Your Next Chapter Begins Here." })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-md text-base leading-relaxed text-ivory/80",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, { text: "Experience Zenora in person. Connect with our team to discover the residences and arrange a private visit." })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-sm text-ivory/70",
							children: "Goldwins, Coimbatore"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${PHONE_TEL}`,
							className: "mt-2 block font-serif text-4xl text-ivory no-underline",
							children: PHONE_DISPLAY
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					className: "lg:col-span-6 lg:col-start-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {})
				})]
			})
		]
	});
}
function EnquiryForm() {
	const [errors, setErrors] = (0, import_react.useState)({});
	const [ready, setReady] = (0, import_react.useState)(null);
	function onSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);
		const name = String(data.get("name") || "").trim();
		const phone = String(data.get("phone") || "").trim();
		const email = String(data.get("email") || "").trim();
		const message = String(data.get("message") || "").trim();
		const consent = data.get("consent") === "on";
		const next = {};
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
			message ? `Message: ${message}` : ""
		].filter(Boolean).join("\n");
		setReady(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`);
		form.reset();
	}
	if (ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-ivory/25 bg-ink/55 p-6 sm:p-8",
		role: "status",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow eyebrow-light",
				children: "Request ready"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-serif text-4xl text-ivory",
				children: "We have not stored your details."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-ivory/80",
				children: "Send the note directly to the published Zenora line on WhatsApp, or call to arrange the visit. Nothing is saved on this website."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: ready,
					target: "_blank",
					rel: "noreferrer",
					className: "btn btn-bronze",
					children: "Request a Private Visit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `tel:${PHONE_TEL}`,
					className: "btn btn-line",
					children: ["Call ", PHONE_DISPLAY]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-6 text-xs uppercase tracking-luxe text-ivory/70",
				onClick: () => setReady(null),
				children: "Write another note"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		noValidate: true,
		onSubmit,
		className: "border border-ivory/20 bg-ink/50 p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Name",
					name: "name",
					error: errors.name,
					autoComplete: "name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Phone Number",
					name: "phone",
					error: errors.phone,
					autoComplete: "tel",
					inputMode: "tel"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					name: "email",
					error: errors.email,
					autoComplete: "email",
					inputMode: "email"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "message",
					className: "text-xs uppercase tracking-luxe text-ivory/70",
					children: "Message"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "message",
					name: "message",
					rows: 3,
					className: "field mt-1 resize-none",
					placeholder: "A preferred day, or a question",
					suppressHydrationWarning: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-6 flex items-start gap-3 text-sm leading-relaxed text-ivory/80",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "consent",
					type: "checkbox",
					className: "mt-1 size-4 accent-bronze",
					suppressHydrationWarning: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I consent to being contacted about a private visit using the details I provide." })]
			}),
			errors.consent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-bronze-soft",
				role: "alert",
				children: errors.consent
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "btn btn-bronze mt-8 w-full sm:w-auto",
				children: "Request a Private Visit"
			})
		]
	});
}
function Field({ label, name, error, autoComplete, inputMode }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: name,
			className: "text-xs uppercase tracking-luxe text-ivory/70",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: name,
			name,
			autoComplete,
			inputMode,
			"aria-invalid": Boolean(error),
			"aria-describedby": error ? `${name}-error` : void 0,
			className: "field mt-1",
			suppressHydrationWarning: true
		}),
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			id: `${name}-error`,
			className: "mt-2 text-sm text-bronze-soft",
			role: "alert",
			children: error
		}) : null
	] });
}
function PlanDialog({ open, onOpenChange, src, alt, title, note }) {
	const [close, setClose] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) setClose(false);
			onOpenChange(next);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "veil fixed inset-0 z-50 bg-ink/88" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sheet fixed inset-4 z-50 flex flex-col bg-paper text-ink md:inset-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-4 border-b border-stone px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "font-serif text-2xl",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "text-xs text-muted",
					children: note
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "btn btn-line-dark",
						onClick: () => setClose((value) => !value),
						children: close ? "Fit" : "Closer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
						className: "grid size-11 place-items-center border border-stone",
						"aria-label": "Close",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-0 flex-1 overflow-auto p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt,
					className: `mx-auto h-auto bg-paper ${close ? "plan-wide" : "w-full"}`
				})
			})]
		})] })
	});
}
function Lightbox({ items, index, onIndex }) {
	const item = index === null ? null : items[index];
	(0, import_react.useEffect)(() => {
		if (index === null) return;
		const onKey = (event) => {
			if (event.key === "ArrowRight") onIndex((index + 1) % items.length);
			if (event.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		index,
		items.length,
		onIndex
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: item !== null,
		onOpenChange: (open) => !open && onIndex(null),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "veil fixed inset-0 z-50 bg-ink/92" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sheet fixed inset-0 z-50 flex flex-col text-ivory",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "font-serif text-2xl",
							children: item?.caption ?? "Gallery"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "sr-only",
							children: item ? `${item.caption}. ${item.category}.` : "Gallery image"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
							className: "grid size-11 place-items-center border border-ivory/30",
							"aria-label": "Close gallery",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex min-h-0 flex-1 items-center justify-center px-4",
					children: item ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.src,
						alt: item.alt,
						className: `max-h-full max-w-full ${item.fit === "contain" ? "object-contain" : "object-contain"}`
					}) : null
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-4 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-luxe text-ivory/70",
						children: item?.category
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-11 place-items-center border border-ivory/30",
							"aria-label": "Previous image",
							onClick: () => index !== null && onIndex((index - 1 + items.length) % items.length),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-11 place-items-center border border-ivory/30",
							"aria-label": "Next image",
							onClick: () => index !== null && onIndex((index + 1) % items.length),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
						})]
					})]
				})
			]
		})] })
	});
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
