import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { 
  AnimatedShield, 
  AnimatedLock, 
  AnimatedEye, 
  AnimatedAlert, 
  FloatingElements 
} from './AnimatedSecurityIcons'

export default function Hero() {
  return (
    <section id="accueil" className="relative pt-2 overflow-hidden">
      <FloatingElements />
      {/* Fond principal */}
      <motion.div
        className="absolute inset-0 -z-10 bg-slate-940"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url('/images/hero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        aria-hidden="true"
      />

      {/* Overlay grid */}
      <motion.div 
        className="absolute inset-0 -z-10 bg-grid opacity-20"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne texte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
          {/* Badge disponibilité avec icône animée */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedShield className="w-4 h-4 mr-2" />
            Service disponible 24/7
          </motion.div>

            {/* Titre principal */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Services de sécurité
              <motion.span 
                className="text-blue-400"
                animate={{ color: ["#3b82f6", "#60a5fa", "#3b82f6"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {" "}professionnels
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="mt-6 text-lg text-slate-200 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Gardiennage 24/7, rondes, contrôle d'accès, télésurveillance et interventions rapides à Abidjan et partout en Côte d'Ivoire.
            </motion.p>

            {/* Boutons d'action */}
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a 
                href="#devis" 
                className="inline-flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-600 transition-all px-8 py-4 text-white font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Obtenez un devis gratuit
              </motion.a>
              
              <motion.a 
                href="#services" 
                className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-all px-8 py-4 text-white font-semibold border border-white/20 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Découvrir nos services
              </motion.a>
            </motion.div>

            {/* Statistiques animées */}
            <motion.div 
              className="mt-12 grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-3xl font-bold text-blue-400">
                  <CountUp 
                    end={15} 
                    duration={2} 
                    suffix="+" 
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <p className="text-sm text-slate-300">Années d'expérience</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-3xl font-bold text-blue-400">
                  <CountUp 
                    end={800} 
                    duration={2} 
                    suffix="+" 
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <p className="text-sm text-slate-300">Clients satisfaits</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-blue-400">
                  <CountUp 
                    end={15} 
                    duration={2} 
                    suffix=" min" 
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <p className="text-sm text-slate-300">Temps de réponse</p>
              </motion.div>
            </motion.div>

            {/* Liste d'avantages */}
            <motion.div 
              className="mt-8 flex items-center gap-6 text-sm text-slate-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <span className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Agents certifiés
              </span>
              <span className="opacity-50">•</span>
              <span className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Réponse &lt; 15 min
              </span>
              <span className="opacity-50">•</span>
              <span className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Assurance RC Pro
              </span>
            </motion.div>
          </motion.div>

          {/* Colonne image */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <motion.img
              src="/images/hero.png"
              alt="Agent de sécurité professionnel"
              className="rounded-2xl shadow-2xl w-full h-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.div 
              className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Disponible 24/7
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Vague décorative en bas */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <motion.path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="rgba(15, 23, 42, 0.8)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </svg>
      </motion.div>
    </section>
  )
}