import Link from "next/link";
import {
  Container,
  Eyebrow,
  ReserveCTA,
  Section,
  SectionHeader,
} from "@/components/Layout";
import ExperienceSlider from "@/components/ExperienceSlider";

const HERO_IMG =
  "/ready-to-wear/11.png";

const CRAFT_IMG =
  "/ready-to-wear/12.png";

const services = [
  {
    n: "01",
    title: "Bespoke Tailoring — Suits, Shirts, Outerwear",
    body: "Each garment is sculpted to your frame using techniques refined over generations. No shortcuts. No assembly lines. Just fabric, thread, and the judgment of master hands.",
  },
  {
    n: "02",
    title: "Wardrobe Consultation & Styling",
    body: "Most men own too many pieces and wear too few. We help you build a cohesive collection — ten garments that do the work of fifty, each chosen for how it serves your life.",
  },
  {
    n: "03",
    title: "Occasion-Specific Design — Wedding, Executive, Lifestyle",
    body: "The boardroom demands authority. The wedding demands reverence. The gala demands ease. We design for the moment, then ensure that moment lives in your memory every time you wear the piece again.",
  },
  {
    n: "04",
    title: "Long-Term Wardrobe Building",
    body: "Your body changes. Your career evolves. Your tastes mature. We remain your partner through all of it, adjusting, refining, and expanding what you own with purpose rather than impulse.",
  },
];

const experience = [
  {
    n: "I",
    title: "90-Minute Private Consultation",
    body: "Unhurried. Intentional. Held in a studio designed for focus, not foot traffic. We ask about your life, your ambitions, your frustrations with what you currently own. Only then do we reach for a tape measure.",
  },
  {
    n: "II",
    title: "Personal Style Discovery",
    body: "Silhouette, proportion, palette. We explore what “looking like yourself” actually means — not what fashion dictates, not what your peers expect. We define the visual language of your confidence.",
  },
  {
    n: "III",
    title: "Fabric & Design Selection",
    body: "Access to the world’s finest mills — from heritage houses in England to artisan weavers in Italy. Each swatch carries weight, texture, and history. We guide you through the library with patience until the right choice announces itself.",
  },
  {
    n: "IV",
    title: "Handcrafted Tailoring in Napoli",
    body: "Your measurements travel to master tailors in a city where bespoke clothing is not an industry — it is a birthright. Generations of knowledge live in their fingers. They construct garments that fit not just your body, but your bearing.",
  },
  {
    n: "V",
    title: "Ongoing Relationship",
    body: "The first suit is only the beginning. As your life shifts, we adjust. As your calendar fills, we anticipate. As your confidence grows, we refine. This is tailoring for the long arc, not the single occasion.",
  },
];

const clientProfiles = [
  {
    n: "I",
    title: "Executives & Professionals",
    body: "Men who understand that leadership is visual before it is verbal — and that a room tilts in your favor when your presence is settled.",
  },
  {
    n: "II",
    title: "Grooms & Wedding Parties",
    body: "Those building moments that will live in photographs for generations, who want to stand at the altar feeling like themselves — only more so.",
  },
  {
    n: "III",
    title: "Individuals Refining Identity",
    body: "Men in transition — new roles, new cities, new chapters — who want their exterior to match the evolution happening within.",
  },
  {
    n: "IV",
    title: "Clients Who Value Quality",
    body: "The discerning few who believe ten perfect garments, chosen with care, outweigh fifty forgettable ones bought in haste.",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── Hero ────────────────────────────────────────────────────────── */}
      <section
        className="fm-hero fm-hero--full"
        style={{ background: "var(--color-surface)" }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.12,
            pointerEvents: "none",
          }}
        >
          <img
            src={HERO_IMG}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <Container>
          <div className="text-center max-w-3xl mx-auto relative">
            <Eyebrow centered>Bespoke · Los Gatos, California</Eyebrow>
            <h1
              className="text-display-lg mt-2"
              style={{ color: "var(--color-on-surface)" }}
            >
              Crafted for the Man You Are Becoming.
            </h1>
            <p
              className="text-body-lg mt-6 mx-auto"
              style={{ color: "var(--color-on-surface-variant)", maxWidth: 620 }}
            >
              Bespoke tailoring is not about clothing. It is about identity, presence,
              and intention. The suit you wear to close the deal. The jacket that
              accompanies your first speech as a leader. The tuxedo that stands beside
              you as you say your vows. These are not garments. They are armor for the
              moments that define you.
            </p>
            <p
              className="text-body-md mt-4 italic mx-auto"
              style={{ color: "var(--color-on-surface-variant)", maxWidth: 540 }}
            >
              At Franco Masoma, we do not dress men. We craft presence for the life
              they are building.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a href="#reserve" className="fm-btn">
                Reserve Your Private Consultation
              </a>
              <Link href="#experience" className="fm-link">
                See The Experience
              </Link>
            </div>
          </div>
        </Container>

        <div
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2"
          style={{ bottom: 32 }}
        >
          <p
            className="text-label-micro text-center"
            style={{ color: "var(--color-on-surface-variant)", opacity: 0.45 }}
          >
            Scroll
          </p>
          <div
            style={{
              width: 1,
              height: 36,
              background: "rgba(68,71,72,0.35)",
              margin: "12px auto 0",
            }}
          />
        </div>
      </section>

      {/* ─── Positioning Statement ───────────────────────────────────────── */}
      <Section bg="surface" tight bordered>
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow centered>The Positioning</Eyebrow>
          <h2
            className="text-display-md mt-2"
            style={{ color: "var(--color-on-surface)" }}
          >
            This Is Not Retail. This Is a Relationship.
          </h2>
          <div
            className="space-y-5 mt-8 text-body-lg"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            <p>
              Franco Masoma is not a retail store. It is a private consultation
              experience where clothing is designed around your life, your
              ambitions, and your personal story.
            </p>
            <p>
              You will step into a quiet studio, pour a drink, and begin a
              conversation that lasts well beyond your first fitting.
            </p>
            <p>
              This is tailoring as a relationship — not a transaction. We learn your
              posture, your preferences, your discomforts. We discover how you move,
              how you stand when you are nervous, how you want to feel when you enter
              a room. Then we build clothing that honors all of it.
            </p>
            <p className="italic">
              Your wardrobe should work as hard as you do. It should earn trust before
              you speak. It should feel inevitable, not effortful.
            </p>
          </div>
        </div>
      </Section>

      {/* ─── What We Do ──────────────────────────────────────────────────── */}
      <Section bg="surface-low">
        <SectionHeader
          eyebrow="What We Do"
          title="Four Ways We Serve You."
          description="Each service is built around your life — not around inventory, trends, or convenience."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {services.map(({ n, title, body }) => (
            <article key={n}>
              <span
                className="text-label-sm block mb-3"
                style={{ color: "var(--color-secondary)" }}
              >
                {n}
              </span>
              <h3
                className="text-headline-md"
                style={{ color: "var(--color-on-surface)" }}
              >
                {title}
              </h3>
              <p
                className="text-body-md mt-3"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* ─── The Experience ──────────────────────────────────────────────── */}
      <Section bg="surface" id="experience">
        <SectionHeader
          eyebrow="The Experience"
          title="Every Engagement Begins with a Conversation."
          description="Not measurements. Not a catalogue. A genuine conversation about your life — before anything else."
        />
        <hr className="fm-rule mb-16" />
        <ExperienceSlider steps={experience} />
      </Section>

      {/* ─── Fabric journey split ────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: 600 }}>
        <div className="relative overflow-hidden cinematic-zoom">
          <img src={CRAFT_IMG} alt="A tailor inspecting fabric" />
        </div>
        <div
          className="flex items-center"
          style={{ background: "var(--color-surface-container-high)" }}
        >
          <div className="w-full max-w-[32rem] px-6 md:px-16 py-20 md:py-24">
            <Eyebrow>Made in Italy</Eyebrow>
            <h2
              className="text-headline-lg mt-2"
              style={{ color: "var(--color-on-surface)" }}
            >
              We travel to find your fabric.
            </h2>
            <p
              className="text-body-md mt-6"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              Franco selects every textile personally from the heritage mills of
              Northern Italy — Vitale Barberis Canonico, Loro Piana, Ermenegildo Zegna,
              Cerruti 1881, and Piacenza. Not from a catalogue. Not in bulk.
            </p>
            <p
              className="text-body-md italic mt-4"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              Each fabric is chosen imagining how it will live on a specific person —
              not how it will perform at scale.
            </p>
            <div className="mt-10">
              <Link href="/the-house" className="fm-btn">
                Discover The House
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Who It's For ────────────────────────────────────────────────── */}
      <Section bg="surface-container">
        <SectionHeader
          eyebrow="Who It's For"
          title="For Those Who Lead."
          description="The Franco Masoma experience is designed for men who understand that how you present yourself is a statement of intention."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientProfiles.map(({ n, title, body }) => (
            <article
              key={n}
              className="transition-colors duration-700"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-outline-variant)",
                padding: 36,
              }}
            >
              <span
                className="text-label-sm block mb-5"
                style={{ color: "var(--color-secondary)" }}
              >
                {n}
              </span>
              <h4
                className="text-headline-md mb-3"
                style={{ color: "var(--color-on-surface)" }}
              >
                {title}
              </h4>
              <p
                className="text-body-md"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* ─── Reserve CTA ─────────────────────────────────────────────────── */}
      <Section bg="surface-container-lowest" id="reserve">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow centered>Reserve Your Appointment</Eyebrow>
          <h2
            className="text-display-md mt-2"
            style={{ color: "var(--color-on-surface)" }}
          >
            Begin with a Conversation.
          </h2>
          <p
            className="text-body-lg mt-6 mx-auto"
            style={{ color: "var(--color-on-surface-variant)", maxWidth: 560 }}
          >
            No obligation. No sales floor. No pressure. Just ninety minutes to explore
            what comes next — and to discover what it feels like when your clothing
            finally tells the truth about who you are.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 mb-12 max-w-2xl mx-auto">
            {[
              { stat: "90", label: "Minute Consultation" },
              { stat: "Private", label: "Studio Experience" },
              { stat: "∞", label: "Ongoing Partnership" },
            ].map(({ stat, label }) => (
              <div
                key={label}
                style={{
                  borderTop: "1px solid var(--color-outline-variant)",
                  paddingTop: 20,
                }}
              >
                <div
                  className="font-garamond"
                  style={{
                    fontSize: 32,
                    lineHeight: 1.1,
                    color: "var(--color-on-surface)",
                  }}
                >
                  {stat}
                </div>
                <p
                  className="text-label-micro mt-2"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
          <a href="#" className="fm-btn">
            Reserve Your Consultation
          </a>
          <p
            className="text-label-micro mt-8"
            style={{ color: "var(--color-on-surface-variant)", opacity: 0.7 }}
          >
            francomasoma.com · Book online or contact the atelier directly.
          </p>
        </div>
      </Section>
    </>
  );
}
