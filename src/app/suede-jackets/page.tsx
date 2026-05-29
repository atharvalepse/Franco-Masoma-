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

export const metadata = { title: "Safari Suede Jacket | Franco Masoma" };

const HERO_IMG =
  "/ready-to-wear/47.png";

const garment = {
  n: "01",
  category: "Luxury Outerwear",
  name: "Safari Suede Jacket",
  label: "Elevated Casual Presence",
  body: "A luxury suede jacket expressing relaxed sophistication and elevated casual presence. The Safari Suede Jacket is the defining piece of a considered leisure wardrobe — crafted from premium suede selected for texture, weight, and drape. Its relaxed silhouette carries tailoring influence without formal constraint, making it the jacket that transforms any casual ensemble into a statement of refined ease.",
  includes: [
    "Premium full-grain or nubuck suede construction",
    "Safari-influenced silhouette with tailoring refinement",
    "Clean topstitching and structured placket detailing",
    "Functional pockets with considered placement",
    "Relaxed shoulder construction for ease and movement",
    "Available in tonal and seasonal colorways",
    "Professional care guidance included",
    "Available in standard sizes with tailoring support",
  ],
  image: HERO_IMG,
};

const materialNotes = [
  {
    n: "I",
    title: "Texture & Drape",
    body: "Premium suede is selected for the way it sits on the shoulder, falls along the body, and reads in soft light. Texture you can feel from across the room.",
  },
  {
    n: "II",
    title: "Patina Over Time",
    body: "Full-grain suede develops a personal patina with wear — each crease and shadow building a character that synthetic alternatives cannot replicate.",
  },
  {
    n: "III",
    title: "Refined Care",
    body: "Each jacket ships with professional care guidance and atelier support — keeping the garment beautiful across years of seasonal use.",
  },
];

const principles = [
  "Full-grain or nubuck suede sourced from heritage tanneries",
  "Safari-influenced silhouette refined through tailoring discipline",
  "Hand-finished topstitching and placket construction",
  "Functional pocket placement balanced for proportion",
  "Tailoring support available at point of purchase",
  "Atelier care service for long-term maintenance",
];

const profiles = [
  {
    n: "I",
    title: "The Weekend Refined",
    body: "Those whose leisure wardrobe deserves the same standard as their professional one — a suede jacket that elevates every casual occasion without effort.",
  },
  {
    n: "II",
    title: "The Considered Traveller",
    body: "Those who travel with intention and want a single exceptional jacket that performs across coastal evenings, business dinners, and every setting in between.",
  },
  {
    n: "III",
    title: "The Creative Professional",
    body: "Those whose work and social life blur — needing a single jacket that carries both creative ease and quiet authority into every room.",
  },
  {
    n: "IV",
    title: "The Wardrobe Architect",
    body: "Those building a layered, considered wardrobe across collections — who understand that a suede jacket bridges the formal and the casual with quiet precision.",
  },
];

export default function SuedeJackets() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow="Suede Outerwear · Refined Ease"
        title="Quiet Luxury, Worn Lightly."
        subtitle="A luxury suede jacket expressing relaxed sophistication. Crafted from premium suede selected for texture, weight, and drape — the defining piece of a considered leisure wardrobe."
        image={HERO_IMG}
        imageAlt="A chocolate suede Harrington-style jacket in a modern interior"
        primaryCTA={{ label: "Explore Suede", href: "#reserve" }}
      />

      <Section bg="surface" tight>
        <SectionHeader
          centered
          eyebrow="The Garment"
          title="One Piece. Every Casual Context."
          description="The defining luxury suede jacket — built to anchor a leisure wardrobe and elevate every casual ensemble it accompanies."
        />
        <StatsRow
          items={[
            { stat: "Full Grain", label: "Suede Construction" },
            { stat: "100%", label: "Refined Tailoring" },
            { stat: "∞", label: "Casual Contexts" },
          ]}
        />
      </Section>

      <Section bg="surface-low">
        <TierCard
          index={garment.n}
          category={garment.category}
          name={garment.name}
          label={garment.label}
          body={garment.body}
          includes={garment.includes}
          image={garment.image}
        />
      </Section>

      <Section bg="surface">
        <SectionHeader
          centered
          eyebrow="The Material"
          title="Why Suede. Why This Suede."
          description="Premium suede is chosen for its tactile honesty — a material that ages with the wearer and reveals character through use."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mt-4">
          {materialNotes.map((m) => (
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
        <EditorialQuote
          quote="Casual is not the absence of intention. It is intention expressed with ease."
          attribution="Franco Masoma Atelier"
        />
        <PrincipleList items={principles} />
      </Section>

      <Section bg="surface">
        <SectionHeader
          eyebrow="Who This Serves"
          title="For the Man Who Brings Standard to Every Hour."
          description="A suede jacket worn correctly says everything about how its wearer approaches every other choice in their wardrobe."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p) => (
            <ProfileCard key={p.n} index={p.n} title={p.title} body={p.body} />
          ))}
        </div>
      </Section>

      <ReserveCTA
        eyebrow="Begin The Conversation"
        title="Explore the Suede Wardrobe."
        description="Your suede consultation begins with how the piece will live within your wardrobe — color, finish, and the role it will play across casual and travel contexts."
      />
    </>
  );
}
