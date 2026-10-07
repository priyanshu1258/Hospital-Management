import { ArrowRight, Clock, Shield, Activity } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
        <div className="animate-fade-in space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            <Activity className="h-4 w-4" />
            Intelligent Queue Management
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Skip the wait.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Not the care.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 leading-relaxed">
            MediQueue transforms hospital queuing with intelligent
            priority-based scheduling, real-time tracking, and comprehensive
            patient history management.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/login"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/register"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create Account
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-slate-200 bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-3">
            <FeatureCard
              icon={<Clock className="h-6 w-6 text-blue-600" />}
              title="Smart Queue Engine"
              description="Priority-based scheduling with aging fairness. Your position updates in real-time with accurate wait estimates."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6 text-emerald-600" />}
              title="Complete Patient History"
              description="Secure, chronological record of visits, prescriptions, reports, and vitals — accessible to authorized personnel only."
            />
            <FeatureCard
              icon={<Activity className="h-6 w-6 text-indigo-600" />}
              title="Analytics Dashboard"
              description="Real-time KPIs, department workload, doctor utilization, and peak-hour insights for hospital administrators."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 px-6 py-8">
        <div className="mx-auto max-w-5xl text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} MediQueue — Intelligent Hospital Queue
            & Patient History System
          </p>
          <p className="mt-1">Final Year CSE Project</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-slate-300">
      <div className="mb-4 inline-flex rounded-lg bg-slate-50 p-3 transition-colors group-hover:bg-blue-50">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}
