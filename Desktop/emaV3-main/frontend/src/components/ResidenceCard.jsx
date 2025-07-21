import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MediaGallery from './MediaGallery';
import './ResidenceCard.css';

// Configuration de l'API URL avec détection d'environnement
const getApiUrl = () => {
  // En production sur Render
  if (window.location.hostname.includes('onrender.com')) {
    return 'https://ema-v3-backend.onrender.com';
  }
  // En développement local
  return import.meta.env.VITE_API_URL || 'http://localhost:5000';
};

const API_URL = getApiUrl();

export default function ResidenceCard({ residence, onEdit, onDelete, user }) {
  const navigate = useNavigate();
  const [showGallery, setShowGallery] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Logs de débogage améliorés
  console.log('=== ResidenceCard Debug ===');
  console.log('Residence ID:', residence._id);
  console.log('Media count:', residence.media?.length);
  const firstMedia = residence.media?.[0];
  console.log('First media:', firstMedia);
  console.log('API URL:', API_URL);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
  };

  // Fonction améliorée pour obtenir l'URL complète d'un média
  const getMediaUrl = (media) => {
    if (!media?.url) {
      console.warn('Media URL manquante:', media);
      return null;
    }
    
    let mediaUrl;
    
    // Si l'URL est déjà complète (commence par http)
    if (media.url.startsWith('http')) {
      mediaUrl = media.url;
    } 
    // Pour Render, essayer différents formats d'URL
    else {
      // Nettoyer l'URL de tout slash en début
      const cleanUrl = media.url.replace(/^\/+/, '');
      
      // Essayer différents patterns courants
      if (cleanUrl.startsWith('uploads/')) {
        mediaUrl = `${API_URL}/${cleanUrl}`;
      } else if (cleanUrl.startsWith('media/')) {
        mediaUrl = `${API_URL}/${cleanUrl}`;
      } else {
        // Fallback: ajouter uploads/ si pas présent
        mediaUrl = `${API_URL}/uploads/${cleanUrl}`;
      }
    }
    
    console.log('URL générée:', {
      originalUrl: media.url,
      finalUrl: mediaUrl,
      baseUrl: API_URL,
      environment: window.location.hostname.includes('onrender.com') ? 'production' : 'development'
    });
    
    return mediaUrl;
  };

  // Fonction pour gérer les erreurs d'image avec tentatives multiples
  const handleImageError = async (e, media) => {
    console.error('=== ERREUR CHARGEMENT IMAGE ===');
    console.error('URL tentée:', e.target.src);
    console.error('Media original:', media);
    console.error('Status de la requête:', e.target.complete ? 'Complete mais erreur' : 'Incomplete');
    
    // Essayer plusieurs URLs alternatives
    const alternatives = [
      `${API_URL}/uploads/${media.url.replace(/^\/+/, '')}`,
      `${API_URL}/media/${media.url.replace(/^\/+/, '')}`,
      `${API_URL}/${media.url.replace(/^\/+/, '')}`,
      `${API_URL}/public/${media.url.replace(/^\/+/, '')}`,
    ];
    
    // Tester chaque alternative
    for (let altUrl of alternatives) {
      if (altUrl !== e.target.src) {
        console.log('Tentative URL alternative:', altUrl);
        try {
          // Test rapide de l'URL
          const response = await fetch(altUrl, { method: 'HEAD' });
          if (response.ok) {
            console.log('✅ URL alternative trouvée:', altUrl);
            e.target.src = altUrl;
            return;
          }
        } catch (err) {
          console.log('❌ URL alternative échouée:', altUrl);
        }
      }
    }
    
    console.error('❌ Toutes les alternatives ont échoué');
    setImageError(true);
  };

  // Fonction pour gérer le clic sur l'image
  const handleImageClick = () => {
    navigate(`/residence/${residence._id}`);
  };

  // Fonction pour gérer le clic sur la galerie
  const handleGalleryClick = (e) => {
    e.stopPropagation();
    setShowGallery(true);
  };

  // Test de connectivité avec l'API et vérification des endpoints
  const testApiConnection = async () => {
    console.log('🔍 Test de connectivité API...');
    
    try {
      // Test endpoint principal
      const healthResponse = await fetch(`${API_URL}/health`);
      console.log('API Health Status:', healthResponse.status);
      
      // Test endpoint des résidences pour voir la structure des URLs de média
      const residencesResponse = await fetch(`${API_URL}/api/residences?limit=1`);
      if (residencesResponse.ok) {
        const data = await residencesResponse.json();
        console.log('Sample residence data:', data);
        console.log('Sample media URLs:', data.residences?.[0]?.media);
      }
      
    } catch (error) {
      console.error('❌ API non accessible:', error);
      console.log('Vérifiez que votre backend est bien déployé sur:', API_URL);
    }
  };

  // Exécuter le test au montage du composant
  React.useEffect(() => {
    testApiConnection();
  }, []);

  return (
    <div className="residence-card">
      <div className="card-image-wrapper" onClick={handleImageClick}>
        {firstMedia && !imageError ? (
          firstMedia.type === 'image' ? (
            <img
              className="card-image"
              src={getMediaUrl(firstMedia)}
              alt={residence.title}
              onError={(e) => handleImageError(e, firstMedia)}
              onLoad={() => {
                console.log('✅ Image chargée avec succès:', getMediaUrl(firstMedia));
                setImageError(false);
              }}
              loading="lazy"
            />
          ) : (
            <video
              className="card-image"
              src={getMediaUrl(firstMedia)}
              poster={firstMedia.thumbnail ? getMediaUrl(firstMedia.thumbnail) : undefined}
              onError={(e) => handleImageError(e, firstMedia)}
              onLoadedData={() => {
                console.log('✅ Vidéo chargée avec succès:', getMediaUrl(firstMedia));
              }}
            />
          )
        ) : (
          <div className="card-placeholder">
            {imageError ? '❌ Erreur de chargement' : '📷 Aucun média'}
            {imageError && (
              <div style={{ fontSize: '12px', marginTop: '5px' }}>
                URL: {firstMedia ? getMediaUrl(firstMedia) : 'N/A'}
              </div>
            )}
          </div>
        )}

        {/* Bouton pour ouvrir la galerie */}
        {residence.media?.length > 1 && (
          <button 
            className="gallery-btn"
            onClick={handleGalleryClick}
            title="Voir toutes les photos"
          >
            📷 {residence.media.length}
          </button>
        )}

        {user?.role === 'owner' && (
          <div className="card-actions">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onEdit();
              }} 
              className="btn btn-edit" 
              title="Modifier"
            >
              ✏️
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }} 
              className="btn btn-delete" 
              title="Supprimer"
            >
              🗑️
            </button>
          </div>
        )}
      </div>

      <div className="card-content">
        <h3 onClick={handleImageClick} className="clickable-title">{residence.title}</h3>
        <p className="price">{formatPrice(residence.price)}</p>
        <p className="location">📍 {residence.location}</p>
        <button
          onClick={() => navigate(`/residence/${residence._id}`)}
          className="btn btn-detail"
        >
          Voir les disponibilités
        </button>
      </div>

      {/* Galerie d'images/vidéos */}
      {showGallery && (
        <MediaGallery
          media={residence.media || []}
          onClose={() => setShowGallery(false)}
        />
      )}
    </div>
  );
}