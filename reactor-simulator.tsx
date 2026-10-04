"use client";
import { useMemo, useState } from "react";
import { Activity, Thermometer, Zap } from "lucide-react";

export function ReactorSimulator() {
  const [rods, setRods] = useState(50);
  const [coolant, setCoolant] = useState(70);
  const metrics = useMemo(() => {
    const power = Math.max(0, 120 * (1 - rods / 100));
    const temp = 300 + power * 2.2 - coolant * 1.15;
    const status = temp > 600 ? "OVERHEAT WARNING" : power < 25 ? "SUBCRITICAL" : "CRITICAL / CONCEPTUAL";
    return { power, temp, status };
  }, [rods, coolant]);
  return <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
    <div className="card p-6">
      <div className="mb-5"><p className="text-xs uppercase tracking-widest text-cyan-300">Educational model</p><h2 className="mt-1 text-2xl font-bold">Reactor Control Panel</h2></div>
      <label className="text-sm text-slate-400">Control rod insertion: {rods}%</label>
      <input aria-label="Control rod insertion" className="mt-2 w-full accent-cyan-400" type="range" min="0" max="100" value={rods} onChange={e=>setRods(+e.target.value)}/>
      <label className="mt-6 block text-sm text-slate-400">Coolant flow: {coolant}%</label>
      <input aria-label="Coolant flow" className="mt-2 w-full accent-cyan-400" type="range" min="0" max="100" value={coolant} onChange={e=>setCoolant(+e.target.value)}/>
      <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-xs text-amber-200">This is a deliberately simplified conceptual model. It is not suitable for reactor design, operation, safety analysis, or training.</div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <Metric icon={<Thermometer/>} label="Core temperature" value={`${metrics.temp.toFixed(1)} °C`}/>
      <Metric icon={<Zap/>} label="Thermal power" value={`${metrics.power.toFixed(1)} MWt`}/>
      <Metric icon={<Activity/>} label="Rod insertion" value={`${rods}%`}/>
      <Metric icon={<Activity/>} label="Status" value={metrics.status}/>
    </div>
  </div>
}
function Metric({icon,label,value}:{icon:React.ReactNode;label:string;value:string}) {
 return <div className="card p-5"><div className="text-cyan-300">{icon}</div><p className="mt-4 text-xs uppercase tracking-wide text-slate-500">{label}</p><p className="mt-1 text-lg font-bold">{value}</p></div>
}