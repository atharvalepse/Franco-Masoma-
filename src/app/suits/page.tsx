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

export const metadata = { title: "The Suits | Franco Masoma" };

const HERO_IMG =
  "/ready-to-wear/37.png";

const tiers = [
  {
    n: "01",
    name: "RTW Suit",
    sub: "Ready-to-Wear",
    label: "The Refined Foundation",
    body: "A ready foundation refined through tailoring principles for immediate elegance. Constructed from premium fabrics across a structured size range, with tailoring support available to refine fit at point of purchase. Delivers presence and polish without the custom timeline.",
    includes: [
      "Premium wool and wool-blend fabric construction",
      "Full canvas or half canvas chest construction",
      "Structured shoulder and clean chest line",
      "Tailoring support available for fit refinement",
      "Immediate delivery for in-stock sizes",
      "Available across a full size range",
    ],
    image:
      "/ready-to-wear/38.png",
  },
  {
    n: "02",
    name: "CTM Suit — Standard",
    sub: "Cut-to-Measure",
    label: "The Entry Bespoke Experience",
    body: "An entry bespoke experience with essential customization and refined fit. Shaped to your measurements across key dimensions — chest, waist, trouser, and sleeve — with fabric selection from a curated collection of premium cloths and core design decisions made through consultation.",
    includes: [
      "Full personal measurement process",
      "Fabric selection from premium curated collection",
      "Core customization — lapel, button, lining",
      "Shaped to your body across key dimensions",
      "6 to 8 week production timeline",
      "One fitting session with refinement included",
    ],
    image:
      "/ready-to-wear/39.png",
  },
  {
    n: "03",
    name: "CTM Suit — Premium",
    sub: "Cut-to-Measure",
    label: "The Advanced Bespoke Experience",
    body: "An advanced bespoke experience with luxury fabrics and expanded design control. Access to heritage Italian and British mill cloths, expanded design options across lapel, canvas, lining, buttons, and pocket style, and a more detailed fitting process to achieve full structural precision.",
    includes: [
      "Extended measurement and posture assessment",
      "Full access to heritage Italian and British mill fabrics",
      "Expanded design control — lapels, canvas, pocket style, lining",
      "Full canvas chest construction",
      "Two fitting sessions with detailed structural refinement",
      "Monogramming and personal detailing available",
      "8 to 10 week production timeline",
    ],
    image:
      "/ready-to-wear/40.png",
  },
  {
    n: "04",
    name: "CTM Suit — Fully Personalized",
    sub: "Complete Bespoke",
    label: "The Full Expression",
    body: "A complete bespoke creation developed from structure, posture, and intention. Built from nothing — no template, no standard block. Posture analysis, lifestyle consultation, and design discussion shape every structural decision before a single cut is made.",
    includes: [
      "Comprehensive posture and lifestyle consultation",
      "Full structural design from first principles",
      "Unrestricted access to global mill fabric library",
      "Complete design freedom across all elements",
      "Hand-tailored construction in Naples by master artisans",
      "Multiple fitting sessions through full construction arc",
      "Monogramming, bespoke lining, and personal archiving",
      "10 to 14 week production timeline",
    ],
    image:
      "/ready-to-wear/41.png",
  },
];

const comparisonColumns = [
  {
    name: "RTW Suit",
    timing: "Immediate",
    items: ["Premium RTW fabric", "Tailoring support", "Immediate delivery", "Full size range"],
  },
  {
    name: "CTM Standard",
    timing: "6–8 weeks",
    items: ["Personal measurements", "Curated fabric range", "Core design options", "One fitting session"],
  },
  {
    name: "CTM Premium",
    timing: "8–10 weeks",
    items: ["Heritage mill access", "Full canvas build", "Expanded design control", "Two fitting sessions"],
  },
  {
    name: "Fully Personalized",
    timing: "10–14 weeks",
    items: ["Posture consultation", "Global fabric access", "Complete design freedom", "Naples hand-tailoring"],
  },
];

const principles = [
  "Full or half canvas chest construction across all tiers",
  "Premium fabric access at every level — curated upward from RTW",
  "Posture and lifestyle analysis integrated from CTM Premium upward",
  "Naples hand-tailoring available across all CTM tiers",
  "Monogramming and personal archiving on Fully Personalized orders",
  "Longevity-first construction across every garment in the collection",
];

const profiles = [
  {
    n: "I",
    title: "The Executive",
    body: "Those who require a suit that delivers authority, structure, and reliability across boardrooms, client meetings, and high-stakes environments — every single day.",
  },
  {
    n: "II",
    title: "The Occasion Client",
    body: "Those dressing for a specific moment — a significant presentation, a public appearance, a career milestone — who want a suit built entirely around that occasion.",
  },
  {
    n: "III",
    title: "The Groom",
    body: "Those who want the suit they wear on their wedding day to be as considered and personal as the commitment it accompanies.",
  },
  {
    n: "IV",
    title: "The Wardrobe Architect",
    body: "Those building a complete, layered wardrobe across tiers and collections — who understand that a Fully Personalized Suit is the foundation everything else is built around.",
  },
];

export default function Suits() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow="Suits Collection · Authority Expressed Through Structure"
        title="Leadership. Presence. Identity."
        subtitle="Four distinct levels of construction and customization — from ready-to-wear excellence through complete bespoke creation — each built to the same standard of quality and precision."
        image={HERO_IMG}
        imageAlt="A bespoke suit jacket in a sun-drenched atelier"
        primaryCTA={{ label: "Design Your Suit Identity", href: "#reserve" }}
      />

      <Section bg="surface" tight>
        <SectionHeader
          centered
          eyebrow="The Collection"
          title="Four Levels. One Uncompromising Standard."
          description="The Suits Collection is structured across four tiers — each representing a different depth of customization, fabric access, and personal expression."
        />
        <StatsRow
          items={[
            { stat: "4", label: "Suit Tiers" },
            { stat: "100%", label: "Precision Construction" },
            { stat: "∞", label: "Environments Commanded" },
          ]}
        />
      </Section>

      <Section bg="surface-low">
        <SectionHeader
          eyebrow="The Products"
          title="From Foundation to Full Expression."
          description="Four suit categories — each crafted to serve a distinct level of personal investment, customization, and occasion."
        />
        <div className="grid grid-cols-1 gap-20">
          {tiers.map((t, i) => (
            <TierCard
              key={t.n}
              reversed={i % 2 === 1}
              index={t.n}
              category={t.sub}
              name={t.name}
              label={t.label}
              body={t.body}
              includes={t.includes}
              image={t.image}
            />
          ))}
        </div>
      </Section>

      <Section bg="surface">
        <SectionHeader
          eyebrow="At a Glance"
          title="Choosing Your Tier."
          description="Each tier represents a different relationship between customization, timeline, and investment."
        />
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: "var(--color-outline-variant)" }}
        >
          {comparisonColumns.map((c) => (
            <div
              key={c.name}
              style={{ background: "var(--color-surface)", padding: 28 }}
            >
              <h4
                className="text-headline-md"
                style={{ color: "var(--color-on-surface)" }}
              >
                {c.name}
              </h4>
              <p
                className="text-label-sm mt-2 mb-6"
                style={{ color: "var(--color-secondary)" }}
              >
                {c.timing}
              </p>
              <ul
                className="text-body-md space-y-2"
                style={{
                  color: "var(--color-on-surface-variant)",
                  listStyle: "none",
                  padding: 0,
                }}
              >
                {c.items.map((i) => (
                  <li key={i}>— {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="surface-container">
        <EditorialQuote
          quote="A suit is the architecture of a man's public presence. Every structural decision shapes what the world receives."
          attribution="Franco Masoma Atelier"
        />
        <PrincipleList items={principles} />
      </Section>

      <Section bg="surface">
        <SectionHeader
          eyebrow="Who This Serves"
          title="For Every Man Who Commands a Room."
          description="The Suits Collection serves those who understand that a suit is not clothing — it is communication."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p) => (
            <ProfileCard key={p.n} index={p.n} title={p.title} body={p.body} />
          ))}
        </div>
      </Section>

      <ReserveCTA
        eyebrow="Begin The Conversation"
        title="Design Your Suit Identity."
        description="Your suit consultation begins with a conversation about your life, your environments, and the role you want this garment to play within them."
      />
    </>
  );
}
