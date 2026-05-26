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

export const metadata = { title: "Wedding Collection | Franco Masoma" };

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDuZapWciUyWGUiCxqd3u5r3ku0PtoQobD49bH106F1ZGDlu0RXJVsE7kOQXSMVjvrpb8GiSRk1DY2taRxnL2mi7okEtn-M9nNcgDNNUrWAci5hJQSJhgJbTSSWRwdc9WCedDdFE2M8XNLBa435tu2ObRP0KoISmYvSAQ_DntYcJUpURiOtzpDioulHcgsuj7_Au_yd2l6_mQKhlWmyL-Vf0eaPS4EL6-f3FGsR3CF6ztwZcyv-BZu8Z1DJWn83youG3dNlaSEqDHk";

const garments = [
  {
    n: "01",
    category: "The Centrepiece",
    name: "Bespoke Wedding Suits",
    label: "Built for the Day That Defines a Chapter",
    body: "Constructed entirely to your measurements, your posture, and your presence. Every structural decision — shoulder width, chest canvas, trouser break — is made in service of how you carry yourself on the day that defines a chapter of your life.",
    includes: [
      "Comprehensive posture and lifestyle consultation",
      "Full canvas construction for lasting shape",
      "Hand-selected heritage cloths from England and Italy",
      "Multiple fitting sessions through full construction arc",
      "Hand-tailored construction in Naples",
      "10 to 14 week production timeline",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7ZvnuBeydDNkdTCoJ_ggUN8QYOAYz73dnmZwUkNpytSlnnrmuU7c4RY8mH5iy7y_EL3eZ3KoGwHQuBcPxdy-V4Nz6wteXXfnPfMIR5PPimooEXeCVr3kqDLn6CRCdpu1CGydr3HCku4DInCWUxK4s1UduV-96DIT1kZpimdzQtIrfF9JMn66MO-Iq0e-81Ob_SVlp9YknXKh8Cr1HxcsLkV3wqwCI39TbMKYTP2e4ymNDjaNPJkTEcY1MBj2WwpnYCzYcJS3uIZ2H",
  },
  {
    n: "02",
    category: "The Full Picture",
    name: "Groom & Groomsmen Coordination",
    label: "Visual Intention Across the Wedding Party",
    body: "A wedding party that moves with visual intention. We coordinate silhouette, fabric family, and detail across every member of the party — ensuring cohesion without uniformity. Each man dressed with the same care, each distinctly himself.",
    includes: [
      "Coordinated styling across the full wedding party",
      "Silhouette and fabric family alignment",
      "Individual fit for every party member",
      "Detail coordination — buttons, lining, ties",
      "Group consultation and fitting sessions",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9vogoi5X3Y7l5qym-_kfVZKNRte4_bVKivRAGkqtzyoMzJZXcSNXTqaCChu0oxrdwJy41PbZ9_Hw44o7fmfnwVwp3hBp-yjPlq4NUCb9Rw9DUKXzJSrbC_GOnO4RG8vBN0Hel9Kq-vKKB6vV4cB10uh-tN1OgcB_6CSSBBn4E3XAKCk6-KROpstikJrQg8bbxn6ol6CNBjQnRSEul1zX4VG4DoDqkuBUKU11D1npC7TFhb5uF6sMxcO6T4HAstY1MBHM867dYWN2o",
  },
  {
    n: "03",
    category: "The Complete Arc",
    name: "Ceremony & Reception Styling",
    label: "Two Expressions, One Day",
    body: "Some days call for two expressions. The formality of the ceremony. The ease of the reception. We design for both — ensuring your garments serve every moment of the day with equal distinction and comfort.",
    includes: [
      "Ceremony garment with full formal construction",
      "Reception change with refined ease",
      "Versatility designed into every piece",
      "Coordinated accessory styling",
      "Day-of consultation included",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBsPhsd5Clcv9nhQ8ND5UnEJ_LoJz0eGlmtin6PHmFEd_rUnT2WiQ7vJmn_ex4e3JG4g04xiSPbDninbKUlm_7XEHUgMO6r7BM0e-G3s5UPb6RZHd2yCn7VL7p4AKBDGJgeimJgmA90KkJG-e1nyBPTJiX2xydX6acO92PPfIRqNgeqH0nTwdCCtMgHtH0afWZdtqLBhAbd9Cg3vvdzZ0PbbhHtMgNlmQ4VxuqFZzWQ_Gw4gm3OXYK9BplTl-Qy0kpjqzj0wC6PXlvF",
  },
  {
    n: "04",
    category: "The Timeless Choice",
    name: "Heritage-Inspired Tailoring",
    label: "The Great Houses of Savile Row and Naples",
    body: "For those drawn to tradition, we offer tailoring rooted in the great houses of Savile Row and the ateliers of Naples. Peak lapels, hand-stitched buttonholes, full canvas construction — garments that honour the ceremony through craftsmanship as much as cloth.",
    includes: [
      "Peak or shawl lapel options",
      "Hand-stitched buttonholes",
      "Full canvas construction",
      "Heritage construction techniques",
      "Naples atelier finishing",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAC-YPWxNdMKoiZLKCCqkN4Xu0eoQZuHus-G1xyBHBOgKQ_eTZxdDLQsBcZxmp6leRVvXFdstu1SVmpPvuHO8N9jk5LFWpBLxmbCwqIupKsJoluuZxUIE_oeNcdK4BUMY1o1fqy2jXr56bQrK35DYKs0EpJfPe8cOIEnZpSKT9znLk8b88FDVqhQYvEh0u61pkkJWtjrUDAi4oMyx_g36AmtR0H4ivXQY6ds4Akwo3-aJFetcE8HIjEo9N3FAiI51hlWIw6s_dsAVaU",
  },
];

const principles = [
  "Full canvas construction for lasting shape and structure",
  "Hand-selected heritage cloths from England and Italy",
  "Coordinated styling across the entire wedding party",
  "Ceremony-to-reception versatility designed into every garment",
  "Precision fitting sessions from consultation through final delivery",
];

const profiles = [
  {
    n: "I",
    title: "The Groom",
    body: "The centrepiece of the day. Dressed with the full attention of the atelier, from first consultation to final fitting, every decision made around his vision.",
  },
  {
    n: "II",
    title: "The Wedding Party",
    body: "Groomsmen coordinated with care — unified in intention, individual in fit. Every man wearing something made for him, not adjusted to fit.",
  },
  {
    n: "III",
    title: "The Modern Groom",
    body: "Those who bring a personal aesthetic to the ceremony — unconventional silhouettes, unexpected fabrics, and styling that reflects who they genuinely are.",
  },
  {
    n: "IV",
    title: "The Traditionalist",
    body: "Those who want heritage craftsmanship, peak lapels, morning dress, and the enduring formality of a tailored suit built the way it has always been built.",
  },
];

export default function WeddingCollection() {
  return (
    <>
      <PageHero
        variant="dark"
        eyebrow="Wedding Collection · For Life's Defining Moments"
        title="Tailored for the Moment That Lasts a Lifetime."
        subtitle="A wedding represents a defining expression of commitment and presence. The garment you wear to that moment carries the weight of what it means — and becomes part of the memory itself."
        image={HERO_IMG}
        imageAlt="A bespoke wedding suit"
        primaryCTA={{ label: "Design Your Wedding Look", href: "#reserve" }}
      />

      <Section bg="surface" tight>
        <SectionHeader
          centered
          eyebrow="The Collection"
          title="Timeless Tailoring for a Ceremony Worth Remembering."
          description="Each piece is constructed with the understanding that it will appear in photographs, in stories, and in memory for generations. Every garment is designed to elevate your presence and honor the experience."
        />
        <StatsRow
          items={[
            { stat: "Once", label: "In a Lifetime" },
            { stat: "100%", label: "Bespoke Construction" },
            { stat: "∞", label: "Occasions It Lives In" },
          ]}
        />
      </Section>

      <Section bg="surface-low">
        <SectionHeader
          eyebrow="What Is Included"
          title="Each Piece, a Statement of Commitment."
          description="Four garment categories. One unified standard for your most significant day."
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
          quote="The suit you wear on your wedding day does not end when the day does. It lives in every photograph, every anniversary, every telling of the story."
          attribution="Franco Masoma Atelier"
        />
        <PrincipleList items={principles} title="What Defines This Collection" />
      </Section>

      <Section bg="surface-low">
        <SectionHeader
          eyebrow="Who This Serves"
          title="For Every Man Standing at the Altar."
          description="Those who understand that this day will be remembered in detail — and that the clothing they choose becomes part of that detail."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p) => (
            <ProfileCard key={p.n} index={p.n} title={p.title} body={p.body} />
          ))}
        </div>
      </Section>

      <ReserveCTA
        eyebrow="Begin The Conversation"
        title="Design Your Wedding Look."
        description="We recommend beginning your wedding consultation a minimum of four months before the ceremony, to allow full time for construction, fittings, and refinement."
      />
    </>
  );
}
