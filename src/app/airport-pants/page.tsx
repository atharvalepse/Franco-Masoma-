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

export const metadata = { title: "Airport Pants | Franco Masoma" };

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDQTsa9Z1netxpyt-N4y5nZGLbcb2RXd4brnLUm184Ipc12QBs0XsdIUU6CQk4G2ntsZiDYONGbLGOPEgzgLe5lHkJi9RA6zgdYcwPq7HqVH97YG2C1vnkYSG2PXBZ84RkFoYyTFZMovovAc1rC4mz9miv1H0aWADMK63NFJEquFVtmAI3IJQqNiRJCsTf2u5NGPSZ07Vp2lNkAEtPZcG_DTKs2EoOJagzntaWYIrhniMoh9vBAQDT00Jv9wCqNWY6Sl9ZrjoBlrmo";

const product = {
  n: "01",
  category: "Travel-Ready",
  name: "The Airport Pant",
  label: "Refined Mobility",
  body: "Travel-ready trousers designed for comfort, structure, and refined mobility. The Airport Pant addresses the specific demands of long-haul travel, transit days, and destination-to-meeting transitions — delivering a trouser that holds its shape across hours of movement, resists creasing through long journeys, and arrives looking precisely as it did when the day began.",
  includes: [
    "Performance-refined natural fabric construction",
    "Crease-resistant weave engineered for long-haul travel",
    "Comfortable rise and generous seat for extended wear",
    "Slim to straight leg with clean break finish",
    "Concealed security pocket option for passports and essentials",
    "Stretches with movement without losing structure",
    "Available in travel-appropriate tonal colorways",
    "Immediate delivery in standard sizing with tailoring support",
  ],
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDQTsa9Z1netxpyt-N4y5nZGLbcb2RXd4brnLUm184Ipc12QBs0XsdIUU6CQk4G2ntsZiDYONGbLGOPEgzgLe5lHkJi9RA6zgdYcwPq7HqVH97YG2C1vnkYSG2PXBZ84RkFoYyTFZMovovAc1rC4mz9miv1H0aWADMK63NFJEquFVtmAI3IJQqNiRJCsTf2u5NGPSZ07Vp2lNkAEtPZcG_DTKs2EoOJagzntaWYIrhniMoh9vBAQDT00Jv9wCqNWY6Sl9ZrjoBlrmo",
};

const travelPrinciples = [
  {
    n: "I",
    title: "Crease Resistance",
    body: "Engineered with a high-twist performance weave that naturally sheds wrinkles, allowing you to walk straight from a long flight into a boardroom meeting without looking unkempt.",
  },
  {
    n: "II",
    title: "Refined Stretch",
    body: "Combines the structure of wool with subtle natural elastane stretch, offering complete freedom of movement and seat comfort without bagging at the knees.",
  },
  {
    n: "III",
    title: "Travel Utility",
    body: "Features a discreet concealed zip pocket for passport and boarding passes, deep secure front pockets, and dynamic waist adjustability for unmatched comfort on the go.",
  },
];

const principles = [
  "Performance-refined natural fabric construction",
  "Crease-resistant weave engineered for travel-intensive lifestyles",
  "Comfort-driven rise and stretch retention for extended journeys",
  "Discreet passport security pocket integrated into the side seam",
  "Alteration support available at point of purchase for immediate tailoring",
  "Designed to seamlessly integrate with blazers, sweaters, and shirts",
];

const profiles = [
  {
    n: "I",
    title: "The Frequent Flyer",
    body: "Those who regularly traverse timezones and require a trouser that performs perfectly across flights, lounges, and unexpected destination changes.",
  },
  {
    n: "II",
    title: "The Meeting-Bound Traveler",
    body: "Those heading straight from transit to client presentations who cannot afford the time for a wardrobe change or pressing.",
  },
  {
    n: "III",
    title: "The Modern Professional",
    body: "Those who value extreme comfort and effortless movement in their daily commute and office wear without sacrificing standard tailored styling.",
  },
  {
    n: "IV",
    title: "The Resort Enthusiast",
    body: "Those seeking a polished trouser for warm-climate getaways that pairs perfectly with casual linen shirts, knitwear, and unstructured jackets.",
  },
];

export default function AirportPants() {
  return (
    <>
      <PageHero
        eyebrow="Airport Pants · Travel-Ready Refined Mobility"
        title="Proportion. Posture. Travel-Ready Presence."
        subtitle="Engineered for long-haul journeys, destination transitions, and daily mobility. Walk straight from flight to meeting in absolute comfort and crisp structure."
        primaryCTA={{ label: "Schedule Travel Consult", href: "#reserve" }}
      />

      <Section bg="surface" tight>
        <SectionHeader
          centered
          eyebrow="The Garment"
          title="Comfort and Form. In Transit."
          description="Built to command presence even after hours of movement, delivering travel durability with the uncompromising quality of Neapolitan tailoring principles."
        />
        <StatsRow
          items={[
            { stat: "100%", label: "Crease-Resistant" },
            { stat: "Secure", label: "Passport Utility Pocket" },
            { stat: "Immediate", label: "Tailoring Delivery" },
          ]}
        />
      </Section>

      <Section bg="surface-low">
        <SectionHeader
          eyebrow="The Product"
          title="Precision Travel Wear."
          description="A trouser engineered to resist creasing, provide dynamic natural stretch, and hold structure across long travel itineraries."
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
          eyebrow="Travel Engineering"
          title="Three Comfort Pillars. One Performance Trouser."
          description="Performance-refined natural fabrics combined with considered structural details to create the ultimate trouser for long days on the move."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {travelPrinciples.map((tp) => (
            <div key={tp.n}>
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
                {tp.n}
              </div>
              <h3
                className="text-headline-md mb-3"
                style={{ color: "var(--color-on-surface)" }}
              >
                {tp.title}
              </h3>
              <p
                className="text-body-md"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {tp.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="surface-container">
        <EditorialQuote
          quote="The perfect travel trouser allows its wearer to focus on the destination rather than the creases of the journey."
          attribution="Franco Masoma Atelier"
        />
        <PrincipleList items={principles} />
      </Section>

      <Section bg="surface">
        <SectionHeader
          eyebrow="Who This Serves"
          title="For Every Man on the Move."
          description="Designed to serve the modern global lifestyle, where transition is constant and presence is required from the first second of arrival."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p) => (
            <ProfileCard key={p.n} index={p.n} title={p.title} body={p.body} />
          ))}
        </div>
      </Section>

      <ReserveCTA
        eyebrow="Refine Your Travel Wardrobe"
        title="Consultation for Refined Travel."
        description="Whether preparing for a multi-city tour or selecting travel key pieces, the process begins with a personal fit assessment and fabric consultation."
      />
    </>
  );
}
