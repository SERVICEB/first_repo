# Guide de Contribution

Merci de votre intérêt pour le projet EMA ! Nous sommes ravis que vous souhaitiez contribuer. Voici les directives pour vous aider à démarrer.

## 📋 Table des matières
- [Code de Conduite](#-code-de-conduite)
- [Processus de Contribution](#-processus-de-contribution)
- [Environnement de Développement](#-environnement-de-dveloppement)
- [Standards de Code](#-standards-de-code)
- [Structure du Projet](#-structure-du-projet)
- [Commit Messages](#-commit-messages)
- [Pull Requests](#-pull-requests)
- [Tests](#-tests)
- [Déploiement](#-dploiement)

## ✨ Code de Conduite

Ce projet et tous ses participants sont régis par notre [Code de Conduite](CODE_OF_CONDUCT.md). En participant, vous êtes tenu de respecter ce code.

## 🚀 Processus de Contribution

1. **Ouvrir une Issue**
   - Vérifiez d'abord si une issue similaire existe déjà
   - Décrivez clairement le problème ou la fonctionnalité
   - Utilisez les modèles fournis pour les bugs et les nouvelles fonctionnalités

2. **Fork le Projet**
   - Créez un fork du projet sur GitHub
   - Clonez votre fork localement
   ```bash
   git clone https://github.com/votre-utilisateur/emaV3.git
   ```

3. **Créer une Branche**
   - Créez une branche pour votre fonctionnalité :
   ```bash
   git checkout -b feature/nom-de-la-fonctionnalite
   ```
   - Pour les corrections de bugs :
   ```bash
   git checkout -b fix/nom-du-bug
   ```

4. **Faites vos Modifications**
   - Suivez les standards de code ci-dessous
   - Ajoutez des tests si nécessaire
   - Mettez à jour la documentation

5. **Soumettez vos Modifications**
   - Poussez vos modifications vers votre fork
   - Créez une Pull Request vers la branche `main`

## 💻 Environnement de Développement

### Prérequis
- Node.js 16+
- npm 8+
- MongoDB 5.0+

### Configuration
1. **Backend**
   ```bash
   cd backend
   cp .env.example .env
   # Modifiez les variables selon votre configuration
   npm install
   npm run dev
   ```

2. **Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## 📝 Standards de Code

### JavaScript/React
- Utilisez des composants fonctionnels avec des Hooks
- Nommez les composants en PascalCase
- Utilisez des noms descriptifs pour les variables et fonctions
- Évitez les composants trop longs (max 200 lignes)
- Documentez les props avec PropTypes ou TypeScript

### CSS/SCSS
- Utilisez des modules CSS ou styled-components
- Suivez la convention BEM pour les noms de classes
- Évitez les styles en ligne sauf si absolument nécessaire

## 🏗 Structure du Projet

```
emaV3/
├── backend/           # Code source du backend
│   ├── controllers/   # Contrôleurs API
│   ├── models/        # Modèles MongoDB
│   ├── routes/        # Définition des routes
│   └── server.cjs     # Point d'entrée du serveur
│
├── frontend/          # Application React
│   ├── public/        # Fichiers statiques
│   └── src/
│       ├── components/ # Composants réutilisables
│       ├── pages/      # Composants de page
│       ├── styles/     # Fichiers de style
│       └── App.jsx     # Composant racine
│
├── .gitignore
├── README.md
└── CONTRIBUTING.md
```

## ✏️ Commit Messages

Suivez le format [Conventional Commits](https://www.conventionalcommits.org/) :

```
<type>[scope optionnel]: <description>

[corps optionnel]

[pied de page optionnel]
```

Types de commit :
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Mise en forme, point-virgule manquant, etc.
- `refactor`: Modification du code qui ne corrige pas un bug ni n'ajoute une fonctionnalité
- `test`: Ajout de tests
- `chore`: Mise à jour des tâches de construction, gestionnaire de paquets, etc.

Exemple :
```
feat(auth): ajouter l'authentification Google

- Ajout du bouton de connexion Google
- Configuration du middleware Passport
- Mise à jour de la documentation

Closes #123
```

## 🔄 Pull Requests

1. Assurez-vous que votre branche est à jour avec `main`
2. Exécutez les tests
3. Mettez à jour la documentation si nécessaire
4. Ajoutez une description claire de vos modifications
5. Référencez les issues concernées
6. Attendez la revue de l'équipe

## 🧪 Tests

### Exécuter les tests
```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

### Couverture de code
Nous visons une couverture de test d'au moins 80%.

## 🚀 Déploiement

### Environnements
- **Production** : Déploiement automatique depuis la branche `main`
- **Staging** : Déploiement depuis la branche `staging`

### Processus de Déploiement
1. Mettez à jour le numéro de version dans `package.json`
2. Mettez à jour le fichier CHANGELOG.md
3. Créez un tag de version :
   ```bash
   git tag -a v1.0.0 -m "Version 1.0.0"
   git push origin v1.0.0
   ```
4. Créez une Release sur GitHub

## 🤝 Relecture de Code
- Soyez constructif et respectueux
- Posez des questions plutôt que de faire des hypothèses
- Expliquez pourquoi vous suggérez un changement
- Célébrez les bonnes pratiques et les améliorations

## 🙋 Besoin d'Aide ?
- Consultez les issues existantes
- Rejoignez notre canal Slack/chat
- Contactez l'équipe principale

Merci de contribuer à EMA ! Votre travail est grandement apprécié. 💜
