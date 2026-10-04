"use client";
import { useState } from "react";
import { radioactiveDecay, shielding } from "@/lib/calculations";
export function Calculators() {
 const [n0,setN0]=useState(100); const [hl,setHl]=useState(10); const [t,setT]=useState(5);
 const [i0,setI0]=useState(100); const [mu,setMu]=useState(.1); const [x,setX]=useState(10);
 return <div className="grid gap-6 lg:grid-cols-2">
  <div className="card p-6"><h2 className="text-xl font-bold">Radioactive Decay</h2><p className="mt-1 text-sm text-slate-400">N(t) = N₀ e<sup>-λt</sup></p><div className="mt-5 grid gap-3 md:grid-cols-3">{[["N₀",n0,setN0],["Half-life",hl,setHl],["Time",t,setT]].map(([label,val,set],i)=><label key={i} className="text-sm text-slate-400">{label}<input type="number" value={val as number} onChange={e=>(set as any)(+e.target.value)} className="mt-1 w-full rounded-xl border border-slate-700 bg-transparent p-3 text-slate-100"/></label>)}</div><div className="mt-6 text-3xl font-black text-cyan-300">{radioactiveDecay(n0,hl,t).toFixed(4)}</div></div>
  <div className="card p-6"><h2 className="text-xl font-bold">Radiation Shielding</h2><p className="mt-1 text-sm text-slate-400">I = I₀ e<sup>-μx</sup></p><div className="mt-5 grid gap-3 md:grid-cols-3">{[["I₀",i0,setI0],["μ",mu,setMu],["x",x,setX]].map(([label,val,set],i)=><label key={i} className="text-sm text-slate-400">{label}<input type="number" value={val as number} onChange={e=>(set as any)(+e.target.value)} className="mt-1 w-full rounded-xl border border-slate-700 bg-transparent p-3"/></label>)}</div><div className="mt-6 text-3xl font-black text-green-300">{shielding(i0,mu,x).toFixed(4)}</div></div>
 </div>
}