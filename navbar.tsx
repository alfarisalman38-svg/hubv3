"use client";
import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { useState } from "react";

const links = [
  ["Learn", "/learn"],
  ["Universities", "/universities"],
  ["Scholarships", "/scholarships"],
  ["Simulators", "/simulators"],
  ["Isotopes", "/isotopes"],
  ["Map", "/map"],
  ["Careers", "/careers"],
];

export function Navbar() {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-black tracking-tight text-cyan-300">
          ☢ NEH<span className="text-slate-400">/HUB</span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm text-slate-300 hover:text-cyan-300">{label}</Link>)}
          <Link href="/dashboard" className="btn-secondary text-sm">My Workspace</Link>
          <button onClick={toggle} className="rounded-xl border border-slate-700 p-2" aria-label="Toggle theme">{dark ? <Sun size={17}/> : <Moon size={17}/>}</button>
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu"><Menu/></button>
      </div>
      {open && <div className="border-t border-slate-800 px-5 py-4 lg:hidden">{links.map(([l,h]) => <Link key={h} onClick={()=>setOpen(false)} href={h} className="block py-2 text-slate-300">{l}</Link>)}<Link href="/dashboard" onClick={()=>setOpen(false)} className="mt-2 block py-2 text-cyan-300">My Workspace</Link></div>}
    </header>
  );
}