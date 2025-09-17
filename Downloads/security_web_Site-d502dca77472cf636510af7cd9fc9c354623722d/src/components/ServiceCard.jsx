export default function ServiceCard({ icon: Icon, title, desc }){
  return (
    <div className="blur-card p-6 hover:bg-white/10 transition">
      <div className="h-12 w-12 rounded-xl bg-brand-500/20 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-brand-400" />
      </div>
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-slate-300 text-sm">{desc}</p>
    </div>
  )
}