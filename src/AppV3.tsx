import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  MessageSquare, ShoppingBag, Package, Shirt, Dog, ArrowRight, Zap, CheckCircle2
} from 'lucide-react';
import khadoomLogoVertical from './assets/KHADOOM LOGO - VERTICAL-SCREEN-02 (1).png';
import khadoomIconBlue from './assets/Icon on blue.png';
import './App.css';

const faqs = [
  { question: "Who is Khadoom?", answer: "Khadoom is me! A personal assistant powered by AI to fulfill daily tasks for customers." },
  { question: "How much does Khadoom cost?", answer: "Price is calculated according to the distance traveled. My rates start at 10 QAR." },
  { question: "How far can Khadoom deliver to or pick up from?", answer: "I operate across Qatar with an open delivery zone." },
  { question: "I need a driver to do several stops. Is that possible?", answer: "Of course! When you contact me on WhatsApp, you can mention all the chores and stops you need." },
  { question: "How can I contact Khadoom?", answer: "Contact me on WhatsApp at +974 7444 7766." },
  { question: "What forms of payment do you accept?", answer: "I accept Apple Pay, Google Pay, NAPS/Debit/Credit Card, and cash." }
];

const features = [
  { title: "Personal Shopping", desc: "Groceries & clothing.", icon: <ShoppingBag size={24} />, image: "https://khadoom.ai/static/media/personal-img.06179b5bc57069d2f25c.png" },
  { title: "Parcel Delivery", desc: "Fast parcel drop-offs.", icon: <Package size={24} />, image: "https://khadoom.ai/static/media/parcel-img.b734dce93d5a5ce57de9.png" },
  { title: "Laundry Service", desc: "Pick up & drop off.", icon: <Shirt size={24} />, image: "https://khadoom.ai/static/media/laundry-img.08b3b4d5b7c9a3a19286.png" },
  { title: "Pet Transport", desc: "Safe rides for pets.", icon: <Dog size={24} />, image: "https://khadoom.ai/static/media/pet-img.4cc36cebb8920ff41025.png" }
];

export default function AppV3() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <div style={{ fontFamily: 'var(--font-family-sans)', background: '#ffffff', color: '#111', overflowX: 'hidden' }}>
      
      {/* Super Minimal Header */}
      <header style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 100 }}>
        <img src={khadoomLogoVertical} alt="Khadoom Logo" style={{ height: '40px' }} />
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#services" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>Features</a>
          <a href="#faq" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>Answers</a>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://wa.me/97474447766" style={{ background: '#0000EC', color: '#E2E301', padding: '0.6rem 1.5rem', borderRadius: '50px', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 10px 20px rgba(0,0,236,0.2)' }}>
            Start Chat <motion.img animate={{ rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 1 }} src={khadoomIconBlue} alt="chat" style={{ width: '20px', filter: 'brightness(0) invert(1)' }}/>
          </motion.a>
        </div>
      </header>

      {/* Orbital / Central Image Hero */}
      <section style={{ minHeight: '85vh', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }} ref={containerRef}>
        
        {/* Concentric Circles Background */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '1000px', height: '1000px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.03)', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '700px', height: '700px', borderRadius: '50%', border: '1px dashed rgba(0,0,0,0.06)', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: '400px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.03)', zIndex: 0 }} />
        
        {/* Floating Icons on Orbits */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', top: '50%', left: '50%', width: '700px', height: '700px', marginLeft: '-350px', marginTop: '-350px', pointerEvents: 'none' }}>
           <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', top: '-25px', left: '325px', background: 'white', padding: '1rem', borderRadius: '50%', boxShadow: '0 10px 30px rgba(0,0,236,0.2)' }}><ShoppingBag color="#0000EC" /></motion.div>
           <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', bottom: '-25px', left: '325px', background: 'white', padding: '1rem', borderRadius: '50%', boxShadow: '0 10px 30px rgba(226,227,1,0.2)' }}><Dog color="#E2E301" /></motion.div>
           <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', top: '325px', left: '-25px', background: 'white', padding: '1rem', borderRadius: '50%', boxShadow: '0 10px 30px rgba(0,0,236,0.2)' }}><Package color="#0000EC" /></motion.div>
        </motion.div>

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }} style={{ background: '#0000EC', color: '#E2E301', padding: '0.4rem 1.2rem', borderRadius: '50px', fontWeight: 800, fontSize: '0.9rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid #E2E301' }}>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }}><Zap size={14} /></motion.div> AI Assistant
          </motion.div>

          <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', fontWeight: 800, letterSpacing: '-2.5px', lineHeight: 1.1, color: '#111', margin: 0, position: 'relative', zIndex: 2 }}>
            Your life,
            <span style={{ color: '#0000EC', margin: '0 15px' }}>simplified.</span>
          </h1>

          <p style={{ fontSize: '1.25rem', color: '#666', maxWidth: '600px', marginTop: '2rem', lineHeight: 1.6 }}>
             I'm Khadoom AI. In operation across Qatar, I fulfill every task that you need completed—from on-demand delivery, to pet services, grocery & personal shopping.
          </p>

          <div style={{ position: 'relative', marginTop: '4rem', width: '100%', maxWidth: '900px', height: '400px' }}>
            {/* The Central Mockup Image bursting forward */}
            <motion.img 
               initial={{ y: 100, opacity: 0 }} 
               animate={{ y: 0, opacity: 1 }}
               transition={{ type: "spring", delay: 0.2 }}
               src="https://khadoom.ai/static/media/Image%202.b31e73f804000423d903.png" 
               alt="Khadoom Device" 
               style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 40px 60px rgba(0,0,236,0.15))' }} 
            />
            
            {/* Floating Glass UI Cards overlapping the image (Flatrover style) */}
            <motion.div className="floating-card-1" style={{ y: y1, position: 'absolute', top: '10%', right: '10%', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(20px)', padding: '1.5rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid rgba(255,255,255,1)' }}>
              <div style={{ background: '#0000EC', padding: '0.8rem', borderRadius: '16px', color: 'white' }}><CheckCircle2 size={20} /></div>
              <div>
                <strong style={{ display: 'block', color: '#111' }}>100% Secure</strong>
                <span style={{ color: '#666', fontSize: '0.9rem' }}>Reliable service</span>
              </div>
            </motion.div>

            <motion.div className="floating-card-2" style={{ y: y2, position: 'absolute', bottom: '20%', left: '5%', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(20px)', padding: '1.5rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', border: '1px solid rgba(255,255,255,1)' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0000EC' }}>24/7</div>
              <div style={{ color: '#666', fontWeight: 500 }}>Active Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stacked Clean Minimalist Features (Like App Store / Github layout) */}
      <section id="services" style={{ padding: '8rem 0', background: '#F9FAFB', borderTop: '1px solid rgba(0,0,0,0.03)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#111', letterSpacing: '-1px' }}>Available Services</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '1rem' }}>Everything from groceries to pet drop-offs.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
             {features.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -15, scale: 1.03, rotateX: 5, boxShadow: '0 30px 60px rgba(0,0,236,0.15)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ background: 'white', border: '2px solid rgba(0,0,236,0.05)', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}
                >
                  <div style={{ height: '220px', background: '#f0f0f0', position: 'relative', overflow: 'hidden' }}>
                     <motion.img whileHover={{ scale: 1.1 }} src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '2rem' }}>
                    <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#E2E301', color: '#0000EC', padding: '0.5rem 1rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: 800, marginBottom: '1rem', border: '1px solid rgba(0,0,236,0.2)' }}>
                      {item.icon} Service
                    </motion.div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', color: '#0000EC' }}>{item.title}</h3>
                    <p style={{ color: '#666', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Floating Pill Contact Banner */}
      <section style={{ padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', background: '#0000EC', color: 'white', borderRadius: '100px', padding: '2rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', boxShadow: '0 20px 40px rgba(0,0,236,0.3)', border: '4px solid #E2E301' }}>
          <div>
            <h3 style={{ fontSize: '2rem', fontWeight: 900, margin: 0, color: '#E2E301' }}>Ready to get started?</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', margin: '0.5rem 0 0 0' }}>Say hi on WhatsApp and leave the rest to me.</p>
          </div>
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="https://wa.me/97474447766" style={{ background: '#E2E301', color: '#0000EC', padding: '1rem 2rem', borderRadius: '50px', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            Message Now <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1 }}><ArrowRight size={18} /></motion.div>
          </motion.a>
        </div>
      </section>

      {/* Clean Grid FAQs */}
      <section id="faq" className="container" style={{ padding: '6rem 0 8rem', maxWidth: '1000px' }}>
         <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '4rem' }}>Facts & Questions</h2>
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }} className="md-grid-cols-1">
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '20px', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111', marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                   <div style={{ color: '#0000EC' }}><MessageSquare size={20} /></div>
                   {faq.question}
                </h3>
                <p style={{ color: '#666', lineHeight: 1.6, margin: 0, paddingLeft: '2.4rem' }}>{faq.answer}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Ultra Minimal Clean Footer */}
      <footer style={{ borderTop: '1px solid rgba(0,0,0,0.05)', padding: '3rem 0', background: '#FAFAFA' }}>
         <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
           <img src={khadoomLogoVertical} alt="logo" style={{ height: '35px', opacity: 0.8 }} />
           <p style={{ color: '#888', margin: 0, fontWeight: 500 }}>Qatar's First AI Assistant. © 2026. V3 Orbital.</p>
         </div>
      </footer>
    </div>
  );
}
