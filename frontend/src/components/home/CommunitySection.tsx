import React, { useState, FormEvent } from 'react';
import { Users, Mail, ArrowRight, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CommunitySection() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleJoinForum = (): void => {
    // Navigates directly to the global platform registration/onboarding flow
    navigate('/signup');
  };

  const handleNewsletterSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (!email.trim()) return;
    
    // Process your newsletter subscription service payload here
    console.log('Newsletter subscription initiated for:', email.trim());
    setEmail('');
  };

  return (
    <section className="px-5 py-12 bg-[#080f1d] text-white border-t border-[var(--afri-border)]">
      <div className="max-w-xl md:max-w-5xl mx-auto w-full">
        
        {/* Component Intro Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#E2A54012] mb-3">
            <Users size={24} style={{ color: '#E2A540' }} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-2">
            Engage with the Living Graph
          </h2>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium">
            Join thousands of researchers, historians, and curious minds contributing to and exploring Africa's interconnected knowledge ecosystem.
          </p>
        </div>

        {/* Dual-Core Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Card A: The Knowledge Forum (Sign up to Afriseek) */}
          <div className="flex flex-col justify-between p-5 bg-[#0d1627] border border-white/5 rounded-2xl shadow-md">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare size={16} style={{ color: '#E2A540' }} />
                <h3 className="text-sm font-bold tracking-tight text-white">
                  Afriseek Knowledge Forum
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-6 font-medium">
                Create an official Afriseek account to participate in active historical research, ask semantic dataset questions, and collaborate directly with peers.
              </p>
            </div>

            <button
              type="button"
              onClick={handleJoinForum}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[var(--afri-gold)] text-[#04111f] text-xs font-bold rounded-xl shadow-md transition-all duration-150 active:scale-[0.98] cursor-pointer focus:outline-none"
            >
              <span>Create Account & Join Forum</span>
              <ArrowRight size={14} className="stroke-[2.5]" />
            </button>
          </div>

          {/* Card B: The Intelligence Dispatch (Newsletter Updates) */}
          <div className="flex flex-col justify-between p-5 bg-[#0d1627] border border-white/5 rounded-2xl shadow-md">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Mail size={16} style={{ color: '#4F7EF7' }} />
                <h3 className="text-sm font-bold tracking-tight text-white">
                  Stay Informed
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-6 font-medium">
                Subscribe to our curated research dispatch. Receive monthly digests covering newly mapped historical nodes, ontologies, and timeline revisions.
              </p>
            </div>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[var(--afri-gold)]/30 transition-all duration-200"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-transparent px-3.5 py-3 text-xs text-white outline-none placeholder:text-slate-500 font-medium"
                required
              />
              <button
                type="submit"
                className="px-4 bg-white/10 hover:bg-white/15 border-l border-white/10 text-[var(--afri-gold)] text-xs font-bold flex items-center justify-center transition-all duration-150 active:bg-white/20 cursor-pointer focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
