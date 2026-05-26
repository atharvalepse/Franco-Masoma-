import {
  EditorialQuote,
  PageHero,
  PrincipleList,
  ProfileCard,
  ReserveCTA,
  Section,
  SectionHeader,
  StatsRow,
  TierCard,
} from "@/components/Layout";

export const metadata = { title: "Executive Collection | Franco Masoma" };

const HERO_IMG =
  "/cropped-portrait-successful-businessman-buttoning-his-elegant-suit-isolated-dark-background_613910-5505.jpg.avif";

const garments = [
  {
    n: "01",
    category: "Signature Piece",
    name: "Executive Suits",
    label: "Built for Authority",
    body: "Structured tailoring that holds its shape and its presence throughout the day. Engineered for the boardroom, the negotiation, the arrival. Strong shoulders, clean chest, and a silhouette that speaks before you do.",
    includes: [
      "Full canvas chest construction",
      "Structured shoulder line",
      "Heritage Italian wool selection",
      "Designed for all-day presence",
      "CTM and Fully Personalized tiers available",
    ],
    image: "/suits.jpg",
  },
  {
    n: "02",
    category: "Foundation Layer",
    name: "Power Shirts",
    label: "Quiet Confidence, Visible in Every Detail",
    body: "Designed specifically for leadership environments. Collar construction and fabric weight chosen to maintain form through long days and high-pressure settings.",
    includes: [
      "Structured collar for formal environments",
      "Premium long-staple cotton",
      "Precise placket and cuff construction",
      "Available in RTW and CTM formats",
      "Monogramming available on request",
    ],
    image: "/e6b0fcb2fb4fa90caf0d7ad3b95517f2.jpg",
  },
  {
    n: "03",
    category: "Finishing Layer",
    name: "Formal Outerwear",
    label: "Authority Extended into Every Climate",
    body: "Overcoats and topcoats for professional environments that demand a complete silhouette. Structured to complement the suits beneath, crafted to extend your authority into every climate and occasion.",
    includes: [
      "Premium cashmere construction",
      "Single, double-breasted, or balmacaan silhouettes",
      "Hand-tailored construction in Naples",
      "Full lining and pocket customization",
      "Lifetime atelier repair service",
    ],
    image: HERO_IMG,
  },
];

const principles = [
  "Precision silhouette construction",
  "Hand-selected premium cloth",
  "Structured for all-day presence",
  "Refined restraint in every detail",
];

const profiles = [
  {
    n: "I",
    title: "Leaders & Executives",
    body: "Those who command rooms, set direction, and represent their organisations at the highest level.",
  },
  {
    n: "II",
    title: "Decision-Makers",
    body: "Professionals whose authority is expressed in their bearing, their confidence, and their dress.",
  },
  {
    n: "III",
    title: "Public Figures",
    body: "Individuals who appear before audiences, cameras, and peers where appearance shapes perception.",
  },
  {
    n: "IV",
    title: "The Discerning Individual",
    body: "Anyone who understands that how one presents reflects how one thinks — and demands the finest.",
  },
];

export default function ExecutiveCollection() {
  return (
    <>
      <PageHero
        variant="dark"
        eyebrow="Executive Collection"
        title="Dressed for Leadership. Built for Authority."
        subtitle="Precision tailoring for those who shape direction, define presence, and command every room they enter."
        image={HERO_IMG}
        imageAlt="A bespoke executive suit"
        primaryCTA={{ label: "Begin Your Executive Consultation", href: "#reserve" }}
      />

      <Section bg="surface" tight>
        <SectionHeader
          centered
          eyebrow="The Collection"
          title="Clarity. Structure. Presence."
          description="The Executive Collection defines leadership through the discipline of tailoring. Every garment is a study in structure — built around strong silhouette construction, precision craftsmanship, and refined restraint that communicates without effort."
        />
        <StatsRow
          items={[
            { stat: "3", label: "Garment Categories" },
            { stat: "100%", label: "Precision Tailored" },
            { stat: "∞", label: "Occasions Served" },
          ]}
        />
      </Section>

      <Section bg="surface-low">
        <SectionHeader
          eyebrow="What Is Included"
          title="Each Piece, a Statement of Purpose."
          description="Three categories of garment. One unified standard of excellence."
        />
        <div className="grid grid-cols-1 gap-20">
          {garments.map((g, i) => (
            <TierCard
              key={g.n}
              reversed={i % 2 === 1}
              index={g.n}
              category={g.category}
              name={g.name}
              label={g.label}
              body={g.body}
              includes={g.includes}
              image={g.image}
            />
          ))}
        </div>
      </Section>

      <Section bg="surface">
        <EditorialQuote
          quote="Tailoring is not the art of making clothing. It is the art of making presence."
          attribution="Franco Masoma Atelier"
        />
        <PrincipleList items={principles} title="Refined Restraint as a Design Principle" />
      </Section>

      <Section bg="surface-low">
        <SectionHeader
          eyebrow="Who This Serves"
          title="For Those Who Lead."
          description="The Executive Collection is designed for individuals whose presence carries weight — and whose wardrobe must reflect that reality."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p) => (
            <ProfileCard key={p.n} index={p.n} title={p.title} body={p.body} />
          ))}
        </div>
      </Section>

      <ReserveCTA
        eyebrow="Reserve Your Appointment"
        title="Begin Your Executive Consultation."
        description="Your consultation is the first step toward a garment built entirely around you — your role, your form, your presence."
      />
    </>
  );
}
