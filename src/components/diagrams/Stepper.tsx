export function EightStep(){
  const steps=[
    ["01","Technology Identification"],
    ["02","Site Selection"],
    ["03","Technical Assessment"],
    ["04","DPR Development"],
    ["05","Statutory & Project Development"],
    ["06","Engineering & Installation"],
    ["07","Testing & Performance Evaluation"],
    ["08","Operation & Technology Improvement"],
  ];
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[900px] flex items-start gap-0 py-4">
        {steps.map(([n,t],i)=>(
          <div key={n} className="flex-1 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-navy text-teal grid place-items-center font-mono text-xs font-bold">{n}</div>
            {i<7 && <div className="hidden lg:block absolute w-full h-[2px] bg-paper top-5 -z-10" />}
            <p className="text-[11px] font-semibold leading-tight mt-2 max-w-[110px]">{t}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export function ProjectStepper({ steps, current }: { steps:string[]; current:number }){
  return (
    <div className="flex flex-wrap gap-2">
      {steps.map((s,i)=>{
        const active=i===current;
        const done=i<current;
        return (
          <div key={s} className="flex items-center gap-2">
            <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${active?"bg-teal text-navy border-teal":done?"bg-navy text-white border-navy":"bg-white text-muted border-paper"}`}>{String(i+1).padStart(2,"0")} · {s}</span>
            {i<steps.length-1 && <span className="text-muted hidden sm:inline">→</span>}
          </div>
        );
      })}
    </div>
  );
}
