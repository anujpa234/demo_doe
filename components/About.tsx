import React from 'react';
import { Play } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#EBF4F3]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Visual - Circle Mask */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src="/images/about_video_bg.jpg" 
                alt="About Video Thumbnail" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://picsum.photos/seed/tech/800/800"; 
                }}
              />
              <div className="absolute inset-0 bg-[#0F2A38]/40 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                   <Play fill="#FF4D4D" stroke="none" size={32} />
                </div>
              </div>
              
              {/* Overlay graphics */}
              <div className="absolute inset-0 border-[10px] border-white/10 rounded-full pointer-events-none"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-gray-500 text-lg mb-1">Know More About</h4>
            <h2 className="text-2xl md:text-3xl text-gray-700 font-light mb-6 border-b border-gray-300 pb-4 inline-block pr-12">
              Abu Dhabi Water & Power Week
            </h2>

            <h3 className="text-3xl md:text-4xl font-normal text-[#4A4A4A] mb-2">
              Abu Dhabi Water & Power Week
            </h3>
            <h3 className="text-3xl md:text-4xl font-bold text-[#4A4A4A] mb-8">
              Shaping a Resilient Future.
            </h3>

            <div className="text-gray-600 space-y-6 leading-relaxed text-sm md:text-base">
              <p>
                Under the directives of His <strong className="text-gray-800">Highness Sheikh Khaled bin Mohamed bin Zayed Al Nahyan, Abu Dhabi</strong> will host the inaugural <strong className="text-gray-800">Water & Power Week from 19 - 22 May 2026.</strong>
              </p>
              <p>
                Positioned ahead of the UN Water Conference in December, this flagship event will unite <strong className="text-gray-800">global leaders, innovators, and policymakers to drive sustainable energy and water solutions.</strong>
              </p>
              <p>
                The week will spotlight grid stability, water innovation, AI-driven infrastructure, and strategic investment, while the <strong className="text-gray-800">Mohamed bin Zayed Water Initiative Summit</strong> will launch a platform to unlock next-generation technologies and partnerships tackling water scarcity. With youth voices and global collaboration at its core, Abu Dhabi is setting the stage for transformative progress.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-2xl md:text-3xl text-gray-600 font-light max-w-4xl mx-auto">
            Be part of shaping tomorrow’s sustainable water and power systems in the capital of energy and water innovation.
          </p>
          <div className="w-full h-2 bg-gradient-to-r from-transparent via-[#6B9C72] to-transparent mt-8 opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default About;