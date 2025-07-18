// import React from 'react';
import { Mail, Twitter, Github, Linkedin,Smartphone  } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const footerSections = [
    {
      title: "Build with DocStar",
      links: [
        { name: "Smart Documentation", href: "https://app.docstar.io/p/getting-started?collectionId=fLMgydvRdvN7" },
        { name: "API Docs", href: "https://app.docstar.io/p/api-documentation-and-integration?collectionId=fLMgydvRdvN7" },
        // { name: "Blogs", href: "#" },
        { name: "Publish Docs", href: "https://app.docstar.io/p/getting-started?collectionId=fLMgydvRdvN7" },
        // { name: "AI Assist", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "https://app.docstar.io/p/getting-started?collectionId=fLMgydvRdvN7" },
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        // { name: "Careers", href: "#" },
        // { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "https://cal.com/docstar-team" },
        { name: "Contact Us", href: "#" },
        // { name: "Status", href: "#" },
        { name: "Community", href: "#" },
        // { name: "Documentation", href: "#" },
      ],
    },
  ];

   return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Logo + Description + Socials */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo size="md" className="text-white" animated={true} />
              <span className="text-2xl font-bold text-white">DocStar</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Beautiful, fast, and reliable API Docs & FAQs built for teams.Transform your documentation workflow with AI.
            </p>

            <div className="flex space-x-4 mb-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Walkover-Web-Solution/hitman-ui",
                },
                { icon: Mail, href: "mailto:support@viasocket.com" },
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

          {/* Footer Sections */}
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

          {/* Mobile App Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mobile App</h3>
            <a
              href="https://play.google.com/store/apps/details?id=com.tech_doc_mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/10 border border-gray-700 w-fit"
            >
              <Smartphone className="h-5 w-5 mr-2" />
              Get it on Android
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-gray-400 text-sm">© 2025 DocStar. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-1">
              A product by{" "}
              <a
                href="https://walkover.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Walkover
              </a>
            </p>
          </div>

          <div className="flex items-center space-x-2 mt-4 md:mt-0">
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