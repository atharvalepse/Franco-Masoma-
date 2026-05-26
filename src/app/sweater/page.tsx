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

export const metadata = { title: "Refined Knitwear | Franco Masoma" };

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuABboj8nAYXyubEs7PH8xOQdNwVrkTDy31_zjow96JdHGKdE5EH-NQOrIpd84BrIx5Svlk4DHy4vwhnLZXe1WtZMbYGDtwqZylBKFnxEvhMCEEnrlZuP_4ycJ9GbhtTBcymTY6TfvATWlI-Sm48wIRsrlj4Owj-3z1lws6J3HCz_I-61CPp6niG3pcTTJvooswgmsiMNkvJZqXITRxiApwYxBIupkYF7snF0QPOO8xga9163Pe4O0jrw4a-wQGWEWhRFbDkfWzmV_k_";

const garment = {
  n: "01",
  category: "Refined Knitwear",
  name: "The Cotton Sweater",
  label: "The Casual Cornerstone",
  body: "Minimal knitwear designed for layering and transitional dressing. Constructed from premium cotton — selected for its breathability, its weight, and its ability to hold structure across wash and wear without compromise. Clean lines, considered proportions, and a refined silhouette ensure this piece performs as confidently beneath a jacket as it does as the outermost layer of a weekend wardrobe.",
  includes: [
    "Premium cotton — supima, pima, or fine mercerised construction",
    "Clean crew neck or refined V-neck collar options",
    "Considered proportions — chest, sleeve, and body length balanced for layering",
    "Ribbed cuff and hem finish for structure retention",
    "Refined gauge knit — lightweight enough for transitional seasons",
    "Tonal and neutral colorway range for wardrobe integration",
    "Machine washable with care guidance included",
    "Available in standard sizing with tailoring support for length adjustment",
    "Immediate delivery for in-stock colorways",
  ],
  image: HERO_IMG,
};

const contexts = [
  {
    n: "I",
    title: "Beneath the Jacket",
    body: "Worn in place of a shirt beneath a tailored jacket or sportscoat, the Cotton Sweater softens formal structure into confident business casual — reducing visual weight while maintaining clean proportions and a polished silhouette.",
  },
  {
    n: "II",
    title: "As the Outer Layer",
    body: "Worn alone over trousers or chinos, the sweater anchors a refined casual outfit with minimal effort. Clean lines and considered fit mean the piece reads deliberate and elegant without attempting formality.",
  },
  {
    n: "III",
    title: "Within the Resort Wardrobe",
    body: "Paired with linen trousers or tailored shorts in transitional temperatures, the Cotton Sweater extends the Resort Collection into cooler evenings and morning contexts — maintaining ease while adding warmth and a layer of refinement.",
  },
];

const principles = [
  "Premium long-staple cotton selected for structure and softness",
  "Considered proportions designed for layering versatility",
  "Ribbed finishing at cuff and hem for lasting shape retention",
  "Tonal palette built for integration across the full wardrobe system",
  "Machine washable with premium care guidance included",
  "Tailoring support available for length and fit refinement",
];

const profiles = [
  {
    n: "I",
    title: "The Wardrobe Completist",
    body: "Those building a full Franco Masoma wardrobe who understand that the casual layer is as important as the tailored one — and who want a knitwear piece that reflects the same standard as every suit and shirt they own.",
  },
  {
    n: "II",
    title: "The Resort Dresser",
    body: "Those extending their resort or travel wardrobe into cooler evenings and transitional settings — who want a sweater that integrates with linen trousers, tailored shorts, and casual shoes without effort.",
  },
  {
    n: "III",
    title: "The Business Casual Professional",
    body: "Those who wear jackets without ties, sportscoats over relaxed trousers, and who want a sweater that performs beneath a jacket as confidently as any formal shirt — while delivering far more comfort.",
  },
  {
    n: "IV",
    title: "The Minimal Wardrobe Architect",
    body: "Those who believe in fewer, better pieces — who want a single exceptional cotton sweater that covers every casual context across all seasons.",
  },
];

export default function SweaterPage() {
  return (
    <>
      <PageHero
        eyebrow="Refined Knitwear · Minimal Structure, Refined Comfort"
        title="Ease, Expressed with Intention."
        subtitle="Casualwear supports ease while maintaining clarity and elegance. The finest casual knitwear pieces are not simply comfortable — they are considered."
        primaryCTA={{ label: "Elevate Everyday Wear", href: "#reserve" }}
      />

      <Section bg="surface" tight>
        <SectionHeader
          centered
          eyebrow="The Collection"
          title="One Piece. The Everyday Standard."
          description="Built around a single defining piece — the Cotton Sweater. One garment, selected and constructed to serve as the cornerstone of refined casual dressing across seasons, environments, and styling combinations."
        />
        <StatsRow
          items={[
            { stat: "100%", label: "Premium Cotton Construction" },
            { stat: "∞", label: "Styling Combinations" },
            { stat: "All", label: "Seasons Served" },
          ]}
        />
      </Section>

      <Section bg="surface-low">
        <SectionHeader
          eyebrow="The Garment"
          title="Crafted for the Space Between Formal and Free."
          description="One sweater. Considered from fibre to finish — and built to perform across every casual context with equal ease and elegance."
        />
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
          eyebrow="How It Wears"
          title="Three Contexts. One Sweater."
          description="The Cotton Sweater is designed with range as its primary purpose. The same piece moves across three distinct styling contexts — each demanding something different, each served with the same ease and confidence."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {contexts.map((c) => (
            <div key={c.n}>
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
                {c.n}
              </div>
              <h3
                className="text-headline-md mb-3"
                style={{ color: "var(--color-on-surface)" }}
              >
                {c.title}
              </h3>
              <p
                className="text-body-md"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {c.body}
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
          title="For the Man Who Brings the Same Standard to Every Day."
          description="Those who understand that how they dress on a weekend or a quiet morning reflects the same values as how they dress for the boardroom."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p) => (
            <ProfileCard key={p.n} index={p.n} title={p.title} body={p.body} />
          ))}
        </div>
      </Section>

      <ReserveCTA
        eyebrow="Begin The Conversation"
        title="Elevate Everyday Wear."
        description="Whether you are building a complete wardrobe from the atelier or adding a single refined piece to what you already own, the Cotton Sweater represents the standard that casual dressing can achieve when approached with intention."
      />
    </>
  );
}
