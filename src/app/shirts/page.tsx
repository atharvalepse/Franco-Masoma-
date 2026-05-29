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

export const metadata = { title: "The Shirts | Franco Masoma" };

const products = [
  {
    n: "01",
    category: "Ready-to-Wear",
    name: "RTW Shirt",
    label: "The Refined Essential",
    body: "A refined essential crafted from premium fabrics, suited for business and formal environments. Precise collar construction, clean placket lines, and fabric selections that hold structure across long days — delivering polish and reliability without requiring a custom order.",
    includes: [
      "Premium cotton and cotton-blend fabrics",
      "Structured collar designed for formal environments",
      "Precise placket and cuff construction",
      "Tailoring support available for fit refinement",
      "Available for immediate delivery",
    ],
    image:
      "/ready-to-wear/30.png",
  },
  {
    n: "02",
    category: "Cut-to-Measure",
    name: "CTM Shirt",
    label: "The Fully Custom Expression",
    body: "A fully custom shirt shaped through measurement, fabric selection, and personal preference. Every dimension — collar spread, cuff width, body taper, sleeve length — is determined through consultation. The result is a shirt that fits precisely and expresses identity through every detail.",
    includes: [
      "Full measurement process with personal consultation",
      "Fabric selection from Italian heritage mills",
      "Custom collar, cuff, and placket options",
      "Monogramming available on request",
      "6 to 8 week production timeline",
    ],
    image:
      "/ready-to-wear/31.png",
  },
  {
    n: "03",
    category: "Ready-to-Wear",
    name: "RTW T-Shirt",
    label: "Elevated Casualwear",
    body: "Elevated casualwear designed with clean structure and refined simplicity. Premium cotton construction and considered proportions elevate this everyday piece above its category — delivering ease and elegance in equal measure.",
    includes: [
      "Premium supima or pima cotton construction",
      "Clean seam lines and refined collar finish",
      "Structured enough for layering, relaxed enough for leisure",
      "Available in refined neutral and tonal colorways",
      "Immediate availability",
    ],
    image:
      "/ready-to-wear/32.png",
  },
  {
    n: "04",
    category: "Hybrid Layer",
    name: "Shirt Jacket",
    label: "The Finishing Piece",
    body: "A lightweight hybrid layer combining tailoring influence with relaxed structure. The Shirt Jacket occupies the space between shirt and outerwear — formal enough to anchor an outfit, relaxed enough to move through it without effort.",
    includes: [
      "Structured front placket with relaxed body construction",
      "Lightweight fabric selections for layering versatility",
      "Wearable open or closed across seasons",
      "Complements both tailored and casual wardrobe systems",
      "Available in RTW and CTM formats",
    ],
    image:
      "/ready-to-wear/33.png",
  },
];

const principles = [
  "Premium fabric selection across all four categories",
  "Collar and cuff construction engineered for form and comfort",
  "Tailoring support available for every ready-to-wear piece",
  "Full customization available through the CTM process",
  "Monogramming and detailing options across the collection",
];

const profiles = [
  {
    n: "I",
    title: "The Executive",
    body: "Those who require shirts that perform across boardrooms, travel, and formal settings — combining structure, comfort, and refined appearance across long days.",
  },
  {
    n: "II",
    title: "The Custom Client",
    body: "Those building a bespoke wardrobe from the foundation up — who understand that a CTM shirt, shaped entirely to their form, elevates everything worn alongside it.",
  },
  {
    n: "III",
    title: "The Refined Casual",
    body: "Those who want casual pieces — t-shirts, shirt jackets — that reflect the same standard of thought and quality as their tailored wardrobe.",
  },
  {
    n: "IV",
    title: "The Wardrobe Builder",
    body: "Those working with Franco Masoma across collections to build a complete, considered wardrobe — where every layer, from first to last, is chosen with intention.",
  },
];

export default function Shirts() {
  return (
    <>
      <PageHero
        variant="dark"
        eyebrow="Shirts Collection · Precision In Every Layer"
        title="The Foundation of Personal Style."
        subtitle="Shirts define the foundation of personal style. Each piece reflects clarity, structure, and refined versatility — designed to perform equally across formal environments, leisure, and every occasion in between."
        image="/ready-to-wear/29.png"
        imageAlt="A collection of fine tailored shirts"
        primaryCTA={{ label: "Define Your Shirt Profile", href: "#reserve" }}
      />

      <Section bg="surface" tight>
        <SectionHeader
          centered
          eyebrow="The Collection"
          title="Four Shirts. One Standard of Excellence."
          description="The Shirts Collection covers every expression of personal style — from structured formality to elevated ease. Each category is built with the same precision and integrity."
        />
        <StatsRow
          items={[
            { stat: "4", label: "Shirt Categories" },
            { stat: "100%", label: "Premium Fabric Construction" },
            { stat: "∞", label: "Occasions Served" },
          ]}
        />
      </Section>

      <Section bg="surface-low">
        <SectionHeader
          eyebrow="The Products"
          title="Each Shirt, a Considered Choice."
          description="Four distinct expressions of the shirt — each crafted to serve a specific role in a refined wardrobe."
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

      <Section bg="surface-container">
        <EditorialQuote
          quote="The shirt is the garment closest to you. It deserves the same precision as anything worn over it."
          attribution="Franco Masoma Atelier"
        />
        <PrincipleList items={principles} />
      </Section>

      <Section bg="surface">
        <SectionHeader
          eyebrow="Who This Serves"
          title="For the Man Who Understands Foundation."
          description="The Shirts Collection serves those who understand that presence begins before the jacket goes on — and that what sits closest to the body defines everything worn above it."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p) => (
            <ProfileCard key={p.n} index={p.n} title={p.title} body={p.body} />
          ))}
        </div>
      </Section>

      <ReserveCTA
        eyebrow="Begin The Conversation"
        title="Define Your Shirt Profile."
        description="Your shirt consultation begins with a conversation about how you live, how you dress, and what you need from the garment closest to your body."
      />
    </>
  );
}
