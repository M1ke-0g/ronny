import React from 'react';
import { Palette, Phone, Mail, Instagram, Linkedin, Briefcase, Award, MousePointer2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-20">
          <div className="flex flex-col items-center text-center text-white">
            <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden mb-6">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                alt="Ronny Maldonado"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-6xl font-bold mb-4 animate-fade-in">Ronny Maldonado</h1>
            <div className="flex items-center gap-2 mb-6">
              <Palette className="w-6 h-6" />
              <span className="text-2xl">Graphic Designer</span>
            </div>
            <p className="text-xl max-w-2xl mb-8">
              Transforming ideas into visual masterpieces. Specializing in brand identity, 
              digital design, and creative solutions that make your brand stand out.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white/10 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/20 backdrop-blur p-6 rounded-xl text-white hover:transform hover:scale-105 transition-all">
              <Briefcase className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Brand Design</h3>
              <p>Creating unique and memorable brand identities that resonate with your audience.</p>
            </div>
            <div className="bg-white/20 backdrop-blur p-6 rounded-xl text-white hover:transform hover:scale-105 transition-all">
              <MousePointer2 className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Digital Design</h3>
              <p>Crafting engaging digital experiences for web and social media platforms.</p>
            </div>
            <div className="bg-white/20 backdrop-blur p-6 rounded-xl text-white hover:transform hover:scale-105 transition-all">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Print Design</h3>
              <p>Delivering high-quality print materials that make a lasting impression.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Let's Create Something Amazing</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-white">
              <Phone className="w-6 h-6 flex-shrink-0" />
              <a href="tel:3188914650" className="hover:text-yellow-300 transition-colors">
                +57 318 891 4650
              </a>
            </div>
            <div className="flex items-center gap-4 text-white">
              <Mail className="w-6 h-6 flex-shrink-0" />
              <a href="mailto:ronnymb7@gmail.com" className="hover:text-yellow-300 transition-colors">
                ronnymb7@gmail.com
              </a>
            </div>
            <div className="flex justify-center gap-6 pt-6">
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-6 text-center text-white/80">
          <p>© 2024 Ronny Maldonado. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;