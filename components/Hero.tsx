import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set target date to May 19, 2026
    const targetDate = new Date('2026-05-19T09:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-[#EBF4F3] pt-12 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-normal text-[#4A4A4A] leading-tight mb-2">
              Book stand at the
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-[#4A4A4A] leading-tight mb-6">
              World Utilities Congress
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-lg leading-relaxed">
              Lorem ipsum dolor sit amets consectetur adipiscing elitestiam <strong className="text-gray-700">ipsum ipsum bibendum non fermentums.</strong>
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="px-8 py-3 rounded-full border border-gray-400 text-gray-700 font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 group">
                ALL ENQUIRIES <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3 rounded-full bg-[#6B9C72] text-white font-bold hover:bg-[#57855d] transition-colors flex items-center gap-2 group shadow-lg shadow-green-900/10">
                STAY UPDATED <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Countdown */}
            <div className="flex gap-4 md:gap-6">
              {[
                { label: 'DAYS', value: timeLeft.days },
                { label: 'HOURS', value: timeLeft.hours },
                { label: 'MINUTES', value: timeLeft.minutes },
                { label: 'SECONDS', value: timeLeft.seconds }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm p-3 md:p-4 min-w-[70px] md:min-w-[90px] text-center">
                  <div className="text-2xl md:text-4xl font-bold text-[#5F8D85]">{String(item.value).padStart(2, '0')}</div>
                  <div className="text-[10px] md:text-xs font-bold text-[#6B9C92] mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Content - 3D Illustration */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            {/* Background Shape */}
            <div className="absolute top-0 right-0 w-full h-full bg-white/40 rounded-full blur-3xl -z-10 transform scale-75"></div>
            
            <div className="relative w-full max-w-lg aspect-square">
               {/* 
                 In a real scenario, this would be the 3D isometric image.
                 Using a placeholder that looks vaguely like the design 
               */}
               <img 
                 src="/images/hero_visual.png" 
                 alt="World Utilities Congress Visual" 
                 className="w-full h-full object-contain drop-shadow-2xl"
                 onError={(e) => {
                   e.currentTarget.onerror = null;
                   e.currentTarget.src = "https://picsum.photos/seed/greenenergy/600/600"; 
                 }}
               />
            </div>
            
            {/* Decorative dots */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
              <div className="w-2 h-2 rounded-full bg-[#5F8D85]"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-0 left-0 w-full border-t border-gray-300/50">
        <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between text-gray-500">
           <span className="text-sm font-medium tracking-wide">Explore the event now</span>
           <div className="w-full h-[1px] bg-gray-300/50 mx-4 hidden md:block"></div>
           <button className="p-3 border border-gray-300 rounded-full hover:bg-white transition-colors">
             <ArrowDown size={16} />
           </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;