import {
  Container,
  EditorialQuote,
  Eyebrow,
  PageHero,
  ReserveCTA,
  Section,
  SectionHeader,
} from "@/components/Layout";

export const metadata = { title: "The House | Franco Masoma" };

const HERO_IMG =
  "/ready-to-wear/11.png";

const FRANCO_IMG =
  "/ready-to-wear/12.png";

const journey = [
  { n: "I", title: "The Beginning", body: "A childhood shaped by challenge and transition created a foundation of resilience and clarity — instilling the values of discipline, resourcefulness, and aspiration that would later define the House." },
  { n: "II", title: "The Arrival", body: "A new life in California marked the beginning of opportunity, learning, and self-discipline. A commitment to building something meaningful through effort and intention took shape in a new environment." },
  { n: "III", title: "The Craft", body: "A deep connection with tailoring and textile artistry developed into a lifelong pursuit of excellence. The discipline of the craft reflected the same discipline that had shaped the life that preceded it." },
  { n: "IV", title: "The Vision", body: "A belief emerged that craftsmanship and beauty belong to those who value intention and quality — and that the finest clothing is not a luxury, but an expression of how a man understands and values his own presence." },
  { n: "V", title: "The House", body: "Franco Masoma was established as a reflection of this philosophy — uniting craft, identity, and presence into a single living expression of everything the journey had produced." },
];

const philosophy = [
  { title: "Quality Over Quantity", body: "Every garment reflects precision, longevity, and timeless construction. Fewer pieces define a stronger wardrobe built through intention and clarity — not volume or trend." },
  { title: "Personal Connection", body: "Every creation begins through conversation. Understanding lifestyle, identity, and purpose shapes each design direction — ensuring the garment serves the life it will enter." },
  { title: "Craftsmanship Roots", body: "The House partners with heritage mills and master artisans across Italy. Each fabric and garment reflects generations of expertise and refinement passed through dedicated hands." },
  { title: "Intentional Living", body: "Wardrobes reflect real life. Every piece supports movement, function, and personal expression shaped by authentic experience — not aspiration divorced from reality." },
  { title: "Beauty as Stability", body: "True beauty gains meaning through time. Garments evolve through wear, developing character, depth, and personal history that makes them more valuable with every year of careful use." },
];

const mills = [
  { name: "Vitale Barberis Canonico", location: "Biella, est. 1663", specialty: "Wool suiting and refined tailoring fabrics" },
  { name: "Loro Piana", location: "Piedmont, est. 1924", specialty: "Luxury fibres and fine wool innovation" },
  { name: "Ermenegildo Zegna", location: "Trivero, est. 1910", specialty: "Technical suiting and sustainable textiles" },
  { name: "Cerruti 1881", location: "Biella, est. 1881", specialty: "Elegant suiting with heritage craftsmanship" },
  { name: "Piacenza", location: "Lombardy, est. 1950", specialty: "Specialty outerwear and finishing fabrics" },
];

const continuity = [
  "Preservation of craftsmanship traditions",
  "Commitment to personal consultation",
  "Expansion guided by integrity and focus",
  "Deep respect for maker–client relationships",
];

const responsibility = [
  "Durability through craftsmanship",
  "Ethical sourcing through heritage mill partnerships",
  "Limited and intentional production cycles",
  "Education on garment care and longevity",
  "Restoration and repair services for all garments",
  "Reduction of unnecessary consumption through quality",
];

const givingBack = [
  "Artisan development programs",
  "Craft education initiatives",
  "Sustainable production support",
  "Community upliftment projects",
];

const coreValues = [
  { title: "Integrity", body: "Every action reflects alignment between promise and execution. What the House commits to, the House delivers." },
  { title: "Excellence", body: "Every detail reflects discipline and refinement — not as aspiration, but as the standard applied to each garment without exception." },
  { title: "Connection", body: "Relationships define the foundation of the House. Every client represents a long-term partnership, not a transaction." },
  { title: "Legacy", body: "Every piece contributes to a longer story of craft and culture — one that extends beyond the individual garment into the life it accompanies." },
];

const people = [
  "Franco Masoma — Founder & Creative Director",
  "Next Generation Leadership — Continuity & Stewardship",
  "Master Tailors, Naples — Hand Construction & Finishing",
  "Client Experience Team — Consultation & Relationship",
  "Heritage Mill Partners — Fabric & Material Curation",
];

const clientExperience = [
  "Deep personalization across every garment and interaction",
  "Long-term wardrobe relationships that evolve over years",
  "Elevated understanding of craft, fabric, and construction",
  "Meaningful consultation experience from first to final fitting",
];

const studioExperience = [
  { title: "Private Consultation Environment", body: "A studio designed for focused, unhurried conversation — without the noise of a retail floor or the pressure of a sales environment." },
  { title: "Fabric & Material Library", body: "Direct access to the House's curated fabric selection — sourced from heritage Italian mills and available to view, handle, and consider in context." },
  { title: "Design & Styling Discussion", body: "A guided conversation about silhouette, construction, occasion, and personal expression — shaping the direction of every garment before a single measurement is taken." },
  { title: "Direct Access to Franco Masoma", body: "Consultation with the founder himself — ensuring that the design philosophy of the House is present in every client conversation from the very beginning." },
];

const futureDirections = [
  "Preservation of tailoring traditions across all House output",
  "Mentorship of new artisans within the Naples atelier",
  "Strengthening of heritage mill partnerships through sustained collaboration",
  "Expansion guided by integrity rather than scale",
  "Continued commitment to personalized service as the House grows",
];

const productionTimeline = [
  { week: "Week 1", phase: "Consultation and fabric selection" },
  { week: "Week 2–3", phase: "Initial construction and first fitting" },
  { week: "Week 4–6", phase: "Tailoring refinement and adjustment" },
  { week: "Week 6–8", phase: "Final completion and delivery" },
];

export default function TheHouse() {
  return (
    <>
      <PageHero
        variant="dark"
        eyebrow="The House · Our Story"
        title="Rooted in Life. Built on Beauty."
        subtitle="From struggle to mastery. From survival to craft. A story shaped through resilience, transformation, and devotion to craft."
        image={HERO_IMG}
        imageAlt="The Franco Masoma atelier in Los Gatos"
        primaryCTA={{ label: "Discover the House", href: "#founder" }}
      />

      {/* 01 The Founder */}
      <Section bg="surface" id="founder">
        <SectionHeader
          eyebrow="01 · The Founder"
          title="Franco Masoma"
          description="Founder · Visionary · Craftsman. Franco's journey reflects transformation through resilience and purpose. Born during a period of conflict, his early life shaped a deep understanding of survival, discipline, and aspiration."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div
              className="cinematic-zoom"
              style={{
                aspectRatio: "4 / 5",
                border: "1px solid var(--color-outline-variant)",
                background: "var(--color-surface-container)",
              }}
            >
              <img src={FRANCO_IMG} alt="Franco Masoma" style={{ filter: "grayscale(0.4)" }} />
            </div>
          </div>
          <div className="md:col-span-7">
            <Eyebrow>Life Journey</Eyebrow>
            <div className="mt-6 space-y-8">
              {journey.map((j) => (
                <div key={j.n} className="grid grid-cols-[40px_1fr] gap-6">
                  <span
                    className="font-garamond italic"
                    style={{
                      fontSize: 24,
                      color: "var(--color-secondary)",
                      lineHeight: 1,
                    }}
                  >
                    {j.n}
                  </span>
                  <div>
                    <h4
                      className="text-headline-md mb-2"
                      style={{ color: "var(--color-on-surface)" }}
                    >
                      {j.title}
                    </h4>
                    <p
                      className="text-body-md"
                      style={{ color: "var(--color-on-surface-variant)" }}
                    >
                      {j.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16">
          <EditorialQuote
            quote="Beauty and opportunity gain meaning when shaped through effort, intention, and care."
            attribution="Franco Masoma"
          />
        </div>
      </Section>

      {/* 02 Building Legacy */}
      <Section bg="surface-low">
        <SectionHeader
          centered
          eyebrow="02 · Building Legacy"
          title="The Next Generation."
          description="Franco's family represents continuity, stewardship, and evolution of the House philosophy. Raised within a world of craftsmanship and intention, they carry forward a deep respect for quality, process, and human connection."
        />
        <div className="max-w-3xl mx-auto">
          <Eyebrow centered>Continuity Principles</Eyebrow>
          <ul
            className="text-body-md space-y-3 mt-6 text-center"
            style={{
              color: "var(--color-on-surface-variant)",
              listStyle: "none",
              padding: 0,
            }}
          >
            {continuity.map((c) => (
              <li key={c}>— {c}</li>
            ))}
          </ul>
          <div className="mt-12">
            <EditorialQuote
              quote="We protect the House by preserving what defines it. Every decision reflects its origin and its purpose."
              attribution="The House"
            />
          </div>
        </div>
      </Section>

      {/* 03 Our Philosophy */}
      <Section bg="surface">
        <SectionHeader
          centered
          eyebrow="03 · Our Philosophy"
          title="How We Build."
          description="Five principles govern every decision the House makes — from fabric selection through final delivery."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px" style={{ background: "var(--color-outline-variant)" }}>
          {philosophy.map((p, i) => (
            <div
              key={p.title}
              style={{ background: "var(--color-surface)", padding: 28 }}
            >
              <span
                className="text-label-micro block mb-3"
                style={{ color: "var(--color-secondary)" }}
              >
                0{i + 1}
              </span>
              <h4
                className="text-headline-md mb-3"
                style={{ color: "var(--color-on-surface)" }}
              >
                {p.title}
              </h4>
              <p
                className="text-body-md"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 04 Made in Italy */}
      <Section bg="surface-low">
        <SectionHeader
          eyebrow="04 · Made in Italy"
          title="The Mills of Northern Italy."
          description="Franco Masoma collaborates with heritage textile houses that define global standards in fabric excellence. These are not supplier relationships — they are partnerships built on shared values of quality, integrity, and the preservation of craft traditions."
        />
        <div
          className="overflow-hidden"
          style={{ border: "1px solid var(--color-outline-variant)" }}
        >
          <div
            className="grid grid-cols-3 text-label-sm"
            style={{
              background: "var(--color-surface-container-high)",
              padding: "16px 24px",
              color: "var(--color-on-surface)",
            }}
          >
            <span>Mill</span>
            <span>Location & Est.</span>
            <span>Speciality</span>
          </div>
          {mills.map((m, i) => (
            <div
              key={m.name}
              className="grid grid-cols-3 text-body-md"
              style={{
                background:
                  i % 2 === 0 ? "var(--color-surface)" : "var(--color-surface-container-low)",
                padding: "20px 24px",
                color: "var(--color-on-surface-variant)",
                borderTop: i === 0 ? "none" : "1px solid var(--color-outline-variant)",
              }}
            >
              <span style={{ color: "var(--color-on-surface)" }}>{m.name}</span>
              <span>{m.location}</span>
              <span>{m.specialty}</span>
            </div>
          ))}
        </div>
        <p
          className="text-body-md mt-8 italic max-w-3xl mx-auto text-center"
          style={{ color: "var(--color-on-surface-variant)" }}
        >
          Each fabric is selected through direct relationship, seasonal visits, and intentional pairing with client needs and garment purpose — never from a catalogue, always from context.
        </p>
      </Section>

      {/* 05 Naples */}
      <Section bg="surface">
        <SectionHeader
          eyebrow="05 · Hand-Tailored in Naples"
          title="Where Craft Becomes Clothing."
          description="Every custom garment is shaped in Naples by master artisans who represent centuries of tailoring tradition. The Neapolitan tradition is distinct — a commitment to soft construction, natural movement, and a garment that works with the body rather than imposing upon it."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <Eyebrow>The Philosophy of Construction</Eyebrow>
            <ul
              className="text-body-md space-y-3 mt-6"
              style={{
                color: "var(--color-on-surface-variant)",
                listStyle: "none",
                padding: 0,
              }}
            >
              <li>— Soft natural shoulder construction</li>
              <li>— Fluid and elegant drape</li>
              <li>— Lightweight structure throughout</li>
              <li>— Comfort-driven tailoring philosophy</li>
            </ul>
          </div>
          <div>
            <Eyebrow>From Consultation to Delivery</Eyebrow>
            <ul
              className="text-body-md space-y-3 mt-6"
              style={{
                color: "var(--color-on-surface-variant)",
                listStyle: "none",
                padding: 0,
              }}
            >
              <li>— Consultation and design direction</li>
              <li>— Precise measurement and body mapping</li>
              <li>— Initial garment structure creation</li>
              <li>— First fitting and refinement</li>
              <li>— Hand tailoring and finishing</li>
              <li>— Final shaping and delivery</li>
            </ul>
          </div>
        </div>
        <div className="mt-16">
          <Eyebrow centered>Production Timeline</Eyebrow>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px mt-6"
            style={{ background: "var(--color-outline-variant)" }}
          >
            {productionTimeline.map((t) => (
              <div
                key={t.week}
                style={{ background: "var(--color-surface)", padding: 28 }}
              >
                <p
                  className="text-label-sm mb-3"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {t.week}
                </p>
                <p
                  className="text-body-md"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  {t.phase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 06 Responsibility */}
      <Section bg="surface-container">
        <SectionHeader
          centered
          eyebrow="06 · Responsibility"
          title="Quality as Sustainability."
          description="Longevity defines responsibility. Every garment is designed to extend life cycles, reduce consumption, and preserve resources — because the most sustainable garment is the one that never needs replacing."
        />
        <div className="max-w-3xl mx-auto">
          <Eyebrow centered>Our Commitments</Eyebrow>
          <ul
            className="text-body-md space-y-3 mt-6"
            style={{
              color: "var(--color-on-surface-variant)",
              listStyle: "none",
              padding: 0,
            }}
          >
            {responsibility.map((r) => (
              <li key={r}>— {r}</li>
            ))}
          </ul>
        </div>
        <div className="mt-16">
          <EditorialQuote
            quote="One enduring garment replaces repeated consumption cycles, creating meaningful environmental and cultural impact."
            attribution="The House"
          />
        </div>
      </Section>

      {/* 07 Giving Back */}
      <Section bg="surface">
        <SectionHeader
          eyebrow="07 · Giving Back"
          title="Opportunity Shared."
          description="The House supports initiatives focused on craftsmanship education, community development, and opportunity creation — reflecting the belief that the journey Franco Masoma took should be accessible to those who follow."
        />
        <Eyebrow>Focus Areas</Eyebrow>
        <ul
          className="text-body-md space-y-3 mt-6"
          style={{
            color: "var(--color-on-surface-variant)",
            listStyle: "none",
            padding: 0,
          }}
        >
          {givingBack.map((g) => (
            <li key={g}>— {g}</li>
          ))}
        </ul>
        <p
          className="text-body-md italic mt-8"
          style={{ color: "var(--color-on-surface-variant)", maxWidth: 720 }}
        >
          Every creation contributes to a broader cycle of opportunity, education, and continuity — ensuring the House remains connected to the community and the craft traditions it depends on.
        </p>
      </Section>

      {/* 08 Core Values */}
      <Section bg="surface-low">
        <SectionHeader
          centered
          eyebrow="08 · Core Values"
          title="The House Values."
          description="Four principles that govern every decision, every relationship, and every garment the House produces."
        />
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: "var(--color-outline-variant)" }}
        >
          {coreValues.map((v, i) => (
            <div key={v.title} style={{ background: "var(--color-surface)", padding: 32 }}>
              <span
                className="text-label-micro block mb-3"
                style={{ color: "var(--color-secondary)" }}
              >
                0{i + 1}
              </span>
              <h4
                className="text-headline-md mb-3"
                style={{ color: "var(--color-on-surface)" }}
              >
                {v.title}
              </h4>
              <p
                className="text-body-md"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 09 The People */}
      <Section bg="surface">
        <SectionHeader
          eyebrow="09 · The People"
          title="The People Behind the Craft."
          description="Each individual — from the master tailor in Naples to the client experience team in Los Gatos — contributes to a single, coherent philosophy of craftsmanship and service."
        />
        <ul
          className="text-body-md space-y-3"
          style={{
            color: "var(--color-on-surface-variant)",
            listStyle: "none",
            padding: 0,
          }}
        >
          {people.map((p) => (
            <li key={p}>— {p}</li>
          ))}
        </ul>
      </Section>

      {/* 10 Client Experience */}
      <Section bg="surface-low">
        <SectionHeader
          eyebrow="10 · Client Experience"
          title="What Clients Experience."
          description="Clients describe the House as a transformation in how clothing is understood and experienced — a shift from transactional purchasing to the development of a long-term wardrobe relationship."
        />
        <ul
          className="text-body-md space-y-3"
          style={{
            color: "var(--color-on-surface-variant)",
            listStyle: "none",
            padding: 0,
          }}
        >
          {clientExperience.map((c) => (
            <li key={c}>— {c}</li>
          ))}
        </ul>
      </Section>

      {/* 11 Los Gatos Studio */}
      <Section bg="surface">
        <SectionHeader
          centered
          eyebrow="11 · Los Gatos Studio"
          title="By Appointment Only."
          description="The Los Gatos studio reflects focus, clarity, and intentional design. It is a space shaped entirely around the consultation — quiet enough to listen, considered enough to inspire, and private enough to allow genuine conversation about the wardrobe a client wants to build."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studioExperience.map((s) => (
            <article
              key={s.title}
              style={{
                background: "var(--color-surface-container-low)",
                border: "1px solid var(--color-outline-variant)",
                padding: 32,
              }}
            >
              <h4
                className="text-headline-md mb-3"
                style={{ color: "var(--color-on-surface)" }}
              >
                {s.title}
              </h4>
              <p
                className="text-body-md"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* 12 The Future */}
      <Section bg="surface-low">
        <SectionHeader
          eyebrow="12 · The Future"
          title="Looking Forward."
          description="The House continues to evolve while preserving its foundation in craftsmanship, relationship, and intention. Growth is not measured in volume or geography — it is measured in the depth and integrity of every client relationship and every garment produced."
        />
        <ul
          className="text-body-md space-y-3"
          style={{
            color: "var(--color-on-surface-variant)",
            listStyle: "none",
            padding: 0,
          }}
        >
          {futureDirections.map((f) => (
            <li key={f}>— {f}</li>
          ))}
        </ul>
      </Section>

      <ReserveCTA
        eyebrow="Join the House"
        title="Join the Franco Masoma Story."
        description="Each garment represents craft, identity, and intention. Your story and the story of the House begin with a single conversation."
      />
    </>
  );
}
