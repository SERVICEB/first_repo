import { Facebook, Linkedin, MessageCircle, Globe } from 'lucide-react';

export default function SocialMedia() {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/securiteproci',
      color: 'hover:bg-blue-600',
      bgColor: 'bg-blue-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/securiteproci',
      color: 'hover:bg-blue-700',
      bgColor: 'bg-blue-600'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/2250707070707',
      color: 'hover:bg-green-600',
      bgColor: 'bg-green-500'
    },
    {
      name: 'Site Web',
      icon: Globe,
      url: 'https://securitepro.ci',
      color: 'hover:bg-slate-600',
      bgColor: 'bg-slate-500'
    }
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Suivez-nous sur les réseaux sociaux</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Restez informé de nos actualités, promotions et conseils de sécurité en nous suivant sur nos réseaux sociaux.
          </p>
          
          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center p-6 rounded-xl ${social.bgColor} ${social.color} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              >
                <social.icon size={32} className="text-white mb-3" />
                <span className="text-white font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
