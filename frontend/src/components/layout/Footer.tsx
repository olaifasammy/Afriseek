import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const footerData: FooterSection[] = [
    {
      title: "Explore Ecosystem",
      links: [
        { label: "Historical Kingdoms", href: "/kingdoms" },
        { label: "Cultural Timelines", href: "/timelines" },
        { label: "Linguistic Mapping", href: "/languages" },
        { label: "Oral Traditions Archive", href: "/archive" }
      ]
    },
    {
      title: "Governance & Quality",
      links: [
        { label: "Editorial Standards", href: "/standards" },
        { label: "Knowledge Graph Sources", href: "/sources" },
        { label: "Peer Review Protocols", href: "/review" },
        { label: "Contribute Heritage Data", href: "/contribute" }
      ]
    },
    {
      title: "Transparency & Legal",
      links: [
        { label: "Privacy Blueprint", href: "/privacy" },
        { label: "Terms of Engagement", href: "/terms" },
        { label: "Cookie Parameters", href: "/cookies" }
      ]
    }
  ];

  const toggleSection = (title: string): void => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <footer className="bg-[#C0C0C0] border-t border-neutral-100 pt-10 pb-6 px-6 text-neutral-800 select-none">
      <div className="max-w-xl mx-auto w-full">
        
        {/* Brand Header Unit */}
        <div className="flex items-center gap-3 mb-8">
          <img
            src="/images/africa.svg"
            alt="Afriseek Logo"
            className="w-7 h-7 object-contain shrink-0"
            draggable={false}
          />
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-widest text-[var(--afri-gold)]">
              AFRISEEK
            </span>
            <span className="text-[8px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
              Living Knowledge Network
            </span>
          </div>
        </div>

        {/* Structural Accordion Navigation Stream */}
        <div className="flex flex-col border-t border-neutral-200/60 mb-8">
          {footerData.map((section) => {
            const isOpen = openSection === section.title;

            return (
              <div key={section.title} className="border-b border-neutral-200/60">
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between py-4 text-left text-xs font-bold text-neutral-700 tracking-wider cursor-pointer focus:outline-none"
                >
                  <span>{section.title}</span>
                  {/* Stable Premium Chevron SVG */}
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ease-out ${isOpen ? 'rotate-180 text-[var(--afri-gold)]' : 'rotate-0'}`}
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>

                {/* Collapsible Panel Tray */}
                <div
                  className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-60 opacity-100 mb-5' : 'max-h-0 opacity-0'}`}
                >
                  <ul className="flex flex-col gap-3 pl-1">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.href}
                          className="text-[11px] font-semibold text-neutral-500 hover:text-[var(--afri-gold)] active:text-[var(--afri-gold)] transition-colors duration-150 block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unified Gold Inline SVG Network Directory */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 pt-2 text-[var(--afri-gold)]">
          
          {/* Facebook */}
          <a href="#facebook" aria-label="Afriseek Facebook" className="hover:opacity-75 active:scale-95 transition-all">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="#instagram" aria-label="Afriseek Instagram" className="hover:opacity-75 active:scale-95 transition-all">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>

          {/* X */}
          <a href="#x" aria-label="Afriseek X Stream" className="hover:opacity-75 active:scale-95 transition-all">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          {/* YouTube */}
          <a href="#youtube" aria-label="Afriseek YouTube Channel" className="hover:opacity-75 active:scale-95 transition-all">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5">
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
              <path d="m10 15 5-3-5-3z"/>
            </svg>
          </a>

          {/* WhatsApp */}
          <a href="#whatsapp" aria-label="Afriseek WhatsApp" className="hover:opacity-75 active:scale-95 transition-all">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
            </svg>
          </a>

          {/* TikTok */}
          <a href="#tiktok" aria-label="Afriseek TikTok" className="hover:opacity-75 active:scale-95 transition-all">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12.53 21c-3.41 0-6.17-2.76-6.17-6.17 0-3.13 2.33-5.72 5.42-6.12v3.07c-1.42.36-2.47 1.64-2.47 3.17 0 1.8 1.46 3.26 3.26 3.26 1.53 0 2.81-1.05 3.17-2.47h-3.17V9.77h6.11V12c0 4.97-4.03 9-9 9z M16.62 3h3.13a6.83 6.83 0 0 1-4.22 4.22V3h1.09z"/>
            </svg>
          </a>

          {/* Gmail */}
          <a href="mailto:info@afriseek.com" aria-label="Contact Afriseek via Gmail" className="hover:opacity-75 active:scale-95 transition-all">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>

        </div>

        {/* Base Legals & System Timestamp */}
        <div className="text-center text-[9px] font-bold text-neutral-400 tracking-widest uppercase border-t border-neutral-200/60 pt-5">
          © {currentYear} Afriseek Inc. Records Synchronized.
        </div>

      </div>
    </footer>
  );
}
