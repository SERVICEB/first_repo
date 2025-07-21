import axios from "axios";

/** 🔧 Création d'une instance Axios avec baseURL depuis .env ou localhost */
const isProduction = window.location.hostname !== 'localhost';
const baseURL = isProduction
  ? 'https://ema-v3-backend.onrender.com/api'
  : 'http://localhost:10000/api'; // 🔧 CORRECTION: Port 10000 au lieu de 5000

console.log('=== API Configuration ===');
console.log('Environment:', isProduction ? 'Production' : 'Development');
console.log('Base URL:', baseURL);

const api = axios.create({
  baseURL,
  headers: { 
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  timeout: 30000, // 🆕 Timeout de 30 secondes
});

/** 🔐 Ajout automatique du token dans les en-têtes Authorization */
api.interceptors.request.use(
  (config) => {
    console.log('=== API Request ===');
    console.log('URL:', `${config.baseURL}${config.url}`);
    console.log('Method:', config.method?.toUpperCase());
    console.log('Headers:', config.headers);
    
    // Ne pas logger les données sensibles en production
    if (!isProduction) {
      console.log('Data:', config.data);
    }
    
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('✅ Token found and added to headers');
    } else {
      console.log('⚠️ No token found in localStorage');
    }
    return config;
  },
  (error) => {
    console.error('=== API Request Error ===');
    console.error('Error:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log('=== API Response Success ===');
    console.log('✅ Status:', response.status);
    console.log('✅ URL:', response.config.url);
    
    // Ne pas logger toutes les données en production
    if (!isProduction) {
      console.log('Data:', response.data);
    }
    
    return response;
  },
  (error) => {
    console.error('=== API Error ===');
    
    if (error.response) {
      // Le serveur a répondu avec un code d'erreur
      console.error('=== API Response Error ===');
      console.error('❌ Status:', error.response.status);
      console.error('❌ URL:', error.config?.url);
      console.error('❌ Data:', error.response.data);
      
      // Gestion spécifique des erreurs
      switch (error.response.status) {
        case 401:
          console.error('🔐 Authentication error - Token may be expired or invalid');
          // Optionnel: rediriger vers login ou nettoyer le localStorage
          // localStorage.removeItem('token');
          // window.location.href = '/login';
          break;
        case 403:
          console.error('🚫 Permission denied - User may not have required role');
          break;
        case 404:
          console.error('🔍 Resource not found - Check API endpoint');
          break;
        case 500:
          console.error('🔥 Server error - Check backend logs');
          break;
        case 502:
          console.error('🌐 Bad Gateway - Backend server may be down');
          break;
        case 503:
          console.error('⏳ Service Unavailable - Backend server is temporarily down');
          break;
        default:
          console.error(`❓ HTTP Error ${error.response.status}`);
      }
    } else if (error.request) {
      // La requête a été faite mais pas de réponse
      console.error('=== API Request Failed ===');
      console.error('📡 Request made but no response received');
      
      if (error.code === 'ECONNABORTED') {
        console.error('⏰ Request timeout');
      } else if (error.code === 'ERR_NETWORK') {
        console.error('🌐 Network error - Check internet connection or CORS');
      } else if (error.code === 'ERR_BLOCKED_BY_CLIENT') {
        console.error('🛡️ Request blocked by browser (ad blocker, etc.)');
      } else {
        console.error('❓ Unknown network error:', error.code);
      }
    } else {
      // Erreur dans la configuration de la requête
      console.error('=== API Configuration Error ===');
      console.error('⚙️ Error in request setup:', error.message);
    }
    
    // Stack trace uniquement en développement
    if (!isProduction) {
      console.error('Stack:', error.stack);
    }
    
    return Promise.reject(error);
  }
);

/* ─────────────── RESIDENCES ─────────────── */

export const fetchResidences = async () => {
  try {
    const { data } = await api.get("/residences");
    return data;
  } catch (error) {
    console.error('Erreur lors du chargement des résidences:', error.message);
    throw error;
  }
};

export const getResidenceById = async (id) => {
  try {
    if (!id) throw new Error('ID résidence requis');
    const { data } = await api.get(`/residences/${id}`);
    return data;
  } catch (error) {
    console.error(`Erreur lors du chargement de la résidence ${id}:`, error.message);
    throw error;
  }
};

export const createResidence = async (formData) => {
  try {
    const { data } = await api.post("/residences", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    console.error('Erreur lors de la création de la résidence:', error.message);
    throw error;
  }
};

export const updateResidence = async (id, formData) => {
  try {
    if (!id) throw new Error('ID résidence requis');
    const { data } = await api.put(`/residences/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de la résidence ${id}:`, error.message);
    throw error;
  }
};

export const deleteResidence = async (id) => {
  try {
    if (!id) throw new Error('ID résidence requis');
    const { data } = await api.delete(`/residences/${id}`);
    return data;
  } catch (error) {
    console.error(`Erreur lors de la suppression de la résidence ${id}:`, error.message);
    throw error;
  }
};

/* ─────────────── ANNONCES ─────────────── */

export const fetchAnnonces = async () => {
  try {
    const { data } = await api.get("/annonces");
    return data;
  } catch (error) {
    console.error('Erreur lors du chargement des annonces:', error.message);
    throw error;
  }
};

export const createAnnonce = async (formData) => {
  try {
    const { data } = await api.post("/annonces", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    console.error('Erreur lors de la création de l\'annonce:', error.message);
    throw error;
  }
};

export const updateAnnonce = async (id, formData) => {
  try {
    if (!id) throw new Error('ID annonce requis');
    const { data } = await api.put(`/annonces/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de l'annonce ${id}:`, error.message);
    throw error;
  }
};

export const deleteAnnonce = async (id) => {
  try {
    if (!id) throw new Error('ID annonce requis');
    const { data } = await api.delete(`/annonces/${id}`);
    return data;
  } catch (error) {
    console.error(`Erreur lors de la suppression de l'annonce ${id}:`, error.message);
    throw error;
  }
};

/* ─────────────── UTILISATEURS ─────────────── */

export const login = async (credentials) => {
  try {
    if (!credentials?.email || !credentials?.password) {
      throw new Error('Email et mot de passe requis');
    }
    const { data } = await api.post("/auth/login", credentials);
    
    // Sauvegarder le token si présent
    if (data.token) {
      localStorage.setItem('token', data.token);
      console.log('✅ Token sauvegardé');
    }
    
    return data;
  } catch (error) {
    console.error('Erreur lors de la connexion:', error.message);
    throw error;
  }
};

export const register = async (newUser) => {
  try {
    if (!newUser?.email || !newUser?.password || !newUser?.firstName || !newUser?.lastName) {
      throw new Error('Tous les champs requis doivent être remplis');
    }
    const { data } = await api.post("/auth/register", newUser);
    return data;
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error.message);
    throw error;
  }
};

export const getUserProfile = async () => {
  try {
    const { data } = await api.get("/auth/profile");
    return data;
  } catch (error) {
    console.error('Erreur lors du chargement du profil:', error.message);
    throw error;
  }
};

export const logout = () => {
  try {
    localStorage.removeItem('token');
    console.log('✅ Déconnexion réussie');
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
  }
};

/* ─────────────── RÉSERVATIONS ─────────────── */

export const createReservation = async (payload) => {
  try {
    if (!payload) throw new Error('Données de réservation requises');
    const { data } = await api.post("/reservations", payload);
    return data;
  } catch (error) {
    console.error('Erreur lors de la création de la réservation:', error.message);
    throw error;
  }
};

export const fetchReservations = async () => {
  try {
    const { data } = await api.get("/reservations");
    return data;
  } catch (error) {
    console.error('Erreur lors du chargement des réservations:', error.message);
    throw error;
  }
};

export const deleteReservation = async (id) => {
  try {
    if (!id) throw new Error('ID réservation requis');
    const { data } = await api.delete(`/reservations/${id}`);
    return data;
  } catch (error) {
    console.error(`Erreur lors de la suppression de la réservation ${id}:`, error.message);
    throw error;
  }
};

/** 📦 Export de l'instance Axios si besoin d'appels custom */
export default api;