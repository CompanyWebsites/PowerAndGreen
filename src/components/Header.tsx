"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const nav = [
  { label:"About", href:"/about" },
  { label:"Projects", href:"/projects" },
  { label:"Technology", href:"/technology" },
  { label:"R&D", href:"/r-and-d" },
  { label:"IP", href:"/intellectual-property" },
  { label:"Renewable Energy", href:"/renewable-energy" },
  { label:"Project Development", href:"/project-development" },
  { label:"Sustainability", href:"/sustainability" },
];

export default function Header(){
  const [scrolled,setScrolled]=useState(false);
  const [open,setOpen]=useState(false);
  useEffect(()=>{ const h=()=>setScrolled(window.scrollY>24); window.addEventListener("scroll",h); return()=>window.removeEventListener("scroll",h); },[]);
  return (
    <header className={`sticky top-0 z-50 transition-colors ${scrolled||open?"bg-navy border-b border-white/10":"bg-navy/95 backdrop-blur border-b border-white/5"}`}>
      <div className="max-w-[1280px] mx-auto px-6 h-[64px] flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <span className="w-9 h-9 rounded bg-teal flex items-center justify-center font-mono font-bold text-navy text-[13px]">TP</span>
          <span className="leading-none">
            <span className="block font-display font-bold text-white text-[15px] tracking-tight">THAPAK POWER</span>
            <span className="block font-mono text-[10px] tracking-[0.18em] text-white/60 -mt-0.5">PVT. LTD. · EST. 2018</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map(i=>(
            <Link key={i.href} href={i.href} className="px-3 py-2 text-[13px] font-medium tracking-wide text-white/80 hover:text-white transition-colors">
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="px-5 py-2.5 rounded-full bg-teal text-navy text-[13px] font-semibold hover:bg-teal/90 transition-colors">Partner With Us</Link>
        </div>
        <button onClick={()=>setOpen(v=>!v)} className="lg:hidden w-10 h-10 grid place-items-center text-white" aria-label="Menu">
          <span className="w-5 h-[2px] bg-white block relative after:content-[''] after:absolute after:top-1.5 after:left-0 after:w-5 after:h-[2px] after:bg-white before:content-[''] before:absolute before:-top-1.5 before:left-0 before:w-5 before:h-[2px] before:bg-white"></span>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy px-6 pb-6 pt-2">
          <nav className="flex flex-col">
            {nav.map(i=>(
              <Link key={i.href} href={i.href} onClick={()=>setOpen(false)} className="py-3 text-sm text-white/80 border-b border-white/5 last:border-0">{i.label}</Link>
            ))}
            <Link href="/contact" onClick={()=>setOpen(false)} className="mt-4 text-center px-5 py-3 rounded-full bg-teal text-navy text-sm font-semibold">Partner With Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
