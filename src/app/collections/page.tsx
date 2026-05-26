import { PageHero } from "@/components/Layout";
import CollectionsTabs from "@/components/collections/CollectionsTabs";

export const metadata = { title: "The Collection | Franco Masoma" };

export default function Collections() {
  return (
    <>
      <PageHero
        eyebrow="Franco Masoma Napoli"
        title="The Collection."
        subtitle="Custom clothing crafted around your life — how you work, travel, and move. Three lineup collections built for the moments that define a wardrobe, and nine garment disciplines built around your daily presence."
      />
      <CollectionsTabs />
    </>
  );
}
