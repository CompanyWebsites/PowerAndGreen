import { Container, Eyebrow } from "@/components/ui";
export default function IP(){
  return (
    <>
      <section className="bg-navy text-white py-14">
        <Container>
          <p className="eyebrow text-teal">Intellectual Property</p>
          <h1 className="font-display font-bold text-4xl tracking-tight">Intellectual Property & Patent Technology</h1>
        </Container>
      </section>
      <section className="py-12">
        <Container>
          <p className="max-w-[720px] text-sm leading-relaxed text-muted">Patented and patent-licensed technologies underpin generation, storage and grid performance — turning IP into bankable project advantage.</p>
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {[
              {t:"Wind Turbine Technology",d:"Licensed turbine technology optimised for Indian wind regimes and hybrid operation."},
              {t:"Grid Fluctuation Reduction Technology",d:"Smoothing generation variability to improve grid stability and integration."},
              {t:"Short-Time Power Storage Technology",d:"Fast-response storage for controlled power delivery and ancillary support."},
              {t:"Solar Thermal Power & Storage Technology",d:"Solar thermal generation with integrated thermal storage for dispatchable supply."},
            ].map(c=>(
              <div key={c.t} className="bg-white rounded-2xl border border-paper p-6">
                <div className="w-9 h-9 rounded-xl bg-navy text-teal grid place-items-center text-sm">◈</div>
                <div className="font-semibold mt-3">{c.t}</div>
                <div className="text-xs text-muted mt-1 leading-relaxed">{c.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-power text-white p-6">
            <p className="font-semibold">How our IP strengthens projects</p>
            <p className="text-sm text-white/70 mt-1">Each project selects the IP best matched to site and grid context — see <a href="/projects" className="underline">Projects</a> and <a href="/technology" className="underline">Technology Platform</a> for deployments.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
