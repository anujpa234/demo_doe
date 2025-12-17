import React from 'react';
import { SPONSORS } from '../constants';

const Sponsors: React.FC = () => {
  // Duplicate array to simulate rows as per design
  const row1 = SPONSORS.slice(0, 4);
  const row2 = SPONSORS.slice(3, 7);

  const LogoCard = ({ logo, name }: { logo: string, name: string }) => (
    <div className="flex items-center justify-center p-6 bg-white border border-gray-100 h-24 md:h-28 w-full transition-shadow hover:shadow-md">
       <img 
         src={logo} 
         alt={name} 
         className="max-h-12 md:max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100" 
         onError={(e) => {
            // Fallback for missing images to just show text if needed, or a generic placeholder
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.innerText = name; 
         }}
       />
    </div>
  );

  return (
    <section id="sponsors" className="py-16 bg-[#EBF4F3]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-gray-500 text-lg md:text-xl font-light mb-2">Our Sponsors</h2>
          <div className="w-24 h-[1px] bg-gray-300 mx-auto mb-6"></div>
          <h3 className="text-2xl md:text-3xl font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amets consectetur adipiscing elitestiam <strong className="font-bold text-gray-800">ipsum ipsum bibendum non fermentums.</strong>
          </h3>
        </div>

        <div className="flex flex-col gap-4 max-w-6xl mx-auto">
           {/* Row 1 */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {row1.map((sponsor, idx) => (
                <LogoCard key={`r1-${idx}`} {...sponsor} />
              ))}
           </div>
           {/* Row 2 */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {row2.map((sponsor, idx) => (
                <LogoCard key={`r2-${idx}`} {...sponsor} />
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;