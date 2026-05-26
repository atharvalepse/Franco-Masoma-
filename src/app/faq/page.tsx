"use client";

import { Container, Eyebrow, PageHero, ReserveCTA } from "@/components/Layout";

type FAQItem = { q: string; a: string | React.ReactNode };
type FAQSection = { n: string; category: string; items: FAQItem[] };

const sections: FAQSection[] = [
  {
    n: "01",
    category: "About Franco Masoma",
    items: [
      {
        q: "What is Franco Masoma?",
        a: "Franco Masoma is a bespoke tailoring and curated ready-to-wear house based in Los Gatos, California. Each garment reflects personal consultation, Italian craftsmanship, and hand-tailored construction completed in Naples. The House operates through heritage mills across Northern Italy, selected directly by Franco for quality and integrity.",
      },
      {
        q: "Why choose Franco Masoma over mass-produced clothing?",
        a: (
          <>
            Franco Masoma delivers garments defined by longevity, precision, and personal alignment.
            <ul style={{ marginTop: 12, paddingLeft: 0, listStyle: "none" }}>
              <li>— Hand-tailored construction by master artisans</li>
              <li>— Extended garment lifespan across decades</li>
              <li>— Direct consultation shaping every design</li>
              <li>— Fabric sourcing from heritage Italian mills</li>
              <li>— Reduced cost-per-wear over time</li>
              <li>— Wardrobes built through intention and clarity</li>
            </ul>
          </>
        ),
      },
      {
        q: "Is Franco Masoma a luxury brand?",
        a: "Franco Masoma represents craftsmanship-led value. Each piece reflects artisanal construction, premium materials, and long-term wearability. Value is measured through longevity, not seasonality.",
      },
      {
        q: "Who is Franco Masoma?",
        a: "Franco Masoma is the founder and craftsman behind the House. His journey from early hardship to mastery shaped a philosophy centered on discipline, craftsmanship, and personal connection. Every garment reflects this foundation.",
      },
      {
        q: "Is Franco Masoma sustainable?",
        a: (
          <>
            Sustainability is defined through longevity and reduced consumption.
            <ul style={{ marginTop: 12, paddingLeft: 0, listStyle: "none" }}>
              <li>— Garments built for decades of wear</li>
              <li>— Ethical Italian mill partnerships</li>
              <li>— Limited, intentional production</li>
              <li>— Repair and restoration services</li>
              <li>— Natural and high-grade materials</li>
            </ul>
          </>
        ),
      },
      {
        q: "Do you work with public figures?",
        a: "Client relationships remain private and confidential. The House focuses on craft, relationship, and experience.",
      },
      {
        q: "What makes Franco Masoma different?",
        a: (
          <ul style={{ marginTop: 4, paddingLeft: 0, listStyle: "none" }}>
            <li>— Direct consultation with Franco</li>
            <li>— Italian mill relationships</li>
            <li>— Naples hand-tailoring</li>
            <li>— Limited client roster</li>
            <li>— Dual system of bespoke and ready-to-wear</li>
            <li>— Emphasis on longevity and personal identity</li>
          </ul>
        ),
      },
    ],
  },
  {
    n: "02",
    category: "Consultation Process",
    items: [
      {
        q: "How do I book a consultation?",
        a: (
          <>
            Consultations are scheduled through the website booking form. Confirmation is provided within 24 hours.
            <ul style={{ marginTop: 12, paddingLeft: 0, listStyle: "none" }}>
              <li>— In-person — Los Gatos, California</li>
              <li>— Video consultation — global clients</li>
            </ul>
          </>
        ),
      },
      { q: "Is there a consultation fee?", a: "Consultations are complimentary for clients exploring bespoke tailoring and wardrobe development." },
      { q: "How long is the consultation?", a: "Each consultation lasts 90 minutes and covers lifestyle, fit, fabric direction, and wardrobe planning." },
      { q: "What should I wear?", a: "Wear clothing that reflects your everyday style. The consultation is designed around your real wardrobe and lifestyle." },
      { q: "Can I bring someone?", a: "Guests are welcome. A maximum of two attendees ensures focus and clarity." },
      { q: "What if I am not in California?", a: "Video consultations provide full access to the Franco Masoma experience, including design planning and wardrobe guidance." },
      { q: "How far in advance should I book?", a: "The recommended booking window is 2 to 4 weeks. Wedding or event tailoring is best scheduled 8 to 10 weeks in advance." },
    ],
  },
  {
    n: "03",
    category: "Custom Ordering & Timeline",
    items: [
      { q: "How long does a custom piece take?", a: "Standard timeline ranges from 6 to 8 weeks across four phases — consultation and design, basting and fitting, hand tailoring in Naples, final refinement and delivery." },
      {
        q: "Can I request a rush order?",
        a: (
          <>
            Expedited timelines are available based on complexity and fabric selection.
            <ul style={{ marginTop: 12, paddingLeft: 0, listStyle: "none" }}>
              <li>— 4-week option available with adjusted pricing</li>
              <li>— 2-week express available in limited cases</li>
            </ul>
          </>
        ),
      },
      { q: "What if I need faster delivery?", a: "Ready-to-wear collections provide immediate availability with tailoring support." },
      { q: "Can I modify my order?", a: "Design adjustments are available during early construction phases before tailoring begins." },
      { q: "What happens if I cancel?", a: "Custom garments begin production after consultation. Adjustments are supported during early design stages." },
      {
        q: "What is included in a custom order?",
        a: (
          <ul style={{ marginTop: 4, paddingLeft: 0, listStyle: "none" }}>
            <li>— Personal consultation</li>
            <li>— Fabric selection from Italian mills</li>
            <li>— Hand tailoring in Naples</li>
            <li>— Fitting and refinement process</li>
            <li>— Final delivery</li>
            <li>— Lifetime care guidance</li>
          </ul>
        ),
      },
    ],
  },
  {
    n: "04",
    category: "Ready-to-Wear",
    items: [
      { q: "How is ready-to-wear different?", a: "Ready-to-wear offers structured sizing and immediate availability. Custom tailoring delivers full personalization through individual measurement and design." },
      { q: "What sizes are available?", a: "XS to XXL across most collections, with special ordering options available." },
      { q: "Can ready-to-wear be tailored?", a: "Yes. Alteration services refine fit, length, and structure." },
      { q: "How quickly is delivery?", a: "Standard delivery occurs within 3 to 5 business days for in-stock items." },
      { q: "Are returns available?", a: "Unworn items are eligible for return within 30 days of delivery." },
    ],
  },
  {
    n: "05",
    category: "Fit & Sizing",
    items: [
      { q: "How do I find my size?", a: "Size guides are provided for each product. Support is available for personalized assistance." },
      { q: "What if I am between sizes?", a: "Selecting the smaller size ensures optimal tailoring adjustment flexibility." },
      { q: "What if fit is incorrect?", a: "Alteration services, exchanges, or returns are available depending on product condition." },
      { q: "Do you offer custom sizing?", a: "Yes. Custom tailoring accommodates all body types and proportions." },
    ],
  },
  {
    n: "06",
    category: "Shipping & Delivery",
    items: [
      { q: "Do you ship internationally?", a: "Yes. The House ships globally to all destinations." },
      {
        q: "How long does delivery take?",
        a: (
          <ul style={{ marginTop: 4, paddingLeft: 0, listStyle: "none" }}>
            <li>— Domestic — 3 to 5 business days</li>
            <li>— International — 7 to 14 business days</li>
            <li>— Custom garments — Delivered upon completion</li>
          </ul>
        ),
      },
      { q: "Can I track my order?", a: "Tracking details are provided upon shipment confirmation." },
      { q: "What if my order is delayed?", a: "Updates are provided proactively. Most delays remain minimal and communicated in advance." },
    ],
  },
  {
    n: "07",
    category: "Returns & Refunds",
    items: [
      { q: "What is your return policy?", a: "Ready-to-wear items are eligible for return within 30 days if unworn. Custom garments are final due to individual production." },
      { q: "How do I return an item?", a: "A return request initiates a prepaid label and refund process upon inspection." },
      { q: "How long do refunds take?", a: "Refunds are processed within 5 to 7 business days after inspection." },
    ],
  },
  {
    n: "08",
    category: "Care & Maintenance",
    items: [
      { q: "How should garments be cared for?", a: "Each piece includes detailed care guidance based on fabric composition." },
      { q: "Can items be washed at home?", a: "Select garments support gentle home care. Most tailored pieces benefit from professional cleaning." },
      { q: "How should garments be stored?", a: "Proper storage includes breathable garment bags, structured hangers, and dry environments." },
      { q: "Do garments require maintenance?", a: "Routine care preserves structure, fabric integrity, and longevity across years of wear." },
      { q: "Do you offer repairs?", a: "Repair and restoration services are available for tailoring, reinforcement, and refinement." },
    ],
  },
  {
    n: "09",
    category: "Pricing",
    items: [
      { q: "Why is pricing premium?", a: "Pricing reflects hand-tailoring, Italian fabrics, artisan craftsmanship, and long-term durability." },
      { q: "Do you offer discounts?", a: "Pricing reflects consistent craftsmanship value across all clients." },
      {
        q: "What is the price range?",
        a: (
          <ul style={{ marginTop: 4, paddingLeft: 0, listStyle: "none" }}>
            <li>— Shirts: $180 – $450</li>
            <li>— Suits: $1,800 – $2,500</li>
            <li>— Jackets: $1,200 – $1,600</li>
            <li>— Accessories: $35 – $350</li>
          </ul>
        ),
      },
      {
        q: "What payment methods are available?",
        a: (
          <ul style={{ marginTop: 4, paddingLeft: 0, listStyle: "none" }}>
            <li>— Credit cards</li>
            <li>— PayPal</li>
            <li>— Financing options for eligible orders</li>
          </ul>
        ),
      },
    ],
  },
  {
    n: "10",
    category: "Customization",
    items: [
      { q: "What can be customized?", a: "Fabric, fit, silhouette, lining, buttons, detailing, and monogramming across custom garments." },
      { q: "Do you offer monogramming?", a: "Yes. Available across shirts, leather goods, and selected accessories." },
      { q: "Can I request special fabrics or colors?", a: "Yes. Sourcing from Italian mills allows access to a wide range of materials and color families." },
      { q: "Can I combine styles?", a: "Yes. The wardrobe system integrates across collections based on lifestyle and preference." },
    ],
  },
  {
    n: "11",
    category: "General",
    items: [
      { q: "How do I contact Franco Masoma?", a: "Contact is available via email, phone, or the website inquiry form." },
      { q: "Do you have a physical store?", a: "The Los Gatos studio operates by appointment only." },
      { q: "Can I shop internationally?", a: "Yes. Global clients are fully supported through consultation and shipping." },
      { q: "Do you offer gift cards?", a: "Gift certificates are available in digital and physical formats." },
      { q: "How do I stay updated?", a: "Email updates and private client communications provide access to new collections and releases." },
    ],
  },
  {
    n: "12",
    category: "Support",
    items: [
      {
        q: "Still need help?",
        a: (
          <>
            Support is available through multiple channels — each designed around your preference and urgency.
            <ul style={{ marginTop: 12, paddingLeft: 0, listStyle: "none" }}>
              <li>— Email assistance</li>
              <li>— Phone consultation</li>
              <li>— Private appointment booking</li>
            </ul>
          </>
        ),
      },
    ],
  },
];

export default function FAQ() {
  return (
    <>
      <PageHero
        variant="dark"
        eyebrow="Frequently Asked Questions"
        title="Everything You Need to Know."
        subtitle="Search and clarity guide every answer. Twelve sections covering the full Franco Masoma experience — from first consultation through long-term care."
      />

      <section className="fm-section">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col gap-16">
              {sections.map((section) => (
                <div key={section.n}>
                  <Eyebrow>{section.n} · {section.category}</Eyebrow>
                  <div
                    className="mt-6"
                    style={{ borderTop: "1px solid var(--color-outline-variant)" }}
                  >
                    {section.items.map((item) => (
                      <details
                        key={item.q}
                        style={{ borderBottom: "1px solid var(--color-outline-variant)" }}
                      >
                        <summary
                          className="flex justify-between items-center py-6 gap-6"
                          style={{ cursor: "pointer" }}
                        >
                          <span
                            className="text-headline-md"
                            style={{ color: "var(--color-on-surface)" }}
                          >
                            {item.q}
                          </span>
                          <span
                            className="material-symbols-outlined shrink-0"
                            style={{
                              color: "var(--color-on-surface-variant)",
                              fontSize: 22,
                            }}
                          >
                            add
                          </span>
                        </summary>
                        <div className="pb-7 pr-10">
                          <div
                            className="text-body-md"
                            style={{
                              color: "var(--color-on-surface-variant)",
                              maxWidth: 720,
                            }}
                          >
                            {item.a}
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ReserveCTA
        eyebrow="Still Have Questions?"
        title="Every question deserves a considered answer."
        description="The best way to understand what Franco Masoma can do for you is through a conversation. Reserve your private consultation. No obligation."
      />
    </>
  );
}
