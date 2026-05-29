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

export const metadata = { title: "Tailored Shorts | Franco Masoma" };

const HERO_IMG =
  "/ready-to-wear/34.png";

const product = {
  n: "01",
  category: "Resort Collection",
  name: "Linen Tailored Shorts",
  label: "Refined Leisure Structure",
  body: "Tailored shorts designed specifically for high-climate comfort and resort dressing. Woven from breathable pure linen and long-staple cotton-linen blends, featuring a structured mid-rise, clean flat-front profile, and elegant side-tab adjusters that deliver neat visual proportion and casual presence without standard bulk.",
  includes: [
    "Pure Italian linen or cotton-linen blend fabric",
    "Tailored flat-front profile with custom side tabs",
    "Clean coin pocket and double-jetted rear pocketing",
    "Balanced 9-inch inseam ending just above the knee",
    "Comfort-driven soft waistband interior construction",
    "Breathable structure ideal for high-humidity climates",
    "Tailoring support available for waist and length adjustments",
    "Immediate availability for standard resort colorways",
  ],
  image: HERO_IMG,
};

const resortEnvironments = [
  {
    n: "I",
    title: "The Coastal Terrace",
    body: "Paired with a crisp linen shirt and loafers, the Tailored Short commands coastal dining and terrace gatherings with effortless elegance, offering clean, breathable posture.",
  },
  {
    n: "II",
    title: "Yacht & Deck Leisure",
    body: "Designed to provide steady grip and flexibility during movement. Resistant to wind and moisture, maintaining structural straightness through warm ocean breezes.",
  },
  {
    n: "III",
    title: "Transitional Evenings",
    body: "Complements fine supima cotton t-shirts and lightweight knitwear or unlined linen jackets, extending warm resort afternoons seamlessly into cool sea-breeze nights.",
  },
];

const principles = [
  "Linen and cotton blends selected for maximum breathability",
  "Elegant flat-front waistband with side adjusters (no belt loops required)",
  "Precise leg tapering avoiding flare for a slim, modern silhouette",
  "Reinforced pocket linings for travel durability and key security",
  "In-house tailors available to adjust rise, seat, and inseam length",
  "Perfect integration across the Franco Masoma Resort ecosystem",
];

const profiles = [
  {
    n: "I",
    title: "The Resort Traveler",
    body: "Those spending summers on the Amalfi, Maldives, or Caribbean who want a shorts option that feels as deliberate and well-cut as their formal trousers.",
  },
  {
    n: "II",
    title: "The Warm-Climate Local",
    body: "Those living in high-temperature regions who require daily luxury casualwear that manages heat with complete authority and crisp styling.",
  },
  {
    n: "III",
    title: "The Leisure Refined",
    body: "Those who believe that weekends, yacht decks, and poolside lounging are worthy of the same sartorial intention as the boardroom.",
  },
  {
    n: "IV",
    title: "The Complete Wardrobe Client",
    body: "Those building a complete seasonal capsule with Franco Masoma, ensuring their vacation dressing matches the quality of their tailored suits.",
  },
];

export default function TailoredShorts() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow="Tailored Shorts · Elevated Warm-Weather Elegance"
        title="Form, Refined for Ease."
        subtitle="Uncompromising tailoring principles applied to high-climate leisure. Crafted from pure Italian linen to keep you crisp, cool, and undeniably polished."
        image={HERO_IMG}
        imageAlt="Tailored linen shorts"
        primaryCTA={{ label: "Curate Resort Wardrobe", href: "#reserve" }}
      />

      <Section bg="surface" tight>
        <SectionHeader
          centered
          eyebrow="The Collection"
          title="Comfort and Posture. Elevated."
          description="Tailored shorts engineered for clean geometric lines, breathable performance, and sophisticated warm-weather presence."
        />
        <StatsRow
          items={[
            { stat: "100%", label: "Pure Italian Linen & Blends" },
            { stat: "Side-Tab", label: "Adjustable Waist System" },
            { stat: "Cool", label: "Humid Climate Comfort" },
          ]}
        />
      </Section>

      <Section bg="surface-low">
        <SectionHeader
          eyebrow="The Garment"
          title="The Resort Standard."
          description="Crafted to deliver structured, comfortable, and highly sophisticated casual style for warm resort afternoons."
        />
        <TierCard
          index={product.n}
          category={product.category}
          name={product.name}
          label={product.label}
          body={product.body}
          includes={product.includes}
          image={product.image}
        />
      </Section>

      <Section bg="surface">
        <SectionHeader
          centered
          eyebrow="Resort Contexts"
          title="Three Settings. One Refined Short."
          description="The Linen Tailored Short transition effortlessly across warm environments, maintaining clean posture and breathable ease from morning to night."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {resortEnvironments.map((re) => (
            <div key={re.n}>
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
                {re.n}
              </div>
              <h3
                className="text-headline-md mb-3"
                style={{ color: "var(--color-on-surface)" }}
              >
                {re.n === "I" ? "Terrace Dining" : re.n === "II" ? "Deck & Travel" : "Sunset Transition"}
              </h3>
              <p
                className="text-body-md"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {re.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="surface-container">
        <EditorialQuote
          quote="True vacation is not about dropping your standards. It is about expressing your standards with fluid, breathable ease."
          attribution="Franco Masoma Atelier"
        />
        <PrincipleList items={principles} />
      </Section>

      <Section bg="surface">
        <SectionHeader
          eyebrow="Who This Serves"
          title="Designed for Leisure with Intention."
          description="Serving gentlemen who understand that luxury is not restricted to formal suites, and that casual settings warrant the highest structural precision."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p) => (
            <ProfileCard key={p.n} index={p.n} title={p.title} body={p.body} />
          ))}
        </div>
      </Section>

      <ReserveCTA
        eyebrow="Build Your Travel Capsule"
        title="Consultation for Warm Climates."
        description="Schedule a private fitting to customize inseam lengths, waistband closures, and preview heritage Italian linen weights."
      />
    </>
  );
}
