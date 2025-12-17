import React from 'react';
import { SPEAKERS } from '../constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Speakers: React.FC = () => {
  return (
    <section className="py-20 bg-[#EBF4F3]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-600 text-xl font-normal mb-6">Event Speakers</h2>
          <div className="w-full max-w-3xl mx-auto h-[1px] bg-gray-300 mb-8"></div>
          <h3 className="text-2xl md:text-3xl font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amets consectetur adipiscing elitestiam <strong className="font-bold text-gray-800">ipsum ipsum bibendum non fermentums.</strong>
          </h3>
        </div>

        <div className="relative">
          {/* Controls - absolute positioned to align with middle of cards */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 hidden md:block">
             <button className="p-3 rounded-full border border-gray-400 bg-[#EBF4F3] hover:bg-white transition-colors">
              <ArrowLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20 hidden md:block">
             <button className="p-3 rounded-full bg-[#4A4A4A] text-white hover:bg-black transition-colors">
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Carousel Track */}
          <div className="flex gap-6 overflow-x-auto pb-8 px-4 md:px-16 no-scrollbar snap-x">
            {SPEAKERS.map((speaker) => (
              <div 
                key={speaker.id} 
                className="min-w-[280px] w-[280px] h-[350px] relative group overflow-hidden bg-gray-200 snap-center"
              >
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Overlay details */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-white font-bold text-lg leading-tight mb-1">{speaker.name}</h4>
                  <p className="text-gray-300 text-xs mb-1">{speaker.role}</p>
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider">{speaker.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
           <button className="px-8 py-3 border border-gray-500 rounded-full text-gray-700 font-bold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto uppercase tracking-wide">
            VIEW ALL SPEAKERS <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;