"use client";

import { useState } from "react";
import CustomContent from "./CustomContent";
import ReadyToWearContent from "./ReadyToWearContent";
import AccessoriesContent from "./AccessoriesContent";

export default function CollectionsTabs() {
  const [activeTab, setActiveTab] = useState<"custom" | "ready-to-wear" | "accessories">("custom");

  return (
    <>
      {/* Collections Sub-Navigation */}
      <div className="w-full border-b sticky top-20 z-40" style={{ backgroundColor: "rgba(251, 249, 245, 0.98)", borderColor: "rgba(196, 199, 199, 0.35)" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex gap-8 md:gap-12 overflow-x-auto no-scrollbar">
          <button 
            onClick={() => setActiveTab("custom")}
            className="py-4 text-[11px] tracking-[0.15em] font-medium whitespace-nowrap transition-colors uppercase" 
            style={{ color: activeTab === "custom" ? "#000" : "#888", borderBottom: activeTab === "custom" ? "2px solid #000" : "2px solid transparent", cursor: "pointer" }}
          >
            Custom
          </button>
          <button 
            onClick={() => setActiveTab("ready-to-wear")}
            className="py-4 text-[11px] tracking-[0.15em] font-medium whitespace-nowrap transition-colors uppercase" 
            style={{ color: activeTab === "ready-to-wear" ? "#000" : "#888", borderBottom: activeTab === "ready-to-wear" ? "2px solid #000" : "2px solid transparent", cursor: "pointer" }}
          >
            Ready-To-Wear
          </button>
          <button 
            onClick={() => setActiveTab("accessories")}
            className="py-4 text-[11px] tracking-[0.15em] font-medium whitespace-nowrap transition-colors uppercase" 
            style={{ color: activeTab === "accessories" ? "#000" : "#888", borderBottom: activeTab === "accessories" ? "2px solid #000" : "2px solid transparent", cursor: "pointer" }}
          >
            Accessories
          </button>
        </div>
      </div>

      <div className="relative">
        {activeTab === "custom" && <CustomContent />}
        {activeTab === "ready-to-wear" && <ReadyToWearContent />}
        {activeTab === "accessories" && <AccessoriesContent />}
      </div>
    </>
  );
}
