import Link from "next/link";
import { projects } from "@/lib/data";
import { Container, StatusBadge } from "@/components/ui";
export default function Projects(){
  return (
    <>
      <section className="bg-navy text-white py-14">
        <Container>
          <p className="eyebrow text-teal">Projects</p>
          <h1 className="font-display font-bold text-4xl tracking-tight">Our Projects</h1>
          <p className="text-white/60 text-sm mt-2 max-w-[560px]">Hydro, hybrid and solar thermal developments across Madhya Pradesh — from allotment through to operation.</p>
        </Container>
      </section>
      <section className="py-10">
        <Container>
          <div className="flex flex-wrap gap-2 mb-8">
            {["All","Hydro","Solar","Wind","Hybrid","Storage"].map(t=>(
              <span key={t} className={`px-4 py-2 rounded-full text-xs font-semibold border ${t==="All"?"bg-navy text-white border-navy":"bg-white border-paper text-muted"}`}>{t}</span>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map(p=>(
              <Link key={p.slug} href={`/projects/${p.slug}`} className="bg-white rounded-2xl overflow-hidden border border-paper hover:shadow-lg transition-shadow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tech.map(t=><span key={t} className="px-2 py-1 rounded-full bg-paper text-[10px] font-semibold tracking-wide">{t.toUpperCase()}</span>)}
                  </div>
                  <h3 className="font-display font-semibold">{p.name}</h3>
                  <p className="text-xs text-muted mt-1">{p.location} · {p.capacity}</p>
                  <div className="mt-3"><StatusBadge status={p.status} tone={p.statusTone} /></div>
                  <span className="inline-flex mt-4 text-xs font-semibold text-power">View Details →</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
