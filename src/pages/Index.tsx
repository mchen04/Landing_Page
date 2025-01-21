import Navigation from '@/components/Navigation';
import HeroSection from '@/components/landing/HeroSection';
import StatsSection from '@/components/landing/StatsSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import ReviewsSection from '@/components/landing/ReviewsSection';
import TechnicalSection from '@/components/landing/TechnicalSection';
import ValuesSection from '@/components/landing/ValuesSection';
import DocsSection from '@/components/landing/DocsSection';
import PricingSection from '@/components/landing/PricingSection';
import FooterSection from '@/components/landing/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <TechnicalSection />
      <ReviewsSection />
      <ValuesSection />
      <PricingSection />
      <DocsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
