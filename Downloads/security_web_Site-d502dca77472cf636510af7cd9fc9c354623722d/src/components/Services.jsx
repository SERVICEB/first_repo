import { motion } from 'framer-motion'
import CountUp from 'react-countup'

export default function Services() {
  const services = [
    {
      title: "Sécurité Gardiennage",
      description: "Agents de sécurité professionnels formés pour protéger vos biens et votre personnel.",
      icon: "🛡️",
      features: ["Surveillance 24/7", "Agents certifiés", "Réponse rapide"],
      price: "À partir de 50 000 FCFA/mois"
    },
    {
      title: "Sécurité Événementielle",
      description: "Sécurité complète pour vos événements privés et professionnels.",
      icon: "🎪",
      features: ["Contrôle d'accès", "Gestion des foules", "Plan d'évacuation"],
      price: "À partir de 100 000 FCFA/jour"
    },
    {
      title: "Sécurité Résidentielle",
      description: "Solutions de sécurité adaptées aux résidences et complexes résidentiels.",
      icon: "🏠",
      features: ["Systèmes d'alarme", "Vidéosurveillance", "Patrouilles régulières"],
      price: "À partir de 75 000 FCFA/mois"
    },
    {
      title: "Sécurité Commerciale",
      description: "Protection complète pour vos locaux commerciaux et bureaux.",
      icon: "🏢",
      features: ["Accès contrôlé", "Surveillance vidéo", "Intervention rapide"],
      price: "À partir de 100 000 FCFA/mois"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id='services' className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nos Services de Sécurité
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Des solutions de sécurité adaptées à tous vos besoins, avec professionnalisme et réactivité
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.2 } 
              }}
            >
              <motion.div 
                className="text-5xl mb-4"
                variants={iconVariants}
              >
                {service.icon}
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-bold text-white mb-3"
                variants={cardVariants}
              >
                {service.title}
              </motion.h3>
              
              <motion.p 
                className="text-slate-300 mb-4"
                variants={cardVariants}
              >
                {service.description}
              </motion.p>
              
              <motion.ul 
                className="space-y-2 mb-4"
                variants={containerVariants}
              >
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-center text-slate-300"
                    variants={featureVariants}
                  >
                    <span className="text-blue-400 mr-2">✓</span>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div 
                className="text-lg font-semibold text-blue-400"
                variants={cardVariants}
              >
                {service.price}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="text-center"
              variants={statVariants}
            >
              <div className="text-4xl font-bold text-blue-400">
                <CountUp 
                  end={1200} 
                  duration={3} 
                  suffix="+" 
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <p className="text-xl text-slate-300">Clients Satisfaits</p>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={statVariants}
            >
              <div className="text-4xl font-bold text-blue-400">
                <CountUp 
                  end={25} 
                  duration={3} 
                  suffix="+" 
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <p className="text-xl text-slate-300">Années d'Expérience</p>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={statVariants}
            >
              <div className="text-4xl font-bold text-blue-400">
                <CountUp 
                  end={50} 
                  duration={3} 
                  suffix="+" 
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <p className="text-xl text-slate-300">Services Disponibles</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
