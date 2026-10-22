import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chrome-DEswyNmP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PHONE_DISPLAY = "+91 80780 84771";
var PHONE_TEL = "+918078084771";
var WHATSAPP = "918078084771";
var RERA = "TNRERA/11/BLG/0013/2026";
var MAPS_URL = "https://www.google.com/maps/search/?api=1&query=11.065361753796154,77.0460919758708";
var MAP_EMBED = "https://www.openstreetmap.org/export/embed.html?bbox=77.006%2C11.035%2C77.086%2C11.095&layer=mapnik&marker=11.0653618%2C77.046092";
var NAV = [
	{
		href: "#living",
		id: "living",
		label: "Living"
	},
	{
		href: "#residences",
		id: "residences",
		label: "Residences"
	},
	{
		href: "#masterplan",
		id: "masterplan",
		label: "Master Plan"
	},
	{
		href: "#lifestyle",
		id: "lifestyle",
		label: "Amenities"
	},
	{
		href: "#gallery",
		id: "gallery",
		label: "Gallery"
	},
	{
		href: "#location",
		id: "location",
		label: "Location"
	}
];
var PILLARS = [
	"Form",
	"Function",
	"Nature",
	"Comfort",
	"Future-readiness"
];
var STATS = [
	{
		value: 60,
		suffix: "",
		label: "Exclusive villas",
		note: "A finite collection"
	},
	{
		value: 7,
		suffix: "",
		label: "Acres",
		note: "At Goldwins, Coimbatore"
	},
	{
		value: 50,
		suffix: "%",
		label: "Open to landscape",
		note: "Of the site"
	},
	{
		value: 4,
		suffix: "",
		label: "BHK villas",
		note: "The published plan"
	}
];
var RESIDENCE_FACTS = [
	{
		k: "Configuration",
		v: "Luxury 4 BHK"
	},
	{
		k: "Published area",
		v: "7,829.23 sq.ft"
	},
	{
		k: "Starting price",
		v: "₹ 5.50 Cr*"
	},
	{
		k: "Collection",
		v: "60 villas"
	},
	{
		k: "Payment plan",
		v: "20 : 30 : 50"
	}
];
var AMENITIES = [
	"Landscaped Gardens",
	"Swimming Pool",
	"Clubhouse",
	"Gym",
	"Jogging Track",
	"Yoga",
	"Indoor Games",
	"Children’s Play"
];
var PLACES = [
	{
		group: "Healthcare",
		name: "KMCH Medical College",
		distance: "4.1 km"
	},
	{
		group: "Healthcare",
		name: "KMCH Medical",
		distance: "4.2 km"
	},
	{
		group: "Business",
		name: "Tidel Park",
		distance: "7 km"
	},
	{
		group: "Business",
		name: "Cognizant",
		distance: "11.2 km"
	},
	{
		group: "Retail",
		name: "Fun Mall",
		distance: "7.4 km"
	},
	{
		group: "Retail",
		name: "Prozone",
		distance: "9.4 km"
	}
];
var GALLERY = [
	{
		src: "/media/hero.jpg",
		alt: "Aerial view of the landscaped central court at Zenora, with villas, palms and a fountain",
		caption: "Central court",
		category: "Architecture",
		width: 1600,
		height: 862
	},
	{
		src: "/media/slider-2.jpg",
		alt: "Arrival pavilion at the entrance to Zenora by Zenvistas",
		caption: "Arrival pavilion",
		category: "Architecture",
		width: 1300,
		height: 700
	},
	{
		src: "/media/gallery-2.jpg",
		alt: "Contemporary villa elevation with a deep timber soffit and private forecourt",
		caption: "Villa elevation",
		category: "Architecture",
		width: 1600,
		height: 1600
	},
	{
		src: "/media/gallery-4.jpg",
		alt: "Aerial view along the pitched roofs and planted edges of the villas",
		caption: "Roofscape",
		category: "Architecture",
		width: 1600,
		height: 900
	},
	{
		src: "/media/gallery-3.jpg",
		alt: "Living and dining interior of a Zenora residence, with a long table and quiet daylight",
		caption: "Living and dining",
		category: "Interiors",
		width: 1600,
		height: 900
	},
	{
		src: "/media/about.jpg",
		alt: "Planted garden court between the residences, with a bench and a small fountain",
		caption: "Garden court",
		category: "Amenities",
		width: 1470,
		height: 1095
	},
	{
		src: "/media/gallery-1.jpg",
		alt: "Stepping stones crossing a planted water garden beside the homes",
		caption: "Water garden",
		category: "Amenities",
		width: 1344,
		height: 768
	},
	{
		src: "/media/masterplan.webp",
		alt: "Published master plan drawing of Zenora by Zenvistas",
		caption: "Master plan",
		category: "Master Plan",
		width: 768,
		height: 549,
		fit: "contain"
	}
];
var FILTERS = [
	"All",
	"Architecture",
	"Interiors",
	"Amenities",
	"Master Plan"
];
function usePrefersReducedMotion() {
	const [reduce, setReduce] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		const apply = () => setReduce(media.matches);
		apply();
		media.addEventListener("change", apply);
		return () => media.removeEventListener("change", apply);
	}, []);
	return reduce;
}
function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setOn(true);
			return;
		}
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setOn(true);
				io.disconnect();
			}
		}, {
			threshold: .18,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref: (node) => {
			ref.current = node;
		},
		className: `reveal ${on ? "in" : ""} ${className}`,
		style: { "--d": `${delay}ms` },
		children
	});
}
function SplitWords({ text, className = "", delay = 0, step = 62, animate = "scroll", variant = "mask" }) {
	const { ref, seen } = useInViewOnce(.15);
	const words = text.split(" ");
	const pace = variant === "fade" ? Math.min(step, 780 / Math.max(words.length, 1)) : step;
	const shown = animate === "scroll" && seen;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref: animate === "scroll" ? ref : void 0,
		className,
		children: words.map((word, index) => {
			const wait = `${delay + index * pace}ms`;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [index > 0 ? " " : null, variant === "fade" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `prose-word ${shown ? "in" : ""} ${animate === "load" ? "load" : ""}`,
				style: { "--d": wait },
				children: word
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "word-mask",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: animate === "load" ? "word-in" : `word-rise ${shown ? "in" : ""}`,
					style: { "--d": wait },
					children: word
				})
			})] }, `${word}-${index}`);
		})
	});
}
function RevealText({ text, className = "", delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
		text,
		className,
		delay,
		step: 24,
		animate: "scroll",
		variant: "fade"
	});
}
function Mask({ children, className = "", delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setOn(true);
			return;
		}
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setOn(true);
				io.disconnect();
			}
		}, {
			threshold: .16,
			rootMargin: "0px 0px -6% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `mask ${on ? "in" : ""} ${className}`,
		style: { "--d": `${delay}ms` },
		children
	});
}
function Count({ to, suffix = "", start }) {
	const [value, setValue] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!start) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setValue(to);
			return;
		}
		const duration = 1400;
		const t0 = performance.now();
		let raf = 0;
		const tick = (now) => {
			const p = Math.min(1, (now - t0) / duration);
			const eased = 1 - (1 - p) ** 3;
			setValue(Math.round(to * eased));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		setValue(0);
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [start, to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "tabular-nums",
		children: [value, suffix]
	});
}
function useScrolled(threshold = 24) {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			setScrolled(window.scrollY > threshold);
			setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [threshold]);
	return {
		scrolled,
		progress
	};
}
function useActiveSection(ids) {
	const [active, setActive] = (0, import_react.useState)(ids[0] ?? "");
	(0, import_react.useEffect)(() => {
		const nodes = ids.map((id) => document.getElementById(id)).filter((node) => Boolean(node));
		if (!nodes.length) return;
		const io = new IntersectionObserver((entries) => {
			const hit = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (hit?.target.id) setActive(hit.target.id);
		}, {
			rootMargin: "-45% 0px -45% 0px",
			threshold: [
				0,
				.25,
				.6
			]
		});
		nodes.forEach((node) => io.observe(node));
		return () => io.disconnect();
	}, [ids]);
	return active;
}
function useInViewOnce(threshold = .2) {
	const ref = (0, import_react.useRef)(null);
	const [seen, setSeen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || seen) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setSeen(true);
			return;
		}
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setSeen(true);
				io.disconnect();
			}
		}, { threshold });
		io.observe(el);
		return () => io.disconnect();
	}, [seen, threshold]);
	return {
		ref,
		seen
	};
}
var SECTION_IDS = NAV.map((item) => item.id);
function Progress() {
	const { progress } = useScrolled();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-x-0 top-0 z-50 h-px",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full origin-left bg-bronze",
			style: { transform: `scaleX(${progress})` }
		})
	});
}
function Header({ solid = false }) {
	const { scrolled } = useScrolled();
	const active = useActiveSection(SECTION_IDS);
	const [open, setOpen] = (0, import_react.useState)(false);
	const grounded = solid || scrolled || open;
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKey);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${grounded ? "bg-ivory/95 text-ink backdrop-blur-md" : "bg-transparent text-ivory"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `relative z-50 mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-10 ${grounded ? "border-b border-stone" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					hash: "top",
					className: "group flex items-center gap-3 no-underline",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `grid size-9 place-items-center border ${grounded ? "border-olive text-olive" : "border-ivory/70 text-ivory"}`,
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 32 32",
							className: "size-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M7 24 L16 7 L25 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.4"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M11 18.5 H21",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.2"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-serif text-xl tracking-wide",
							children: "Zenora"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `brand-kicker ${grounded ? "text-muted" : "text-ivory/80"}`,
							children: "by Zenvistas"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					"aria-label": "Primary",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						hash: item.id,
						"data-active": active === item.id,
						className: "nav-link text-xs uppercase tracking-luxe",
						children: item.label
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						hash: "visit",
						className: `btn hidden sm:inline-flex ${grounded ? "btn-solid" : "btn-line"}`,
						children: "Private Visit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: `grid size-11 place-items-center border lg:hidden ${grounded ? "border-stone text-ink" : "border-ivory/50 text-ivory"}`,
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						onClick: () => setOpen((value) => !value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: open ? "Close menu" : "Open menu"
						}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })]
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: "mobile-nav",
			className: "fixed inset-0 z-40 flex flex-col bg-ivory px-6 pt-28 pb-10 text-ink lg:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col",
				"aria-label": "Mobile",
				children: NAV.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					hash: item.id,
					onClick: () => setOpen(false),
					className: "menu-link border-b border-stone py-4 font-serif text-4xl no-underline",
					style: { "--d": `${index * 55}ms` },
					children: item.label
				}, item.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				hash: "visit",
				onClick: () => setOpen(false),
				className: "btn btn-solid mt-8",
				children: "Schedule a Private Visit"
			})]
		}) : null]
	});
}
function StickyVisit() {
	const [hide, setHide] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const nodes = ["visit", "site-footer"].map((id) => document.getElementById(id)).filter((node) => Boolean(node));
		let overSection = false;
		let pastHero = false;
		const sync = () => setHide(overSection || !pastHero);
		const onScroll = () => {
			pastHero = window.scrollY > window.innerHeight * .72;
			sync();
		};
		const io = new IntersectionObserver((entries) => {
			overSection = entries.some((entry) => entry.isIntersecting);
			sync();
		}, { threshold: .08 });
		nodes.forEach((node) => io.observe(node));
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			io.disconnect();
			window.removeEventListener("scroll", onScroll);
		};
	}, []);
	if (hide) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-30 border-t border-stone bg-ivory/95 p-3 backdrop-blur md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#visit",
			className: "btn btn-solid w-full",
			children: "Schedule a Private Visit"
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		id: "site-footer",
		className: "bg-ink text-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-12 lg:px-10 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-5xl leading-none",
							children: "Zenora"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm uppercase tracking-luxe text-bronze-soft",
							children: "by Zenvistas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-sm text-sm leading-relaxed text-ivory/75",
							children: "Luxury 4 BHK villas at Goldwins, Coimbatore. Sixty residences across seven acres."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 80,
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow eyebrow-light",
						children: "Visit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-3 text-sm",
						children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: item.id,
							className: "text-ivory/85 no-underline hover:text-ivory",
							children: item.label
						}) }, item.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "text-ivory/85 no-underline hover:text-ivory",
							children: "Privacy"
						}) })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 140,
					className: "lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow eyebrow-light",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm text-ivory/75",
							children: "Goldwins, Coimbatore"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${PHONE_TEL}`,
							className: "mt-2 block font-serif text-3xl text-ivory no-underline",
							children: PHONE_DISPLAY
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-xs uppercase tracking-luxe text-bronze-soft",
							children: ["RERA ", RERA]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-ivory/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl space-y-4 px-5 py-8 text-xs leading-relaxed text-ivory/60 lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Privacy & disclaimer. Any content shown here is sourced from the developer / builder for information only and is not an official Zenvistas website. It is presented in the manner of an authorised sales partner of Zenora by Zenvistas and does not include the Zenora by Zenvistas sales team. Published details do not bind Zenvistas. Images are architectural visualisations. The starting price of ₹ 5.50 Cr* and the 7,829.23 sq.ft 4 BHK plan are as published and may change. Project RERA number as published: ",
					RERA,
					". Confirm registration, pricing, availability, and specifications directly before making a decision."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Zenora by Zenvistas. All rights reserved to their respective owners."
				] })]
			})
		})]
	});
}
//#endregion
export { useInViewOnce as C, WHATSAPP as S, Reveal as _, GALLERY as a, SplitWords as b, MAP_EMBED as c, PHONE_TEL as d, PILLARS as f, RESIDENCE_FACTS as g, RERA as h, Footer as i, Mask as l, Progress as m, Count as n, Header as o, PLACES as p, FILTERS as r, MAPS_URL as s, AMENITIES as t, PHONE_DISPLAY as u, RevealText as v, usePrefersReducedMotion as w, StickyVisit as x, STATS as y };
