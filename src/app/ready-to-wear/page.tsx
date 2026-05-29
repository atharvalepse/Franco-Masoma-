import { PageHero, ProductCard, ReserveCTA, Section, SectionHeader } from "@/components/Layout";

export const metadata = { title: "Ready-to-Wear & Custom | Franco Masoma" };

const segments = [
  {
    title: "Airport Pants",
    body: "Travel-ready trousers designed for comfort, structure, and refined mobility during transit.",
    image:
      "/ready-to-wear/1.png",
    href: "/airport-pants",
  },
  {
    title: "Outerwear",
    body: "The Cashmere Custom Overcoat and seasonal blazers designed to serve as the defining outer statement.",
    image:
      "/ready-to-wear/2.png",
    href: "/outerwear",
  },
  {
    title: "Pocket Square",
    body: "Pure silk, hand-rolled pocket squares — the final touch of color, fold, and texture for every tailored jacket.",
    image:
      "/ready-to-wear/3.png",
    href: "/pocket-square",
  },
  {
    title: "Shirt",
    body: "Foundational shirts across RTW, CTM, casual, and shirt-jacket formats. The garment closest to the body.",
    image:
      "/ready-to-wear/4.png",
    href: "/shirt",
  },
  {
    title: "Shorts",
    body: "Tailored shorts designed for elevated resort settings and warm-weather ease without sacrificing structure.",
    image:
      "/ready-to-wear/5.png",
    href: "/shorts",
  },
  {
    title: "Sportscoat",
    body: "CTM Sportscoat for versatile tailoring; Safari Suede for elevated casual presence.",
    image:
      "/ready-to-wear/6.png",
    href: "/sportscoat",
  },
  {
    title: "Suit",
    body: "Four tiers of suit construction — from RTW excellence through complete bespoke. Authority expressed through structure.",
    image:
      "/ready-to-wear/7.png",
    href: "/suit",
  },
  {
    title: "Sweater",
    body: "The Cotton Sweater. One piece — built to anchor every casual context across all seasons.",
    image:
      "/ready-to-wear/8.png",
    href: "/sweater",
  },
  {
    title: "Trousers",
    body: "CTM Trousers shaped from the body upward; shaped for proportion, posture, and daily presence.",
    image:
      "/ready-to-wear/9.png",
    href: "/trousers",
  },
  {
    title: "Vest",
    body: "RTW and CTM vests built for three-piece composition — structural, intentional, complete.",
    image:
      "/ready-to-wear/10.png",
    href: "/vest",
  },
];

export default function ReadyToWear() {
  return (
    <>
      <PageHero
        eyebrow="Ready-to-Wear & Custom Garments · Consultation-Led Experience"
        title="Refined Pieces. Designed Around You."
        subtitle="Foundational garments and custom creations shaped through personal consultation and aligned with your lifestyle, presence, and long-term wardrobe direction."
        primaryCTA={{ label: "Schedule Your Private Consultation", href: "#reserve" }}
      />

      <Section bg="surface" tight>
        <SectionHeader
          centered
          eyebrow="The Segments"
          title="One Wardrobe. Ten Disciplines."
          description="Each segment operates as an individual page within the Ready-to-Wear ecosystem. Every page maintains consultation-led refinement and integrates into a complete wardrobe strategy."
        />
      </Section>

      <Section bg="surface">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {segments.map((s) => (
            <ProductCard
              key={s.title}
              image={s.image}
              alt={s.title}
              eyebrow="Discipline"
              title={s.title}
              description={s.body}
              href={s.href}
              aspect="4/5"
            />
          ))}
        </div>
      </Section>

      <ReserveCTA
        eyebrow="Begin The Conversation"
        title="A Wardrobe Built Around You."
        description="Whether you are beginning with a single refined piece or building an architectural wardrobe across collections, the process begins with one private consultation."
      />
    </>
  );
}
