export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar placeholder — will be replaced in Phase 2 */}
      <aside className="hidden lg:flex lg:w-60 lg:flex-col lg:border-r lg:border-slate-200 lg:bg-white">
        <div className="flex h-16 items-center gap-2 border-b border-slate-200 px-6">
          <div className="h-8 w-8 rounded-lg bg-violet-600" />
          <span className="text-lg font-semibold text-slate-900">MediQueue</span>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <a href="/admin/dashboard" className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">Dashboard</a>
          <a href="/admin/doctors" className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">Doctors</a>
          <a href="/admin/departments" className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">Departments</a>
          <a href="/admin/queue" className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">Queue</a>
          <a href="/admin/analytics" className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">Analytics</a>
        </nav>
      </aside>
      <main className="flex-1 bg-slate-50">{children}</main>
    </div>
  );
}
