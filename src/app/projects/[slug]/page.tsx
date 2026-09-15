import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/data";
import { Container, StatusBadge } from "@/components/ui";
import { ProjectStepper } from "@/components/diagrams/Stepper";

export function generateStaticParams(){ return projects.map(p=>({slug:p.slug})); }

export default async function ProjectPage({ params }: { params: Promise<{slug:string}> }){
  const { slug } = await params;
  const p = projects.find(x=>x.slug===slug);
  if(!p) notFound();
  return (
    <>
      <section className="bg-navy text-white">
        <div className="max-w-[1280px] mx-auto px-6 py-10">
          <Link href="/projects" className="text-xs text-teal hover:underline">← All Projects</Link>
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <h1 className="font-display font-bold text-3xl tracking-tight">{p.name}</h1>
            <StatusBadge status={p.status} tone={p.statusTone} />
          </div>
          <p className="text-white/60 text-sm mt-1">{p.location}</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={p.name} className="w-full h-[320px] object-cover" />
      </section>
      <section className="py-8 bg-white border-b border-paper">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(p.facts).map(([k,v])=>(
              <div key={k} className="bg-offwhite rounded-xl p-4 border border-paper">
                <div className="eyebrow text-power !mb-1">{k}</div>
                <div className="text-sm font-semibold">{v}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="eyebrow text-power">Project Development Status</p>
            <ProjectStepper steps={p.steps} current={p.currentStep} />
          </div>
          <div className="mt-8 max-w-[720px]">
            <h2 className="font-display font-semibold text-xl">About this project</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
          </div>
          <div className="mt-10">
            <p className="eyebrow text-power">Related Projects</p>
            <div className="flex flex-wrap gap-3">
              {projects.filter(x=>x.slug!==p.slug).map(r=>(
                <Link key={r.slug} href={`/projects/${r.slug}`} className="px-4 py-2 rounded-full border border-paper bg-offwhite text-xs font-semibold hover:border-power/20">{r.name} →</Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
