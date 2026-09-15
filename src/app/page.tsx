import Link from "next/link";
import { projects, focusItems, whyPoints } from "@/lib/data";
import { Eyebrow, Container, Stat, StatusBadge } from "@/components/ui";
import PlatformDiagram from "@/components/diagrams/PlatformDiagram";

const icons: Record<string,string> = { hydro:"◈", solar:"☀", wind:"◎", hybrid:"⬢", storage:"▣", grid:"⧉" };

export default function Home(){
  return (
    <>
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:"radial-gradient(circle at 1px 1px, #0FA8A0 1px, transparent 0)", backgroundSize:"32px 32px"}} />
        <div className="absolute inset-0 bg-gradient-to-br from-power/30 to-transparent" />
        <Container className="relative py-16 md:py-24">
          <p className="eyebrow text-teal">Est. 2018 · Technology-Driven Power Development</p>
          <h1 className="font-display font-bold text-[36px] md:text-[60px] leading-[0.95] tracking-tight max-w-[720px]">Engineering India&apos;s Renewable Energy Future</h1>
          <p className="mt-5 text-white/70 max-w-[560px] text-[15px] md:text-[17px] leading-relaxed">Hydropower, solar, wind, hybrid renewable energy, storage and grid-support technologies — from lab to field deployment.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="px-6 py-3 rounded-full bg-teal text-navy text-sm font-semibold hover:bg-teal/90 transition-colors">Explore Our Projects</Link>
            <Link href="/technology" className="px-6 py-3 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors">View Technology Platform</Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[900px]">
            <div className="bg-white text-navy rounded-xl p-5 flex justify-between items-center"><div><div className="font-mono font-bold text-lg">50 MW</div><div className="text-xs text-muted">Solar–Wind Hybrid · Tamia</div></div><span className="w-2 h-2 rounded-full bg-amber"/></div>
            <div className="bg-white text-navy rounded-xl p-5 flex justify-between items-center"><div><div className="font-mono font-bold text-lg">100 MW + Storage</div><div className="text-xs text-muted">Solar Thermal · Budhni</div></div><span className="w-2 h-2 rounded-full bg-cyan"/></div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5"><div className="font-mono font-bold text-lg text-white">Est. 2018</div><div className="text-xs text-white/60">Technology-led power developer</div></div>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <Eyebrow>Company Summary</Eyebrow>
              <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight leading-tight">A technology platform for reliable renewable power</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">Thapak Power Pvt. Ltd. develops renewable generation, hybrid systems, energy storage and grid-support technologies. Founded in 2018, the company integrates in-house R&D, patented and licensed technologies, and end-to-end project development — from Detailed Project Report (DPR) through to operation and continuous improvement.</p>
              <Link href="/about" className="inline-flex mt-4 text-sm font-semibold text-power hover:underline">About Thapak Power →</Link>
            </div>
            <div className="bg-white rounded-2xl border border-paper p-6">
              <p className="eyebrow text-power">Technology Platform — At a Glance</p>
              <PlatformDiagram compact />
              <Link href="/technology" className="inline-flex mt-4 text-xs font-semibold text-teal hover:underline">Explore Technology →</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white border-y border-paper py-14">
        <Container>
          <Eyebrow>Our Focus</Eyebrow>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {focusItems.map(f=>(
              <div key={f.title} className="rounded-2xl border border-paper bg-offwhite p-5 hover:border-teal/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-navy text-teal grid place-items-center text-lg">{icons[f.icon]}</div>
                <div className="mt-3 font-semibold text-sm">{f.title}</div>
                <div className="text-xs text-muted leading-tight mt-1">{f.desc}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="flex items-end justify-between gap-4 mb-6">
            <div><Eyebrow>Featured Projects</Eyebrow><h2 className="font-display font-semibold text-3xl tracking-tight">Building across Madhya Pradesh</h2></div>
            <Link href="/projects" className="hidden md:inline-flex text-sm font-semibold text-power hover:underline">View all →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map(p=>(
              <Link key={p.slug} href={`/projects/${p.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-paper hover:border-power/20 hover:shadow-lg transition-all">
                <div className="h-44 bg-paper overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <StatusBadge status={p.status} tone={p.statusTone} />
                    <span className="text-xs text-muted">{p.capacity}</span>
                  </div>
                  <h3 className="font-display font-semibold leading-tight">{p.name}</h3>
                  <p className="text-xs text-muted mt-1">{p.location}</p>
                  <p className="text-sm text-ink/70 mt-3 leading-relaxed line-clamp-2">{p.excerpt}</p>
                  <span className="inline-flex mt-4 text-xs font-semibold text-power">View Project →</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white border-y border-paper py-14">
        <Container>
          <Eyebrow>Renewable Energy Technology Platform</Eyebrow>
          <h2 className="font-display font-semibold text-2xl md:text-3xl tracking-tight">Generation · Hybrid · Storage · Grid</h2>
          <div className="mt-6"><PlatformDiagram /></div>
          <Link href="/technology" className="inline-flex mt-6 px-5 py-2.5 rounded-full bg-navy text-white text-sm font-semibold hover:bg-power transition-colors">Explore Technology →</Link>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <Eyebrow>Why Thapak Power</Eyebrow>
          <div className="grid md:grid-cols-3 gap-4">
            {whyPoints.map(w=>(
              <div key={w.title} className="bg-white rounded-2xl border border-paper p-6">
                <div className="w-8 h-8 rounded-lg bg-teal/15 text-teal grid place-items-center text-sm">◆</div>
                <div className="font-semibold text-sm mt-3">{w.title}</div>
                <div className="text-xs text-muted mt-1 leading-relaxed">{w.desc}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy text-white py-16">
        <Container className="text-center max-w-[720px]">
          <p className="eyebrow text-teal">Vision</p>
          <blockquote className="font-display text-2xl md:text-3xl font-semibold leading-tight">To be a technology-driven leader advancing India&apos;s transition to reliable, sustainable energy.</blockquote>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 text-left">
            {["Develop innovative renewable technologies","Deliver high-quality, bankable projects","Advance grid reliability & integration"].map(m=>(
              <div key={m} className="bg-white/10 backdrop-blur border border-white/10 rounded-xl p-4 text-sm leading-relaxed">{m}</div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="bg-power rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div><h3 className="font-display font-semibold text-xl">Partner with Thapak Power</h3><p className="text-white/70 text-sm mt-1">Government, investors, EPC and technology partners — let&apos;s build the next project.</p></div>
            <Link href="/contact" className="shrink-0 px-6 py-3 rounded-full bg-white text-navy text-sm font-semibold hover:bg-paper transition-colors">Get in Touch →</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
