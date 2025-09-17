import { useState } from 'react'
import { Shield, Menu, X } from 'lucide-react'

export default function Navbar(){
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#services', label: 'Services' },
    { href: '#secteurs', label: 'Secteurs' },
    { href: '#a-propos', label: 'A propos' },
    //{ href: '#a-propos', label: 'À propos' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-900/70 backdrop-blur border border-white/10 px-4 py-3">
          <a href="#accueil" className="flex items-center gap-2 text-white">
            <Shield className="h-6 w-6" />
            <span className="font-semibold tracking-wide">Sécurité Pro</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-slate-200 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#devis" className="inline-flex items-center rounded-xl bg-brand-500 hover:bg-brand-600 transition px-4 py-2 text-white shadow-soft">
              Obtenir un devis
            </a>
          </div>
          <button onClick={()=>setOpen(!open)} className="md:hidden text-white">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 rounded-2xl bg-slate-900/90 backdrop-blur border border-white/10 p-4 space-y-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="block text-slate-200 hover:text-white">{l.label}</a>
            ))}
            <a href="#devis" className="block text-center rounded-xl bg-brand-500 px-4 py-2 text-white">Obtenir un devis</a>
          </div>
        )}
      </nav>
    </header>
  )
}
