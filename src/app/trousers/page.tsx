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

export const metadata = { title: "Trousers & Pants | Franco Masoma" };

const products = [
  {
    n: "01",
    category: "Cut-to-Measure",
    name: "CTM Trousers",
    label: "The Tailored Standard",
    body: "Fully tailored trousers shaped through precise measurement and personal preference. Built from the body upward — seat, rise, thigh, knee, and break all determined through consultation and measurement, not size chart approximation. The result is a trouser that holds its line, flatters your posture, and sits correctly through every position and movement of the day.",
    includes: [
      "Full personal measurement across all key dimensions",
      "Rise, seat, thigh, knee, and break tailored precisely",
      "Fabric selection from premium Italian and British wool collections",
      "Waistband style — extended, standard, or side adjuster",
      "Pleat, flat front, or reverse pleat options",
      "Turn-up or clean break finish",
      "Belt loop or side tab configurations",
      "Monogramming available on waistband lining",
      "6 to 8 week production timeline",
    ],
    image:
      "/ready-to-wear/43.png",
  },
  {
    n: "02",
    category: "Travel-Ready",
    name: "Airport Pants",
    label: "Refined Mobility",
    body: "Travel-ready trousers designed for comfort, structure, and refined mobility. The Airport Pant addresses the specific demands of long-haul travel, transit days, and destination-to-meeting transitions — delivering a trouser that holds its shape across hours of movement, resists creasing through long journeys, and arrives looking precisely as it did when the day began.",
    includes: [
      "Performance-refined natural fabric construction",
      "Crease-resistant weave engineered for long-haul travel",
      "Comfortable rise and generous seat for extended wear",
      "Slim to straight leg with clean break finish",
      "Concealed security pocket option",
      "Stretches with movement without losing structure",
      "Machine-washable option available in select fabrics",
      "Available in travel-appropriate tonal colorways",
      "Immediate delivery in standard sizing",
    ],
    image:
      "/ready-to-wear/44.png",
  },
];

const fitRows = [
  ["Construction", "Full bespoke measurement", "Performance natural fabric"],
  ["Customization", "Complete — all dimensions", "Standard sizing + tailoring"],
  ["Primary Use", "Formal & professional", "Travel & transit"],
  ["Crease Resistance", "Standard with pressing", "Engineered into fabric"],
  ["Comfort Range", "Precision structured", "Extended mobility"],
  ["Timeline", "6 to 8 weeks", "Immediate delivery"],
  ["Integration", "Suits, jackets, full wardrobe", "Resort, casual, jacket layer"],
];

const principles = [
  "Precise measurement across all structural dimensions in CTM",
  "Performance fabric engineering in the Airport Pant",
  "Waistband, pleat, and break options across the CTM range",
  "Crease-resistant construction built into Airport Pant fabric",
  "Tailoring support available on Airport Pants for optimal fit",
  "Full integration across the Franco Masoma wardrobe system",
];

const profiles = [
  {
    n: "I",
    title: "The Bespoke Wardrobe Client",
    body: "Those building a complete tailored wardrobe who understand that CTM Trousers — shaped to their exact dimensions — are the structural foundation every other garment depends on.",
  },
  {
    n: "II",
    title: "The Frequent Traveller",
    body: "Those who spend significant time in transit and need a trouser that maintains structure, resists creasing, and moves through long journeys without sacrificing presence on arrival.",
  },
  {
    n: "III",
    title: "The Versatile Professional",
    body: "Those whose week spans boardrooms, client dinners, and travel — and who need both trouser expressions to serve every environment without compromise.",
  },
  {
    n: "IV",
    title: "The Wardrobe Architect",
    body: "Those who approach their wardrobe systematically — understanding that trouser fit is a variable that affects every jacket, shirt, and shoe they own.",
  },
];

export default function Trousers() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow="Trousers & Pants · Structure Designed for Movement and Balance"
        title="Proportion. Posture. Daily Presence."
        subtitle="Trousers shape proportion, posture, and daily presence. They define the foundation of every outfit from the ground up — governing how a jacket sits, how a shirt tucks, and how a man carries himself across every hour of the day."
        image="/ready-to-wear/43.png"
        imageAlt="Fine custom tailored trousers"
        primaryCTA={{ label: "Refine Your Fit", href: "#reserve" }}
      />

      <Section bg="surface" tight>
        <SectionHeader
          centered
          eyebrow="The Collection"
          title="Two Trousers. Both Built for the Way You Live."
          description="One for the precision of full bespoke tailoring, one for the demands of refined movement and travel. Each addresses a specific relationship between structure and ease."
        />
        <StatsRow
          items={[
            { stat: "2", label: "Trouser Styles" },
            { stat: "100%", label: "Precision Fit Construction" },
            { stat: "∞", label: "Outfits Elevated" },
          ]}
        />
      </Section>

      <Section bg="surface-low">
        <SectionHeader
          eyebrow="The Products"
          title="Precision Below. Authority Above."
          description="Two carefully constructed trouser expressions — each built to elevate every garment worn alongside them."
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
          eyebrow="Fit Comparison"
          title="Choosing Your Trouser."
          description="Each trouser is engineered for a specific relationship between structure and comfort."
        />
        <div
          className="overflow-hidden"
          style={{ border: "1px solid var(--color-outline-variant)" }}
        >
          <div
            className="grid grid-cols-3 text-label-sm"
            style={{
              background: "var(--color-surface-container)",
              padding: "16px 24px",
              color: "var(--color-on-surface)",
            }}
          >
            <span>Fit Point</span>
            <span>CTM Trousers</span>
            <span>Airport Pants</span>
          </div>
          {fitRows.map(([point, a, b], i) => (
            <div
              key={point}
              className="grid grid-cols-3 text-body-md"
              style={{
                background: i % 2 === 0 ? "var(--color-surface)" : "var(--color-surface-container-low)",
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

      <Section bg="surface-container">
        <EditorialQuote
          quote="Trouser fit is the foundation no one discusses and everyone notices."
          attribution="Franco Masoma Atelier"
        />
        <PrincipleList items={principles} />
      </Section>

      <Section bg="surface">
        <SectionHeader
          eyebrow="Who This Serves"
          title="For Every Man Who Moves with Purpose."
          description="Those who understand that the foundation of a considered wardrobe sits below the belt — and that fit at the trouser level transforms everything worn alongside it."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p) => (
            <ProfileCard key={p.n} index={p.n} title={p.title} body={p.body} />
          ))}
        </div>
      </Section>

      <ReserveCTA
        eyebrow="Begin The Conversation"
        title="Refine Your Fit."
        description="Your trouser consultation begins with how you move — your posture, your daily environments, and the role each trouser needs to play within your broader wardrobe."
      />
    </>
  );
}
