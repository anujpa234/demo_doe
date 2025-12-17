import React from 'react';
import { NEWS } from '../constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const News: React.FC = () => {
  return (
    <section className="py-20 bg-[#EBF4F3]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-8 border-b border-gray-300 pb-4">
          <h2 className="text-3xl text-gray-700 font-light">Latest News & Updates</h2>
          <div className="flex gap-2">
            <button className="p-3 rounded-full border border-gray-400 hover:bg-white transition-colors">
              <ArrowLeft size={20} />
            </button>
            <button className="p-3 rounded-full bg-[#4A4A4A] text-white hover:bg-black transition-colors">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS.map((item) => (
            <div key={item.id} className="group cursor-pointer bg-white">
              <div className="p-8 h-64 flex flex-col">
                <div className="text-[#5F8D69] font-bold text-sm mb-4">{item.date}</div>
                <h3 className="text-2xl text-gray-700 font-normal leading-tight group-hover:text-[#5F8D69] transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt="News" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 right-6 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-800 shadow-lg group-hover:bg-[#5F8D69] group-hover:text-white transition-colors">
                   <ArrowRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
         
         <div className="mt-16 text-center">
          <button className="px-8 py-3 border border-gray-500 rounded-full text-gray-700 font-bold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto uppercase tracking-wide">
            VIEW ALL NEWS & UPDATES <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;