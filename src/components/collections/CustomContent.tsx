import { ProductCard, ReserveCTA, Section, SectionHeader } from "@/components/Layout";

const lineups = [
  {
    title: "Executive Collection",
    eyebrow: "For Leadership",
    body: "Precision tailoring for those who shape direction, define presence, and command every room they enter. Three garment categories — Executive Suits, Power Shirts, Formal Outerwear.",
    image:
      "/cropped-portrait-successful-businessman-buttoning-his-elegant-suit-isolated-dark-background_613910-5505.jpg.avif",
    href: "/collections/executive",
  },
  {
    title: "Wedding Collection",
    eyebrow: "For Life's Defining Moments",
    body: "Timeless tailoring for a ceremony worth remembering. Bespoke wedding suits, groom & groomsmen coordination, ceremony & reception styling.",
    image:
      "/groom-s-boutonniere-with-olive-branch-roses_23-2152010058.jpg.avif",
    href: "/collections/wedding",
  },
  {
    title: "Resort Collection",
    eyebrow: "For Refined Ease and Travel",
    body: "Elegance that moves with you. Linen shirts, travel-ready trousers, lightweight jackets, and destination wardrobes built for movement and warm climates.",
    image:
      "/af431a30a6f4902781410b094a1a02f8.jpg",
    href: "/collections/resort",
  },
];

const categories = [
  { title: "Suits", body: "Built around your body, your life.", href: "/suits", image: "/ready-to-wear/16.png" },
  { title: "Shirts", body: "Every detail yours.", href: "/shirts", image: "/ready-to-wear/17.png" },
  { title: "Sportcoats & Jackets", body: "From office to weekend.", href: "/sport-coats", image: "/ready-to-wear/18.png" },
  { title: "Trousers & Pants", body: "Cut precisely for you.", href: "/trousers", image: "/ready-to-wear/19.png" },
  { title: "Outerwear", body: "Architecture for the body.", href: "/overcoats", image: "/ready-to-wear/20.png" },
  { title: "Vests & Layering", body: "The layer that signals deliberation.", href: "/vests", image: "/ready-to-wear/21.png" },
  { title: "Casual & Knitwear", body: "Intention expressed with ease.", href: "/casual", image: "/ready-to-wear/22.png" },
  { title: "Suede & Leather Jackets", body: "Including the Safari Suede.", href: "/suede-jackets", image: "/ready-to-wear/23.png" },
  { title: "Accessories", body: "Eight categories, one system.", href: "/accessories", image: "/ready-to-wear/24.png" },
];

export default function CustomContent() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both">
      {/* Lineup Collections */}
      <Section bg="surface">
        <SectionHeader
          eyebrow="Lineup Collections"
          title="Three Worlds. One Standard."
          description="Each lineup is built around a specific dimension of life — leadership, ceremony, and refined ease — drawing from the full atelier to deliver a coherent wardrobe for the moment it serves."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {lineups.map((l) => (
            <ProductCard
              key={l.title}
              image={l.image}
              alt={l.title}
              eyebrow={l.eyebrow}
              title={l.title}
              description={l.body}
              href={l.href}
              aspect="4/5"
            />
          ))}
        </div>
      </Section>

      {/* Custom categories */}
      <Section bg="surface-low">
        <SectionHeader
          eyebrow="Custom Clothing"
          title="Made to Measure. Made for You."
          description="Every custom garment begins with a private 90-minute consultation. Franco designs each piece around your life."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {categories.map((c) => (
            <ProductCard
              key={c.title}
              image={c.image}
              alt={c.title}
              eyebrow="Custom"
              title={c.title}
              description={c.body}
              href={c.href}
              aspect="4/5"
            />
          ))}
        </div>
      </Section>

      <ReserveCTA
        eyebrow="Begin Your Journey"
        title="Experience the Franco Masoma standard."
        description="Alterations are available exclusively to existing Franco Masoma clients and Los Gatos locals, by appointment only."
      />
    </div>
  );
}
