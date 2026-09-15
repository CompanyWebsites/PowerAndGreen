import { Container, Eyebrow } from "@/components/ui";
export default function Renewable(){
  return (
    <>
      <section className="bg-navy text-white py-14">
        <Container>
          <p className="eyebrow text-teal">Resources</p>
          <h1 className="font-display font-bold text-4xl tracking-tight">Renewable Energy Resources</h1>
        </Container>
      </section>
      <section className="py-12">
        <Container>
          <div className="space-y-6">
            {[
              {t:"Hydropower",c:"cyan",d:"Run-of-river development leveraging perennial flows — e.g., Bina River — with HDA-led project structuring and careful land & hydrological assessment.",align:"left"},
              {t:"Solar",c:"amber",d:"PV for scalable generation and solar thermal with storage for dispatchability — as demonstrated at Budhni (100 MW + thermal storage).",align:"right"},
              {t:"Wind",c:"slate",d:"Licensed turbine technology for site-optimised wind generation, integrated into hybrid configurations to lift capacity utilisation.",align:"left"},
            ].map(b=>(
              <div key={b.t} className="bg-white rounded-2xl border border-paper overflow-hidden grid md:grid-cols-2">
                <div className="p-8">
                  <span className={`inline-block w-2 h-8 rounded-full ${b.c==="amber"?"bg-amber":b.c==="cyan"?"bg-cyan":"bg-slate"} align-middle mr-3`} />
                  <span className="font-display font-semibold text-xl align-middle">{b.t}</span>
                  <p className="text-sm text-muted leading-relaxed mt-3">{b.d}</p>
                </div>
                <div className={`bg-gradient-to-br ${b.c==="amber"?"from-amber/20 to-navy/5":b.c==="cyan"?"from-cyan/20 to-navy/5":"from-slate/20 to-navy/5"} grid place-items-center p-8 text-5xl opacity-60`}>{b.t==="Hydropower"?"≋":b.t==="Solar"?"☀":"◎"}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="rounded-2xl border border-paper bg-white p-6"><p className="font-semibold text-sm">Hybrid Generation</p><p className="text-xs text-muted mt-1">Solar + Wind → Hybrid Power — complementary profiles for steadier output (Tamia 50 MW).</p><div className="mt-3 text-xs font-mono bg-offwhite rounded-lg p-2">Solar ─┐ → Hybrid Power<br/>Wind ─┘</div></div>
            <div className="rounded-2xl border border-paper bg-white p-6"><p className="font-semibold text-sm">Energy Storage</p><p className="text-xs text-muted mt-1">Renewable Generation → Storage → Controlled Delivery — dispatchable supply.</p><div className="mt-3 text-xs font-mono bg-offwhite rounded-lg p-2">Generation → Storage → Delivery</div></div>
            <div className="rounded-2xl border border-paper bg-white p-6"><p className="font-semibold text-sm">Grid Support</p><p className="text-xs text-muted mt-1">Generation Fluctuation → Grid Support Tech → Improved Performance.</p><div className="mt-3 text-xs font-mono bg-offwhite rounded-lg p-2">Fluctuation → Support → Stable Grid</div></div>
          </div>
        </Container>
      </section>
    </>
  );
}
