import { motion } from 'framer-motion'
import CountUp from 'react-countup'

export default function Sectors() {
  const sectors = [
    {
      name: 'Entreprises & Bureaux',
      img: '/images/bureau.png',
      description: 'Sécurité complète pour vos locaux professionnels',
      features: ['Contrôle d\'accès', 'Vidéosurveillance', 'Agents de sécurité'],
      clients: '500+ entreprises',
      icon: '🏢'
    },
    {
      name: 'Résidentiel & Copropriétés',
      img: '/images/residence.jpeg',
      description: 'Protection 24/7 pour votre résidence',
      features: ['Gardiennage', 'Systèmes d\'alarme', 'Patrouilles'],
      clients: '200+ résidences',
      icon: '🏠'
    },
    {
      name: 'Commerces & Centres Commerciaux',
      img: '/images/mall.png',
      description: 'Sécurité adaptée aux espaces commerciaux',
      features: ['Surveillance 24/7', 'Prévention des vols', 'Gestion des foules'],
      clients: '300+ commerces',
      icon: '🛍️'
    },
    {
      name: 'Événementiel & Réceptions',
      img: '/images/enven.png',
      description: 'Sécurité événementielle professionnelle',
      features: ['Contrôle d\'accès', 'Gestion des foules', 'Sécurité VIP'],
      clients: '150+ événements',
      icon: '🎪'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 1.1 },
    visible: { scale: 1 },
    hover: { scale: 1.05 }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  return (
    <section id="secteurs" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Secteurs d'intervention
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Des solutions de sécurité adaptées à chaque secteur d'activité
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sectors.map((sector, index) => (
            <motion.div 
              key={index}
              className="relative group"
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                  borderColor: "rgba(59, 130, 246, 0.5)"
                }}
              >
                {/* Image avec overlay animé */}
                <motion.div 
                  className="relative h-64 overflow-hidden"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <motion.img
                    src={sector.img}
                    alt={sector.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    variants={imageVariants}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 0.9 }}
                  />
                  
                  {/* Icone animée */}
                  <motion.div 
                    className="absolute top-4 right-4 text-3xl"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ rotate: 360 }}
                  >
                    {sector.icon}
                  </motion.div>
                </motion.div>

                {/* Contenu */}
                <motion.div 
                  className="p-6"
                  variants={textVariants}
                >
                  <motion.h3 
                    className="text-xl font-bold text-white mb-2"
                    variants={textVariants}
                  >
                    {sector.name}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-slate-300 text-sm mb-4"
                    variants={textVariants}
                  >
                    {sector.description}
                  </motion.p>

                  <motion.div 
                    className="space-y-2 mb-4"
                    variants={textVariants}
                  >
                    {sector.features.map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex items-center text-sm text-slate-400"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <span className="text-blue-400 mr-2">✓</span>
                        {feature}
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div 
                    className="flex items-center justify-between"
                    variants={textVariants}
                  >
                    <span className="text-sm text-slate-400">Clients</span>
                    <span className="text-blue-400 font-semibold">
                      <CountUp 
                        end={parseInt(sector.clients)} 
                        duration={2} 
                        enableScrollSpy
                        scrollSpyOnce
                      />
                      +
                    </span>
                  </motion.div>
                </motion.div>

                {/* Overlay au survol */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistiques globales */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div 
              className="text-center"
              variants={cardVariants}
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">
                <CountUp 
                  end={4} 
                  duration={2} 
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <p className="text-slate-300">Secteurs</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={cardVariants}
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">
                <CountUp 
                  end={1150} 
                  duration={2} 
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <p className="text-slate-300">Clients</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={cardVariants}
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">
                <CountUp 
                  end={15} 
                  duration={2} 
                  suffix="+" 
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <p className="text-slate-300">Années</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={cardVariants}
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">
                <CountUp 
                  end={24} 
                  duration={2} 
                  suffix="/7" 
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <p className="text-slate-300">Disponibilité</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
