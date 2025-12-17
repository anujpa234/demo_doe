import React from 'react';
import { TESTIMONIALS } from '../constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#EBF4F3]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
           <h2 className="text-gray-600 text-xl font-normal mb-6">Testimonials</h2>
           <div className="w-full max-w-3xl mx-auto h-[1px] bg-gray-300 mb-8"></div>
           <h3 className="text-2xl md:text-3xl font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amets consectetur adipiscing elitestiam <strong className="font-bold text-gray-800">ipsum ipsum bibendum non fermentums.</strong>
          </h3>
        </div>

        <div className="relative max-w-6xl mx-auto">
           {/* Nav Buttons */}
           <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 p-3 rounded-full border border-gray-400 hover:bg-white transition-colors z-10">
              <ArrowLeft size={20} />
           </button>
           <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 p-3 rounded-full bg-[#4A4A4A] text-white hover:bg-black transition-colors z-10">
              <ArrowRight size={20} />
           </button>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
             {TESTIMONIALS.map((t) => (
               <div key={t.id} className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex-shrink-0 flex items-center justify-center p-4 shadow-sm border border-gray-100">
                    <img src={t.logo} alt={t.name} className="w-full h-full object-contain" onError={(e) => {
                         e.currentTarget.onerror = null;
                         e.currentTarget.src = `https://picsum.photos/seed/logo${t.id}/200/200`;
                    }} />
                  </div>
                  <div>
                    <p className="text-gray-600 font-light italic mb-6 leading-relaxed">"{t.quote}"</p>
                    <h4 className="text-xl font-bold text-gray-800">{t.name}</h4>
                    <p className="text-sm text-gray-500 mb-1">{t.role}</p>
                    <p className="text-sm text-[#5F8D69] font-medium">{t.id === 1 ? 'German Embassy.' : 'Zero Emissions Traders Alliance.'}</p>
                    <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;