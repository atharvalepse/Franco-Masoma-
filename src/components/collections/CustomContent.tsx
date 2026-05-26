import { ProductCard, ReserveCTA, Section, SectionHeader } from "@/components/Layout";

const lineups = [
  {
    title: "Executive Collection",
    eyebrow: "For Leadership",
    body: "Precision tailoring for those who shape direction, define presence, and command every room they enter. Three garment categories — Executive Suits, Power Shirts, Formal Outerwear.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLAKrOn7jN9kV1cljtDJrJS9FrkFFLj-QELJAkPGYlffZlHsjH6Xj0WoQ5NclGXAxeiqvpt9rF7SJDsJBjFmk-Shzc7-RFkCOVYVcnKkpXfGNz51vRuELOxDwcriGAzHcqd98mewhLrWTwEuHMtiSFL56qn_lH6LruFzBG2DrfYB5f1F3xoJO6hIsJmCDX1iOI5vF3_difGX1QnHOmLMuXkrrgHavK_4mB3fVnRWObnwQhLDy6-nZY_fssjwH2rpRltGfXSYt2dQc",
    href: "/collections/executive",
  },
  {
    title: "Wedding Collection",
    eyebrow: "For Life's Defining Moments",
    body: "Timeless tailoring for a ceremony worth remembering. Bespoke wedding suits, groom & groomsmen coordination, ceremony & reception styling.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuZapWciUyWGUiCxqd3u5r3ku0PtoQobD49bH106F1ZGDlu0RXJVsE7kOQXSMVjvrpb8GiSRk1DY2taRxnL2mi7okEtn-M9nNcgDNNUrWAci5hJQSJhgJbTSSWRwdc9WCedDdFE2M8XNLBa435tu2ObRP0KoISmYvSAQ_DntYcJUpURiOtzpDioulHcgsuj7_Au_yd2l6_mQKhlWmyL-Vf0eaPS4EL6-f3FGsR3CF6ztwZcyv-BZu8Z1DJWn83youG3dNlaSEqDHk",
    href: "/collections/wedding",
  },
  {
    title: "Resort Collection",
    eyebrow: "For Refined Ease and Travel",
    body: "Elegance that moves with you. Linen shirts, travel-ready trousers, lightweight jackets, and destination wardrobes built for movement and warm climates.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ-ljxyR3itS2_9kyDZJtQpc11wvqTiWel-VqAq47Gx4IuNi45ZlqqYc6L2Z61VQw77WimFSxYJsgOeL1OkSOEnhyiDSxtGJtUKG4HtrjXVh2ZzW4C-n_EbDTynffN9oYVJt1jmoNqxL-quLx9-dggwTdKl-Htb5hvEC1H9iVJnY1RQHdQTO0JoI46L2O0mVhzYAKXCc1G4nZIUrXl-n9NLgDslOyM-ztRsCs-jtzsDniEWxUW8w7Umb-eNQBHvW82uz-Ra6UC_HQ",
    href: "/collections/resort",
  },
];

const categories = [
  { title: "Suits", body: "Built around your body, your life.", href: "/suits", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLAKrOn7jN9kV1cljtDJrJS9FrkFFLj-QELJAkPGYlffZlHsjH6Xj0WoQ5NclGXAxeiqvpt9rF7SJDsJBjFmk-Shzc7-RFkCOVYVcnKkpXfGNz51vRuELOxDwcriGAzHcqd98mewhLrWTwEuHMtiSFL56qn_lH6LruFzBG2DrfYB5f1F3xoJO6hIsJmCDX1iOI5vF3_difGX1QnHOmLMuXkrrgHavK_4mB3fVnRWObnwQhLDy6-nZY_fssjwH2rpRltGfXSYt2dQc" },
  { title: "Shirts", body: "Every detail yours.", href: "/shirts", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMn7e5lEDqdNlzqrPnBiNFapimNSbxgrgEJCIYncFrJinJlYJ832ggk4c-taCzqIr155OT7ug5mycCzwy8WuwICxpVc9aQxGUCnPYBQ41YKK8plGXM5mcZdwRUNufuP6xUJMx_suGhG6Q3qEYRzBFdXPvdSsCuDX7BsUBOHqqDI8f46DfjSLlmAwhx1xUOzNPCC6ASDdlGhKgn7oPxu8ZIIwTOqCg9dfZ8yb4sTKTRjTZaASQ7aJziaA033TT3WoyOJwdqpBTirqg" },
  { title: "Sportcoats & Jackets", body: "From office to weekend.", href: "/sport-coats", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuZapWciUyWGUiCxqd3u5r3ku0PtoQobD49bH106F1ZGDlu0RXJVsE7kOQXSMVjvrpb8GiSRk1DY2taRxnL2mi7okEtn-M9nNcgDNNUrWAci5hJQSJhgJbTSSWRwdc9WCedDdFE2M8XNLBa435tu2ObRP0KoISmYvSAQ_DntYcJUpURiOtzpDioulHcgsuj7_Au_yd2l6_mQKhlWmyL-Vf0eaPS4EL6-f3FGsR3CF6ztwZcyv-BZu8Z1DJWn83youG3dNlaSEqDHk" },
  { title: "Trousers & Pants", body: "Cut precisely for you.", href: "/trousers", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgJzQykpPSugAYptEkD_BJ7fMhS2uT6PLoChjx-vG5AiJd8rNzLA0FSUPCEaPOUIhGW6KAiE4P4S9cpfA9h79FWCFxxiqHfHvaLC_DGRR9aT-KRGEEP3x02TD7er-t2XqBKECe6ZgD3e_zLR4lGNK7fLHavmMvIdyhOuOq7_464MRpdSLdAx0zhZD9NHw354kOeWru916n8Jg5i130QHuslA7iVawcMIcuFLEHWgMViPB8Qml1DtxpR2WPRSnR2D26G0XVjr5Q2Ps" },
  { title: "Outerwear", body: "Architecture for the body.", href: "/overcoats", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfn3lxud2noBxQHgPNuvqeB5enp1qqf1wE1u9Kqia_8K35mwnGIkr96qc8duLlk_9UJOzaauCiJ-yJNCLCpOI9iLRaYIbvYEGihikwS5u5QgygT6AYVTU-HfRhHfTUPJ0PL5Aykp8aLFQEACu92eauMXR3yOj_J0BiRAcmnWaoPWpfGjjFhkK9bLUFt1_Zu2bTGuAF7SCKoacmxRMIfi50meHCvRBGqKOckBl6T07ZQ7dA4ziHcEY7JUMDz6-9b8OpN2X70qhXWxw" },
  { title: "Vests & Layering", body: "The layer that signals deliberation.", href: "/vests", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9vogoi5X3Y7l5qym-_kfVZKNRte4_bVKivRAGkqtzyoMzJZXcSNXTqaCChu0oxrdwJy41PbZ9_Hw44o7fmfnwVwp3hBp-yjPlq4NUCb9Rw9DUKXzJSrbC_GOnO4RG8vBN0Hel9Kq-vKKB6vV4cB10uh-tN1OgcB_6CSSBBn4E3XAKCk6-KROpstikJrQg8bbxn6ol6CNBjQnRSEul1zX4VG4DoDqkuBUKU11D1npC7TFhb5uF6sMxcO6T4HAstY1MBHM867dYWN2o" },
  { title: "Casual & Knitwear", body: "Intention expressed with ease.", href: "/casual", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABboj8nAYXyubEs7PH8xOQdNwVrkTDy31_zjow96JdHGKdE5EH-NQOrIpd84BrIx5Svlk4DHy4vwhnLZXe1WtZMbYGDtwqZylBKFnxEvhMCEEnrlZuP_4ycJ9GbhtTBcymTY6TfvATWlI-Sm48wIRsrlj4Owj-3z1lws6J3HCz_I-61CPp6niG3pcTTJvooswgmsiMNkvJZqXITRxiApwYxBIupkYF7snF0QPOO8xga9163Pe4O0jrw4a-wQGWEWhRFbDkfWzmV_k_" },
  { title: "Suede & Leather Jackets", body: "Including the Safari Suede.", href: "/suede-jackets", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqo31iKZhB0w9zcxqcQ5OPlb87UYwUSWHx1o0Goz6bF-ej3mWLyyV9Zc3HeqEHa8PqiA5D5-jd7LH-IqR3tQkgcjsmCQUObS29CUwd7DErTGcxgvqqGkn6HsjY59PU24s7ZP1rlwPOGxycU_ABg8NKKp0VtuTyT5kXy1VHCUsCwOiolHbVFv8vKrMjZcMp89EXFz4pDtZPPmMK6zfFvpGjRYVpxjPXL5cNZo5-mCDm4JD25EzGcwvHcMcNs8kMuhzYyGVERjBZctc" },
  { title: "Accessories", body: "Eight categories, one system.", href: "/accessories", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOSf_ICi9PaNAzllCmUCgC9fkQ5EY60ofaIOATgPeSpoPCqqUUWPoAqEZfEYsbk1-e02YAfoCLhXO2vmvkPLgBXaoHezHNH7C__A9KdnLUwyk9ZTY0SDuBKdsc6tuybBJ15_0KUnz2TInQjcMVPRKZrTOKJHNFTboBvD2JNcxWNgJ4vz4RvclDsz_vD5w9CZzxThIPs7s43Ms6D_RaQxSCbF4RmJ7OGfJbkJnIYHMqfDfvNRUwRrYxrsuKoi8cqw_cj_1JPaiCD0I" },
];

export default function CustomContent() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both">
      {/* Lineup Collections */}
      <Section bg="surface">
        <SectionHeader
          eyebrow="Lineup Collections"
          title="Three Worlds. One Standard."
          description="Each lineup is built around a specific dimension of life — leadership, ceremony, and refined ease — drawing from the full atelier to deliver a coherent wardrobe for the moment it serves."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {lineups.map((l) => (
            <ProductCard
              key={l.title}
              image={l.image}
              alt={l.title}
              eyebrow={l.eyebrow}
              title={l.title}
              description={l.body}
              href={l.href}
              aspect="4/5"
            />
          ))}
        </div>
      </Section>

      {/* Custom categories */}
      <Section bg="surface-low">
        <SectionHeader
          eyebrow="Custom Clothing"
          title="Made to Measure. Made for You."
          description="Every custom garment begins with a private 90-minute consultation. Franco designs each piece around your life."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {categories.map((c) => (
            <ProductCard
              key={c.title}
              image={c.image}
              alt={c.title}
              eyebrow="Custom"
              title={c.title}
              description={c.body}
              href={c.href}
              aspect="4/5"
            />
          ))}
        </div>
      </Section>

      <ReserveCTA
        eyebrow="Begin Your Journey"
        title="Experience the Franco Masoma standard."
        description="Alterations are available exclusively to existing Franco Masoma clients and Los Gatos locals, by appointment only."
      />
    </div>
  );
}
