import { createFileRoute, Link } from "@tanstack/react-router";
import kiran from "@/assets/pallavi.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kiran Srivastava — Graphic Designer & Creative Visualizer" },
      { name: "description", content: "Hi there! I'm Kiran Srivastava — a graphic designer & creative visualizer ready to handle your next project." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <section className="relative bg-card shadow-sm overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-2 md:w-3 bg-yellow" />
      <div className="absolute right-0 top-0 bottom-0 w-2 md:w-3 bg-yellow" />
      <div className="grid md:grid-cols-2 gap-8 items-center px-5 sm:px-8 md:px-16 py-10 md:py-20">
        <div className="max-w-md text-center md:text-left">
          <p className="font-display text-2xl sm:text-3xl md:text-4xl text-yellow tracking-wide">HI THERE!</p>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-tight md:leading-none mt-2 text-ink">
            I'M <span className="bg-yellow px-3 text-ink">KIRAN</span>
          </h1>
          <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-2">
            <div className="bg-yellow text-ink px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase">
              Graphic Designer / Creative Visualizer
            </div>
            <div className="bg-ink text-yellow px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase">
              Ready To Handle Your New Project
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground mx-auto md:mx-0">
            I craft impactful visuals for social media, branding, and marketing campaigns.
            Turning ideas into attractive designs that connect with audiences and strengthen brand identity.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-block bg-ink text-yellow px-7 py-3 text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-yellow hover:text-yellow-foreground transition"
          >
            More About Me
          </Link>
        </div>

        <div className="relative mx-auto order-first md:order-last">
          <div className="absolute -inset-4 sm:-inset-6 rounded-full border-2 border-yellow/60" />
          <div className="absolute -inset-4 sm:-inset-6 rounded-full border-t-2 border-r-2 border-ink rotate-12" />
          <div className="relative h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[420px] md:w-[420px] rounded-full overflow-hidden border-4 border-card shadow-xl">
            <img src={kiran} alt="Kiran" className="h-full w-full object-cover" width={420} height={420} />
          </div>
        </div>
      </div>
    </section>
  );
}
