import React from 'react';
import { Mail, Twitter, Github, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const footerSections = [
    {
      title: 'Build with DocStar',
      links: [
        { name: 'Smart Documentation', href: '#' },
        { name: 'API Docs', href: '#' },
        { name: 'Blogs', href: '#' },
        { name: 'Publish Docs', href: '#' },
        { name: 'AI Assist', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Status', href: '#' },
        { name: 'Community', href: '#' },
        { name: 'Documentation', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Logo size="md" className="text-white" animated={true} />
              <span className="text-2xl font-bold text-white">
                DocStar
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Beautiful, fast, and reliable API Docs & FAQs built for teams. Transform your documentation workflow with AI.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: '#' },
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: 'mailto:support@viasocket.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/10 border border-gray-700"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 DocStar. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Contact:</span>
            <a
              href="mailto:support@viasocket.com"
              className="text-white hover:text-gray-300 transition-colors duration-300 text-sm"
            >
              support@viasocket.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;