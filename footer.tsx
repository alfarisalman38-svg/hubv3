export function Footer() {
  return <footer className="mt-20 border-t border-slate-800 bg-slate-950">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-4">
      <div><div className="font-black text-cyan-300">☢ Nuclear Engineering Hub</div><p className="mt-3 text-sm text-slate-400">Education, academic discovery, engineering tools and career navigation.</p></div>
      <div><h3 className="font-semibold">Explore</h3><div className="mt-3 space-y-2 text-sm text-slate-400"><div>Knowledge Base</div><div>Scholarships</div><div>Simulators</div></div></div>
      <div><h3 className="font-semibold">Platform</h3><div className="mt-3 space-y-2 text-sm text-slate-400"><div>Dashboard</div><div>Bookmarks</div><div>Application Tracker</div></div></div>
      <div><h3 className="font-semibold">Safety</h3><p className="mt-3 text-sm text-slate-400">Educational content only. Operational nuclear decisions require qualified professionals and approved procedures.</p></div>
    </div>
    <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-500">© 2026 Nuclear Engineering Hub</div>
  </footer>;
}