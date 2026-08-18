export default function IconCard({ icon: Icon, title, description }) {
  return (
    <div className="h-full rounded-3xl border border-line bg-card p-4 transition hover:-translate-y-1 hover:bg-card-hover sm:p-6">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-tint text-accent">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-heading">{title}</h3>
      <p className="mt-3 text-body">{description}</p>
    </div>
  );
}
