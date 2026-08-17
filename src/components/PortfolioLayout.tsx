import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { Home, User, FileText, Briefcase, MessageSquare, Send } from "lucide-react";
import pallavi from "@/assets/pallavi.jpeg";
import * as React from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Me" },
  { to: "/resume", label: "Resume" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

const rail = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/about", icon: User, label: "About" },
  { to: "/resume", icon: FileText, label: "Resume" },
  { to: "/portfolio", icon: Briefcase, label: "Portfolio" },
  { to: "/testimonials", icon: MessageSquare, label: "Testimonials" },
  { to: "/contact", icon: Send, label: "Contact" },
] as const;

export function PortfolioLayout() {
  const { pathname } = useLocation();
  return (
    <div id="layout-root" className="min-h-screen bg-background text-foreground">
      <div id="layout-container" className="mx-auto flex max-w-[1400px] gap-0 md:gap-6 px-3 md:px-6 pt-6 pb-20 md:pb-6">
        {/* Left sidebar */}
        <aside className="sticky top-6 hidden md:flex w-[220px] shrink-0 flex-col bg-sidebar text-sidebar-foreground self-start min-h-[85vh]">
          <div className="flex flex-col items-center px-6 py-8">
            <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-yellow shadow-lg">
              <img src={pallavi} alt="Kiran" className="h-full w-full object-cover" width={96} height={96} />
            </div>
            <p className="mt-4 font-display text-2xl tracking-wide">KIRAN</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-sidebar-foreground/60">Designer</p>
          </div>
          <nav className="mt-4 flex-1">
            <ul className="flex flex-col">
              {nav.map((n) => {
                const active = pathname === n.to;
                return (
                  <li key={n.to}>
                    <Link
                      to={n.to}
                      className={`relative block px-6 py-3 text-center text-[11px] font-semibold tracking-[0.25em] uppercase transition-colors
                        ${active ? "bg-yellow text-yellow-foreground" : "hover:bg-white/5 text-sidebar-foreground/85"}`}
                    >
                      {n.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="px-6 py-6 text-center text-[10px] tracking-[0.2em] uppercase text-sidebar-foreground/40">
            © 2026 Kiran Srivastava
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0">
          <Outlet />
        </main>

        {/* Right icon rail */}
        <aside className="hidden lg:flex w-12 shrink-0 flex-col items-center gap-3 sticky top-6 self-start py-2">
          <div className="w-px flex-1 bg-ink/30 absolute top-0 bottom-0 left-1/2 -translate-x-1/2" />
          {rail.map(({ to, icon: Icon, label }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                aria-label={label}
                className={`relative z-10 grid h-9 w-9 place-items-center rounded-full transition-all
                  ${active ? "bg-yellow text-yellow-foreground scale-110" : "bg-ink text-yellow hover:bg-yellow hover:text-yellow-foreground"}`}
              >
                <Icon size={15} strokeWidth={2.2} />
              </Link>
            );
          })}
        </aside>
      </div>

      {/* Mobile nav */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 bg-sidebar text-sidebar-foreground border-t border-white/10 z-40">
        <ul className="flex justify-around">
          {rail.map(({ to, icon: Icon, label }) => {
            const active = pathname === to;
            return (
              <li key={to}>
                <Link to={to} aria-label={label} className={`flex flex-col items-center gap-0.5 py-2 px-2 ${active ? "text-yellow" : ""}`}>
                  <Icon size={18} />
                  <span className="text-[9px] uppercase tracking-wider">{label.split(" ")[0]}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="title-rule font-display text-4xl sm:text-5xl md:text-7xl tracking-wider text-ink break-words">
      {children}
    </h1>
  );
}

export function YellowStripeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-card shadow-sm">
      <div className="absolute left-0 top-0 bottom-0 w-2 md:w-3 bg-yellow" />
      <div className="absolute right-0 top-0 bottom-0 w-2 md:w-3 bg-yellow" />
      <div className="px-5 sm:px-8 md:px-16 py-8 md:py-14">{children}</div>
    </div>
  );
}
