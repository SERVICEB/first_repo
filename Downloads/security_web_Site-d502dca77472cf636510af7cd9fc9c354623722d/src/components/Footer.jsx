import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation des bulles
  const bubbleVariants = {
    initial: { 
      y: 100,
      opacity: 15,
      scale: 0
    },
    animate: (i) => ({
      y: -100,
      opacity: [0, 0.3, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 8 + i * 2,
        repeat: Infinity,
        delay: i * 1.5,
        ease: "easeOut"
      }
    })
  };

  // Variants d'animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const copyrightVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer 
      ref={ref}
      id="contact" 
      className="pt-10 pb-14 bg-slate-950 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Bulles animées en fond */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"
            variants={bubbleVariants}
            initial="initial"
            animate="animate"
            custom={i}
            style={{
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
              left: `${10 + i * 15}%`,
              bottom: "-50px"
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid gap-6 md:grid-cols-3 text-slate-300"
          variants={containerVariants}
        >
          {/* Section 1: Sécurité Pro */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="group"
          >
            <motion.h4 
              variants={titleVariants}
              className="text-white font-semibold text-lg"
            >
              Sécurité Pro
            </motion.h4>
            <motion.p 
              variants={itemVariants}
              className="mt-2 text-sm leading-relaxed"
            >
              Abidjan, Côte d'Ivoire — Sécuriser vos sites, c'est notre métier.
            </motion.p>
          </motion.div>

          {/* Section 2: Contact */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="group"
          >
            <motion.h4 
              variants={titleVariants}
              className="text-white font-semibold text-lg"
            >
              Contact
            </motion.h4>
            <motion.p 
              variants={itemVariants}
              className="mt-2 text-sm leading-relaxed"
            >
              +225 xx xx xx xx
              <br />
              contact@securitepro.ci
            </motion.p>
          </motion.div>

          {/* Section 3: Horaires */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="group"
          >
            <motion.h4 
              variants={titleVariants}
              className="text-white font-semibold text-lg"
            >
              Horaires
            </motion.h4>
            <motion.p 
              variants={itemVariants}
              className="mt-2 text-sm leading-relaxed"
            >
              Opérationnel 24/7
              <br />
              Bureaux: Lun–Ven 08h–18h
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          variants={copyrightVariants}
          className="mt-8 border-t border-white/10 pt-6"
        >
          <motion.p 
            className="text-xs text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            © {new Date().getFullYear()} Sécurité Pro. Tous droits réservés.
          </motion.p>
          
          <motion.p 
            className="mt-2 text-xs text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Développé par <span className="text-white font-medium">Sosthen Dev</span>
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
