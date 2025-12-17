import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate webhook call
    try {
      console.log(`Sending email ${email} to webhook...`);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Fake delay
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="subscribe" className="relative py-24 bg-gray-800 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="/images/newsletter_bg.jpg" 
          alt="Nature Background" 
          className="w-full h-full object-cover"
          onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://picsum.photos/seed/nature/1920/600";
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#5F8D85]/90 to-[#5B8599]/80"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl text-white font-light mb-8">Subscribe to Newsletter</h2>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-full p-2 flex items-center shadow-2xl">
          <div className="pl-6 text-gray-400">
            <Mail size={24} />
          </div>
          <input 
            type="email" 
            placeholder="Enter your email address . . ." 
            className="flex-1 px-4 py-3 outline-none text-gray-700 bg-transparent placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="bg-[#6B9C72] hover:bg-[#57855d] text-white font-bold py-3 px-8 rounded-full transition-colors disabled:opacity-70"
          >
            {status === 'submitting' ? '...' : status === 'success' ? 'SENT!' : 'SUBSCRIBE'}
          </button>
        </form>
        {status === 'success' && <p className="text-white mt-4 font-medium">Thank you for subscribing!</p>}
      </div>
    </section>
  );
};

export default Newsletter;