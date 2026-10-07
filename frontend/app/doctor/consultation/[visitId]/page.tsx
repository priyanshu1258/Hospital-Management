export default function ConsultationPage({
  params,
}: {
  params: Promise<{ visitId: string }>;
}) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-slate-900">Consultation Form — Coming in Phase 2</h1>
    </div>
  );
}
