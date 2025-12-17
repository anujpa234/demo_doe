import React from 'react';
import { EVENTS } from '../constants';
import { Calendar, ArrowRight, ArrowLeft } from 'lucide-react';

const EventOverview: React.FC = () => {
  return (
    <section id="overview" className="py-20 bg-[#EBF4F3] relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-teal-900/5 -skew-x-12 -translate-x-1/2 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex items-center justify-between mb-8 border-b border-gray-300 pb-4">
          <h2 className="text-3xl text-gray-700 font-light">Event Overview</h2>
          <div className="flex gap-2">
            <button className="p-3 rounded-full border border-gray-400 hover:bg-white transition-colors">
              <ArrowLeft size={20} />
            </button>
            <button className="p-3 rounded-full bg-[#4A4A4A] text-white hover:bg-black transition-colors">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENTS.map((event, idx) => (
            <div 
              key={event.id} 
              className={`
                p-8 text-white flex flex-col justify-between h-[450px] transition-transform hover:-translate-y-2 duration-300 shadow-xl
                ${event.category === 'Utilities' || event.category === 'Regulation' ? 'bg-[#5F8D69]' : 'bg-[#5B8599]'}
              `}
            >
              <div>
                <Calendar className="w-10 h-10 mb-6 opacity-80" strokeWidth={1.5} />
                <div className="text-sm font-bold uppercase mb-2 tracking-wider opacity-90">{event.date}</div>
                <h3 className="text-2xl font-bold mb-4 leading-tight min-h-[64px]">{event.title}</h3>
                <p className="text-sm opacity-90 leading-relaxed font-light">{event.description}</p>
              </div>

              <button className="mt-8 self-start px-6 py-2 border border-white/50 rounded-full text-xs font-bold uppercase flex items-center gap-2 hover:bg-white hover:text-gray-800 transition-colors">
                READ MORE <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 border border-gray-500 rounded-full text-gray-700 font-bold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto uppercase tracking-wide">
            EXPLORE THE FULL AGENDA <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventOverview;