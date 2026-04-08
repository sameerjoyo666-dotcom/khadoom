import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, ChevronDown, ShoppingBag, Package, Shirt, Dog, ArrowRight, Star, Plus
} from 'lucide-react';
import khadoomLogoVertical from './assets/KHADOOM LOGO - VERTICAL-SCREEN-02 (1).png';
import khadoomIconBlue from './assets/Icon on blue.png';
import './App.css';

const faqs = [
  { question: "Who is Khadoom?", answer: "Khadoom is me! A personal assistant powered by AI to fulfill daily tasks for customers." },
  { question: "How much does Khadoom cost?", answer: "Price is calculated according to the distance traveled. My rates start at 10 QAR." },
  { question: "How far can Khadoom deliver to or pick up from?", answer: "I operate across Qatar with an open delivery zone." },
  { question: "I need a driver to do several stops. Is that possible?", answer: "Of course! When you contact me on WhatsApp, you can mention all the chores and stops." },
  { question: "How can I contact Khadoom?", answer: "Contact me on WhatsApp at +974 7444 7766." },
  { question: "What forms of payment do you accept?", answer: "I accept Apple Pay, Google Pay, NAPS/Debit/Credit Card, and cash." }
];

const features = [
  { title: "Personal Shopping", desc: "Groceries & clothing.", icon: <ShoppingBag size={24} />, image: "https://khadoom.ai/static/media/personal-img.06179b5bc57069d2f25c.png" },
  { title: "Parcel Delivery", desc: "Fast parcel drop-offs.", icon: <Package size={24} />, image: "https://khadoom.ai/static/media/parcel-img.b734dce93d5a5ce57de9.png" },
  { title: "Laundry Service", desc: "Pick up & drop off.", icon: <Shirt size={24} />, image: "https://khadoom.ai/static/media/laundry-img.08b3b4d5b7c9a3a19286.png" },
  { title: "Pet Transport", desc: "Safe rides for pets.", icon: <Dog size={24} />, image: "https://khadoom.ai/static/media/pet-img.4cc36cebb8920ff41025.png" }
];

// Liquid Glass Helper Component
const GlassPane = ({ children, style = {}, ...props }: any) => (
  <motion.div 
    {...props}
    style={{
      background: 'rgba(255, 255, 255, 0.65)',
      backdropFilter: 'blur(40px)',
      WebkitBackdropFilter: 'blur(40px)',
      border: '1.5px solid rgba(255, 255, 255, 0.9)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
      borderRadius: '40px',
      ...style
    }}
  >
    {children}
  </motion.div>
);

export default function AppV4() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: 'var(--font-family-sans)', background: '#F0F2F5', color: '#111', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Massive Liquid Orbs fixed in background */}
      <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 15 }} style={{ position: 'fixed', top: '-10%', right: '-5%', width: '600px', height: '600px', background: '#0000EC', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.4, zIndex: 0 }} />
      <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 20 }} style={{ position: 'fixed', bottom: '-10%', left: '-10%', width: '800px', height: '800px', background: '#E2E301', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.3, zIndex: 0 }} />

      {/* Main Glass App Container */}
      <div style={{ position: 'relative', zIndex: 10, padding: '2rem' }}>
        
        {/* iOS Style Floating Header */}
        <header style={{ maxWidth: '1200px', margin: '0 auto 2rem' }}>
          <GlassPane style={{ padding: '1rem 2rem', borderRadius: '100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img src={khadoomLogoVertical} alt="Khadoom" style={{ height: '32px' }} />
            <nav style={{ display: 'flex', gap: '2.5rem', fontWeight: 600, color: '#0000EC' }} className="nav-links">
              <motion.a whileHover={{ scale: 1.1 }} href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>Features</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#faqs" style={{ textDecoration: 'none', color: 'inherit' }}>FAQs</motion.a>
            </nav>
            <motion.a whileHover={{ scale: 1.05, background: '#CCCC00' }} whileTap={{ scale: 0.95 }} href="https://wa.me/97474447766" style={{ background: '#E2E301', color: '#0000EC', padding: '0.8rem 1.8rem', borderRadius: '50px', fontWeight: 800, textDecoration: 'none', boxShadow: '0 10px 20px rgba(226,227,1,0.4)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Book an Appt <MessageSquare size={16} />
            </motion.a>
          </GlassPane>
        </header>

        {/* Hero Section Container */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 1fr', gap: '2rem' }} className="md-grid-cols-1">
           
           {/* Left Hero Content */}
           <GlassPane style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
             <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }} style={{ display: 'inline-flex', background: 'white', color: '#0000EC', padding: '0.5rem 1.2rem', borderRadius: '50px', fontWeight: 800, fontSize: '0.9rem', marginBottom: '2rem', boxShadow: '0 10px 20px rgba(0,0,236,0.1)', alignSelf: 'flex-start', border: '1px solid rgba(0,0,236,0.1)' }}>
                <Star size={16} style={{ marginRight: '8px' }} color="#E2E301" fill="#E2E301" /> Expert Guidance
             </motion.div>
             <h1 style={{ fontSize: 'clamp(3.5rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, color: '#0000EC', letterSpacing: '-2px', marginBottom: '1.5rem' }}>
               Your life, <br/>
               <span style={{ color: '#111' }}>simplified.</span>
             </h1>
             <p style={{ color: '#555', fontSize: '1.2rem', lineHeight: 1.7, marginBottom: '3rem' }}>
               I'm Khadoom AI. In operation across Qatar, I fulfill every task that you need completed—from on-demand delivery, to pet services, grocery & personal shopping.
             </p>
             <div style={{ display: 'flex', gap: '1rem' }}>
               <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://wa.me/97474447766" style={{ background: '#0000EC', color: 'white', padding: '1rem 2rem', borderRadius: '50px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 20px 40px rgba(0,0,236,0.4)' }}>
                 Get Started <ArrowRight size={20} />
               </motion.a>
               <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#features" style={{ background: 'white', color: '#0000EC', padding: '1rem 2rem', borderRadius: '50px', fontWeight: 800, display: 'flex', alignItems: 'center', border: '1px solid rgba(0,0,236,0.1)' }}>
                 Learn more
               </motion.a>
             </div>
           </GlassPane>

           {/* Right Hero Image Frame */}
           <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
             <GlassPane style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(255,255,255,0.4)' }}>
                <div style={{ position: 'relative', width: '100%', maxWidth: '400px', aspectRatio: '4/5', background: 'white', borderRadius: '32px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', overflow: 'hidden', border: '8px solid rgba(255,255,255,0.8)' }}>
                  <img src="https://khadoom.ai/static/media/Image%202.b31e73f804000423d903.png" alt="Khadoom App" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  {/* Floating Elements Overlay */}
                  <motion.div animate={{ scale: [1, 1.1, 1], y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }} style={{ position: 'absolute', top: '10%', right: '-10%', background: '#E2E301', color: '#0000EC', padding: '1rem', borderRadius: '24px', fontWeight: 800, boxShadow: '0 20px 40px rgba(226,227,1,0.5)' }}>
                    24/7
                  </motion.div>
                </div>
             </GlassPane>
           </motion.div>

        </section>

        {/* Liquid Glass Services Grid */}
        <section id="features" style={{ maxWidth: '1200px', margin: '4rem auto' }}>
          <GlassPane style={{ padding: '4rem', background: 'rgba(0,0,236,0.03)' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
               <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#0000EC', letterSpacing: '-1px' }}>Top Rated Services</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.05, y: -10, boxShadow: '0 40px 80px rgba(0,0,236,0.2)' }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ background: 'white', borderRadius: '32px', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', border: '1px solid rgba(255,255,255,1)' }}
                >
                   {/* Inset frosted image panel */}
                   <div style={{ width: '100%', height: '150px', borderRadius: '20px', background: '#F8F9FA', marginBottom: '2rem', position: 'relative', overflow: 'hidden', padding: '1rem' }}>
                      <motion.img whileHover={{ scale: 1.1 }} src={feature.image} alt={feature.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                   </div>
                   
                   <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} style={{ background: '#0000EC', color: '#E2E301', padding: '1.2rem', borderRadius: '50%', position: 'absolute', top: '150px', border: '6px solid white', boxShadow: '0 10px 20px rgba(0,0,236,0.3)' }}>
                     {feature.icon}
                   </motion.div>
                   
                   <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#111', marginTop: '2rem', marginBottom: '0.5rem' }}>{feature.title}</h3>
                   <p style={{ color: '#666', lineHeight: 1.5 }}>{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </GlassPane>
        </section>

        {/* TeleMed Inspired Massive Blue Download CTA Overlay */}
        <section style={{ maxWidth: '1200px', margin: '4rem auto' }}>
          <motion.div whileHover={{ scale: 1.02 }} style={{ background: '#0000EC', borderRadius: '40px', padding: '5rem', display: 'flex', alignItems: 'center', gap: '4rem', boxShadow: '0 40px 100px rgba(0,0,236,0.4)', position: 'relative', overflow: 'hidden' }} className="md-flex-col">
            <div style={{ position: 'absolute', top: '-50%', left: '0%', width: '600px', height: '600px', background: '#E2E301', filter: 'blur(100px)', opacity: 0.3, zIndex: 0, borderRadius: '50%' }} />
            
            <div style={{ flex: 1, position: 'relative', zIndex: 10 }}>
              <h2 style={{ fontSize: '3rem', fontWeight: 800, color: 'white', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Download Khadoom App & Get Started Instantly
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '400px' }}>
                 Stop stressing over daily chores and let Qatar's smartest AI assistant take over.
              </p>
              
              <div style={{ background: 'white', padding: '0.5rem', borderRadius: '100px', display: 'flex', gap: '0.5rem', maxWidth: '450px' }}>
                <input type="text" placeholder="Enter task..." style={{ flex: 1, border: 'none', outline: 'none', padding: '0 1.5rem', fontSize: '1.1rem', background: 'transparent' }} />
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ background: '#0000EC', color: '#E2E301', border: 'none', padding: '1rem 2rem', borderRadius: '50px', fontWeight: 800, cursor: 'pointer' }}>
                  Submit
                </motion.button>
              </div>
            </div>

            <div style={{ flex: 1, position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'center' }}>
               <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
                 <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '32px', padding: '1rem', width: '250px' }}>
                    <div style={{ background: '#E2E301', borderRadius: '24px', padding: '2rem', textAlign: 'center', color: '#0000EC', fontWeight: 900 }}>
                      <img src={khadoomIconBlue} alt="icon" style={{ width: '60px', marginBottom: '1rem', background: 'white', padding: '1rem', borderRadius: '50%' }} />
                      <br/>
                      Anywhere in Qatar
                    </div>
                 </div>
               </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Liquid Glass FAQs Grid */}
        <section id="faqs" style={{ maxWidth: '1200px', margin: '4rem auto' }}>
          <GlassPane style={{ padding: '4rem' }}>
             <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#0000EC', textAlign: 'center', marginBottom: '4rem' }}>Curated Questions</h2>
             
             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="md-grid-cols-1">
               {faqs.map((faq, idx) => (
                 <motion.div 
                   key={idx} 
                   whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
                   onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} 
                   style={{ background: 'white', borderRadius: '24px', padding: '2rem', cursor: 'pointer', border: '1px solid rgba(0,0,236,0.05)' }}
                 >
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#111', margin: 0, paddingRight: '2rem' }}>{faq.question}</h3>
                     <motion.div animate={{ rotate: activeFaq === idx ? 180 : 0 }} style={{ background: '#F0F2F5', padding: '0.8rem', borderRadius: '50%', color: '#0000EC' }}>
                        <ChevronDown size={20} />
                     </motion.div>
                   </div>
                   <AnimatePresence>
                     {activeFaq === idx && (
                       <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                         <p style={{ marginTop: '1.5rem', color: '#666', fontSize: '1rem', lineHeight: 1.6, borderTop: '1px solid #F0F2F5', paddingTop: '1.5rem' }}>{faq.answer}</p>
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </motion.div>
               ))}
             </div>
          </GlassPane>
        </section>

        {/* Floating Liquid Footer */}
        <footer style={{ maxWidth: '1200px', margin: '0 auto 4rem' }}>
          <GlassPane style={{ padding: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', background: 'rgba(255,255,255,0.8)' }}>
             <img src={khadoomLogoVertical} alt="Khadoom" style={{ height: '40px' }} />
             <div style={{ fontWeight: 600, color: '#0000EC', display: 'flex', gap: '2rem' }}>
               <motion.span whileHover={{ scale: 1.1 }}>info@khadoom.ai</motion.span>
               <motion.span whileHover={{ scale: 1.1 }}>+974 7444 7766</motion.span>
             </div>
             <div style={{ color: '#888', fontWeight: 500 }}>
               © 2026 Khadoom. iOS Liquid Glass App.
             </div>
             <motion.a whileHover={{ scale: 1.2, rotate: 90 }} href="#top" style={{ background: '#0000EC', color: '#E2E301', padding: '1rem', borderRadius: '50%' }}>
                <Plus size={24} />
             </motion.a>
          </GlassPane>
        </footer>

      </div>
    </div>
  );
}
