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

export const metadata = { title: "Outerwear | Franco Masoma" };

const HERO_IMG =
  "/ready-to-wear/26.png";

const overcoat = {
  n: "01",
  category: "Full Bespoke Construction",
  name: "Cashmere Custom Overcoat",
  label: "The Defining Outer Layer",
  body: "A premium custom overcoat crafted for warmth, structure, and refined winter elegance. Constructed from the finest grade cashmere — selected for weight, drape, and warmth retention — and tailored through a full personal consultation process to your measurements, your silhouette, and your intentions for the garment.",
  includes: [
    "Full personal measurement and posture consultation",
    "Premium grade cashmere — single or double-faced construction",
    "Silhouette options — single-breasted, double-breasted, or balmacaan",
    "Collar style — notch lapel, peak lapel, or full collar options",
    "Structured or natural shoulder construction",
    "Fully lined with bespoke silk or wool-blend lining",
    "Pocket configuration — jetted, flap, or patch",
    "Horn, corozo, or custom button selection",
    "Monogramming on interior lining available",
    "Hand-tailored construction in Naples",
    "10 to 14 week production timeline",
    "Lifetime care guidance and repair service",
  ],
  image:
    "/ready-to-wear/27.png",
};

const materialPrinciples = [
  {
    n: "I",
    title: "Warmth Without Weight",
    body: "Cashmere fibres trap heat with exceptional efficiency, delivering warmth far beyond what the fabric's weight suggests. The result is an overcoat that protects through winter without bulk.",
  },
  {
    n: "II",
    title: "Structure That Endures",
    body: "Properly graded cashmere holds its weave under the pressure of daily wear. The overcoat retains its silhouette, its drape, and its precision across years — without the deformation that affects lesser cloths.",
  },
  {
    n: "III",
    title: "Beauty That Deepens",
    body: "Unlike synthetic alternatives, quality cashmere improves with age and care. The hand softens. The drape deepens. The garment becomes more itself with every season it serves.",
  },
];

const silhouettes = [
  {
    name: "Single-Breasted",
    label: "Clean Authority",
    body: "The enduring choice. Clean front, structured lapel, and a silhouette that moves between formal and business environments with complete authority. The most versatile expression of the overcoat form.",
  },
  {
    name: "Double-Breasted",
    label: "Peak Presence",
    body: "The commanding statement. Peak lapels, structured front, and a silhouette that carries decisive authority across formal occasions and significant professional environments.",
  },
  {
    name: "Balmacaan",
    label: "Relaxed Elegance",
    body: "The refined ease choice. A raglan shoulder, a fuller body, and a silhouette that expresses understated sophistication across both formal and elevated casual environments.",
  },
];

const principles = [
  "Finest-grade cashmere selected directly from heritage mills",
  "Full bespoke measurement including shoulder, chest, and length",
  "Three silhouette options — single, double-breasted, balmacaan",
  "Hand-tailored construction in Naples by master craftsmen",
  "Complete lining, button, and finishing customization",
  "Lifetime care guidance and atelier repair service",
];

const profiles = [
  {
    n: "I",
    title: "The Executive",
    body: "Those who command formal environments across the colder months and require an overcoat that extends the authority of their suit into every exterior setting.",
  },
  {
    n: "II",
    title: "The Occasion Client",
    body: "Those attending galas, ceremonies, and significant formal occasions who want an outer layer that completes the look — not merely covers it.",
  },
  {
    n: "III",
    title: "The Investment Dresser",
    body: "Those who understand that a cashmere overcoat, properly constructed and cared for, is a multi-decade investment — delivering returns in presence, quality, and longevity.",
  },
  {
    n: "IV",
    title: "The Complete Wardrobe Client",
    body: "Those building a full Franco Masoma wardrobe who understand that the overcoat is the outermost layer of a system — and that it should reflect the same standard as every garment worn beneath it.",
  },
];

export default function Outerwear() {
  return (
    <>
      <PageHero
        variant="dark"
        eyebrow="Outerwear Collection · Protection Elevated Into Elegance"
        title="The First Impression the World Receives."
        subtitle="Outerwear defines seasonal presence and long-form sophistication. Before a lapel is seen, before a collar is adjusted, before a hand is extended — the coat announces its wearer."
        image={HERO_IMG}
        imageAlt="A cashmere overcoat in a winter setting"
        primaryCTA={{ label: "Create Your Outer Layer Identity", href: "#reserve" }}
      />

      <Section bg="surface" tight>
        <SectionHeader
          centered
          eyebrow="The Collection"
          title="One Garment. The Standard of the Season."
          description="The Outerwear Collection is built around a single defining piece — the Cashmere Custom Overcoat. One garment, crafted to the highest standard of the atelier, designed to serve as the defining outer layer of a considered winter wardrobe."
        />
        <StatsRow
          items={[
            { stat: "100%", label: "Bespoke Construction" },
            { stat: "Pure", label: "Cashmere Construction" },
            { stat: "∞", label: "Seasons of Wear" },
          ]}
        />
      </Section>

      <Section bg="surface-low">
        <SectionHeader
          eyebrow="The Garment"
          title="Built for the Season. Built for a Lifetime."
          description="A single overcoat, crafted without compromise — from consultation through construction through delivery."
        />
        <TierCard
          index={overcoat.n}
          category={overcoat.category}
          name={overcoat.name}
          label={overcoat.label}
          body={overcoat.body}
          includes={overcoat.includes}
          image={overcoat.image}
        />
      </Section>

      <Section bg="surface">
        <SectionHeader
          centered
          eyebrow="The Material"
          title="Why Cashmere. Why Nothing Else."
          description="Cashmere is not chosen for its reputation. It is chosen because no other natural fibre delivers the same combination of warmth, weight, drape, and longevity in a single overcoat construction."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mt-4">
          {materialPrinciples.map((m) => (
            <div key={m.n}>
              <div
                className="font-garamond"
                style={{
                  fontSize: 56,
                  lineHeight: 1,
                  color: "var(--color-secondary)",
                  opacity: 0.22,
                  marginBottom: 16,
                }}
              >
                {m.n}
              </div>
              <h3
                className="text-headline-md mb-3"
                style={{ color: "var(--color-on-surface)" }}
              >
                {m.title}
              </h3>
              <p
                className="text-body-md"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {m.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="surface-container">
        <SectionHeader
          eyebrow="Silhouette & Design"
          title="Your Coat, Your Silhouette."
          description="Available across three foundational silhouettes — each expressing a different relationship between formality, ease, and personal style."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--color-outline-variant)" }}>
          {silhouettes.map((s) => (
            <div key={s.name} style={{ background: "var(--color-surface)", padding: 36 }}>
              <h4
                className="text-headline-md"
                style={{ color: "var(--color-on-surface)" }}
              >
                {s.name}
              </h4>
              <p
                className="text-label-sm mt-2 mb-6"
                style={{ color: "var(--color-secondary)" }}
              >
                {s.label}
              </p>
              <p
                className="text-body-md"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="surface">
        <EditorialQuote
          quote="The overcoat is the garment that announces you before you have had the chance to speak."
          attribution="Franco Masoma Atelier"
        />
        <PrincipleList items={principles} />
      </Section>

      <Section bg="surface-low">
        <SectionHeader
          eyebrow="Who This Serves"
          title="For Those Whose Presence Begins at the Door."
          description="The Cashmere Custom Overcoat serves those who understand that winter dressing is not a concession to the cold — it is an opportunity to make a statement that carries from the moment they arrive to the moment they are remembered."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p) => (
            <ProfileCard key={p.n} index={p.n} title={p.title} body={p.body} />
          ))}
        </div>
      </Section>

      <ReserveCTA
        eyebrow="Begin The Conversation"
        title="Create Your Outer Layer Identity."
        description="We recommend beginning your overcoat consultation a minimum of 10 weeks before the season begins, to allow full time for construction, fittings, and delivery."
      />
    </>
  );
}
