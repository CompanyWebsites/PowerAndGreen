import { Container, Eyebrow } from "@/components/ui";
import PlatformDiagram from "@/components/diagrams/PlatformDiagram";

export default function Technology(){
  return (
    <>
      <section className="bg-navy text-white py-14">
        <Container>
          <p className="eyebrow text-teal">Technology</p>
          <h1 className="font-display font-bold text-4xl tracking-tight">Technology That Powers Reliable Energy</h1>
        </Container>
      </section>
      <section className="py-12 bg-white border-b border-paper">
        <Container>
          <Eyebrow>Renewable Energy Technology Platform</Eyebrow>
          <PlatformDiagram />
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            {[
              {t:"Renewable Generation",d:"Hydro, solar (PV & thermal) and wind — site-matched generation."},
              {t:"Hybrid Generation",d:"Solar + Wind co-located and co-optimised for higher PLF."},
              {t:"Energy Storage",d:"Short-time and thermal storage for controlled, dispatchable delivery."},
              {t:"Grid Support",d:"Fluctuation reduction and renewable integration for stable grids."},
            ].map(c=>(
              <div key={c.t} className="rounded-2xl border border-paper bg-offwhite p-5">
                <div className="font-semibold text-sm">{c.t}</div>
                <div className="text-xs text-muted mt-1 leading-relaxed">{c.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-navy text-white p-6 flex flex-col md:flex-row justify-between gap-4">
            <div><p className="font-semibold">Patent-licensed technology</p><p className="text-sm text-white/60 mt-1">Wind turbine and solar thermal + storage technologies licensed and integrated — see Intellectual Property.</p></div>
            <a href="/intellectual-property" className="shrink-0 self-start px-5 py-2.5 rounded-full bg-teal text-navy text-sm font-semibold">View IP Portfolio →</a>
          </div>
          <div className="mt-8">
            <Eyebrow>Engineering & Technology Development</Eyebrow>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {["Technology Development","Engineering","Project Development","Technology Integration","Testing & Validation"].map(x=>(
                <div key={x} className="rounded-xl border border-paper bg-offwhite p-4 text-center text-xs font-semibold">{x}</div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
