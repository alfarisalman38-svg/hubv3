"use client";
import { useMemo, useState } from "react";
import { scholarships } from "@/lib/data";
export function ScholarshipFilter() {
 const [q,setQ]=useState(""); const [country,setCountry]=useState("All"); const [degree,setDegree]=useState("All");
 const result=useMemo(()=>scholarships.filter(s=>(country==="All"||s.country===country)&&(degree==="All"||s.degree.includes(degree))&&s.name.toLowerCase().includes(q.toLowerCase())),[q,country,degree]);
 return <div>
  <div className="card mb-6 grid gap-3 p-4 md:grid-cols-3">
   <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search scholarship..." className="rounded-xl border border-slate-700 bg-transparent px-4 py-3 outline-none focus:border-cyan-400"/>
   <select value={country} onChange={e=>setCountry(e.target.value)} className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3"><option>All</option>{[...new Set(scholarships.map(s=>s.country))].map(x=><option key={x}>{x}</option>)}</select>
   <select value={degree} onChange={e=>setDegree(e.target.value)} className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3"><option>All</option><option>S1</option><option>S2</option><option>S3</option></select>
  </div>
  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{result.map(s=><article key={s.id} className="card p-6"><span className="rounded-full bg-green-400/10 px-3 py-1 text-xs text-green-300">{s.funding}</span><h3 className="mt-4 font-bold">{s.name}</h3><p className="mt-2 text-sm text-slate-400">{s.provider} · {s.country} · {s.degree}</p><button className="mt-5 text-sm font-semibold text-cyan-300">View official requirements →</button></article>)}</div>
 </div>
}