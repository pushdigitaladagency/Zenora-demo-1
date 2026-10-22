export const PHONE_DISPLAY = "+91 80780 84771";
export const PHONE_TEL = "+918078084771";
export const WHATSAPP = "918078084771";
export const RERA = "TNRERA/11/BLG/0013/2026";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=11.065361753796154,77.0460919758708";
export const MAP_EMBED =
  "https://www.openstreetmap.org/export/embed.html?bbox=77.006%2C11.035%2C77.086%2C11.095&layer=mapnik&marker=11.0653618%2C77.046092";

export const NAV = [
  { href: "#living", id: "living", label: "Living" },
  { href: "#residences", id: "residences", label: "Residences" },
  { href: "#masterplan", id: "masterplan", label: "Master Plan" },
  { href: "#lifestyle", id: "lifestyle", label: "Amenities" },
  { href: "#gallery", id: "gallery", label: "Gallery" },
  { href: "#location", id: "location", label: "Location" },
] as const;

export const PILLARS = ["Form", "Function", "Nature", "Comfort", "Future-readiness"] as const;

export const STATS = [
  { value: 60, suffix: "", label: "Exclusive villas", note: "A finite collection" },
  { value: 7, suffix: "", label: "Acres", note: "At Goldwins, Coimbatore" },
  { value: 50, suffix: "%", label: "Open to landscape", note: "Of the site" },
  { value: 4, suffix: "", label: "BHK villas", note: "The published plan" },
] as const;

export const RESIDENCE_FACTS = [
  { k: "Configuration", v: "Luxury 4 BHK" },
  { k: "Published area", v: "7,829.23 sq.ft" },
  { k: "Starting price", v: "₹ 6.2 Cr*" },
  { k: "Collection", v: "60 villas" },
  { k: "Payment plan", v: "20 : 30 : 50" },
] as const;

export const AMENITIES = [
  "Landscaped Gardens",
  "Swimming Pool",
  "Clubhouse",
  "Gym",
  "Jogging Track",
  "Yoga",
  "Indoor Games",
  "Children’s Play",
] as const;

export const LIFESTYLE_SCENES = [
  {
    src: "/media/gallery-1.jpg",
    alt: "Stepping stones crossing a planted water garden beside the homes",
    kicker: "Landscape",
    title: "Water garden",
    width: 1344,
    height: 768,
  },
  {
    src: "/media/about.jpg",
    alt: "Planted garden court between the residences, with a bench and a small fountain",
    kicker: "Landscape",
    title: "Garden court",
    width: 1470,
    height: 1095,
  },
  {
    src: "/media/hero.jpg",
    alt: "Aerial view of the landscaped central court at Zenora, with villas, palms and a fountain",
    kicker: "Landscape",
    title: "Central court",
    width: 1600,
    height: 862,
  },
  {
    src: "/media/slider-2.jpg",
    alt: "Arrival pavilion at the entrance to Zenora by Zenvistas",
    kicker: "Approach",
    title: "Arrival pavilion",
    width: 1300,
    height: 700,
  },
  {
    src: "/media/gallery-2.jpg",
    alt: "Contemporary villa elevation with a deep timber soffit and private forecourt",
    kicker: "Architecture",
    title: "Villa elevation",
    width: 1600,
    height: 1600,
  },
  {
    src: "/media/gallery-3.jpg",
    alt: "Living and dining interior of a Zenora residence, with a long table and quiet daylight",
    kicker: "Interior",
    title: "Living and dining",
    width: 1600,
    height: 900,
  },
] as const;

export const PLACES = [
  { group: "Healthcare", name: "KMCH Medical College", distance: "4.1 km" },
  { group: "Healthcare", name: "KMCH Medical", distance: "4.2 km" },
  { group: "Business", name: "Tidel Park", distance: "7 km" },
  { group: "Business", name: "Cognizant", distance: "11.2 km" },
  { group: "Retail", name: "Fun Mall", distance: "7.4 km" },
  { group: "Retail", name: "Prozone", distance: "9.4 km" },
] as const;

export type GalleryCategory = "Architecture" | "Interiors" | "Amenities" | "Master Plan";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  width: number;
  height: number;
  fit?: "contain";
};

export const GALLERY: GalleryItem[] = [
  {
    src: "/media/hero.jpg",
    alt: "Aerial view of the landscaped central court at Zenora, with villas, palms and a fountain",
    caption: "Central court",
    category: "Architecture",
    width: 1600,
    height: 862,
  },
  {
    src: "/media/slider-2.jpg",
    alt: "Arrival pavilion at the entrance to Zenora by Zenvistas",
    caption: "Arrival pavilion",
    category: "Architecture",
    width: 1300,
    height: 700,
  },
  {
    src: "/media/gallery-2.jpg",
    alt: "Contemporary villa elevation with a deep timber soffit and private forecourt",
    caption: "Villa elevation",
    category: "Architecture",
    width: 1600,
    height: 1600,
  },
  {
    src: "/media/gallery-4.jpg",
    alt: "Aerial view along the pitched roofs and planted edges of the villas",
    caption: "Roofscape",
    category: "Architecture",
    width: 1600,
    height: 900,
  },
  {
    src: "/media/gallery-3.jpg",
    alt: "Living and dining interior of a Zenora residence, with a long table and quiet daylight",
    caption: "Living and dining",
    category: "Interiors",
    width: 1600,
    height: 900,
  },
  {
    src: "/media/about.jpg",
    alt: "Planted garden court between the residences, with a bench and a small fountain",
    caption: "Garden court",
    category: "Amenities",
    width: 1470,
    height: 1095,
  },
  {
    src: "/media/gallery-1.jpg",
    alt: "Stepping stones crossing a planted water garden beside the homes",
    caption: "Water garden",
    category: "Amenities",
    width: 1344,
    height: 768,
  },
  {
    src: "/media/masterplan-hd.webp",
    alt: "Published master plan drawing of Zenora by Zenvistas",
    caption: "Master plan",
    category: "Master Plan",
    width: 1664,
    height: 1184,
    fit: "contain",
  },
];

export const FILTERS = ["All", "Architecture", "Interiors", "Amenities", "Master Plan"] as const;
