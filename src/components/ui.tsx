export function StatusBadge({ status, tone }: { status:string; tone:"progress"|"planned"|"completed" }){
  const map={ progress:"bg-teal text-navy", planned:"bg-amber text-navy", completed:"border border-power text-power bg-white" } as const;
  return <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${map[tone]}`}>{status}</span>;
}
export function Eyebrow({ children, light }: { children:React.ReactNode; light?:boolean }){
  return <p className={`eyebrow ${light?"text-teal":"text-power"} mb-3`}>{children}</p>;
}
export function Section({ children, dark, className="" }: { children:React.ReactNode; dark?:boolean; className?:string }){
  return <section className={`${dark?"bg-navy text-white":"bg-offwhite"} py-14 md:py-20 ${className}`}>{children}</section>;
}
export function Container({ children, className="" }: { children:React.ReactNode; className?:string }){
  return <div className={`max-w-[1280px] mx-auto px-6 ${className}`}>{children}</div>;
}
export function Stat({ value, label, accent }: { value:string; label:string; accent?:string }){
  return (
    <div className="bg-white rounded-xl border border-paper p-5">
      <div className="font-mono font-medium text-[26px] leading-none tracking-tight" style={{color:accent||"#0F4C81"}}>{value}</div>
      <div className="text-xs text-muted mt-1.5 leading-tight">{label}</div>
    </div>
  );
}
