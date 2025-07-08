'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';
import HomeSection from '../components/sections/HomeSection';
import HistorySection from '../components/sections/HistorySection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <HomeSection onNavigate={setActiveTab} />;
      case 1:
        return <HistorySection />;
      case 2:
        return <SkillsSection />;
      case 3:
        return <ProjectsSection />;
      default:
        return <HomeSection onNavigate={setActiveTab} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Barra de progreso de scroll */}
      <SmoothScroll />
      

      
      <Header activeTab={activeTab} onTabChange={handleTabChange} />
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {renderContent()}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
} 