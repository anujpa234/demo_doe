import React from 'react';
import { Instagram, Linkedin, Facebook, Youtube, X, Calendar, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4A4A4A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-600 pb-16">
          
          {/* Col 1: Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
              Quick Links <span className="h-[1px] flex-1 bg-gray-500"></span>
            </h3>
            <div className="space-y-4">
              <button className="w-full text-left py-3 px-6 border border-gray-500 rounded-full hover:bg-gray-600 transition-colors flex justify-between items-center text-sm font-bold uppercase">
                BOOK A STAND <span>→</span>
              </button>
              <button className="w-full text-left py-3 px-6 border border-gray-500 rounded-full hover:bg-gray-600 transition-colors flex justify-between items-center text-sm font-bold uppercase">
                BECOME A SPONSOR <span>→</span>
              </button>
              <button className="w-full text-left py-3 px-6 border border-gray-500 rounded-full hover:bg-gray-600 transition-colors flex justify-between items-center text-sm font-bold uppercase">
                VISITOR REGISTRATION <span>→</span>
              </button>
            </div>
          </div>

          {/* Col 2: Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
              Contact Info. <span className="h-[1px] flex-1 bg-gray-500"></span>
            </h3>
            <ul className="space-y-3 text-sm font-light tracking-wide">
              <li className="flex items-center gap-2 hover:text-[#6B9C72] cursor-pointer"><span className="text-xl">+</span> GENERAL ENQUIRY</li>
              <li className="flex items-center gap-2 hover:text-[#6B9C72] cursor-pointer"><span className="text-xl">+</span> SALES ENQUIRY</li>
              <li className="flex items-center gap-2 hover:text-[#6B9C72] cursor-pointer"><span className="text-xl">+</span> CONFERENCE ENQUIRY</li>
              <li className="flex items-center gap-2 hover:text-[#6B9C72] cursor-pointer"><span className="text-xl">+</span> MARKETING ENQUIRY</li>
              <li className="flex items-center gap-2 hover:text-[#6B9C72] cursor-pointer"><span className="text-xl">+</span> SPONSORSHIP ENQUIRY</li>
              <li className="flex items-center gap-2 hover:text-[#6B9C72] cursor-pointer"><span className="text-xl">+</span> DELEGATE ENQUIRY</li>
            </ul>
          </div>

          {/* Col 3: Timing & Location */}
          <div>
            <div className="mb-8">
               <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
                Timing <span className="h-[1px] flex-1 bg-gray-500"></span>
              </h3>
              <div className="flex gap-3 mb-4">
                <Calendar className="mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="font-bold">19 MAY 2026</div>
                  <div className="text-sm text-gray-300">9:30 – 17:00</div>
                </div>
              </div>
               <div className="flex gap-3 mb-4">
                <Calendar className="mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="font-bold">20 MAY 2026</div>
                  <div className="text-sm text-gray-300">10:00 – 17:00</div>
                </div>
              </div>
               <div className="flex gap-3">
                <Calendar className="mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="font-bold">21 MAY 2026</div>
                  <div className="text-sm text-gray-300">10:00 – 17:00</div>
                </div>
              </div>
            </div>

            <div>
               <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
                Location <span className="h-[1px] flex-1 bg-gray-500"></span>
              </h3>
              <div className="flex gap-3">
                <MapPin className="mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="font-bold">ADNEC Centre</div>
                  <div className="text-sm text-gray-300">Abu Dhabi, UAE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Social */}
          <div>
             <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
              Follow Us On <span className="h-[1px] hidden lg:block flex-1 bg-gray-500"></span>
            </h3>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#6B9C72] transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-[#6B9C72] transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-[#6B9C72] transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-[#6B9C72] transition-colors"><Youtube size={24} /></a>
              <a href="#" className="hover:text-[#6B9C72] transition-colors"><X size={24} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm font-semibold tracking-wide gap-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="#" className="hover:text-[#6B9C72]">SPONSORS</a>
            <span>+</span>
            <a href="#" className="hover:text-[#6B9C72]">IN NUMBERS</a>
            <span>+</span>
            <a href="#" className="hover:text-[#6B9C72]">ABOUT ABU DHABI WATER & POWER WEEK</a>
            <span>+</span>
            <a href="#" className="hover:text-[#6B9C72]">EVENT OVERVIEW</a>
            <span>+</span>
            <a href="#" className="hover:text-[#6B9C72]">SUBSCRIBE TO NEWSLETTER</a>
          </div>
        </div>
         <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">PRIVACY POLICY</a>
              <span>+</span>
              <a href="#" className="hover:text-white">DISCLAIMER</a>
              <span>+</span>
              <a href="#" className="hover:text-white">TERMS & CONDITIONS</a>
            </div>
            <div className="text-right">
              Copyright 2025, <strong className="text-white">Abu Dhabi Water & Power Week</strong>
              <br/>All Rights Reserved
            </div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;