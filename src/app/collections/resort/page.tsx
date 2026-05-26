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

export const metadata = { title: "Resort Collection | Franco Masoma" };

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ-ljxyR3itS2_9kyDZJtQpc11wvqTiWel-VqAq47Gx4IuNi45ZlqqYc6L2Z61VQw77WimFSxYJsgOeL1OkSOEnhyiDSxtGJtUKG4HtrjXVh2ZzW4C-n_EbDTynffN9oYVJt1jmoNqxL-quLx9-dggwTdKl-Htb5hvEC1H9iVJnY1RQHdQTO0JoI46L2O0mVhzYAKXCc1G4nZIUrXl-n9NLgDslOyM-ztRsCs-jtzsDniEWxUW8w7Umb-eNQBHvW82uz-Ra6UC_HQ";

const garments = [
  {
    n: "01",
    category: "The Foundation",
    name: "Linen Shirts & Relaxed Tailoring",
    label: "Polished from Across a Terrace",
    body: "Linen, silk-linen blends, and fine cotton shirts cut with ease and intention. Collars that sit without stiffening. Shirts that breathe through warmth without losing structure. Relaxed tailoring that reads polished from across a terrace and feels effortless throughout the day.",
    includes: [
      "Linen and silk-linen blend fabric",
      "Soft collar construction",
      "Relaxed tailoring with refined proportion",
      "Designed for warm-climate performance",
      "Available in RTW and CTM formats",
    ],
    image: "/cf6ce8a99485459405a203a147ff7982.jpg",
  },
  {
    n: "02",
    category: "The Anchor Piece",
    name: "Travel-Ready Trousers",
    label: "Cut for Movement, Finished for Occasion",
    body: "Trousers constructed from performance-refined natural fabrics — wool blends, linen, fine cotton — that resist creasing, hold their line through long journeys, and transition with ease from midday to evening.",
    includes: [
      "Performance natural fabric construction",
      "Crease-resistant weave engineered for travel",
      "Refined silhouette across the leg",
      "Comfort-driven waistband and rise",
      "Available in travel-appropriate colorways",
    ],
    image: "/af431a30a6f4902781410b094a1a02f8.jpg",
  },
  {
    n: "03",
    category: "The Finishing Layer",
    name: "Lightweight Jackets & Layering",
    label: "Definition Without Weight",
    body: "Unstructured blazers, linen overshirts, and travel-weight sport coats that add definition without weight. Pieces that fold without damage, layer without bulk, and elevate any ensemble with the ease of a single additional garment.",
    includes: [
      "Unstructured construction for ease",
      "Linen and travel-weight wool fabrics",
      "Foldable without damage",
      "Designed for layering versatility",
      "Available across the Sportcoats collection",
    ],
    image: "/96a01347ca5b68252d885c65eb9ea9d1.jpg",
  },
  {
    n: "04",
    category: "The Complete Edit",
    name: "Destination Wardrobes",
    label: "Curated Trip by Trip",
    body: "A curated collection built entirely for a specific trip — the Amalfi Coast, the Maldives, a summer in Provence. We select every piece with the destination in mind, ensuring cohesion, versatility, and presence across every environment on your itinerary.",
    includes: [
      "Destination-specific curation",
      "Full wardrobe planning per trip",
      "Cohesive palette and proportion",
      "Itinerary-aligned garment selection",
      "Travel logistics and care guidance",
    ],
    image: "/cheerful-happy-brunette-man-dark-green-t-shirt-white-shorts-smiles-sincerely-outside_197531-24140.jpg.avif",
  },
];

const principles = [
  "Lightweight natural fabrics selected for warm-climate performance",
  "Relaxed silhouettes with tailored precision in every proportion",
  "Crease-resistant construction for long-haul travel",
  "Cohesive palette building for maximum wardrobe versatility",
  "Destination-specific curation available for full trip planning",
];

const profiles = [
  {
    n: "I",
    title: "The Frequent Traveller",
    body: "Those who spend significant time across destinations and want a wardrobe that travels as well as they do — without compromise on appearance or comfort.",
  },
  {
    n: "II",
    title: "The Destination Guest",
    body: "Those attending weddings, events, or retreats in warm climates who want to arrive dressed with intention, without the weight of a formal wardrobe.",
  },
  {
    n: "III",
    title: "The Leisure Refined",
    body: "Those who appreciate that weekends and holidays are as worthy of careful dressing as any boardroom — and who want their leisure to reflect their standard.",
  },
  {
    n: "IV",
    title: "The Complete Wardrobe Client",
    body: "Those working with Franco Masoma across multiple collections, building a wardrobe that serves every environment of a fully considered life.",
  },
];

export default function ResortCollection() {
  return (
    <>
      <PageHero
        variant="dark"
        eyebrow="Resort Collection · For Refined Ease and Travel"
        title="Elegance That Moves with You."
        subtitle="The Resort Collection expresses ease, movement, and understated elegance. Lightweight fabrics, relaxed tailoring, and fluid structure that support comfort and sophistication across travel and leisure environments."
        image={HERO_IMG}
        imageAlt="Linen tailoring on a terrace"
        primaryCTA={{ label: "Build Your Travel Wardrobe", href: "#reserve" }}
      />

      <Section bg="surface" tight>
        <SectionHeader
          centered
          eyebrow="The Collection"
          title="Presence Without Effort."
          description="Built on a single conviction — that ease and elegance are never in conflict. The finest travel wardrobe moves through airports, terraces, coast-side dinners, and sun-lit afternoons with the same quiet authority as any tailored suit."
        />
        <StatsRow
          items={[
            { stat: "4", label: "Garment Categories" },
            { stat: "100%", label: "Travel-Ready Construction" },
            { stat: "∞", label: "Destinations Served" },
          ]}
        />
      </Section>

      <Section bg="surface-low">
        <SectionHeader
          eyebrow="What Is Included"
          title="Four Categories, One Standard of Ease."
          description="Every piece selected for how it performs in motion — and how it looks when you arrive."
        />
        <div className="grid grid-cols-1 gap-20">
          {garments.map((g, i) => (
            <TierCard
              key={g.n}
              reversed={i % 2 === 1}
              index={g.n}
              category={g.category}
              name={g.name}
              label={g.label}
              body={g.body}
              includes={g.includes}
              image={g.image}
            />
          ))}
        </div>
      </Section>

      <Section bg="surface">
        <EditorialQuote
          quote="True luxury in travel is arriving exactly as yourself — unhurried, unrumpled, and entirely at ease."
          attribution="Franco Masoma Atelier"
        />
        <PrincipleList items={principles} />
      </Section>

      <Section bg="surface-low">
        <SectionHeader
          eyebrow="Who This Serves"
          title="For the Man Who Travels with Intention."
          description="Those who want their leisure wardrobe to reflect the same standard of thought and care as everything else they do."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p) => (
            <ProfileCard key={p.n} index={p.n} title={p.title} body={p.body} />
          ))}
        </div>
      </Section>

      <ReserveCTA
        eyebrow="Begin The Conversation"
        title="Build Your Travel Wardrobe."
        description="Your Resort consultation begins with the destination — where you are going, how long you will be there, and what each day of that journey requires."
      />
    </>
  );
}
