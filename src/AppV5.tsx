import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShoppingBag, Package, Shirt, Dog, ChevronDown, PlayCircle } from 'lucide-react';
import khadoomLogoVertical from './assets/KHADOOM LOGO - VERTICAL-SCREEN-02 (1).png';
import whatsappScreen from './assets/media__1775672253348.png';
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
  { title: "Personal Shopping", desc: "Groceries & clothing.", icon: <ShoppingBag size={24} /> },
  { title: "Parcel Delivery", desc: "Fast parcel drop-offs.", icon: <Package size={24} /> },
  { title: "Laundry Service", desc: "Pick up & drop off.", icon: <Shirt size={24} /> },
  { title: "Pet Transport", desc: "Safe rides for pets.", icon: <Dog size={24} /> }
];

export default function AppV5() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  
  // Parallax float values for icons
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div style={{ fontFamily: 'var(--font-family-sans)', background: '#ffffff', color: '#111', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* Sleek App Style Header */}
      <header style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1440px', margin: '0 auto', position: 'relative', zIndex: 100 }}>
        <motion.img initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} src={khadoomLogoVertical} alt="Khadoom Logo" style={{ height: '35px' }} />
        
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <a href="#services" style={{ textDecoration: 'none', color: '#111', fontWeight: 600, fontSize: '0.95rem' }}>Features</a>
          <a href="#faqs" style={{ textDecoration: 'none', color: '#111', fontWeight: 600, fontSize: '0.95rem' }}>FAQs</a>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://wa.me/97474447766" style={{ background: '#0000EC', color: 'white', padding: '0.8rem 1.8rem', borderRadius: '100px', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.8rem', boxShadow: '0 10px 20px rgba(0,0,236,0.2)' }}>
            Start Chat
          </motion.a>
        </motion.div>
      </header>

      {/* Modern Cloud/Floating Apps Hero Section */}
      <section ref={containerRef} style={{ minHeight: '85vh', position: 'relative', overflow: 'hidden', padding: '4rem 1rem 0' }}>
         
         <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: '1.5rem', color: '#1E293B' }}
            >
               Where your <span style={{ color: '#0000EC' }}>chores</span> turn into <span style={{ color: '#0000EC' }}>free time</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{ fontSize: '1.25rem', color: '#64748B', maxWidth: '600px', marginBottom: '2.5rem', lineHeight: 1.6 }}
            >
               I'm Khadoom AI. From on-demand delivery to grocery shopping, let Qatar's smartest assistant handle it in minutes, not hours.
            </motion.p>
            
            <motion.a 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/97474447766" 
              style={{ background: '#111', color: 'white', padding: '1rem 2rem', borderRadius: '100px', fontSize: '1.1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
            >
               <PlayCircle size={20} style={{ color: '#E2E301' }} /> Talk to Khadoom
            </motion.a>
         </div>

         {/* Aurora Blur Gradient Rising from bottom */}
         <div style={{ position: 'absolute', bottom: '-10%', left: 0, width: '100%', height: '600px', display: 'flex', justifyContent: 'center', pointerEvents: 'none', zIndex: 0 }}>
            <motion.div animate={{ scale: [1, 1.1, 1], x: [0, -50, 0] }} transition={{ repeat: Infinity, duration: 15 }} style={{ position: 'absolute', bottom: '0', left: '10%', width: '800px', height: '400px', background: '#0000EC', filter: 'blur(150px)', opacity: 0.5, borderRadius: '50%' }} />
            <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }} transition={{ repeat: Infinity, duration: 20 }} style={{ position: 'absolute', bottom: '0', right: '10%', width: '800px', height: '400px', background: '#E2E301', filter: 'blur(150px)', opacity: 0.6, borderRadius: '50%' }} />
            <motion.div animate={{ scale: [1, 1.05, 1], y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 10 }} style={{ position: 'absolute', bottom: '-50px', left: '20%', width: '1000px', height: '300px', background: '#45B7D1', filter: 'blur(120px)', opacity: 0.4, borderRadius: '50%' }} />
         </div>

         {/* WhatsApp Dashboard Chat Image Window peaking out */}
         <motion.div 
           initial={{ y: 200, opacity: 0 }} 
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.5, duration: 0.8, type: 'spring', stiffness: 80 }}
           style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '4rem auto 0', padding: '1rem', background: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(30px)', borderRadius: '30px 30px 0 0', border: '1px solid rgba(255,255,255,0.8)', borderBottom: 'none', boxShadow: '0 -20px 60px rgba(0,0,0,0.1)' }}
         >
           
           {/* Floating Shopping Bag Tab Overflow Element */}
           <motion.div 
              animate={{ rotate: [-2, 2, -2] }} 
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              style={{ y: y1, position: 'absolute', top: '-30px', left: '-50px', background: 'white', padding: '1.2rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 20 }}
           >
              <div style={{ background: '#0000EC', padding: '0.8rem', borderRadius: '50%', color: '#E2E301' }}>
                 <ShoppingBag size={28} />
              </div>
              <div style={{ fontWeight: 800, color: '#111', fontSize: '1.1rem' }}>Shopping Order<br/><span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 500 }}>In progress</span></div>
           </motion.div>

           {/* Fake Window Header */}
           <div style={{ display: 'flex', gap: '8px', padding: '0.5rem 1rem 1rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(0,0,0,0.2)' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(0,0,0,0.2)' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(0,0,0,0.2)' }} />
           </div>
           
           {/* WhatsApp Main Interface */}
           <div style={{ background: '#0F172A', borderRadius: '24px 24px 0 0', overflow: 'hidden', boxShadow: '0 -10px 30px rgba(0,0,0,0.1)' }}>
             <img src={whatsappScreen} alt="Khadoom WhatsApp Chat" style={{ width: '100%', display: 'block', borderRadius: '16px 16px 0 0', objectFit: 'cover' }} />
           </div>
         </motion.div>
      </section>

      {/* Binder Combs Linked Cards Features Grid */}
      <section id="services" style={{ padding: '8rem 2rem', background: '#FAFBFC', borderTop: '1px solid #E2E8F0', overflow: 'hidden' }}>
         <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
               <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#1E293B', letterSpacing: '-1px' }}>Top Rated Services</h2>
            </div>
            
            {/* Horizontal Flex Container simulating Binder notebook */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch' }}>
              {features.map((feature, idx) => (
                 <div key={idx} style={{ display: 'flex', alignItems: 'stretch', marginBottom: '2rem' }}>
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                      whileHover={{ scale: 1.02, zIndex: 10, boxShadow: '0 30px 60px rgba(0,0,236,0.3)' }}
                      style={{ 
                        background: '#0000EC', 
                        color: '#E2E301', 
                        borderRadius: '32px', 
                        padding: '3rem', 
                        display: 'flex', 
                        flexDirection: 'column',
                        width: '300px',
                        minHeight: '350px',
                        position: 'relative',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        zIndex: 1
                      }}
                    >
                       <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2.5 }} style={{ marginBottom: '2rem' }}>
                          <div style={{ display: 'inline-flex', background: '#E2E301', color: '#0000EC', padding: '1rem', borderRadius: '50%', boxShadow: '0 10px 20px rgba(226,227,1,0.2)' }}>
                             {feature.icon}
                          </div>
                       </motion.div>
                       
                       <h3 style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem' }}>{feature.title}</h3>
                       
                       <div style={{ margin: '1rem 0' }}>
                          <div style={{ width: '60px', height: '6px', background: 'rgba(226,227,1,0.5)', borderRadius: '3px', marginBottom: '10px' }}></div>
                          <div style={{ width: '100px', height: '6px', background: 'rgba(226,227,1,0.2)', borderRadius: '3px', marginBottom: '10px' }}></div>
                          <div style={{ width: '80px', height: '6px', background: 'rgba(226,227,1,0.2)', borderRadius: '3px' }}></div>
                       </div>
                       
                       <p style={{ color: 'rgba(226,227,1,0.9)', fontSize: '1.05rem', lineHeight: 1.6, fontWeight: 500, marginTop: 'auto' }}>
                         {feature.desc}
                       </p>
                    </motion.div>

                    {/* Binder Rings / Plugs between cards (hide on last element) */}
                    {idx < features.length - 1 && (
                       <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '24px', marginLeft: '-12px', marginRight: '-12px', zIndex: 5, padding: '2rem 0' }}>
                          {[...Array(6)].map((_, rIdx) => (
                             <div key={rIdx} style={{ width: '100%', height: '12px', background: '#ffffff', borderRadius: '10px', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.1)' }} />
                          ))}
                       </div>
                    )}
                 </div>
              ))}
            </div>
         </div>
      </section>

      {/* Floating Pill Interruption Banner */}
      <section style={{ padding: '4rem 1rem', background: '#FAFBFC' }}>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            style={{ maxWidth: '1000px', margin: '0 auto', background: '#0000EC', borderRadius: '1000px', padding: '1.5rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', boxShadow: '0 30px 60px rgba(0,0,236,0.25)' }}
          >
             <h3 style={{ fontSize: '2rem', fontWeight: 800, margin: 0, color: '#E2E301' }}>Ready to simplify your tasks?</h3>
             <motion.a 
                whileHover={{ scale: 1.1, rotate: -2 }} 
                href="https://wa.me/97474447766" 
                style={{ background: '#E2E301', color: '#0000EC', padding: '1rem 2.5rem', borderRadius: '50px', fontSize: '1.1rem', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 30px rgba(226,227,1,0.3)' }}
             >
                Start Chatting <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1 }}><ArrowRight strokeWidth={3} /></motion.div>
             </motion.a>
          </motion.div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" style={{ padding: '8rem 2rem', background: 'white' }}>
         <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1E293B', textAlign: 'center', marginBottom: '4rem' }}>Frequently Asked</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
               {faqs.map((faq, idx) => (
                  <motion.div 
                     key={idx}
                     whileHover={{ scale: 1.02, x: 5 }}
                     onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                     style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '1.5rem 2rem', cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}
                  >
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0000EC', margin: 0 }}>
                           {faq.question}
                        </h3>
                        <motion.div animate={{ rotate: activeFaq === idx ? 180 : 0 }} style={{ background: 'white', padding: '0.5rem', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                           <ChevronDown size={20} color="#1E293B" />
                        </motion.div>
                     </div>
                     <AnimatePresence>
                        {activeFaq === idx && (
                           <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                              <p style={{ marginTop: '1.5rem', fontSize: '1.05rem', color: '#64748B', lineHeight: 1.6, borderTop: '1px solid #E2E8F0', paddingTop: '1.5rem' }}>
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

      {/* Neat Footer */}
      <footer style={{ background: '#F8FAFC', padding: '4rem 2rem', borderTop: '1px solid #E2E8F0' }}>
         <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <img src={khadoomLogoVertical} alt="Khadoom" style={{ height: '35px' }} />
            <div style={{ display: 'flex', gap: '3rem', color: '#64748B', fontWeight: 600 }}>
               <motion.a whileHover={{ color: '#0000EC' }} href="#" style={{ textDecoration: 'none', color: 'inherit' }}>info@khadoom.ai</motion.a>
               <motion.a whileHover={{ color: '#0000EC' }} href="#" style={{ textDecoration: 'none', color: 'inherit' }}>+974 7444 7766</motion.a>
               <motion.a whileHover={{ color: '#0000EC' }} href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Lusail, Qatar</motion.a>
            </div>
            <div style={{ color: '#94A3B8', fontWeight: 500 }}>
               © 2026 Khadoom AI. V5 Cloud Design.
            </div>
         </div>
      </footer>
    </div>
  );
}
