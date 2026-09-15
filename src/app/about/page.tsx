import { Eyebrow, Container, Section } from "@/components/ui";
export default function About(){
  return (
    <>
      <section className="bg-navy text-white py-14">
        <Container>
          <p className="eyebrow text-teal">About</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight">About Thapak Power</h1>
          <p className="text-white/60 text-sm mt-3"><a href="/" className="hover:text-white">Home</a> / About</p>
        </Container>
      </section>
      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <Eyebrow>Company Summary</Eyebrow>
              <h2 className="font-display font-semibold text-2xl leading-tight">Technology-driven power development since 2018</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">Thapak Power Pvt. Ltd. was established in 2018 to develop and deploy renewable energy technologies across hydropower, solar, wind, hybrid systems, energy storage and grid-support solutions. The company combines intellectual property, in-house research and development, engineering and project development capability — from Detailed Project Report (DPR) through Hydropower Development Agreement (HDA), Security Deposit (SD), construction, testing and operation.</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">Primary audience: government bodies, investors, EPC partners, technology licensors and media seeking a credible, engineering-led counterparty for renewable development in India.</p>
            </div>
            <div className="bg-white rounded-2xl border border-paper p-6">
              <p className="font-mono text-xs tracking-widest text-power">AT A GLANCE</p>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between"><dt className="text-muted">Founded</dt><dd className="font-semibold">2018</dd></div>
                <div className="flex justify-between"><dt className="text-muted">HQ</dt><dd className="font-semibold">Madhya Pradesh, India</dd></div>
                <div className="flex justify-between"><dt className="text-muted">Focus</dt><dd className="font-semibold">Hydro · Solar · Wind · Hybrid · Storage</dd></div>
                <div className="flex justify-between"><dt className="text-muted">Pipeline</dt><dd className="font-semibold">150 MW+ across 3 projects</dd></div>
              </dl>
            </div>
          </div>
        </Container>
      </Section>
      <section className="bg-white border-y border-paper py-14">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-navy text-white p-8">
              <p className="eyebrow text-teal">Vision</p>
              <p className="font-display text-xl font-semibold leading-tight mt-2">To be a technology-driven leader advancing India&apos;s transition to reliable, sustainable energy.</p>
            </div>
            <div className="rounded-2xl border border-paper bg-offwhite p-8">
              <p className="eyebrow text-power">Mission</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                <li>• Develop innovative renewable and enabling technologies</li>
                <li>• Deliver high-quality, bankable projects end-to-end</li>
                <li>• Advance grid reliability and renewable integration</li>
                <li>• Create long-term value for partners and communities</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <Eyebrow>Values</Eyebrow>
            <div className="flex flex-wrap gap-2">
              {["Innovation","Sustainability","Engineering Excellence","Research","Reliability","Long-Term Thinking"].map(v=>(
                <span key={v} className="px-4 py-2 rounded-full bg-white border border-paper text-xs font-semibold">{v}</span>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <Section>
        <Container>
          <Eyebrow>Why Thapak Power — In Detail</Eyebrow>
          <div className="grid md:grid-cols-2 gap-6 text-sm leading-relaxed text-muted">
            <p><strong className="text-ink">Technology Driven</strong> — Engineering from first principles, with decisions anchored in data, testing and field performance.</p>
            <p><strong className="text-ink">Multi-Technology Approach</strong> — Hydro, solar, wind, hybrid and storage co-designed for site-specific optimisation.</p>
            <p><strong className="text-ink">Intellectual Property</strong> — Patented and licensed technologies de-risk and differentiate projects.</p>
            <p><strong className="text-ink">In-House R&D</strong> — Dedicated testing and validation before deployment.</p>
            <p><strong className="text-ink">Project Development Capability</strong> — DPR, HDA/SD, engineering, installation and commissioning under one roof.</p>
            <p><strong className="text-ink">Integrated Energy Approach</strong> — Generation, storage and grid support conceived as a single system.</p>
          </div>
          <div className="mt-10 flex items-center gap-4 overflow-x-auto py-2">
            {[{y:"2018",l:"Founded"},{y:"2019–22",l:"Tech & site development"},{y:"2023–24",l:"HDA / DPR milestones"},{y:"2025→",l:"Installation & scale-up"}].map(s=>(
              <div key={s.y} className="flex items-center gap-4 shrink-0">
                <div className="text-center"><div className="font-mono font-bold text-power">{s.y}</div><div className="text-xs text-muted">{s.l}</div></div>
                <span className="text-paper">—</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
