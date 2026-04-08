import { useState } from 'react';
import AppV1 from './AppV1';
import AppV2 from './AppV2';
import AppV3 from './AppV3';
import AppV4 from './AppV4';
import AppV5 from './AppV5';
import { motion } from 'framer-motion';
import { Sparkles, Monitor, Layers, Orbit, Palette } from 'lucide-react';

function App() {
  const [activeVersion, setActiveVersion] = useState<'v1' | 'v2' | 'v3' | 'v4' | 'v5'>('v1');

  return (
    <>
      {activeVersion === 'v1' && <AppV1 />}
      {activeVersion === 'v2' && <AppV2 />}
      {activeVersion === 'v3' && <AppV3 />}
      {activeVersion === 'v4' && <AppV4 />}
      {activeVersion === 'v5' && <AppV5 />}
      
      {/* Floating Version Switcher */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        style={{ 
          position: 'fixed', 
          bottom: '2rem', 
          left: '50%',
          transform: 'translateX(-50%)', 
          zIndex: 9999,
          display: 'flex',
          gap: '0.5rem',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          padding: '0.5rem',
          borderRadius: '50px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
          border: '1px solid rgba(0, 0, 0, 0.05)'
        }}
      >
        <button 
          onClick={() => setActiveVersion('v1')}
          style={{
            background: activeVersion === 'v1' ? 'var(--color-primary)' : 'transparent',
            color: activeVersion === 'v1' ? '#111' : '#666',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '40px',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease'
          }}
        >
          <Monitor size={16} /> V1 Default
        </button>
        <button 
          onClick={() => setActiveVersion('v2')}
          style={{
            background: activeVersion === 'v2' ? 'var(--color-secondary)' : 'transparent',
            color: activeVersion === 'v2' ? 'white' : '#666',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '40px',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease'
          }}
        >
          <Layers size={16} /> V2 Bento
        </button>
        <button 
          onClick={() => setActiveVersion('v3')}
          style={{
            background: activeVersion === 'v3' ? '#FF5722' : 'transparent',
            color: activeVersion === 'v3' ? 'white' : '#666',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '40px',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease'
          }}
        >
          <Orbit size={16} /> V3 Orbital
        </button>
        <button 
          onClick={() => setActiveVersion('v4')}
          style={{
            background: activeVersion === 'v4' ? '#111' : 'transparent',
            color: activeVersion === 'v4' ? 'white' : '#666',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '40px',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease'
          }}
        >
          <Sparkles size={16} /> V4 Saas Premium
        </button>
        <button 
          onClick={() => setActiveVersion('v5')}
          style={{
            background: activeVersion === 'v5' ? '#0000EC' : 'transparent',
            color: activeVersion === 'v5' ? '#E2E301' : '#666',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '40px',
            cursor: 'pointer',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease'
          }}
        >
          <Palette size={16} /> V5 Homie Minimal
        </button>
      </motion.div>
    </>
  );
}

export default App;
