import { BookOpen, Code, GraduationCap, HelpCircle, MessageSquare } from 'lucide-react';
import FeatureCard from '../FeatureCard';

const DocsSection = () => (
  <section id="docs" className="py-20 px-4 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Documentation & Support</h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Everything you need to get started and become a DevForge expert.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          title="Getting Started"
          description="Step-by-step guide to set up and configure DevForge."
          Icon={BookOpen}
        />
        <FeatureCard
          title="API Reference"
          description="Complete documentation of all available APIs and integrations."
          Icon={Code}
        />
        <FeatureCard
          title="Tutorials"
          description="Hands-on tutorials to master DevForge features."
          Icon={GraduationCap}
        />
        <FeatureCard
          title="Community"
          description="Join our active developer community for support."
          Icon={MessageSquare}
        />
      </div>
    </div>
  </section>
);

export default DocsSection;
