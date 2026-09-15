import { Container, Eyebrow } from "@/components/ui";
export default function Sustainability(){
  return (
    <>
      <section className="bg-navy text-white py-14">
        <Container>
          <p className="eyebrow text-teal">Sustainability</p>
          <h1 className="font-display font-bold text-4xl tracking-tight">Our Commitment to Sustainable Energy</h1>
        </Container>
      </section>
      <section className="py-12">
        <Container>
          <p className="max-w-[720px] text-sm leading-relaxed text-muted">Our mission ties directly to India&apos;s clean energy transition — delivering reliable renewable power that supports decarbonisation, grid stability and long-term community value.</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {["Sustainability","Long-Term Thinking","Reliability"].map(v=>(
              <span key={v} className="px-4 py-2 rounded-full bg-white border border-paper text-xs font-semibold">{v}</span>
            ))}
          </div>
          <div className="mt-10">
            <Eyebrow>Future Technology Roadmap</Eyebrow>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                {t:"Renewable Generation",items:["Hydro","Solar","Wind","Solar Thermal"]},
                {t:"Hybrid Systems",items:["Solar–Wind","Resource Integration"]},
                {t:"Storage",items:["Short-Time","Thermal"]},
                {t:"Grid Technologies",items:["Fluctuation Reduction","Renewable Integration"]},
              ].map(col=>(
                <div key={col.t} className="bg-white rounded-2xl border border-paper p-5">
                  <div className="font-semibold text-sm">{col.t}</div>
                  <ul className="mt-2 space-y-1 text-xs text-muted">{col.items.map(i=><li key={i}>• {i}</li>)}</ul>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-navy text-white p-4 flex flex-wrap gap-2 text-xs">
              <span className="font-mono text-teal">Foundation:</span>
              {["Patents","Licensed Tech","R&D","Testing"].map(f=>(
                <span key={f} className="px-3 py-1 rounded-full bg-white/10 border border-white/20">{f}</span>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
