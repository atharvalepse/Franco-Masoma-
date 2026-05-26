import { PageHero, ProductCard, ReserveCTA, Section, SectionHeader } from "@/components/Layout";

export const metadata = { title: "Ready-to-Wear & Custom | Franco Masoma" };

const segments = [
  {
    title: "Airport Pants",
    body: "Travel-ready trousers designed for comfort, structure, and refined mobility during transit.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQTsa9Z1netxpyt-N4y5nZGLbcb2RXd4brnLUm184Ipc12QBs0XsdIUU6CQk4G2ntsZiDYONGbLGOPEgzgLe5lHkJi9RA6zgdYcwPq7HqVH97YG2C1vnkYSG2PXBZ84RkFoYyTFZMovovAc1rC4mz9miv1H0aWADMK63NFJEquFVtmAI3IJQqNiRJCsTf2u5NGPSZ07Vp2lNkAEtPZcG_DTKs2EoOJagzntaWYIrhniMoh9vBAQDT00Jv9wCqNWY6Sl9ZrjoBlrmo",
    href: "/airport-pants",
  },
  {
    title: "Outerwear",
    body: "The Cashmere Custom Overcoat and seasonal blazers designed to serve as the defining outer statement.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIB9TON4x3wdEnWvUPxPthNt9m2LWv3aOKi8BVOxTii7Ov1seam6h0VFAhqL7Ahb2gftR1Qz8UmSjyyBKKzYUyr_gV9Qw5WiHVdSk9-YLl1DHGGu0Pg9T0lhvX2JQqaM-ila33P5YfbdFimzxw3La2bKIIhGke4-EaZooVtUg9wfsknMsCugod3Cg5Qx7xx1mYhMOHKju8xJDjpxutc3kRnesjifedv06O7fT6tVjFgDWb8L1IiFfY8sf9H6IwSBykvXKbOLvJ7ZPr",
    href: "/outerwear",
  },
  {
    title: "Pocket Square",
    body: "Pure silk, hand-rolled pocket squares — the final touch of color, fold, and texture for every tailored jacket.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOSf_ICi9PaNAzllCmUCgC9fkQ5EY60ofaIOATgPeSpoPCqqUUWPoAqEZfEYsbk1-e02YAfoCLhXO2vmvkPLgBXaoHezHNH7C__A9KdnLUwyk9ZTY0SDuBKdsc6tuybBJ15_0KUnz2TInQjcMVPRKZrTOKJHNFTboBvD2JNcxWNgJ4vz4RvclDsz_vD5w9CZzxThIPs7s43Ms6D_RaQxSCbF4RmJ7OGfJbkJnIYHMqfDfvNRUwRrYxrsuKoi8cqw_cj_1JPaiCD0I",
    href: "/pocket-square",
  },
  {
    title: "Shirt",
    body: "Foundational shirts across RTW, CTM, casual, and shirt-jacket formats. The garment closest to the body.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBGQ5e3lf63h7KLrJzUhSLR8C0NQrvj7OdFypH1RihbJKwAvzlp0v1yaxsmIQIetrF6ZSwekmndppb3dzUlMFBTWqP9jhylfPaL-IFhV7NKfKUEV512qwpv56QfTg5v0jnkZShpIxQ4t8oLbTaX2nA5yj8dN2Qdu4sRS0nH3v8qHY8IgPmEy5uLdlGVcvnhzw2htmzIjhTZ0WaCU0LYMIhBcvhbYO1b_dE224fzVh6FfqUKmzXJjsywWtwlcmI6GS3jleLMU-ec8c",
    href: "/shirt",
  },
  {
    title: "Shorts",
    body: "Tailored shorts designed for elevated resort settings and warm-weather ease without sacrificing structure.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ-ljxyR3itS2_9kyDZJtQpc11wvqTiWel-VqAq47Gx4IuNi45ZlqqYc6L2Z61VQw77WimFSxYJsgOeL1OkSOEnhyiDSxtGJtUKG4HtrjXVh2ZzW4C-n_EbDTynffN9oYVJt1jmoNqxL-quLx9-dggwTdKl-Htb5hvEC1H9iVJnY1RQHdQTO0JoI46L2O0mVhzYAKXCc1G4nZIUrXl-n9NLgDslOyM-ztRsCs-jtzsDniEWxUW8w7Umb-eNQBHvW82uz-Ra6UC_HQ",
    href: "/shorts",
  },
  {
    title: "Sportscoat",
    body: "CTM Sportscoat for versatile tailoring; Safari Suede for elevated casual presence.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfPR5iNGOr4oF08DzcgXo551crq8O80szhnFnukLT1lKp5U5yrABIkKHSlhRkLRxe7jGFZ2WD1DE4KSEf5vFvI6tMwva0e5gsdyBVspCpK8grT7G2gLiqpi9hB1X3wIfTEgiJOfnUbRqbTiJBaJTG5NQ-fb0xetzc_qnna3FZBCAxGuiQpKU2yf5MSlXaO4uWecxXrq9KZAgl-lx6nXfBuV7XWVE1U84vx8o4lDLYqztJduFwBKu-v8SfWD2i0tvF5LfKpWu-wxR4",
    href: "/sportscoat",
  },
  {
    title: "Suit",
    body: "Four tiers of suit construction — from RTW excellence through complete bespoke. Authority expressed through structure.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHyxPQz9OF44pnFgClh6Aczd1JhR06HeqjBIiT89WQRlNKb_NRkixtfw90jdIE_0mCT5aPo4wwKLwyHERqKAikJK3Rz-Q18k-LJW0Px5712-8o6mOMNrjU9sTFtF3zmhT-gcd5Mv0UFTRQHln3ufyJwSiSu48TMKwKRaS6ONR70d9cS0eQlsEX78ODJTVbKoeE31gTUaqMWPOGmvGOFVqfOLneSmthxt_ZBm9TazBcR_AIyRDwKwcGXpQp0wRhMJTcc8Zmx5kCyF4",
    href: "/suit",
  },
  {
    title: "Sweater",
    body: "The Cotton Sweater. One piece — built to anchor every casual context across all seasons.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABboj8nAYXyubEs7PH8xOQdNwVrkTDy31_zjow96JdHGKdE5EH-NQOrIpd84BrIx5Svlk4DHy4vwhnLZXe1WtZMbYGDtwqZylBKFnxEvhMCEEnrlZuP_4ycJ9GbhtTBcymTY6TfvATWlI-Sm48wIRsrlj4Owj-3z1lws6J3HCz_I-61CPp6niG3pcTTJvooswgmsiMNkvJZqXITRxiApwYxBIupkYF7snF0QPOO8xga9163Pe4O0jrw4a-wQGWEWhRFbDkfWzmV_k_",
    href: "/sweater",
  },
  {
    title: "Trousers",
    body: "CTM Trousers shaped from the body upward; shaped for proportion, posture, and daily presence.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnA8SpvjdhL_8bp8ugy1oImQMHHxFDnrqFEJZfmxdGgjFsNWramUhKv4KoAdad0Cc_Gl5WlOGFFs0d4GFkEzVytQKFRoeDctgtKzAm-69AJEyvKnDi2_MfQux2gp9tZhmeojo3T4aAO5iL9IZjH-KOhFZeMSF0cvV-OxaDIdUWhD6UnLGCe7h2_6CUMJtjtqNdhaL0qEWrFx6XtMArc-EU0Aht4-4280awHJl38QJuRkd7v6eYsg0A1M7gKIp8aG7NLi1tdUnToYw",
    href: "/trousers",
  },
  {
    title: "Vest",
    body: "RTW and CTM vests built for three-piece composition — structural, intentional, complete.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9vogoi5X3Y7l5qym-_kfVZKNRte4_bVKivRAGkqtzyoMzJZXcSNXTqaCChu0oxrdwJy41PbZ9_Hw44o7fmfnwVwp3hBp-yjPlq4NUCb9Rw9DUKXzJSrbC_GOnO4RG8vBN0Hel9Kq-vKKB6vV4cB10uh-tN1OgcB_6CSSBBn4E3XAKCk6-KROpstikJrQg8bbxn6ol6CNBjQnRSEul1zX4VG4DoDqkuBUKU11D1npC7TFhb5uF6sMxcO6T4HAstY1MBHM867dYWN2o",
    href: "/vest",
  },
];

export default function ReadyToWear() {
  return (
    <>
      <PageHero
        eyebrow="Ready-to-Wear & Custom Garments · Consultation-Led Experience"
        title="Refined Pieces. Designed Around You."
        subtitle="Foundational garments and custom creations shaped through personal consultation and aligned with your lifestyle, presence, and long-term wardrobe direction."
        primaryCTA={{ label: "Schedule Your Private Consultation", href: "#reserve" }}
      />

      <Section bg="surface" tight>
        <SectionHeader
          centered
          eyebrow="The Segments"
          title="One Wardrobe. Ten Disciplines."
          description="Each segment operates as an individual page within the Ready-to-Wear ecosystem. Every page maintains consultation-led refinement and integrates into a complete wardrobe strategy."
        />
      </Section>

      <Section bg="surface">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {segments.map((s) => (
            <ProductCard
              key={s.title}
              image={s.image}
              alt={s.title}
              eyebrow="Discipline"
              title={s.title}
              description={s.body}
              href={s.href}
              aspect="4/5"
            />
          ))}
        </div>
      </Section>

      <ReserveCTA
        eyebrow="Begin The Conversation"
        title="A Wardrobe Built Around You."
        description="Whether you are beginning with a single refined piece or building an architectural wardrobe across collections, the process begins with one private consultation."
      />
    </>
  );
}
