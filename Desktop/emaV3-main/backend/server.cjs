const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const connectDB = require('./config/db.js');
const residenceRoutes = require('./routes/residenceRoutes.cjs');
const authRoutes = require('./routes/authRoutes.cjs');
const reservationRoutes = require('./routes/reservationRoutes.cjs');
const annoncesRoutes = require('./routes/annoncesRoutes.cjs');

dotenv.config();
connectDB();

const app = express();

// ✅ Configuration CORS corrigée
const allowedOrigins = [
  'https://ema-v3-front.onrender.com', // Frontend principal
  'http://localhost:5173',              // Vite dev
  'http://localhost:3000',              // React dev
  'http://localhost:8080'               // Autres ports dev
];

const corsOptions = {
  origin: function (origin, callback) {
    // Autoriser les requêtes sans origin (ex: applications mobiles, Postman)
    if (!origin) {
      console.log('✅ Requête sans origin autorisée (mobile/Postman)');
      return callback(null, true);
    }
    
    if (allowedOrigins.includes(origin)) {
      console.log('✅ Origine autorisée:', origin);
      callback(null, true);
    } else {
      console.log('❌ Origine bloquée par CORS:', origin);
      console.log('Origins autorisées:', allowedOrigins);
      callback(new Error('Non autorisé par CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type', 
    'Authorization', 
    'X-Requested-With',
    'Accept',
    'Origin'
  ],
  credentials: true,
  optionsSuccessStatus: 200 // Pour compatibilité avec les anciens navigateurs
};

// Appliquer CORS
app.use(cors(corsOptions));

// Gérer explicitement les requêtes OPTIONS (preflight)
app.options('*', cors(corsOptions));

// Middlewares
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// 📂 Création du dossier uploads/ s'il n'existe pas
const uploadsPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
  console.log('📁 Dossier uploads créé');
}

// 📸 Servir les fichiers statiques (images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads'), {
  setHeaders: (res, path) => {
    // Ajouter des en-têtes CORS pour les fichiers statiques
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Cross-Origin-Resource-Policy', 'cross-origin');
  }
}));

// Middleware de logging pour déboguer
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - Origin: ${req.get('Origin') || 'No Origin'}`);
  next();
});

// Route de test principale
app.get('/', (_req, res) => {
  res.json({
    message: '✅ API EMA Résidences & Annonces est opérationnelle',
    timestamp: new Date().toISOString(),
    backend_url: 'https://ema-v3-backend.onrender.com',
    frontend_url: 'https://ema-v3-front.onrender.com'
  });
});

// Route de test de santé
app.get('/health', (_req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Routes API
app.use('/api/residences', residenceRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/annonces', annoncesRoutes);

// Gestionnaire d'erreur CORS
app.use((err, req, res, next) => {
  if (err.message === 'Non autorisé par CORS') {
    return res.status(403).json({
      error: 'CORS Error',
      message: 'Origine non autorisée',
      origin: req.get('Origin'),
      allowedOrigins: allowedOrigins
    });
  }
  next(err);
});

// Gestionnaire d'erreur générique
app.use((err, req, res, next) => {
  console.error('❌ Erreur serveur:', err);
  res.status(500).json({
    error: 'Erreur interne du serveur',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Une erreur est survenue'
  });
});

// Route 404
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route non trouvée',
    path: req.originalUrl,
    method: req.method
  });
});

// Lancement du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur EMA Backend en ligne`);
  console.log(`📍 URL: https://ema-v3-backend.onrender.com`);
  console.log(`🔌 Port: ${PORT}`);
  console.log(`🌐 Frontend autorisé: https://ema-v3-front.onrender.com`);
  console.log(`📁 Dossier uploads: ${uploadsPath}`);
});

// Gestionnaire de fermeture propre
process.on('SIGTERM', () => {
  console.log('🛑 Arrêt du serveur...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('🛑 Arrêt du serveur (Ctrl+C)...');
  process.exit(0);
});