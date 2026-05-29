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
  "/ready-to-wear/14.png";

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
      "/ready-to-wear/38.png",
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
      "/ready-to-wear/39.png",
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
      "/ready-to-wear/40.png",
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
      "/ready-to-wear/41.png",
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

      {/* ─── Visual Lookbook Section ──────────────────────────────────── */}
      <Section bg="surface-container">
        <SectionHeader
          centered
          eyebrow="The Ceremonial Lookbook"
          title="Moments of Deliberation and Grace."
          description="Garments crafted to carry the weight of life's most defining milestones, captured in absolute reverence and timeless refinement."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch mt-12">
          {/* Left Column (Spans 5/12 on desktop) */}
          <div className="md:col-span-5 flex flex-col justify-between gap-8">
            <div 
              className="group relative cinematic-zoom w-full flex-1"
              style={{
                aspectRatio: "4/5",
                border: "1px solid var(--color-outline-variant)",
                background: "var(--color-surface)",
              }}
            >
              <span className="fm-stamp">I · The Accent</span>
              <img 
                src="/groom-s-boutonniere-with-olive-branch-roses_23-2152010058.jpg.avif" 
                alt="The Groom's Boutonniere" 
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8"
              >
                <span className="text-label-micro text-white/70 mb-2">The Detail</span>
                <h4 className="text-headline-md text-white mb-3">The Groom's Boutonniere</h4>
                <p className="text-body-md text-white/80">An olive branch and soft white roses pinned to the lapel — the final ceremonial accent.</p>
              </div>
            </div>
            
            <div 
              className="group relative cinematic-zoom w-full flex-1"
              style={{
                aspectRatio: "4/5",
                border: "1px solid var(--color-outline-variant)",
                background: "var(--color-surface)",
              }}
            >
              <span className="fm-stamp">II · The Silhouette</span>
              <img 
                src="/6bca5299347eeef5080fca84da973a52.jpg" 
                alt="Neapolitan Formal Shoulder" 
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8"
              >
                <span className="text-label-micro text-white/70 mb-2">The Silhouette</span>
                <h4 className="text-headline-md text-white mb-3">Neapolitan Shoulder</h4>
                <p className="text-body-md text-white/80">Hand-sculpted construction that delivers clean structure while ensuring complete ease.</p>
              </div>
            </div>
          </div>
          
          {/* Right Column (Spans 7/12 on desktop) */}
          <div className="md:col-span-7 flex flex-col justify-between gap-8">
            <div 
              className="group relative cinematic-zoom w-full"
              style={{
                aspectRatio: "16/10",
                border: "1px solid var(--color-outline-variant)",
                background: "var(--color-surface)",
              }}
            >
              <span className="fm-stamp">III · The Ritual</span>
              <img 
                src="/e6b0fcb2fb4fa90caf0d7ad3b95517f2.jpg" 
                alt="A Moment of Preparation" 
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8"
              >
                <span className="text-label-micro text-white/70 mb-2">The Ritual</span>
                <h4 className="text-headline-md text-white mb-3">A Moment of Preparation</h4>
                <p className="text-body-md text-white/80">Buttoning the custom Neapolitan suit jacket before entering the ceremony.</p>
              </div>
            </div>
            
            <div 
              className="group relative cinematic-zoom w-full flex-1"
              style={{
                aspectRatio: "3/4",
                border: "1px solid var(--color-outline-variant)",
                background: "var(--color-surface)",
              }}
            >
              <span className="fm-stamp">IV · The Union</span>
              <img 
                src="/9fb60d3194cb404c3bbb6347066c9ea4.jpg" 
                alt="Timeless Reverence" 
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8"
              >
                <span className="text-label-micro text-white/70 mb-2">The Union</span>
                <h4 className="text-headline-md text-white mb-3">Timeless Reverence</h4>
                <p className="text-body-md text-white/80">Tailoring that stands beautifully at the altar and endures in photographs for generations.</p>
              </div>
            </div>
          </div>
        </div>
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
