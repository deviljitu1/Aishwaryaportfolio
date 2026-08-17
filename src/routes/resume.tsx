import { createFileRoute } from "@tanstack/react-router";
import { PageTitle, YellowStripeWrapper } from "@/components/PortfolioLayout";
import { Download } from "lucide-react";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Kiran Srivastava" },
      { name: "description", content: "Kiran Srivastava's education and work experience as a Graphic Designer and Creative Visualizer." },
    ],
  }),
  component: Resume,
});

const education = [
  { years: "2021–2025", title: "B.Com Final Year", place: "Atal Bihari Vajpayee Vishwavidyalaya, Bilaspur" },
  { years: "2020", title: "12th (Commerce)", place: "Bihar School Examination Board, Patna" },
  { years: "2018", title: "10th", place: "Bihar School Examination Board, Patna" },
];

const experience = [
  { years: "2023–Now", title: "Digital Marketing Executive / Graphic Designer", place: "Eyes Group (Orgalife, Aam Aadmi Patrika & Eyes Events)" },
  { years: "2022–2023", title: "Graphic Designer & Social Media Marketer", place: "GATE Academy + Unacademy" },
  { years: "2020–2022", title: "Social Media Manager", place: "Genique Education, Korba" },
];

function Block({ items }: { items: typeof education }) {
  return (
    <div className="relative pl-6 mt-5">
      <div className="absolute left-0 top-2 bottom-2 w-px bg-ink/30" />
      <div className="space-y-5">
        {items.map((it) => (
          <div key={`${it.title}-${it.years}`} className="relative">
            <span className="absolute -left-[26px] top-1 h-3 w-3 rounded-full bg-yellow border-2 border-ink" />
            <span className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase bg-ink text-yellow px-2 py-0.5">
              {it.years}
            </span>
            <p className="font-semibold mt-1">{it.title}</p>
            <p className="text-xs text-muted-foreground">{it.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Resume() {
  return (
    <YellowStripeWrapper>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <PageTitle>RESUME</PageTitle>
        <button
          onClick={() => window.print()}
          className="print:hidden inline-flex items-center gap-2 bg-ink text-yellow px-5 py-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-yellow hover:text-yellow-foreground transition shadow-md"
        >
          <Download size={16} />
          Download PDF
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-12 mt-10">
        <div>
          <h2 className="font-display text-3xl tracking-wide text-ink border-b-2 border-yellow inline-block pb-1">Education</h2>
          <Block items={education} />
        </div>
        <div>
          <h2 className="font-display text-3xl tracking-wide text-ink border-b-2 border-yellow inline-block pb-1">Experience</h2>
          <Block items={experience} />
        </div>
      </div>
    </YellowStripeWrapper>
  );
}
