import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    const { name, phone, email, message } = formData;
    const whatsappMessage = `Bonjour, je suis ${name}. Je souhaite obtenir un devis pour des services de sécurité. ${message ? 'Détails: ' + message : ''} ${email ? 'Email: ' + email : ''}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/2250707070707?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400"
          placeholder="Nom & prénom"
          required
        />
        <input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400"
          placeholder="Téléphone / WhatsApp"
          required
        />
      </div>
      
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400"
        placeholder="Email (optionnel)"
      />
      
      <textarea
        name="message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400"
        placeholder="Décrivez le site à sécuriser, horaires, besoins…"
      ></textarea>
      
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center rounded-xl bg-green-500 hover:bg-green-600 transition px-6 py-3 text-white font-semibold shadow-soft"
      >
        <MessageCircle size={20} className="mr-2" />
        Contacter via WhatsApp
      </button>
    </form>
  )
}
