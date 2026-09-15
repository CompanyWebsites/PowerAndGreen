import { Container, Eyebrow } from "@/components/ui";
export default function RandD(){
  return (
    <>
      <section className="bg-navy text-white py-14">
        <Container>
          <p className="eyebrow text-teal">R&D</p>
          <h1 className="font-display font-bold text-4xl tracking-tight">In-House Research & Development</h1>
        </Container>
      </section>
      <section className="py-12">
        <Container>
          <p className="max-w-[720px] text-sm leading-relaxed text-muted">Thapak Power operates an in-house R&D and testing facility focused on renewable generation, storage and grid-support systems — from concept through to field validation and continuous improvement.</p>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {["Renewable generation tech","Wind-turbine technology","Solar & solar thermal systems","Storage technology (short-time & thermal)","Grid-support systems","Hybrid systems & integration","Engineering & system integration","Testing, evaluation & product improvement"].map(a=>(
              <div key={a} className="bg-white rounded-2xl border border-paper p-5 flex gap-3">
                <span className="w-8 h-8 rounded-lg bg-teal/10 text-teal grid place-items-center shrink-0 text-xs">◆</span>
                <span className="text-sm font-medium leading-tight">{a}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-white rounded-2xl border border-paper p-6">
            <Eyebrow>Innovation Pipeline</Eyebrow>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {["Research","Development","Testing","Deployment"].map((s,i)=>(
                <span key={s} className="flex items-center gap-2">
                  <span className="px-4 py-2 rounded-full bg-navy text-white text-xs font-semibold">{s}</span>
                  {i<3 && <span className="text-muted">→</span>}
                </span>
              ))}
              <span className="ml-2 text-xs text-muted">continuous loop with field feedback</span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
