import { useEffect, useMemo, useState } from "react";
import { Check, Download, Search, X, Package } from "lucide-react";
import { categories, type Category } from "@/data/categories";
import { downloadAll, downloadPng, downloadSvg } from "@/utils/downloads";
import { CategoryIcon } from "./CategoryIcon";

const pad = (n: number) => String(n).padStart(2, "0");

function DlButton({ label, onClick, variant = "solid" }: { label: string; onClick: () => void | Promise<void>; variant?: "solid" | "outline" }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async (e) => {
        e.stopPropagation();
        await onClick();
        setDone(true);
        setTimeout(() => setDone(false), 1400);
      }}
      className={variant === "solid" ? "btn-solid" : "btn-outline"}
    >
      {done ? <Check className="size-4" /> : <Download className="size-4" />}
      {done ? "Saved" : label}
    </button>
  );
}

export function Studio() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState<Category | null>(null);
  const list = useMemo(
    () => categories.filter((c) => c.name.toLowerCase().includes(q.trim().toLowerCase())),
    [q],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5">
          <div className="flex items-center gap-4">
            <span className="font-display text-2xl font-extrabold tracking-[0.2em] text-primary">SHOLOK</span>
            <span className="hidden h-8 w-px bg-border sm:block" />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-foreground">Category Icon Studio</p>
              <p className="text-xs text-muted-foreground">Premium E-commerce Category Icon Collection</p>
            </div>
          </div>
          <div className="flex gap-2 text-xs">
            <span className="chip">13 Icons</span>
            <span className="chip"><span className="size-3 rounded-full bg-primary" />#5D0096</span>
          </div>
        </div>
      </header>

      <section className="hero-bg">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Brand Asset Library</p>
          <h1 className="font-display max-w-3xl text-4xl font-extrabold leading-tight text-foreground sm:text-6xl">
            SHOLOK Category <span className="text-primary">Icon Collection</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Explore and download our premium collection of 13 custom-designed SVG and PNG category icons, crafted exclusively for the Sholok e-commerce brand.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["13 Unique Category Icons", "SVG Download", "PNG Download", "Premium Purple Design"].map((t) => (
              <span key={t} className="chip chip-lg">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-5 py-12">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search category icons..."
              className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-ring/30"
            />
          </div>
          <DlButton label="Download All Icons" variant="outline" onClick={downloadAll} />
        </div>

        {list.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">No category icons found.</p>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {list.map((c) => (
              <article key={c.slug} onClick={() => setActive(c)} className="icon-card group animate-in fade-in zoom-in-95">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-primary">{pad(c.id)}</span>
                  <span className="text-muted-foreground">SVG | PNG</span>
                </div>
                <div className="my-4 flex aspect-square items-center justify-center rounded-xl bg-secondary transition group-hover:bg-accent">
                  <CategoryIcon category={c} className="size-1/2 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mb-3 truncate text-sm font-semibold text-foreground sm:text-base">{c.name}</h3>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <DlButton label="SVG" onClick={() => downloadSvg(c)} />
                  <DlButton label="PNG" variant="outline" onClick={() => downloadPng(c)} />
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground">
          <div>
            <span className="font-display font-extrabold tracking-[0.2em] text-primary">SHOLOK</span>
            <span className="ml-3">Premium E-commerce Category Icon Collection.</span>
          </div>
          <div className="flex gap-4">
            <span>Brand Color: #5D0096</span>
            <span>Total Category Icons: 13</span>
          </div>
        </div>
      </footer>

      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4 backdrop-blur-sm animate-in fade-in" onClick={() => setActive(null)}>
          <div role="dialog" aria-modal="true" aria-label={active.name} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-md rounded-3xl bg-background p-6 shadow-elegant animate-in zoom-in-95 fade-in sm:p-8">
            <button aria-label="Close" onClick={() => setActive(null)} className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition hover:bg-secondary hover:text-primary">
              <X className="size-5" />
            </button>
            <p className="text-xs font-semibold text-primary">Category {pad(active.id)}</p>
            <h2 className="font-display text-2xl font-bold text-foreground">{active.name}</h2>
            <div className="my-6 flex aspect-square items-center justify-center rounded-2xl bg-secondary">
              <CategoryIcon category={active} className="size-3/5" />
            </div>
            <div className="mb-5 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-border p-3"><p className="font-semibold text-foreground">SVG</p><p className="text-muted-foreground">Vector · 64×64 viewBox</p></div>
              <div className="rounded-xl border border-border p-3"><p className="font-semibold text-foreground">PNG</p><p className="text-muted-foreground">512×512 · Transparent</p></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <DlButton label="Download SVG" onClick={() => downloadSvg(active)} />
              <DlButton label="Download PNG" variant="outline" onClick={() => downloadPng(active)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { Package };
