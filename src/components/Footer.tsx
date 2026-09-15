import Link from "next/link";
export default function Footer(){
  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-[1280px] mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded bg-teal grid place-items-center font-mono font-bold text-navy text-xs">TP</span>
            <span className="font-display font-bold text-white text-sm">THAPAK POWER</span>
          </div>
          <p className="text-xs leading-relaxed text-white/60 max-w-[260px]">Technology-driven renewable power development — hydro, solar, wind, hybrid & storage. Established 2018.</p>
        </div>
        <div>
          <p className="eyebrow text-teal mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/technology" className="hover:text-white">Technology</Link></li>
            <li><Link href="/project-development" className="hover:text-white">Project Development</Link></li>
            <li><Link href="/sustainability" className="hover:text-white">Sustainability</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-teal mb-4">Projects</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/projects/bina-hydropower" className="hover:text-white">Bina Hydropower</Link></li>
            <li><Link href="/projects/tamia-solar-wind-hybrid" className="hover:text-white">Tamia Hybrid (50 MW)</Link></li>
            <li><Link href="/projects/budhni-solar-thermal" className="hover:text-white">Budhni Solar Thermal (100 MW)</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-teal mb-4">Contact</p>
          <p className="text-sm leading-relaxed">Thapak Power Pvt. Ltd.<br/>Madhya Pradesh, India<br/><a href="mailto:info@thapakpower.com" className="text-teal hover:underline">info@thapakpower.com</a></p>
          <Link href="/contact" className="inline-block mt-4 px-4 py-2 rounded-full border border-teal text-teal text-xs font-semibold hover:bg-teal hover:text-navy transition-colors">Get in Touch →</Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 py-5 flex flex-col md:flex-row justify-between gap-2 text-[11px] tracking-wide text-white/40">
          <span>© {new Date().getFullYear()} Thapak Power Pvt. Ltd. All rights reserved.</span>
          <span className="font-mono">Engineering India&apos;s Renewable Energy Future</span>
        </div>
      </div>
    </footer>
  );
}
