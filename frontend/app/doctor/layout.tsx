export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar placeholder — will be replaced in Phase 2 */}
      <aside className="hidden lg:flex lg:w-60 lg:flex-col lg:border-r lg:border-slate-200 lg:bg-white">
        <div className="flex h-16 items-center gap-2 border-b border-slate-200 px-6">
          <div className="h-8 w-8 rounded-lg bg-emerald-600" />
          <span className="text-lg font-semibold text-slate-900">MediQueue</span>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <a href="/doctor/dashboard" className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">Dashboard</a>
          <a href="/doctor/queue" className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">Queue</a>
        </nav>
      </aside>
      <main className="flex-1 bg-slate-50">{children}</main>
    </div>
  );
}
