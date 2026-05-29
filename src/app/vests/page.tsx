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

export const metadata = { title: "Vests & Layering | Franco Masoma" };

const products = [
  {
    n: "01",
    category: "Ready-to-Wear",
    name: "RTW Vest",
    label: "Immediate Formal Refinement",
    body: "A structured vest designed for formal integration and refined layering. Delivers immediate access to a well-constructed layering piece — built from premium fabrics across a structured size range, with clean chest lines, a defined waistband, and precise button alignment designed for integration with tailored jackets and suits.",
    includes: [
      "Premium wool or wool-blend fabric construction",
      "Structured chest with clean frontal line",
      "Defined waistband and precise button alignment",
      "Welt or jetted pocket options",
      "Functional back adjuster for fit refinement",
      "Fully lined with clean internal finish",
      "Tailoring support available for chest, waist, and length",
      "Available for immediate delivery across standard sizing",
    ],
    image:
      "/ready-to-wear/45.png",
  },
  {
    n: "02",
    category: "Cut-to-Measure",
    name: "CTM Vest",
    label: "The Architectural Layer",
    body: "A custom vest aligned with suit construction and personal fit architecture. Built to work as a structural extension of the garments it accompanies — designed in the same consultation, cut from the same cloth family, and tailored to the same measurement set as the suit or jacket it layers beneath.",
    includes: [
      "Full personal measurement aligned with suit or jacket dimensions",
      "Fabric selection matched to or coordinated with existing wardrobe",
      "V-depth and lapel options — notch or shawl collar available",
      "Pocket style — welt, jetted, or ticket pocket",
      "Back construction — full back, half back, or adjustable cinch",
      "Lining selection — coordinated with suit lining where applicable",
      "Monogramming on interior lining available",
      "Designed as part of three-piece suit system or standalone layer",
      "6 to 8 week production timeline",
    ],
    image:
      "/ready-to-wear/46.png",
  },
];

const roles = [
  {
    n: "I",
    title: "Defines the Torso",
    body: "The vest draws a structured line from shoulder to waist, creating a vertical visual anchor that the jacket alone cannot establish. It narrows the silhouette and defines the body beneath the outer layer.",
  },
  {
    n: "II",
    title: "Completes the Composition",
    body: "When the jacket opens or is removed, the vest maintains the tailored composition. The dressed man remains complete — structured, intentional, and fully presented — in every position throughout the day.",
  },
  {
    n: "III",
    title: "Elevates the Formality",
    body: "The addition of a vest to a two-piece suit signals a level of deliberation and attention that communicates differently to every room. It is the detail that separates the dressed from the very well dressed.",
  },
];

const comparisonRows = [
  ["Construction", "Premium RTW structured", "Full bespoke measurement"],
  ["Fabric Match", "Coordinated selection", "Matched to suit or jacket"],
  ["Customization", "Standard with tailoring support", "Complete design control"],
  ["Best Suited For", "Standalone layering piece", "Three-piece suit system"],
  ["Timeline", "Immediate delivery", "6 to 8 weeks"],
  ["Integration Level", "High", "Architectural — seamless"],
];

const principles = [
  "Structural chest and waist construction across both vest types",
  "Premium fabric selection aligned with existing wardrobe",
  "Full customization of V-depth, pocket, and back construction in CTM",
  "Tailoring support available on the RTW Vest for precision fit",
  "CTM Vest designed as part of the three-piece suit system",
  "Complete integration across the Franco Masoma wardrobe architecture",
];

const profiles = [
  {
    n: "I",
    title: "The Three-Piece Client",
    body: "Those commissioning or owning bespoke suits who want the CTM Vest to complete the composition — matching cloth, lining, and construction for a seamless three-piece result.",
  },
  {
    n: "II",
    title: "The Formal Occasion Client",
    body: "Those attending weddings, galas, or significant ceremonies who want the RTW Vest to elevate their existing tailored wardrobe into a more formal expression.",
  },
  {
    n: "III",
    title: "The Wardrobe Refiner",
    body: "Those who already own strong tailored pieces and want a vest to deepen the compositional range of those garments — adding a formal layering option that was previously missing.",
  },
  {
    n: "IV",
    title: "The Intentional Dresser",
    body: "Those who understand that every layer communicates — and who want a vest because they appreciate the deliberate signal it sends about their relationship with craft.",
  },
];

export default function Vests() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow="Vests & Layering · Depth and Structure Within Tailored Composition"
        title="Proportion. Structure. Formal Refinement."
        subtitle="Layering pieces enhance proportion, structure, and formal refinement. The vest — worn correctly, in the right context, with the right garments — transforms a suit into a three-piece composition and elevates any tailored outfit."
        image="/ready-to-wear/45.png"
        imageAlt="Fine tailored vests"
        primaryCTA={{ label: "Build Layered Precision", href: "#reserve" }}
      />

      <Section bg="surface" tight>
        <SectionHeader
          centered
          eyebrow="The Collection"
          title="Two Vests. One Architecture of Precision."
          description="One for immediate elegance through a refined ready-to-wear piece, one for complete architectural alignment through full bespoke construction."
        />
        <StatsRow
          items={[
            { stat: "2", label: "Vest Expressions" },
            { stat: "100%", label: "Formal Integration Ready" },
            { stat: "∞", label: "Compositions Elevated" },
          ]}
        />
      </Section>

      <Section bg="surface-low">
        <SectionHeader
          eyebrow="The Products"
          title="Each Vest, a Layer of Intention."
          description="Two vest constructions — each serving a distinct relationship between immediacy, customization, and architectural precision."
        />
        <div className="grid grid-cols-1 gap-20">
          {products.map((p, i) => (
            <TierCard
              key={p.n}
              reversed={i % 2 === 1}
              index={p.n}
              category={p.category}
              name={p.name}
              label={p.label}
              body={p.body}
              includes={p.includes}
              image={p.image}
            />
          ))}
        </div>
      </Section>

      <Section bg="surface">
        <SectionHeader
          centered
          eyebrow="What the Vest Does"
          title="Three Roles. One Garment."
          description="The vest performs three distinct structural functions within a tailored composition — each adding a dimension of presence that a two-piece combination cannot achieve alone."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {roles.map((r) => (
            <div key={r.n}>
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
                {r.n}
              </div>
              <h3
                className="text-headline-md mb-3"
                style={{ color: "var(--color-on-surface)" }}
              >
                {r.title}
              </h3>
              <p
                className="text-body-md"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="surface-container">
        <SectionHeader
          eyebrow="Choosing Your Vest"
          title="RTW or CTM — Which Is Right for You."
          description="Both vests deliver the structural and compositional benefits of fine layering. The choice is determined by timeline, wardrobe context, and the depth of integration required."
        />
        <div
          className="overflow-hidden"
          style={{ border: "1px solid var(--color-outline-variant)" }}
        >
          <div
            className="grid grid-cols-3 text-label-sm"
            style={{
              background: "var(--color-surface-container-high)",
              padding: "16px 24px",
              color: "var(--color-on-surface)",
            }}
          >
            <span>Consideration</span>
            <span>RTW Vest</span>
            <span>CTM Vest</span>
          </div>
          {comparisonRows.map(([point, a, b], i) => (
            <div
              key={point}
              className="grid grid-cols-3 text-body-md"
              style={{
                background:
                  i % 2 === 0 ? "var(--color-surface)" : "var(--color-surface-container-low)",
                padding: "20px 24px",
                color: "var(--color-on-surface-variant)",
                borderTop: i === 0 ? "none" : "1px solid var(--color-outline-variant)",
              }}
            >
              <span style={{ color: "var(--color-on-surface)" }}>{point}</span>
              <span>{a}</span>
              <span>{b}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="surface">
        <EditorialQuote
          quote="The vest is the layer that signals deliberation. It says the man dressed with intention, not convenience."
          attribution="Franco Masoma Atelier"
        />
        <PrincipleList items={principles} />
      </Section>

      <Section bg="surface-low">
        <SectionHeader
          eyebrow="Who This Serves"
          title="For the Man Who Dresses with Deliberation."
          description="A vest, worn correctly, says more about a man's relationship with dressing than almost any other single choice."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p) => (
            <ProfileCard key={p.n} index={p.n} title={p.title} body={p.body} />
          ))}
        </div>
      </Section>

      <ReserveCTA
        eyebrow="Begin The Conversation"
        title="Build Layered Precision."
        description="Your vest consultation begins with the garments it will accompany — the suit, the jacket, the occasion — and the role you want the vest to play within that composition."
      />
    </>
  );
}
