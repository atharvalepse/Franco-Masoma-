import {
  Container,
  EditorialQuote,
  Eyebrow,
  PageHero,
  ReserveCTA,
  Section,
  SectionHeader,
  StatsRow,
} from "@/components/Layout";

export const metadata = { title: "Accessories | Franco Masoma" };

const categories = [
  {
    n: "01",
    title: "Ties & Neckwear",
    body: "Silk and textured neckwear designed for leadership and ceremony.",
  },
  {
    n: "02",
    title: "Pocket Squares",
    body: "Refined accents that define balance and coordination.",
  },
  {
    n: "03",
    title: "Cufflinks & Studs",
    body: "Precision-crafted details for formal expression.",
  },
  {
    n: "04",
    title: "Scarves & Wraps",
    body: "Seasonal layering for warmth and elegance.",
  },
  {
    n: "05",
    title: "Leather Goods",
    body: "Italian leather essentials designed for longevity.",
  },
  {
    n: "06",
    title: "Watches",
    body: "Curated timepieces shaped for proportion and presence.",
  },
  {
    n: "07",
    title: "Sunglasses",
    body: "Refined eyewear for modern sophistication.",
  },
  {
    n: "08",
    title: "Hats",
    body: "Heritage-inspired accessories for considered occasions.",
  },
];

const editorsPicks = [
  { name: "Navy Silk Tie", price: "$95" },
  { name: "Burgundy Pocket Square", price: "$45" },
  { name: "Sterling Silver Cufflinks", price: "$120" },
  { name: "Italian Leather Belt", price: "$140" },
  { name: "Cashmere Wrap", price: "$240" },
  { name: "Minimal Dress Watch", price: "From $450" },
  { name: "Aviator Sunglasses", price: "$180" },
  { name: "Leather Wallet", price: "$95" },
];

const looks = [
  {
    title: "Boardroom Presence",
    items: ["Navy silk tie", "White pocket square", "Silver cufflinks", "Italian leather belt", "Dress watch"],
    result: "Structured executive presence",
  },
  {
    title: "Evening Elegance",
    items: ["Burgundy pocket square", "Pearl studs", "Luxury watch", "Formal shoes"],
    result: "Elevated ceremonial refinement",
  },
  {
    title: "Refined Casual",
    items: ["Lightweight scarf", "Minimal watch", "Leather accessories", "Subtle eyewear"],
    result: "Effortless modern sophistication",
  },
];

const careNotes = [
  {
    n: "Leather",
    title: "Gains Patina",
    body: "Quality full-grain leather develops a personal patina with use — each mark, crease, and polish application building character that makes the piece uniquely yours over time.",
  },
  {
    n: "Silk",
    title: "Gains Character",
    body: "Properly stored and handled silk develops a natural lustre and drape through wear. The fibres settle into a softness that only comes with careful use and considered care.",
  },
  {
    n: "Metal",
    title: "Gains Presence",
    body: "Sterling silver and gold develop a warmth and depth through wear that polished, unworn metal cannot replicate. The cufflink worn daily becomes a piece of personal history.",
  },
];

const giftSets = [
  {
    title: "Executive Gift Set",
    body: "Tie, pocket square, cufflinks, and leather card holder — assembled for the professional who appreciates considered detail.",
  },
  {
    title: "Groom Gift Set",
    body: "Silk tie, pocket square, pearl studs, and a dress watch — curated for the occasion that demands presence and permanence.",
  },
  {
    title: "Luxury Travel Set",
    body: "Cashmere wrap, leather wallet, minimal watch, and refined sunglasses — assembled for the man who travels with intention.",
  },
  {
    title: "Seasonal Set",
    body: "Seasonally curated accessories — scarves, pocket squares, and leather pieces — selected for the months ahead.",
  },
];

export default function Accessories() {
  return (
    <>
      <PageHero
        variant="dark"
        eyebrow="Accessories · The Details"
        title="The Final Word in Every Outfit."
        subtitle="Curated accessories that complete the Franco Masoma wardrobe. Each piece reflects precision, longevity, and timeless elegance — the final decisions that separate a dressed man from a truly considered one."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCFiu61ELQk-EWhubSQa_ilMJP8yPfXiKm0fN3wOoQP5FSj68LV3HCeyRQYOe6z2q0R0jZ06Sf3s8iSYSpdMiB4KVCbiMqqJMWKejetysuqRhFYAeTtVawBIYOfg4oMiYaFYmdAdqoIlfoecDF0LyNbI5fyqxerl42rcpopChepuBkRrEM_Npqy8fvix1WQay46ij5tv8Et54UwQoBVOtd1rzKBA0CnyW8nL_1cIUcyPzYTDesUSr4226xsCLczzdDJE_UZKh9csb8"
        imageAlt="Luxury accessories laid on a marble surface"
        primaryCTA={{ label: "Explore Collection", href: "#categories" }}
        secondaryCTA={{ label: "Schedule Consultation", href: "#reserve" }}
      />

      <Section bg="surface" tight>
        <SectionHeader
          centered
          eyebrow="Accessories Overview"
          title="Eight Categories. One Complete System."
          description="Accessories define identity through precision and intention. Each category contributes to a complete wardrobe system designed for coherence and longevity — chosen not as afterthoughts, but as the deliberate final decisions that complete every considered outfit."
        />
        <StatsRow
          items={[
            { stat: "8", label: "Accessory Categories" },
            { stat: "100%", label: "Curated for Longevity" },
            { stat: "∞", label: "Outfit Combinations" },
          ]}
        />
      </Section>

      {/* Categories grid */}
      <Section bg="surface" id="categories">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "var(--color-outline-variant)" }}>
          {categories.map((c) => (
            <article
              key={c.n}
              className="group"
              style={{ background: "var(--color-surface)", padding: 32, minHeight: 200 }}
            >
              <span
                className="text-label-micro block mb-4"
                style={{ color: "var(--color-secondary)" }}
              >
                {c.n}
              </span>
              <h3
                className="text-headline-md mb-3"
                style={{ color: "var(--color-on-surface)" }}
              >
                {c.title}
              </h3>
              <p
                className="text-body-md mb-6"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {c.body}
              </p>
              <a href="#" className="fm-link" style={{ fontSize: 10 }}>
                Explore →
              </a>
            </article>
          ))}
        </div>
      </Section>

      {/* Editor's Picks */}
      <Section bg="surface-low">
        <SectionHeader
          eyebrow="Editor's Picks"
          title="Signature Pieces. Client Favourites."
          description="A curated selection representing the craftsmanship and versatility of the full accessories collection — the pieces most frequently chosen by Franco Masoma clients across wardrobe and occasion contexts."
        />
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ background: "var(--color-outline-variant)" }}
        >
          {editorsPicks.map((p) => (
            <div
              key={p.name}
              style={{ background: "var(--color-surface)", padding: 24 }}
            >
              <h4
                className="text-headline-md"
                style={{ color: "var(--color-on-surface)", fontSize: 18 }}
              >
                {p.name}
              </h4>
              <p
                className="text-label-sm mt-2"
                style={{ color: "var(--color-secondary)" }}
              >
                {p.price}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="fm-btn">
            View Full Collection
          </a>
        </div>
      </Section>

      {/* Styling looks */}
      <Section bg="surface">
        <SectionHeader
          centered
          eyebrow="Styling with Accessories"
          title="Three Looks. One Standard of Intention."
          description="Accessories complete structure, elevate proportion, and define character. These three curated looks demonstrate how the right combination transforms any tailored outfit into a complete, considered statement."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {looks.map((l) => (
            <article
              key={l.title}
              style={{
                background: "var(--color-surface-container-low)",
                border: "1px solid var(--color-outline-variant)",
                padding: 32,
              }}
            >
              <h4
                className="text-headline-md mb-6"
                style={{ color: "var(--color-on-surface)" }}
              >
                {l.title}
              </h4>
              <ul
                className="text-body-md space-y-2"
                style={{
                  color: "var(--color-on-surface-variant)",
                  listStyle: "none",
                  padding: 0,
                }}
              >
                {l.items.map((i) => (
                  <li key={i}>— {i}</li>
                ))}
              </ul>
              <p
                className="text-label-sm mt-8 pt-6"
                style={{
                  color: "var(--color-secondary)",
                  borderTop: "1px solid var(--color-outline-variant)",
                }}
              >
                Result: {l.result}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Care & Craftsmanship */}
      <Section bg="surface-container">
        <SectionHeader
          centered
          eyebrow="Care & Craftsmanship"
          title="Accessories That Deepen with Time."
          description="The finest accessories are not static objects — they are living pieces that evolve through wear, developing depth, texture, and individuality that cannot be manufactured."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {careNotes.map((n) => (
            <div
              key={n.n}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-outline-variant)",
                padding: 32,
              }}
            >
              <span
                className="text-label-sm block mb-3"
                style={{ color: "var(--color-secondary)" }}
              >
                {n.n}
              </span>
              <h4
                className="text-headline-md mb-3"
                style={{ color: "var(--color-on-surface)" }}
              >
                {n.title}
              </h4>
              <p
                className="text-body-md"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {n.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Gifting */}
      <Section bg="surface-low">
        <SectionHeader
          centered
          eyebrow="Gifting"
          title="Curated Sets for Meaningful Occasions."
          description="Each gift set is assembled around a specific occasion and recipient — chosen with the same consideration as any personal wardrobe consultation."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {giftSets.map((g) => (
            <article
              key={g.title}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-outline-variant)",
                padding: 32,
              }}
            >
              <h4
                className="text-headline-md mb-3"
                style={{ color: "var(--color-on-surface)" }}
              >
                {g.title}
              </h4>
              <p
                className="text-body-md"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {g.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <ReserveCTA
        eyebrow="Complete Your Wardrobe"
        title="Accessories Complete Expression."
        description="Each selection integrates into a long-term wardrobe system shaped through consultation — chosen not in isolation, but as part of the coherent whole that defines a truly considered wardrobe."
      />
    </>
  );
}
