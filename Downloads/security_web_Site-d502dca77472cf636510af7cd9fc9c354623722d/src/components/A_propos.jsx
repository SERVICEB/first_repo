import { motion } from 'framer-motion'
import CountUp from 'react-countup'

export default function A_propos() {
  const stats = [
    { value: 800, suffix: "+", label: "Clients heureux" },
    { value: 15, suffix: "+", label: "Années d'expertise" },
    { value: 100, suffix: "%", label: "Satisfaction" }
  ]

  const avantages = [
    { title: "Sécurité avancée", desc: "Technologies modernes" },
    { title: "Support rapide", desc: "Assistance 24/7" },
    { title: "Équipe dédiée", desc: "Experts certifiés" },
    { title: "Présence nationale", desc: "Partout en Côte d'Ivoire" }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id='a-propos' className="py-20 bg-slate-900 overflow-hidden">
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
            Découvrez Sécurité Pro
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Nous sommes le leader de la sécurité privée en Côte d'Ivoire. 
            Nos solutions s'adaptent à tous vos besoins, avec réactivité et professionnalisme.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={statVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold text-blue-400 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CountUp 
                  end={stat.value} 
                  duration={2.5} 
                  suffix={stat.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </motion.div>
              <motion.div 
                className="text-slate-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {avantages.map((avantage, index) => (
            <motion.div 
              key={index} 
              className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors duration-300"
              variants={cardVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.2 } 
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.h3 
                className="text-xl font-semibold text-white mb-2"
                whileHover={{ color: "#3b82f6" }}
                transition={{ duration: 0.2 }}
              >
                {avantage.title}
              </motion.h3>
              <motion.p 
                className="text-slate-400"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {avantage.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
