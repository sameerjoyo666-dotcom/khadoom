import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  Bot, 
  MessageSquare, 
  ChevronDown, 
  ShoppingBag, 
  Package, 
  Shirt, 
  Dog,
  Zap,
  Clock,
  MapPin,
  Smartphone,
  Star,
  ArrowRight
} from 'lucide-react';
import './App.css';

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

// Stagger variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Advanced Scroll Animations
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 20 });
  
  // Parallax effects
  const heroImgY = useTransform(smoothScrollY, [0, 800], [0, 150]);
  const shape1Y = useTransform(smoothScrollY, [0, 1000], [0, -200]);
  const shape2Y = useTransform(smoothScrollY, [0, 1000], [0, 250]);
  
  // Banner scroll
  const bannerX = useTransform(smoothScrollY, [0, 2000], [0, -800]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-mesh"></div>

      {/* Shapes for parallax background */}
      <motion.div 
        style={{ y: shape1Y, position: 'absolute', top: '20vh', right: '5vw', zIndex: -1, opacity: 0.5 }}
      >
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0000EC" d="M42.7,-73.4C55.9,-66.4,67.6,-56.3,76.5,-43.8C85.4,-31.3,91.4,-15.6,90.2,-0.7C88.9,14.3,80.3,28.6,70.6,40.6C60.9,52.6,50,62.2,37.3,70C24.5,77.7,10.1,83.5,-5.1,85.2C-20.2,86.9,-36,84.4,-50.2,76.9C-64.4,69.4,-77,56.8,-84.3,42.1C-91.6,27.3,-93.6,10.4,-91,-5.5C-88.3,-21.4,-81,-36.4,-70.6,-48C-60.2,-59.5,-46.8,-67.7,-33,-73.7C-19.1,-79.8,-4.9,-83.7,9.3,-82.1C23.5,-80.5,37,-73.4,42.7,-73.4Z" transform="translate(100 100) scale(1.1)" />
        </svg>
      </motion.div>
      
      <motion.div 
        style={{ y: shape2Y, position: 'absolute', top: '70vh', left: '-10vw', zIndex: -1, opacity: 0.4 }}
      >
        <svg width="500" height="500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#E2E301" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,82,-46.3C92.2,-33.4,99.6,-17.9,98.9,-2.6C98.2,12.7,89.5,27.8,78.9,40.7C68.3,53.6,55.9,64.3,41.8,71.9C27.7,79.5,11.9,84.1,-3.5,84.4C-18.9,84.7,-33.8,80.6,-47,72.7C-60.2,64.8,-71.7,53,-80.3,39C-88.9,25,-94.6,8.8,-92.4,-6.2C-90.2,-21.3,-80,-35.1,-68.1,-46C-56.2,-56.9,-42.6,-64.9,-29.1,-72.1C-15.6,-79.3,-2.2,-85.7,11.6,-86C25.4,-86.3,40.1,-80.4,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </motion.div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
      >
        <div className="container nav-content">
          <div className="flex items-center gap-2 cursor-pointer" style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-secondary)' }}>
            <div style={{ background: 'var(--color-primary)', borderRadius: '12px', padding: '0.4rem' }}>
              <Bot size={28} color="var(--color-secondary)" />
            </div>
            Khadoom<span style={{ color: 'var(--color-primary)' }}>.ai</span>
          </div>
          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About me</a></li>
            <li><a href="#features" className="nav-link">Features</a></li>
            <li><a href="#faq" className="nav-link">FAQs</a></li>
          </ul>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="btn btn-secondary" 
            style={{ padding: '0.6rem 1.5rem', fontSize: '1rem', borderRadius: '12px' }}
          >
            Chat with me
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="hero-section container" id="about">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ zIndex: 10 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="modern-pill mb-6" 
              style={{ marginBottom: '1.5rem' }}
            >
              <Zap size={16} fill="var(--color-primary)" color="var(--color-primary)" />
              Qatar's First AI Assistant
            </motion.div>
            
            <h1 style={{ marginBottom: '1.5rem' }}>
              Your life, <br />
              <span className="text-gradient">simplified.</span>
            </h1>
            
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--color-secondary)' }}>
              I'm Khadoom.
            </h2>
            
            <p className="hero-subtitle">
              Designed to ease and simplify your life. In operation across Qatar, I fulfill every task that you need completed—from on-demand delivery, to pet services, grocery & personal shopping and much more.
            </p>
            
            <div className="flex gap-4 hero-buttons">
              <a href="https://wa.me/97474447766" className="btn btn-primary" style={{ fontSize: '1.1rem' }}>
                <span style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Send task <MessageSquare size={20} />
                </span>
              </a>
              <a href="#features" className="btn btn-outline" style={{ fontSize: '1.1rem' }}>
                Discover more <ChevronDown size={20} />
              </a>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              className="flex items-center gap-4 mt-8" style={{ marginTop: '3rem' }}
            >
              <div className="flex" style={{ marginLeft: '10px' }}>
                 {[1,2,3,4].map(i => (
                    <div key={i} style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#FFF', border: '3px solid #F8FAFC', marginLeft: '-10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                      <Star size={16} color="var(--color-primary)" fill="var(--color-primary)" />
                    </div>
                 ))}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                Trusted by thousands <br/>across Qatar
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            style={{ y: heroImgY }}
            className="hero-image-wrapper"
          >
            {/* Main Interactive Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
            >
              <img src="https://khadoom.ai/static/media/Image%202.b31e73f804000423d903.png" alt="Khadoom AI Assistant" className="hero-image" />
            </motion.div>
            
            {/* Floating Widget 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 0 }} 
              animate={{ opacity: 1, x: 0, y: [0, -15, 0] }} 
              transition={{ delay: 0.8, y: { repeat: Infinity, duration: 4, ease: "easeInOut" } }}
              className="floating-widget accent" 
              style={{ top: '10%', right: '-5%' }}
            >
              <div className="floating-icon"><Clock size={24} /></div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>Instant Reply</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>24/7 Availability</div>
              </div>
            </motion.div>

            {/* Floating Widget 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -50, y: 0 }} 
              animate={{ opacity: 1, x: 0, y: [0, 15, 0] }} 
              transition={{ delay: 1, y: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
              className="floating-widget" 
              style={{ bottom: '15%', left: '-10%' }}
            >
              <div className="floating-icon"><MapPin size={24} /></div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Delivery within</div>
                <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>All across Qatar</div>
              </div>
            </motion.div>
            
          </motion.div>
        </div>
      </section>

      {/* Infinite Scroll Banner */}
      <div className="scroll-banner">
        <motion.div className="scroll-banner-text" style={{ x: bannerX }}>
          <span>PERSONAL SHOPPING</span>
          <span>PARCEL DELIVERY</span>
          <span>LAUNDRY PICKUP</span>
          <span>PET TRANSPORT</span>
          <span>DOCUMENT DELIVERY</span>
          <span>FOOD DELIVERY</span>
          <span>MEDICATION</span>
          <span>GIFT DELIVERY</span>
          <span>PERSONAL SHOPPING</span>
          <span>PARCEL DELIVERY</span>
          <span>LAUNDRY PICKUP</span>
          <span>PET TRANSPORT</span>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="section container" id="features">
        <div className="text-center" style={{ marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="modern-pill mb-4" 
            style={{ marginBottom: '1.5rem' }}
          >
            Services
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            What I can <span className="text-gradient">do for you</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hero-subtitle" style={{ margin: '1rem auto' }}
          >
            Everything from groceries to pet drop-offs. If you are unsure the task can be done, all you have to do is text me on WhatsApp and I will confirm.
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-4 md-grid-cols-2 md-flex-col gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div variants={itemVariants} key={idx} className="feature-card">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>{feature.desc}</p>
              
              <div style={{ marginTop: 'auto', overflow: 'hidden', borderRadius: '16px' }}>
                <img src={feature.image} alt={feature.title} className="feature-image" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Banner Section */}
      <section className="container" style={{ padding: '6rem 0' }} id="contact">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="modern-card" 
          style={{ padding: '5rem 2rem', textAlign: 'center', background: 'var(--color-secondary)', color: 'white', overflow: 'hidden', position: 'relative' }}
        >
          {/* Decorative circles */}
          <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}></div>
          <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(226, 227, 1, 0.1)' }}></div>
          
          <div style={{ background: 'white', width: '80px', height: '80px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', position: 'relative', zIndex: 10 }}>
            <Smartphone size={40} color="var(--color-secondary)" />
          </div>
          
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white', position: 'relative', zIndex: 10 }}>Leave the rest up strictly to me.</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', position: 'relative', zIndex: 10 }}>
            Whatever language you speak, I can understand. Stop stressing over daily chores!
          </p>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/97474447766" 
            className="btn btn-primary" 
            style={{ padding: '1.2rem 3rem', fontSize: '1.2rem', position: 'relative', zIndex: 10, borderRadius: '24px' }}
          >
            <span style={{ position:'relative', zIndex: 2, display:'flex', alignItems:'center', gap:'1rem' }}>
               Message +974 7444 7766 <ArrowRight size={24} />
            </span>
          </motion.a>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="section container" id="faq">
        <div className="grid grid-cols-2 md-grid-cols-1 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <div className="modern-pill mb-4" style={{ marginBottom: '1.5rem' }}>Ask Anything</div>
            <h2 style={{ marginBottom: '2rem' }}>Frequently <br/><span className="text-gradient">Asked Questions</span></h2>
            <p className="hero-subtitle">
              Got doubts? I've got answers. If you don't find what you are looking for, shoot a message on WhatsApp.
            </p>
            <img src="https://khadoom.ai/static/media/faq1_img.266930cb81903aeeb0bb.png" alt="FAQ Graphic" style={{ width: '100%', maxWidth: '350px', marginTop: '2rem', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="faq-container"
          >
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${activeFaq === idx ? 'active' : ''}`}
              >
                <div 
                  className="faq-question" 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span style={{ paddingRight: '1rem', width: '90%' }}>{faq.question}</span>
                  <div className="faq-icon">
                    <ChevronDown size={20} />
                  </div>
                </div>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="faq-answer" style={{ padding: '1rem 0 0.5rem 0' }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '3rem' }}>
          <div>
            <div className="flex items-center gap-2 mb-6" style={{ fontSize: '1.5rem', fontWeight: 800 }}>
              <div style={{ background: 'var(--color-primary)', borderRadius: '12px', padding: '0.4rem' }}>
                <Bot size={24} color="var(--color-secondary)" />
              </div>
              Khadoom<span style={{ color: 'var(--color-primary)' }}>.ai</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
              Qatar's first AI-powered personal assistant designed to ease and simplify customers' lives.
            </p>
          </div>
          
          <div className="flex justify-center md-flex-col gap-12" style={{ color: 'rgba(255,255,255,0.8)' }}>
            <div className="flex-col gap-4">
               <h4 style={{ color: 'white', marginBottom: '1rem' }}>Services</h4>
               <span style={{ cursor: 'pointer' }}>Personal Shopping</span>
               <span style={{ cursor: 'pointer' }}>Parcel Delivery</span>
               <span style={{ cursor: 'pointer' }}>Laundry</span>
               <span style={{ cursor: 'pointer' }}>Pet Transport</span>
            </div>
            <div className="flex-col gap-4">
               <h4 style={{ color: 'white', marginBottom: '1rem' }}>Contact</h4>
               <span>Lusail, Qatar</span>
               <span>info@khadoom.ai</span>
               <span style={{ color: 'var(--color-primary)' }}>+974 7444 7766</span>
            </div>
          </div>
          
          <div className="flex-col justify-end text-right md-text-left mt-auto">
            <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', marginTop: '2rem' }}>
              © {new Date().getFullYear()} Khadoom. <br/>All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
