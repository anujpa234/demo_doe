import React from 'react';
import { STATS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section id="numbers" className="py-16 bg-[#EBF4F3]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-600 text-xl font-normal mb-6">Abu Dhabi Water & Power Week in Numbers</h2>
          <div className="w-full max-w-3xl mx-auto h-[1px] bg-gray-300 mb-8"></div>
          <h3 className="text-2xl md:text-3xl font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amets consectetur adipiscing elitestiam <strong className="font-bold text-gray-800">ipsum ipsum bibendum non fermentums.</strong>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-gray-300 border border-gray-300 bg-gray-50/50">
          {STATS.map((stat) => (
            <div key={stat.id} className="p-8 flex flex-col items-start hover:bg-white transition-colors relative group">
              <CheckCircle2 size={20} className="text-[#00D084] mb-3 opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 left-4" />
              <div className="text-3xl md:text-4xl font-bold text-[#5F8D69] mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm md:text-base font-light">{stat.label}</div>
              
              {/* Bottom green bar on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#5F8D69] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;