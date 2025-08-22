import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import TradingOptions from '@/components/TradingOptions'
import AiModules from '@/components/AiModules'
import EquipmentSharing from '@/components/EquipmentSharing'
import KnowledgeHub from '@/components/KnowledgeHub'
import ChatBot from '@/components/ChatBot'
import Footer from '@/components/Footer'

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        <HeroSection />
        <TradingOptions />
        <AiModules />
        <EquipmentSharing />
        <KnowledgeHub />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Chat Assistant */}
      <ChatBot />
    </div>
  );
};

export default Index;
