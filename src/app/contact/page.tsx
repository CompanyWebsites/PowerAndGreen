"use client";
import { useState } from "react";
import { Container } from "@/components/ui";

export default function Contact(){
  const [sent,setSent]=useState(false);
  return (
    <>
      <section className="bg-navy text-white py-14">
        <Container>
          <p className="eyebrow text-teal">Contact</p>
          <h1 className="font-display font-bold text-4xl tracking-tight">Get in Touch</h1>
        </Container>
      </section>
      <section className="py-12">
        <Container>
          <div className="grid md:grid-cols-5 gap-8">
            <form onSubmit={e=>{e.preventDefault();setSent(true);}} className="md:col-span-3 bg-white rounded-2xl border border-paper p-6 space-y-4">
              {sent && <div className="rounded-xl bg-teal/10 border border-teal/20 p-3 text-sm text-teal font-medium">Thank you — we&apos;ll be in touch shortly. (Demo: no email sent.)</div>}
              <div className="grid grid-cols-2 gap-4">
                <label className="text-xs font-semibold">Name<input required className="mt-1 w-full rounded-xl border border-paper bg-offwhite px-3 py-2.5 text-sm outline-none focus:border-teal" placeholder="Your name" /></label>
                <label className="text-xs font-semibold">Organization<input className="mt-1 w-full rounded-xl border border-paper bg-offwhite px-3 py-2.5 text-sm outline-none focus:border-teal" placeholder="Company / Dept." /></label>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <label className="text-xs font-semibold">Email<input type="email" required className="mt-1 w-full rounded-xl border border-paper bg-offwhite px-3 py-2.5 text-sm outline-none focus:border-teal" placeholder="you@company.com" /></label>
                <label className="text-xs font-semibold">Phone<input className="mt-1 w-full rounded-xl border border-paper bg-offwhite px-3 py-2.5 text-sm outline-none focus:border-teal" placeholder="+91 ..." /></label>
              </div>
              <label className="text-xs font-semibold block">Interest
                <select className="mt-1 w-full rounded-xl border border-paper bg-offwhite px-3 py-2.5 text-sm outline-none focus:border-teal">
                  <option>Partnership</option><option>Investment</option><option>Technology Licensing</option><option>General</option>
                </select>
              </label>
              <label className="text-xs font-semibold block">Message<textarea required rows={4} className="mt-1 w-full rounded-xl border border-paper bg-offwhite px-3 py-2.5 text-sm outline-none focus:border-teal" placeholder="How can we help?" /></label>
              <button type="submit" className="w-full py-3 rounded-full bg-navy text-white text-sm font-semibold hover:bg-power transition-colors">Send Message</button>
            </form>
            <div className="md:col-span-2 space-y-4">
              <div className="bg-white rounded-2xl border border-paper p-6">
                <p className="font-semibold">Thapak Power Pvt. Ltd.</p>
                <p className="text-sm text-muted mt-2 leading-relaxed">Madhya Pradesh, India<br/>Email: <a href="mailto:info@thapakpower.com" className="text-power underline">info@thapakpower.com</a></p>
                <div className="mt-4 rounded-xl bg-offwhite border border-paper h-36 grid place-items-center text-xs text-muted">Map placeholder — office location</div>
              </div>
              <div className="rounded-2xl bg-power text-white p-6">
                <p className="font-semibold text-sm">Interested in partnering on a project?</p>
                <p className="text-xs text-white/70 mt-1">We welcome EPC, technology and investment enquiries.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
