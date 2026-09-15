import { Container, Eyebrow } from "@/components/ui";
import { eightSteps } from "@/lib/data";
export default function ProjectDev(){
  return (
    <>
      <section className="bg-navy text-white py-14">
        <Container>
          <p className="eyebrow text-teal">Process</p>
          <h1 className="font-display font-bold text-4xl tracking-tight">Our Project Development Approach</h1>
        </Container>
      </section>
      <section className="py-12">
        <Container>
          <div className="relative">
            <div className="hidden md:block absolute top-[28px] left-0 right-0 h-[2px] bg-paper" />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 relative">
              {eightSteps.map(s=>(
                <div key={s.n} className="bg-white rounded-2xl border border-paper p-5 text-center">
                  <div className="w-10 h-10 rounded-full bg-navy text-teal grid place-items-center font-mono text-xs font-bold mx-auto">{s.n}</div>
                  <div className="font-semibold text-xs leading-tight mt-3">{s.t}</div>
                  <div className="text-[11px] text-muted leading-tight mt-1">{s.d}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 rounded-2xl bg-white border border-paper p-6 flex flex-col md:flex-row justify-between gap-4">
            <div><p className="font-semibold text-sm">See this approach in action</p><p className="text-xs text-muted mt-1">Bina Hydropower is currently at Installation — advancing through HDA, SD and land acquisition stages.</p></div>
            <a href="/projects/bina-hydropower" className="shrink-0 self-start px-5 py-2.5 rounded-full bg-teal text-navy text-xs font-semibold">View Bina Project →</a>
          </div>
          <p className="text-xs text-muted mt-6 leading-relaxed max-w-[720px]">Statutory & compliance note: Hydropower Development Agreement (HDA) and Security Deposit (SD) are executed per state allotment frameworks. Details are project-specific; consult the Detailed Project Report (DPR) and governing agreements.</p>
        </Container>
      </section>
    </>
  );
}
