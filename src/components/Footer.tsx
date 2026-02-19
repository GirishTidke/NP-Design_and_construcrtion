import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = ['Home', 'About', 'Services', 'Projects', 'Contact'];
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Mail, href: '#' },
  ];

  return (
    <footer className="bg-[#0F0F0F] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold mb-4">
              <span className="text-white">NP</span>{' '}
              <span className="text-[#D4AF37]">Design & Construction</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building excellence with precision, innovation, and integrity. Your vision, our expertise.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-[#1a1a1a] p-3 rounded-lg text-gray-400 hover:text-[#D4AF37] hover:bg-[#2a2a2a] transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NP Design & Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
