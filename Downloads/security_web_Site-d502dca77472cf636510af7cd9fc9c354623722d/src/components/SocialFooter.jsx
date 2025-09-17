import { Facebook, Linkedin, MessageCircle, Globe, Phone, Mail } from 'lucide-react';

export default function SocialFooter() {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/securiteproci',
      color: 'text-blue-400 hover:text-blue-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/securiteproci',
      color: 'text-blue-400 hover:text-blue-300'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/2250707070707',
      color: 'text-green-400 hover:text-green-300'
    }
  ];

  return (
    <div className="border-t border-white/10 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-semibold mb-4">Réseaux Sociaux</h4>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} transition-colors`}
                aria-label={`Suivre sur ${social.name}`}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <div className="space-y-2">
            <a href="tel:+2250707070707" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
              <Phone size={16} />
              <span>+225 07 07 07 07 07</span>
            </a>
            <a href="mailto:contact@securitepro.ci" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
              <Mail size={16} />
              <span>contact@securitepro.ci</span>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Site Web</h4>
          <a 
            href="https://securitepro.ci" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <Globe size={16} />
            <span>securitepro.ci</span>
          </a>
        </div>
      </div>
    </div>
  );
}
