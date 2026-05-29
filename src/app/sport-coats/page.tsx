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

export const metadata = { title: "Sportcoats & Jackets | Franco Masoma" };

const products = [
  {
    n: "01",
    category: "Cut-to-Measure",
    name: "CTM Sportscoat",
    label: "The Versatile Foundation",
    body: "A custom sportcoat designed for versatility across formal and casual settings. Built through full personal measurement, fabric selection from premium and heritage cloth collections, and design decisions tailored to how the jacket will move through your life. Structured enough for professional environments, relaxed enough to anchor a casual occasion with authority and ease.",
    includes: [
      "Full personal measurement and posture assessment",
      "Fabric selection from premium and heritage Italian collections",
      "Custom lapel, button, and pocket style options",
      "Patch, flap, or jetted pocket configurations",
      "Unstructured or lightly structured shoulder options",
      "Available with or without lining for seasonal versatility",
      "Monogramming available on request",
      "6 to 8 week production timeline",
    ],
    image:
      "/sport-jacket-clothing_1203-2533.jpg.avif",
  },
  {
    n: "02",
    category: "Luxury Outerwear",
    name: "Safari Suede Jacket",
    label: "Elevated Casual Presence",
    body: "A luxury suede jacket expressing relaxed sophistication and elevated casual presence. The defining piece of a considered leisure wardrobe — crafted from premium suede selected for texture, weight, and drape. Its relaxed silhouette carries tailoring influence without formal constraint.",
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
    image:
      "/images-6.jpeg",
  },
];

const environments = [
  ["Business Casual", "Ideal", "Elevated"],
  ["Client Meetings", "Ideal", "Occasion-Specific"],
  ["Evening Dining", "Ideal", "Ideal"],
  ["Weekend & Travel", "Versatile", "Ideal"],
  ["Resort & Leisure", "Versatile", "Ideal"],
  ["Creative Environments", "Versatile", "Ideal"],
];

const principles = [
  "Craftsmanship-led construction across both jacket styles",
  "Fabric selection optimized for movement and environment",
  "Shoulder and structure decisions shaped by intended use",
  "Full customization available through the CTM Sportscoat process",
  "Tailoring support available on the Safari Suede Jacket",
  "Both pieces designed to integrate across the full wardrobe system",
];

const profiles = [
  {
    n: "I",
    title: "The Versatile Professional",
    body: "Those whose week moves between client meetings, creative sessions, and evening engagements — and who need a jacket that holds authority across every setting.",
  },
  {
    n: "II",
    title: "The Weekend Refined",
    body: "Those who want their leisure wardrobe to reflect the same standard as their professional one — a suede jacket that elevates every casual occasion without effort.",
  },
  {
    n: "III",
    title: "The Wardrobe Extender",
    body: "Those building a complete Franco Masoma wardrobe who want a jacket that integrates across suits, shirts, and resort pieces — expanding what each individual garment can do.",
  },
  {
    n: "IV",
    title: "The Considered Traveller",
    body: "Those who travel with intention and want a single exceptional jacket that performs across business dinners, coastal evenings, and every setting in between.",
  },
];

export default function SportCoats() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow="Sportcoats & Jackets · Versatility Shaped Through Craftsmanship"
        title="Adaptability Without Compromise."
        subtitle="Tailored jackets define adaptability across professional and lifestyle environments. The right jacket moves between boardroom and dinner, between formal structure and relaxed presence — without losing authority at any point in the journey."
        image="/freepik_assistant_1761598016224.png.webp"
        imageAlt="Fine custom tailored sportcoats"
        primaryCTA={{ label: "Build Your Jacket Profile", href: "#reserve" }}
      />

      <Section bg="surface" tight>
        <SectionHeader
          centered
          eyebrow="The Collection"
          title="Two Jackets. Every Environment Covered."
          description="The collection offers two distinct expressions of the tailored jacket — one shaped for versatility through full customization, and one crafted from luxury suede for elevated casual presence."
        />
        <StatsRow
          items={[
            { stat: "2", label: "Jacket Styles" },
            { stat: "100%", label: "Craftsmanship-Led Construction" },
            { stat: "∞", label: "Settings Served" },
          ]}
        />
      </Section>

      <Section bg="surface-low">
        <SectionHeader
          eyebrow="The Products"
          title="Each Jacket, a New Range of Presence."
          description="Two carefully crafted expressions — one for maximum versatility through custom tailoring, one for the luxury of elevated ease."
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
          eyebrow="Where Each Jacket Works"
          title="Built for Every Environment You Enter."
          description="A jacket earns its place in a wardrobe by the range of environments it serves. Both pieces are designed with that range as a primary design principle."
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
            <span>Environment</span>
            <span>CTM Sportscoat</span>
            <span>Safari Suede</span>
          </div>
          {environments.map(([env, a, b], i) => (
            <div
              key={env}
              className="grid grid-cols-3 text-body-md"
              style={{
                background: i % 2 === 0 ? "var(--color-surface)" : "var(--color-surface-container-low)",
                padding: "20px 24px",
                color: "var(--color-on-surface-variant)",
                borderTop: i === 0 ? "none" : "1px solid var(--color-outline-variant)",
              }}
            >
              <span style={{ color: "var(--color-on-surface)" }}>{env}</span>
              <span>{a}</span>
              <span>{b}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="surface-container">
        <EditorialQuote
          quote="The jacket is the most expressive garment in a man's wardrobe. It moves between worlds. It should do so with ease."
          attribution="Franco Masoma Atelier"
        />
        <PrincipleList items={principles} />
      </Section>

      <Section bg="surface">
        <SectionHeader
          eyebrow="Who This Serves"
          title="For the Man Who Moves Between Worlds."
          description="The collection serves those who require their outerwear to perform across the full range of their professional and personal life — without changing who they are between environments."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p) => (
            <ProfileCard key={p.n} index={p.n} title={p.title} body={p.body} />
          ))}
        </div>
      </Section>

      <ReserveCTA
        eyebrow="Begin The Conversation"
        title="Build Your Jacket Profile."
        description="Your jacket consultation begins with the environments you move through — professional, social, leisure — and the role you want your outerwear to play across all of them."
      />
    </>
  );
}
