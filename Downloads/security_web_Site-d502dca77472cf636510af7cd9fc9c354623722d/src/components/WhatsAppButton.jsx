import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = "Bonjour, je souhaite obtenir un devis pour des services de sécurité.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2250707070707?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Contacter via WhatsApp"
      >
        <MessageCircle size={24} />
      </button>

      {/* WhatsApp Contact Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-slate-900 rounded-xl p-6 max-w-sm mx-4">
            <h3 className="text-white font-semibold mb-2">Contact WhatsApp</h3>
            <p className="text-slate-300 text-sm mb-4">
              Cliquez pour ouvrir WhatsApp et nous contacter directement
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleWhatsAppClick}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-lg py-2 px-4 text-sm font-medium"
              >
                Ouvrir WhatsApp
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white rounded-lg py-2 px-4 text-sm font-medium"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
