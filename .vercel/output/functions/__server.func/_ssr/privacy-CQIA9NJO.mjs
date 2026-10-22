import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as SplitWords, d as PHONE_TEL, h as RERA, i as Footer, o as Header, u as PHONE_DISPLAY, v as RevealText } from "./chrome-DEswyNmP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-CQIA9NJO.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { solid: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "bg-ivory px-5 pt-32 pb-20 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mx-auto max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Privacy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-serif text-display text-balance",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "A short, plain account." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-5 text-base leading-relaxed text-charcoal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, { text: "This page presents published information about Zenora by Zenvistas at Goldwins, Coimbatore. It is not the official builder website." }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, { text: "The private-visit form checks that your name, phone number, email, and consent are present. It does not save those details on a server or in this browser. When you continue, a WhatsApp message to the published project number is prepared for you to send yourself." }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"You can also call",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${PHONE_TEL}`,
									className: "text-olive underline",
									children: PHONE_DISPLAY
								}),
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, { text: `Project RERA number as published with the source material: ${RERA}. Prices, areas, and distances are shown only where the source states them, and they can change. Confirm them before you decide.` }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "text-olive underline",
								children: "Return to Zenora"
							}) })
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { PrivacyPage as component };
