import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageTitle, YellowStripeWrapper } from "@/components/PortfolioLayout";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Kiran Srivastava" },
      { name: "description", content: "Selected industry-specific design work by Kiran Srivastava, covering Real Estate, FMCG, Cafe, Gym, Education, and Government projects." },
    ],
  }),
  component: Portfolio,
});

type Cat = 
  | "All" 
  | "Real Estate" 
  | "FMCG Designs" 
  | "Cafe & Restaurants" 
  | "Gym & Fitness" 
  | "Education" 
  | "Government Projects";

const items: { src: string; title: string; cat: Exclude<Cat, "All"> }[] = [
  { src: w1, title: "Luxury Apartment Branding", cat: "Real Estate" },
  { src: w2, title: "Healthy Snack Packaging", cat: "FMCG Designs" },
  { src: w3, title: "Bistro Menu Design", cat: "Cafe & Restaurants" },
  { src: w4, title: "Fitness App Campaign", cat: "Gym & Fitness" },
  { src: w5, title: "University Prospectus", cat: "Education" },
  { src: w6, title: "Public Awareness Poster", cat: "Government Projects" },
];

function Portfolio() {
  const [filter, setFilter] = useState<Cat>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered = filter === "All" ? items : items.filter((i) => i.cat === filter);
  const cats: Cat[] = [
    "All", 
    "Real Estate", 
    "FMCG Designs", 
    "Cafe & Restaurants", 
    "Gym & Fitness", 
    "Education", 
    "Government Projects"
  ];

  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filtered.length);
    }
  };

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filtered.length) % filtered.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <YellowStripeWrapper>
      <PageTitle>PORTFOLIO</PageTitle>
      
      <div className="mt-8 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-1.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase transition
              ${filter === c ? "bg-yellow text-yellow-foreground" : "bg-transparent text-ink hover:bg-ink/5"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {filtered.map((it, idx) => (
          <figure 
            key={it.title} 
            onClick={() => setSelectedIndex(idx)}
            className="group relative overflow-hidden bg-ink shadow-md cursor-pointer"
          >
            <img
              src={it.src}
              alt={it.title}
              width={768}
              height={576}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-yellow text-yellow-foreground px-4 py-2 text-[10px] font-bold tracking-widest uppercase">View Creative</span>
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform bg-yellow text-yellow-foreground px-3 py-2 text-[11px] uppercase tracking-[0.2em] font-semibold">
              {it.title}
            </figcaption>
          </figure>
        ))}
      </div>

      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedIndex(null)}
        >
          <button 
            className="absolute top-6 right-6 text-yellow hover:text-white transition-colors z-[60]"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={32} />
          </button>

          <button 
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-yellow/10 hover:bg-yellow text-yellow hover:text-yellow-foreground p-3 rounded-full transition-all z-[60]"
            onClick={showPrev}
          >
            <ChevronLeft size={32} />
          </button>

          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
            <img 
              src={filtered[selectedIndex].src} 
              alt={filtered[selectedIndex].title}
              className="max-h-[80vh] w-auto object-contain shadow-2xl animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-6 text-center text-white" onClick={(e) => e.stopPropagation()}>
              <h3 className="font-display text-3xl tracking-wider text-yellow">{filtered[selectedIndex].title}</h3>
              <p className="text-[10px] uppercase tracking-[0.3em] mt-2 opacity-60">{filtered[selectedIndex].cat}</p>
            </div>
          </div>

          <button 
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-yellow/10 hover:bg-yellow text-yellow hover:text-yellow-foreground p-3 rounded-full transition-all z-[60]"
            onClick={showNext}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </YellowStripeWrapper>
  );
}
