import { createFileRoute } from "@tanstack/react-router";
import { PageTitle, YellowStripeWrapper } from "@/components/PortfolioLayout";
import { Star } from "lucide-react";
import t1 from "@/assets/t-1.jpg";
import t2 from "@/assets/t-2.jpg";
import t3 from "@/assets/t-3.jpg";
import t4 from "@/assets/t-4.jpg";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Kiran Srivastava" },
      { name: "description", content: "What clients say about working with Kiran Srivastava." },
    ],
  }),
  component: Testimonials,
});

const reviews = [
  { name: "Oliver", role: "Captain at Salty Co.", img: t1, text: "Kiran turned our brand around in weeks. The attention to detail and creative vision is unreal." },
  { name: "Janny",  role: "Founder, Bloom Studio", img: t2, text: "An absolute pleasure to work with. Delivered above what we briefed, on time." },
  { name: "Luna",   role: "Creative Director", img: t3, text: "Her designs gave our campaign a soul. We'll book her again, no question." },
  { name: "Mariko", role: "Product Lead", img: t4, text: "Crystal clear communication and beautiful, thoughtful work. Highly recommended." },
];

function Testimonials() {
  return (
    <YellowStripeWrapper>
      <PageTitle>TESTIMONIALS</PageTitle>
      <div className="grid md:grid-cols-2 gap-5 mt-10">
        {reviews.map((r) => (
          <article key={r.name} className="relative bg-ink text-yellow p-5 pl-16 md:pl-20">
            <div className="absolute left-2 md:-left-3 top-5 h-16 w-16 rounded-full overflow-hidden border-4 border-yellow">
              <img src={r.img} alt={r.name} width={64} height={64} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="bg-yellow text-yellow-foreground inline-block px-3 py-0.5 text-xs font-semibold tracking-wider uppercase">
              {r.name}
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-70 mt-1">{r.role}</p>
            <p className="text-sm mt-3 leading-relaxed text-yellow/90">"{r.text}"</p>
            <div className="flex gap-0.5 mt-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} fill="currentColor" className="text-yellow" />
              ))}
            </div>
          </article>
        ))}
      </div>
    </YellowStripeWrapper>
  );
}
