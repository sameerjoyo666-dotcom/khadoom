import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Environment, Sparkles } from '@react-three/drei';
import { 
  MessageSquare, ChevronDown, ShoppingBag, Package, Shirt, Dog, ArrowUpRight, ArrowRight
} from 'lucide-react';
import khadoomLogoVertical from './assets/KHADOOM LOGO - VERTICAL-SCREEN-02 (1).png';
import khadoomIconBlue from './assets/Icon on blue.png';

const faqs = [
  { question: "Who is Khadoom?", answer: "Khadoom is me! A personal assistant powered by AI to fulfill daily tasks for customers." },
  { question: "How much does Khadoom cost?", answer: "Price is calculated according to the distance traveled. My rates start at 10 QAR." },
  { question: "How far can Khadoom deliver to or pick up from?", answer: "I operate across Qatar with an open delivery zone. No place is too remote for me as long as the location is reachable using regular navigation systems." },
  { question: "I need a driver to do several stops. Is that possible?", answer: "Of course! When you contact me on WhatsApp, you can mention all the chores and stops you need, and I'll assign you the right driver." },
  { question: "How can I contact Khadoom?", answer: "Contact me on WhatsApp at +974 7444 7766. Just send a text message or voice message and I will fulfill your tasks!" },
  { question: "What forms of payment do you accept?", answer: "I accept Apple Pay, Google Pay, NAPS/Debit/Credit Card, and cash." }
];

const features = [
  { title: "Personal Shopping", desc: "Groceries, clothing, electronics & more.", icon: <ShoppingBag size={32} />, image: "https://khadoom.ai/static/media/personal-img.06179b5bc57069d2f25c.png" },
  { title: "Parcel Delivery", desc: "Fast and reliable parcel drop-offs.", icon: <Package size={32} />, image: "https://khadoom.ai/static/media/parcel-img.b734dce93d5a5ce57de9.png" },
  { title: "Laundry Service", desc: "Pick up & drop off right to your door.", icon: <Shirt size={32} />, image: "https://khadoom.ai/static/media/laundry-img.08b3b4d5b7c9a3a19286.png" },
  { title: "Pet Transport", desc: "Safe pick up & drop off for your furry friends.", icon: <Dog size={32} />, image: "https://khadoom.ai/static/media/pet-img.4cc36cebb8920ff41025.png" }
];

export default function AppV2() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: 'var(--font-family-sans)', background: '#FAFAFA', color: '#111', overflowX: 'hidden' }}>
      
      {/* Completely Detached Floating Header */}
      <motion.header 
        initial={{ y: -100 }} animate={{ y: 0 }}
        style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000, background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(16px)', padding: '0.75rem 1.5rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '3rem', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', width: '90%', maxWidth: '1000px', justifyContent: 'space-between' }}
      >
        <img src={khadoomLogoVertical} alt="Local Logo" style={{ height: '36px', objectFit: 'contain' }} />
        
        <nav style={{ display: 'flex', gap: '2rem', fontWeight: 600, fontSize: '0.95rem', color: '#444' }} className="v2-nav-links">
          <a href="#v2-hero" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a>
          <a href="#v2-services" style={{ textDecoration: 'none', color: 'inherit' }}>Services</a>
          <a href="#v2-faq" style={{ textDecoration: 'none', color: 'inherit' }}>Answers</a>
        </nav>

        <a href="https://wa.me/97474447766" style={{ background: '#E2E301', color: '#0000EC', borderRadius: '50px', padding: '0.6rem 1.2rem', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MessageSquare size={16} /> Contact
        </a>
      </motion.header>

      {/* Fresh Left-Aligned Hero with 3D Component */}
      <section id="v2-hero" style={{ minHeight: '100vh', display: 'flex', position: 'relative', overflow: 'hidden', alignItems: 'center' }}>
        
        {/* Abstract 3D Canvas Background dedicated strictly to the right side of the screen */}
        <div style={{ position: 'absolute', right: '-10%', top: '10%', width: '60%', height: '80%', zIndex: 0, opacity: 0.8 }}>
          <Canvas camera={{ position: [0, 0, 10] }}>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 10, 5]} intensity={2} color="#ffffff" />
            <Sparkles count={200} scale={15} size={2} speed={0.4} color="#0000EC" />
            <Float speed={2} rotationIntensity={3}>
              <Sphere args={[3.5, 128, 128]}>
                <MeshDistortMaterial color="#E2E301" distort={0.5} speed={2} roughness={0.2} metalness={0.4} />
              </Sphere>
            </Float>
            <Float speed={3} rotationIntensity={1} position={[-2, -3, 2]}>
              <Sphere args={[2, 128, 128]}>
                <MeshDistortMaterial color="#0000EC" distort={0.6} speed={3} roughness={0.1} metalness={0.9} />
              </Sphere>
            </Float>
            <Environment preset="city" />
          </Canvas>
        </div>

        <div className="container md-grid-cols-1" style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: 'minmax(500px, 1fr) 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', background: '#0000EC', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '2rem', letterSpacing: '1px' }}>
              QATAR'S 1ST AI ASSISTANT
            </div>
            <h1 style={{ fontSize: 'clamp(4rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-3px', color: '#111', marginBottom: '2rem' }}>
              Your life,<br />
              <span style={{ color: '#E2E301', position: 'relative' }}>
                <span style={{ position: 'absolute', bottom: '15%', left: 0, width: '100%', height: '30%', background: '#0000EC', zIndex: -1, transform: 'rotate(-2deg)' }}></span>
                automated.
              </span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#555', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '550px' }}>
              I'm Khadoom AI. Designed to ease and simplify your life. In operation across Qatar, I fulfill every task that you need completed—from on-demand delivery, to pet services, grocery & personal shopping and much more.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <a href="#v2-services" style={{ background: '#111', color: 'white', padding: '1rem 2rem', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Explore Services <ArrowUpRight size={20} />
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={khadoomIconBlue} alt="Chat Icon" style={{ width: '40px', height: '40px', background: 'white', borderRadius: '50%', padding: '8px', boxShadow: '0 10px 20px rgba(0,0,236,0.1)' }} />
                <span style={{ fontWeight: 'bold', color: '#0000EC' }}>Available 24/7</span>
              </div>
            </div>
          </div>
          
          <div style={{ position: 'relative' }}>
             <img src="https://khadoom.ai/static/media/Image%202.b31e73f804000423d903.png" alt="Khadoom App" style={{ width: '100%', maxWidth: '400px', transform: 'rotate(5deg) translateY(-20px)', filter: 'drop-shadow(30px 40px 40px rgba(0,0,0,0.15))', zIndex: 10, position: 'relative' }} />
          </div>
        </div>
      </section>

      {/* Completely New Banner Track */}
      <div style={{ background: '#0000EC', color: '#E2E301', overflow: 'hidden', padding: '1rem 0' }}>
         <div style={{ display: 'flex', gap: '3rem', fontWeight: 900, fontSize: '1.5rem', whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '2px' }}>
            <span>• ANYTHING YOU NEED</span>
            <span>• ANYWHERE IN QATAR</span>
            <span>• INSTANT WHATSAPP REPLIES</span>
            <span>• RELIABLE DRIVERS</span>
            <span>• SECURE PAYMENTS</span>
         </div>
      </div>

      {/* BENTO BOX FEATURE LAYOUT */}
      <section id="v2-services" className="container" style={{ padding: '8rem 0', position: 'relative' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-1px' }}>What I can do.</h2>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '4rem', maxWidth: '600px' }}>
          Everything from groceries to pet drop-offs. If you are unsure the task can be done, all you have to do is text me on WhatsApp.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr)', gridTemplateRows: 'auto auto', gap: '2rem' }} className="md-flex-col">
           {/* Card 1: Large Wide */}
           <motion.div whileHover={{ scale: 1.03, y: -10, boxShadow: '0 30px 60px rgba(0,0,236,0.15)' }} transition={{ type: 'spring', stiffness: 300 }} style={{ background: 'white', borderRadius: '32px', overflow: 'hidden', border: '1px solid rgba(0,0,236,0.1)', gridColumn: '1 / span 2', display: 'flex', alignItems: 'center' }} className="md-flex-col">
              <div style={{ padding: '4rem', flex: 1 }}>
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} style={{ color: '#0000EC', marginBottom: '1.5rem', background: 'rgba(226,227,1,0.2)', width: 'fit-content', padding: '1rem', borderRadius: '20px' }}>{features[0].icon}</motion.div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>{features[0].title}</h3>
                <p style={{ fontSize: '1.2rem', color: '#555' }}>{features[0].desc}</p>
              </div>
              <div style={{ flex: 1, minHeight: '350px', background: '#E2E301', padding: '2rem' }}>
                <motion.img whileHover={{ scale: 1.05 }} src={features[0].image} alt={features[0].title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
              </div>
           </motion.div>

           {/* Card 2: Tall */}
           <motion.div whileHover={{ scale: 1.03, y: -10, boxShadow: '0 30px 60px rgba(226,227,1,0.3)' }} style={{ background: '#E2E301', color: '#0000EC', borderRadius: '32px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '3rem', paddingBottom: '1rem' }}>
                <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ marginBottom: '1.5rem', background: '#0000EC', color: '#E2E301', width: 'fit-content', padding: '1rem', borderRadius: '20px' }}>{features[1].icon}</motion.div>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>{features[1].title}</h3>
                <p style={{ fontSize: '1.1rem', color: '#0000EC', opacity: 0.8 }}>{features[1].desc}</p>
              </div>
              <div style={{ marginTop: 'auto', padding: '2rem' }}>
                <motion.img whileHover={{ scale: 1.1 }} src={features[1].image} alt={features[1].title} style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,236,0.1)' }} />
              </div>
           </motion.div>

           {/* Cards 3 & 4 Stacked inside right column */}
           <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
             <motion.div whileHover={{ scale: 1.04, x: -10 }} style={{ background: 'white', borderRadius: '32px', padding: '3rem', border: '1px solid rgba(0,0,236,0.1)', display: 'flex', alignItems: 'center', gap: '2rem', boxShadow: '0 20px 40px rgba(0,0,236,0.05)' }} className="md-flex-col">
                <div style={{ flex: 1 }}>
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ color: '#0000EC', marginBottom: '1rem' }}>{features[2].icon}</motion.div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '0.5rem' }}>{features[2].title}</h3>
                  <p style={{ color: '#555' }}>{features[2].desc}</p>
                </div>
                <motion.img whileHover={{ rotate: 15 }} src={features[2].image} alt={features[2].title} style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '8px solid #E2E301' }} />
             </motion.div>

             <motion.div whileHover={{ scale: 1.04, x: -10 }} style={{ background: '#0000EC', color: 'white', borderRadius: '32px', padding: '3rem', display: 'flex', alignItems: 'center', gap: '2rem', boxShadow: '0 20px 40px rgba(0,0,236,0.4)', border: '2px solid #E2E301' }} className="md-flex-col">
                <div style={{ flex: 1 }}>
                  <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1 }} style={{ color: '#E2E301', marginBottom: '1rem' }}>{features[3].icon}</motion.div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '0.5rem' }}>{features[3].title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)' }}>{features[3].desc}</p>
                </div>
                <motion.img whileHover={{ scale: 1.1 }} src={features[3].image} alt={features[3].title} style={{ width: '150px', height: '150px', borderRadius: '24px', objectFit: 'cover' }} />
             </motion.div>
           </div>
        </div>
      </section>

      {/* Fresh Massive FAQ Grid Cards */}
      <section id="v2-faq" style={{ padding: '8rem 0', background: '#F8F9FA' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '4rem', textAlign: 'center', letterSpacing: '-1px' }}>Quick Answers.</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                style={{ background: 'white', padding: '2.5rem', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.05)', cursor: 'pointer', display: 'flex', flexDirection: 'column', transition: 'all 0.3s' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111', lineHeight: 1.4 }}>{faq.question}</h3>
                  <div style={{ background: '#F8F9FA', color: '#0000EC', padding: '0.5rem', borderRadius: '50%' }}>
                     <motion.div animate={{ rotate: activeFaq === idx ? 180 : 0 }}>
                       <ChevronDown size={20} />
                     </motion.div>
                  </div>
                </div>
                
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                      <p style={{ color: '#555', lineHeight: 1.6, paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Massive Bold Minimalist Footer Block */}
      <footer style={{ background: '#0000EC', padding: '6rem 0 3rem', color: 'white', borderTopLeftRadius: '60px', borderTopRightRadius: '60px', marginTop: '-30px', position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 900, lineHeight: 1, letterSpacing: '-4px', margin: '0 0 2rem' }}>
            READY TO <br/>
            <span style={{ color: '#E2E301' }}>START ALREADY?</span>
          </h2>
          <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', marginBottom: '4rem' }}>
            Whatever language you speak, I can understand. Stop stressing over daily chores and let Qatar's smartest AI assistant take over.
          </p>
          <a href="https://wa.me/97474447766" style={{ background: '#E2E301', color: '#0000EC', fontSize: '1.5rem', fontWeight: 900, padding: '1.5rem 4rem', borderRadius: '100px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 20px 50px rgba(226,227,1,0.3)', transition: 'transform 0.2s', ...({ ':hover': { transform: 'scale(1.05)' } } as any) }}>
            Message Me Now <ArrowRight size={30} />
          </a>

          <div style={{ marginTop: '8rem', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
             <img src={khadoomLogoVertical} alt="Footer Logo" style={{ height: '40px', filter: 'brightness(0) invert(1)' }} />
             <div style={{ display: 'flex', gap: '2rem', fontSize: '1.1rem', fontWeight: 600 }}>
               <span>info@khadoom.ai</span>
               <span>+974 7444 7766</span>
             </div>
             <div style={{ color: 'rgba(255,255,255,0.5)' }}>© 2026 Khadoom. V2 Design Active.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
