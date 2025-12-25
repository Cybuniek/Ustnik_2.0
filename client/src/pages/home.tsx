import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { CRTOverlay } from "@/components/ui/crt-overlay";
import { GlitchText } from "@/components/ui/glitch-text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, X, Monitor, Music, Mic2, Mail, Ticket } from "lucide-react";
import { cn } from "@/lib/utils";

import bgTexture from "@assets/generated_images/dark_vhs_glitch_noise_texture_background.png";
import neonSymbol from "@assets/generated_images/neon_glitch_artistic_symbol.png";

const SECTIONS = [
  { id: "home", label: "HOME", icon: Monitor },
  { id: "show", label: "SHOW", icon: Ticket },
  { id: "scena", label: "SCENA", icon: Mic2 },
  { id: "muzyka", label: "MUZYKA", icon: Music },
  { id: "kontakt", label: "KONTAKT", icon: Mail },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-neon-green/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-glitch text-neon-green tracking-widest cursor-pointer hover:text-neon-pink transition-colors" onClick={() => scrollToSection("home")}>
          USTNIK<span className="text-neon-pink">2.0</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`font-mono text-sm tracking-wider hover:text-neon-green transition-all uppercase ${
                activeSection === section.id ? "text-neon-green text-glow border-b-2 border-neon-green" : "text-white/70"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-neon-green" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-neon-green/30 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-left font-mono text-lg text-white hover:text-neon-green uppercase flex items-center space-x-2"
                >
                  <section.icon className="w-4 h-4" />
                  <span>{section.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-20 overflow-hidden">
      {/* Background Symbol */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none mix-blend-screen">
        <motion.img 
          src={neonSymbol} 
          alt="Portal Symbol" 
          className="w-[800px] h-[800px] object-contain"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>

      <div className="z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-neon-blue font-mono text-sm md:text-xl tracking-[0.5em] mb-4">WITAJ W PORTALU</h2>
          <GlitchText text="USTNIK SHOW" className="text-6xl md:text-9xl mb-2 block" color="green" />
          <GlitchText text="2.0" className="text-6xl md:text-9xl block text-neon-pink" color="pink" />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white/80 font-mono text-lg md:text-2xl mt-6 border-l-4 border-neon-green pl-4 italic"
        >
          "AI to medium, nie fetysz"
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col md:flex-row gap-6 mt-12 justify-center"
        >
          <Button 
            className="bg-transparent border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-mono text-lg px-8 py-6 uppercase tracking-wider box-glow transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById("show")?.scrollIntoView({ behavior: "smooth" })}
          >
            Wejdź do Ustnik Show
          </Button>
          
          <Button 
            className="bg-neon-pink/10 border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black font-mono text-lg px-8 py-6 uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById("scena")?.scrollIntoView({ behavior: "smooth" })}
          >
            Studio
          </Button>

          <Button 
             className="bg-neon-blue/20 border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black font-mono text-lg px-8 py-6 uppercase tracking-wider transition-all duration-300 transform hover:scale-105 animate-pulse"
          >
            ENTER SHOW
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 w-full text-center text-white/30 font-mono text-xs animate-bounce">
        SCROLL TO EXPLORE
      </div>
    </section>
  );
}

function Section({ id, title, children, className }: { id: string, title: string, children: React.ReactNode, className?: string }) {
  return (
    <section id={id} className={cn("min-h-screen py-20 relative border-t border-white/10 flex flex-col justify-center", className)}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 border-b border-white/20 pb-4 inline-block"
        >
          <GlitchText text={title} className="text-5xl md:text-7xl" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-neon-pink selection:text-white font-mono overflow-x-hidden">
      {/* Dynamic Background */}
      <div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{ 
          backgroundImage: `url(${bgTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'contrast(1.2) brightness(0.8)'
        }} 
      />
      
      <CRTOverlay />
      <Nav />
      
      <main className="relative z-10">
        <Hero />
        
        <Section id="show" title="THE SHOW" className="bg-black/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black/40 border border-neon-green/30 p-8 hover:border-neon-green transition-all duration-300 group">
              <h3 className="text-2xl text-white font-glitch mb-4 group-hover:text-neon-green">CYBER PERFORMANCE</h3>
              <p className="text-gray-400 leading-relaxed">
                Eksperymentalne połączenie sztuki cyfrowej, muzyki elektronicznej i performansu na żywo.
                Zanurz się w świecie, gdzie granice między rzeczywistością a symulacją przestają istnieć.
              </p>
              <div className="mt-6 h-40 bg-neon-green/5 w-full flex items-center justify-center border border-neon-green/10">
                <span className="text-neon-green/50 text-xs">VISUAL PREVIEW_01</span>
              </div>
            </Card>
            
            <Card className="bg-black/40 border border-neon-pink/30 p-8 hover:border-neon-pink transition-all duration-300 group">
              <h3 className="text-2xl text-white font-glitch mb-4 group-hover:text-neon-pink">DIGITAL INSTALLATION</h3>
              <p className="text-gray-400 leading-relaxed">
                Interaktywne instalacje reagujące na ruch i dźwięk. 
                Twoja obecność zmienia kształt cyfrowej przestrzeni.
              </p>
              <div className="mt-6 h-40 bg-neon-pink/5 w-full flex items-center justify-center border border-neon-pink/10">
                <span className="text-neon-pink/50 text-xs">VISUAL PREVIEW_02</span>
              </div>
            </Card>
          </div>
        </Section>

        <Section id="scena" title="SCENA">
          <div className="relative border border-white/20 h-[500px] w-full bg-black/50 flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(57,255,20,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="text-center z-10">
              <GlitchText text="LIVE STREAM" className="text-4xl md:text-6xl mb-4" color="blue" />
              <p className="text-neon-blue font-mono tracking-widest animate-pulse">OFFLINE // NEXT EVENT: 2025.05.20</p>
            </div>
            
            <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent" />
          </div>
        </Section>

        <Section id="muzyka" title="MUZYKA" className="bg-gradient-to-b from-black to-black/90">
          <div className="space-y-4">
            {[1, 2, 3].map((track) => (
              <div key={track} className="flex items-center justify-between p-4 border-b border-white/10 hover:bg-white/5 transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-neon-pink/20 flex items-center justify-center text-neon-pink">
                    <Music size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold group-hover:text-neon-pink transition-colors">TRACK_0{track}_DEMO.mp3</h4>
                    <p className="text-xs text-gray-500">ARTIST_UNKNOWN // {3 + track}:20</p>
                  </div>
                </div>
                <Button size="sm" variant="ghost" className="text-neon-green hover:text-white hover:bg-neon-green/20">
                  PLAY
                </Button>
              </div>
            ))}
          </div>
        </Section>

        <Section id="kontakt" title="KONTAKT">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8">
              Chcesz dołączyć do projektu lub zorganizować pokaz?
              <br />
              Wyślij sygnał.
            </p>
            
            <form className="space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-neon-green uppercase tracking-widest">Identyfikator / Imię</label>
                  <input type="text" className="w-full bg-black border border-white/30 focus:border-neon-green p-3 text-white outline-none transition-colors" placeholder="USER_NAME" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-neon-green uppercase tracking-widest">Adres Zwrotny / Email</label>
                  <input type="email" className="w-full bg-black border border-white/30 focus:border-neon-green p-3 text-white outline-none transition-colors" placeholder="EMAIL@DOMAIN.COM" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs text-neon-green uppercase tracking-widest">Wiadomość</label>
                <textarea rows={5} className="w-full bg-black border border-white/30 focus:border-neon-green p-3 text-white outline-none transition-colors" placeholder="INPUT MESSAGE STREAM..." />
              </div>
              
              <Button className="w-full bg-neon-green text-black hover:bg-white hover:text-black font-bold text-lg py-6 uppercase tracking-widest">
                WYŚLIJ TRANSMISJĘ
              </Button>
            </form>
          </div>
        </Section>
      </main>

      <footer className="py-8 border-t border-white/10 text-center text-xs text-gray-600">
        <p>&copy; 2025 USTNIK SHOW. ALL RIGHTS RESERVED. SYSTEM VERSION 2.0.4</p>
      </footer>
    </div>
  );
}
