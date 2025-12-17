import React, { useState } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const eventDate = "19 - 21 MAY 2026";

  return (
    <header className="w-full relative z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#6B8E85] text-white text-[10px] md:text-xs py-2 px-4 text-center font-medium tracking-wide">
        UNDER THE PATRONAGE OF HIS HIGHNESS SHEIKH KHALED BIN MOHAMED BIN ZAYED AL NAHYAN, CROWN PRINCE OF ABU DHABI
      </div>

      {/* Main Header Area */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-4 gap-4">
          
          {/* Logos */}
          <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center lg:justify-start">
            
            {/* Logo 1 + Dynamic Date */}
            <div className="flex flex-col items-center md:items-start group">
              <img 
                src="/images/logo-1.jpeg" 
                alt="Abu Dhabi Water Power Week" 
                className="h-10 md:h-14 object-contain" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="font-bold text-gray-700">ADWP Week</span>';
                }} 
              />
              <span className="text-[10px] md:text-[11px] font-bold text-[#5F8D69] uppercase tracking-widest mt-1 whitespace-nowrap">
                {eventDate}
              </span>
            </div>

            {/* Separator */}
            <div className="h-8 w-[1px] bg-gray-300 hidden md:block mx-2"></div>

             {/* Logo 2 */}
             <div className="h-10 md:h-14 flex items-center">
              <img 
                src="/images/logo-2.jpeg" 
                alt="Department of Energy" 
                className="h-full object-contain" 
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
            </div>

             {/* Logo 3 */}
             <div className="h-8 md:h-12 flex items-center">
              <img 
                src="/images/logo-3.jpeg" 
                alt="ADQ" 
                className="h-full object-contain" 
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center text-sm font-medium text-gray-700 cursor-pointer hover:text-[#5F8D69]">
              ENGLISH <ChevronDown size={16} className="ml-1" />
            </div>
            <button className="p-2 rounded-full bg-[#6B9C92] text-white hover:bg-[#578278] transition-colors">
              <Search size={18} />
            </button>
            <button className="hidden md:block px-6 py-2.5 bg-[#6B9C72] text-white text-sm font-bold rounded shadow-sm hover:bg-[#57855d] transition-all flex items-center gap-2">
              REGISTER YOUR INTEREST <span>→</span>
            </button>
            
            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className={`
          flex flex-col md:flex-row md:items-center justify-between border-t border-gray-100 py-3 text-xs md:text-[13px] font-semibold text-gray-600 uppercase tracking-wide
          ${isMenuOpen ? 'block' : 'hidden md:flex'}
        `}>
          <a href="#" className="py-2 md:py-0 text-[#6B9C92] normal-case font-bold hover:underline">+ Welcome to Abu Dhabi Water & Power Week</a>
          <nav className="flex flex-col md:flex-row gap-4 md:gap-8 mt-2 md:mt-0">
            <a href="#sponsors" className="hover:text-[#6B9C72] transition-colors">Sponsors</a>
            <a href="#numbers" className="hover:text-[#6B9C72] transition-colors">In Numbers</a>
            <a href="#about" className="hover:text-[#6B9C72] transition-colors">About Abu Dhabi Water & Power Week</a>
            <a href="#overview" className="hover:text-[#6B9C72] transition-colors">Event Overview</a>
            <a href="#subscribe" className="hover:text-[#6B9C72] transition-colors">Subscribe to Newsletter</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;