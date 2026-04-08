import { useState } from 'react';
import AppV1 from './AppV1';
import AppV2 from './AppV2';
import { motion } from 'framer-motion';
import { Sparkles, Monitor } from 'lucide-react';

function App() {
  const [activeVersion, setActiveVersion] = useState<'v1' | 'v2'>('v1');

  return (
    <>
      {activeVersion === 'v1' ? <AppV1 /> : <AppV2 />}
      
      {/* Floating Version Switcher */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        style={{ 
          position: 'fixed', 
          bottom: '2rem', 
          right: '2rem', 
          zIndex: 9999,
          display: 'flex',
          gap: '0.5rem',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          padding: '0.5rem',
          borderRadius: '50px',
          boxShadow: '0 10px 25px rgba(0, 0, 236, 0.15)',
          border: '1px solid rgba(0, 0, 236, 0.1)'
        }}
      >
        <button 
          onClick={() => setActiveVersion('v1')}
          style={{
            background: activeVersion === 'v1' ? 'var(--color-primary)' : 'transparent',
            color: activeVersion === 'v1' ? 'var(--color-text-main)' : 'var(--color-text-muted)',
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
          <Monitor size={16} /> V1 Basic
        </button>
        <button 
          onClick={() => setActiveVersion('v2')}
          style={{
            background: activeVersion === 'v2' ? 'var(--color-secondary)' : 'transparent',
            color: activeVersion === 'v2' ? 'white' : 'var(--color-text-muted)',
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
          <Sparkles size={16} /> V2 3D
        </button>
      </motion.div>
    </>
  );
}

export default App;
