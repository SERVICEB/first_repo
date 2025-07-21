# Projet EMA - Plateforme de Réservation de Résidences

## 📋 Description
EMA est une plateforme de réservation de résidences offrant une expérience utilisateur fluide pour la découverte et la réservation de logements de qualité.

## 🚀 Fonctionnalités
- Affichage des résidences disponibles avec photos et détails
- Système de réservation sécurisé
- Gestion des profils utilisateurs
- Tableau de bord administrateur
- Gestion des médias (téléchargement d'images)

## 🛠️ Installation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn
- MongoDB (local ou Atlas)

### Configuration
1. Cloner le dépôt :
   ```bash
   git clone [URL_DU_REPO]
   cd emaV3
   ```

2. Installer les dépendances du backend :
   ```bash
   cd backend
   npm install
   ```

3. Installer les dépendances du frontend :
   ```bash
   cd ../frontend
   npm install
   ```

4. Configurer les variables d'environnement :
   - Créer un fichier `.env` dans le dossier `backend` avec :
     ```
     MONGODB_URI=votre_uri_mongodb
     JWT_SECRET=votre_secret_jwt
     ```

## 🚀 Démarrage

### Développement
1. Démarrer le backend :
   ```bash
   cd backend
   npm run dev
   ```

2. Démarrer le frontend :
   ```bash
   cd frontend
   npm run dev
   ```

### Production
```bash
# Backend
cd backend
npm start

# Frontend (après build)
cd frontend
npm run build
npm run preview
```

## 📚 Documentation API
Consultez la documentation de l'API dans le dossier `backend/docs`.

## 🤝 Contribution
Veuillez lire [CONTRIBUTING.md](CONTRIBUTING.md) pour les détails sur notre code de conduite et le processus de soumission des modifications.

## 📄 Licence
Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.
