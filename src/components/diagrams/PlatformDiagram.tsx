export default function PlatformDiagram({ compact }: { compact?:boolean }){
  return (
    <div className={`rounded-2xl border bg-white overflow-hidden ${compact?"p-4":"p-6 md:p-8"}`}>
      <div className="hidden md:block">
        <svg viewBox="0 0 820 260" className="w-full h-auto" role="img" aria-label="Renewable energy technology platform flow diagram">
          {[
            { y:42, label:"SOLAR", color:"#F5A623" },
            { y:90, label:"WIND", color:"#5C7080" },
            { y:138, label:"HYDRO", color:"#3FB8E0" },
          ].map(r=>(
            <g key={r.label}>
              <rect x="24" y={r.y-16} width="110" height="32" rx="8" fill={r.color} />
              <text x="79" y={r.y+2} textAnchor="middle" fontSize="11" fontWeight="700" fill="#0B1E33" letterSpacing="0.08em">{r.label}</text>
              <text x="155" y={r.y+4} fontSize="11" fill="#6B7580">→  Power Generation  →</text>
              <line x1="155" y1={r.y} x2="340" y2={r.y} stroke="#EDF1F3" strokeWidth="1" />
            </g>
          ))}
          <rect x="340" y="52" width="170" height="76" rx="12" fill="#0B1E33" />
          <text x="425" y="82" textAnchor="middle" fontSize="11" fontWeight="600" fill="#0FA8A0">HYBRID</text>
          <text x="425" y="98" textAnchor="middle" fontSize="10" fill="white">Solar + Wind → Hybrid Power</text>
          <text x="425" y="112" textAnchor="middle" fontSize="8" fill="#5C7080">Signal Teal convergence</text>

          <rect x="24" y="180" width="486" height="52" rx="12" fill="#F7F9FA" stroke="#EDF1F3" />
          <text x="40" y="200" fontSize="9" fontWeight="600" fill="#6B7580" letterSpacing="0.08em">RENEWABLE GENERATION</text>
          <text x="40" y="214" fontSize="11" fill="#0B1E33">→  Energy Storage  →  Controlled Power Delivery</text>
          <circle cx="470" cy="206" r="4" fill="#0FA8A0" />

          <rect x="540" y="52" width="256" height="52" rx="12" fill="#F7F9FA" stroke="#EDF1F3" />
          <text x="556" y="72" fontSize="9" fontWeight="600" fill="#6B7580" letterSpacing="0.08em">GRID SUPPORT</text>
          <text x="556" y="88" fontSize="10" fill="#0B1E33">Generation Fluctuation → Improved Grid Performance</text>
        </svg>
      </div>
      <div className="md:hidden space-y-3 text-sm">
        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber"/><span>Solar → Power Generation</span></div>
        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate"/><span>Wind → Power Generation</span></div>
        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyan"/><span>Hydro → Power Generation</span></div>
        <div className="bg-navy text-white rounded-xl p-4 text-center text-xs">Hybrid: Solar + Wind → Hybrid Power</div>
        <div className="bg-paper rounded-xl p-3 text-xs">Renewable Generation → Energy Storage → Controlled Power Delivery</div>
        <div className="bg-paper rounded-xl p-3 text-xs">Generation Fluctuation → Grid Support → Improved Performance</div>
      </div>
    </div>
  );
}
