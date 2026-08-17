import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { PageTitle, YellowStripeWrapper } from "@/components/PortfolioLayout";
import { PenTool, Smartphone, Palette } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kiran Srivastava" },
      { name: "description", content: "About Kiran Srivastava — graphic designer and creative visualizer based in India." },
    ],
  }),
  component: About,
});

const skills = [
  {
    icon: PenTool,
    title: "Graphic Design",
    text: "Social media posts, banners, branding creatives, posters, brochures, and campaign visuals designed with creativity and precision.",
  },
  {
    icon: Smartphone,
    title: "Social Media Creative",
    text: "Eye-catching Instagram/Facebook creatives, ad designs, reels thumbnails, and promotional graphics that boost engagement.",
  },
  {
    icon: Palette,
    title: "Branding Design",
    text: "Logo concepts, brand identity materials, packaging designs, and visual content that help brands stand out.",
  },
];

const facts = [
  { v: "5+ Years", k: "Design Experience" },
  { v: "200+", k: "Creatives Designed" },
  { v: "20+", k: "Brand Campaigns" },
  { v: "100+", k: "Social Media Posts Created" },
  { v: "25+", k: "Clients Handled" },
  { v: "10+", k: "Ad Campaign Designs" },
];

/**
 * A lightweight counter component that animates from 0 to target
 */
function AnimatedNumber({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  
  // Extract number and non-numeric parts (e.g., "200+" -> number: 200, suffix: "+")
  const numericMatch = value.match(/\d+/);
  const target = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/, "");

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Power 4 Out easing function for a premium "slow down" at the end
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      const currentCount = Math.floor(easeProgress * target);
      setDisplayValue(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target]);

  return (
    <>
      {displayValue}
      {suffix}
    </>
  );
}

function About() {
  return (
    <YellowStripeWrapper>
      <PageTitle>ABOUT ME</PageTitle>
      <p className="mt-6 text-lg">
        I'm <strong>Kiran Srivastava,</strong> <span className="text-muted-foreground">Graphic Designer / Creative Visualizer</span>
      </p>
      <p className="mt-3 text-sm text-muted-foreground max-w-3xl leading-relaxed">
        Creative and detail-oriented Graphic Designer with experience in creating impactful visuals
        for social media, branding, advertisements, and marketing campaigns. Skilled in turning
        ideas into attractive designs that connect with audiences and strengthen brand identity.
        Passionate about creating clean, modern, and engaging creatives for digital and print
        platforms.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-12">
        <div>
          <h2 className="font-display text-2xl mb-5 text-ink">What I Do?</h2>
          <div className="space-y-5">
            {skills.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-yellow text-yellow-foreground">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-semibold tracking-wider uppercase text-sm">{title}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl mb-5">Fun Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {facts.map((f, i) => (
              <div
                key={f.k}
                className={`aspect-square rounded-full grid place-items-center text-center p-4 shadow-sm transition-transform hover:scale-105 duration-300 ${
                  i % 2 === 0 ? "bg-yellow text-yellow-foreground" : "bg-ink text-yellow"
                }`}
              >
                <div>
                  <p className="font-display text-2xl sm:text-3xl leading-none">
                    <AnimatedNumber value={f.v} />
                  </p>
                  <p className="text-[8px] sm:text-[9px] uppercase tracking-wider mt-1">{f.k}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </YellowStripeWrapper>
  );
}
