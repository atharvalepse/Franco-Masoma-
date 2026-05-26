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

export const metadata = { title: "Pocket Squares | Franco Masoma" };

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDOSf_ICi9PaNAzllCmUCgC9fkQ5EY60ofaIOATgPeSpoPCqqUUWPoAqEZfEYsbk1-e02YAfoCLhXO2vmvkPLgBXaoHezHNH7C__A9KdnLUwyk9ZTY0SDuBKdsc6tuybBJ15_0KUnz2TInQjcMVPRKZrTOKJHNFTboBvD2JNcxWNgJ4vz4RvclDsz_vD5w9CZzxThIPs7s43Ms6D_RaQxSCbF4RmJ7OGfJbkJnIYHMqfDfvNRUwRrYxrsuKoi8cqw_cj_1JPaiCD0I";

const product = {
  n: "01",
  category: "Refined Accent",
  name: "Como Silk Pocket Square",
  label: "The Ultimate Accent Piece",
  body: "A hand-rolled, pure silk pocket square designed to complete and coordinate every tailored look. Assembled from premium silk woven in Como, Italy, and individually hand-stitched by Italian artisans, these pieces add texture, fold definition, and a delicate touch of color to the breast pocket of any jacket or sportscoat.",
  includes: [
    "100% pure Italian mulberry silk construction",
    "Meticulously hand-rolled edges sewn by heritage Neapolitan artisans",
    "Optimal 33cm x 33cm size designed for structural folds without bulk",
    "Resilient twill or classic satin weave for perfect drape",
    "Vibrant, low-contrast prints and classic solid colors",
    "Resists slipping down inside the breast pocket",
    "Complements and coordinates with silk neckwear",
    "Immediate availability for selected curated patterns",
  ],
  image: HERO_IMG,
};

const foldingStyles = [
  {
    n: "I",
    title: "The Classic TV Fold",
    body: "A clean, horizontal band of silk that sits parallel to the pocket line. Best suited for formal events and executive boardrooms, showing absolute precision and restraint.",
  },
  {
    n: "II",
    title: "The Elegant Puff Fold",
    body: "A soft, voluminous fold where the center of the square is puffed upward. Perfect for business casual and evening dinners, expressing effortless sophistication.",
  },
  {
    n: "III",
    title: "The Crown Fold (Three-Point)",
    body: "An architectural fold featuring three neat points rising from the pocket. Ideal for ceremonies and weddings, commanding deliberate stylistic attention.",
  },
];

const principles = [
  "Pure Mulberry silk selected directly from Como mills",
  "Edges rolled and sewn entirely by hand for soft structural lines",
  "Proportioned size to fit snugly inside standard pocket structures",
  "Designed to complement — never match — the tone of your neckwear",
  "High dye retention ensuring deep, lustrous, enduring color",
  "Atelier coordination guidance available with every purchase",
];

const profiles = [
  {
    n: "I",
    title: "The Traditionalist",
    body: "Those who understand that a tailored jacket is architecturally incomplete without a pocket square — and who seek absolute quality in silk and edge work.",
  },
  {
    n: "II",
    title: "The Occasion Client",
    body: "Grooms and ceremony guests who want their attire to express maximum detail, coordinates, and intentional style polish.",
  },
  {
    n: "III",
    title: "The Sportscoat Enthusiast",
    body: "Those who wear blazers and casual jackets without ties and want a pocket square to maintain an elevated, intentional visual focus.",
  },
  {
    n: "IV",
    title: "The Artful Dresser",
    body: "Those who approach dressing as a canvas — selecting patterns, weaves, and geometric folds that signal refined creativity.",
  },
];

export default function PocketSquares() {
  return (
    <>
      <PageHero
        eyebrow="Pocket Squares · The Definitive Final Touch"
        title="Refinement in Miniature."
        subtitle="A pocket square is not an accessory — it is a statement of complete visual alignment. The final element that brings proportion, depth, and character to tailored jackets."
        primaryCTA={{ label: "Explore Accessories", href: "#reserve" }}
      />

      <Section bg="surface" tight>
        <SectionHeader
          centered
          eyebrow="The Accent"
          title="Como Silk. Hand-Rolled Edges."
          description="Every square is woven in the heritage mills of Como and finished by hand in Naples, achieving a soft structural weight that holds its fold all day."
        />
        <StatsRow
          items={[
            { stat: "100%", label: "Pure Italian Como Silk" },
            { stat: " Napoli", label: "Hand-Rolled Stitched Edges" },
            { stat: "∞", label: "Fold Expressions" },
          ]}
        />
      </Section>

      <Section bg="surface-low">
        <SectionHeader
          eyebrow="The Garment"
          title="Como Craftsmanship."
          description="Crafted to add depth, color contrast, and sophisticated geometry to every tailored jacket's breast pocket."
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
          eyebrow="Folding Geometry"
          title="Three Foundational Folds."
          description="How you fold your square dictates the formality and energy of your presence. Mastering these three styles equips you for every context."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {foldingStyles.map((fs) => (
            <div key={fs.n}>
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
                {fs.n}
              </div>
              <h3
                className="text-headline-md mb-3"
                style={{ color: "var(--color-on-surface)" }}
              >
                {fs.title}
              </h3>
              <p
                className="text-body-md"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {fs.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="surface-container">
        <EditorialQuote
          quote="The pocket square is the exclamation point of a tailored jacket. Worn correctly, it establishes visual intelligence."
          attribution="Franco Masoma Atelier"
        />
        <PrincipleList items={principles} />
      </Section>

      <Section bg="surface">
        <SectionHeader
          eyebrow="Who This Serves"
          title="For the Considered Gentleman."
          description="Serving those who realize that presence is defined by detail, and that the smallest accents speak the loudest."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p) => (
            <ProfileCard key={p.n} index={p.n} title={p.title} body={p.body} />
          ))}
        </div>
      </Section>

      <ReserveCTA
        eyebrow="Coordinate Your Wardrobe"
        title="Consultation for Finishing Touches."
        description="Select from a curated collection of seasonal prints, custom monogram weaves, and classic solid silks during your next private appointment."
      />
    </>
  );
}
