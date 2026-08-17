import { createFileRoute } from "@tanstack/react-router";
import { PageTitle, YellowStripeWrapper } from "@/components/PortfolioLayout";
import { Monitor, Phone, Share2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kiran Srivastava" },
      { name: "description", content: "Get in touch with Kiran Srivastava for graphic design and creative visualizer projects." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <YellowStripeWrapper>
      <PageTitle>CONTACT</PageTitle>
      <p className="mt-6 text-base">
        Feel <span className="bg-yellow px-1.5 text-ink">free</span> to contact me!
      </p>
      <p className="text-sm text-muted-foreground mt-2 max-w-xl">
        I'm currently taking on new projects. Drop me a note and I'll get back to you within 48 hours.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {[
          { icon: Monitor, label: "Website", value: "www.kiransrivastava.design" },
          { icon: Phone,   label: "Phone",   value: "+91 98 1234 5678" },
          { icon: Share2,  label: "Social",  value: "@kiran.visuals" },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="text-center bg-card border border-border p-6 shadow-sm">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-yellow text-yellow-foreground">
              <Icon size={22} />
            </div>
            <p className="font-display text-xl tracking-wider mt-3">{label}</p>
            <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 break-all">{value}</p>
          </div>
        ))}
      </div>

      <form
        className="mt-10 grid md:grid-cols-2 gap-4 max-w-3xl"
        onSubmit={(e: React.FormEvent) => { e.preventDefault(); setSent(true); }}
      >
        <input className="bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-yellow w-full" placeholder="Your name" required />
        <input type="email" className="bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-yellow w-full" placeholder="Your email" required />
        <input className="md:col-span-2 bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-yellow w-full" placeholder="Subject" />
        <textarea rows={5} className="md:col-span-2 bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-yellow w-full" placeholder="Tell me about your project..." required />
        <button className="md:col-span-2 justify-self-center md:justify-self-start bg-ink text-yellow px-7 py-3 text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-yellow hover:text-yellow-foreground transition">
          {sent ? "Thanks — I'll be in touch!" : "Send Message"}
        </button>
      </form>

      <p className="mt-12 text-center font-display text-3xl tracking-wider">THANKS FOR YOUR PATIENCE!</p>
    </YellowStripeWrapper>
  );
}
