import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zenora by Zenvistas — Luxury Villas in Goldwins, Coimbatore" },
      {
        name: "description",
        content:
          "Luxury, with room to breathe. Discover Zenora by Zenvistas: 60 luxury 4 BHK villas across 7 acres at Goldwins, Coimbatore. From ₹6.2 Cr*.",
      },
    ],
  }),
  component: HomePage,
});
