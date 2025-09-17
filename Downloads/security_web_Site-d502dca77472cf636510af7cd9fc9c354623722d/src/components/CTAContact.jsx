import { motion } from 'framer-motion'

export default function CTAContact() {
  return (
    <section id="devis" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 relative overflow-hidden">
      {/* Décorations animées */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 bg-blue-500/30 rounded-full blur-2xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-56 h-56 bg-brand-500/20 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="blur-card p-8 shadow-2xl border border-white/10 bg-white/5 rounded-2xl"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Demander un devis gratuit
          </motion.h3>
          <motion.p
            className="mt-2 text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Dites-nous ce que vous souhaitez sécuriser. Nous revenons vers vous sous 24 h.
          </motion.p>
          <motion.form
            className="mt-6 grid gap-4 sm:grid-cols-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.input
              className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Nom & prénom"
              required
              whileFocus={{ scale: 1.03, borderColor: "#3b82f6" }}
            />
            <motion.input
              className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Téléphone / WhatsApp"
              required
              whileFocus={{ scale: 1.03, borderColor: "#3b82f6" }}
            />
            <motion.input
              className="sm:col-span-2 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Email (optionnel)"
              whileFocus={{ scale: 1.03, borderColor: "#3b82f6" }}
            />
            <motion.textarea
              rows="4"
              className="sm:col-span-2 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Décrivez le site à sécuriser, horaires, besoins…"
              whileFocus={{ scale: 1.03, borderColor: "#3b82f6" }}
            />
            <motion.button
              type="submit"
              className="sm:col-span-2 inline-flex justify-center rounded-xl bg-brand-500 hover:bg-brand-600 transition px-6 py-3 text-white font-semibold shadow-soft"
              whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
              whileTap={{ scale: 0.97 }}
            >
              Envoyer la demande
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}