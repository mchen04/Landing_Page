import { Code, GitBranch, Terminal, Cloud, Lock, Zap, Database, Cpu } from 'lucide-react';
import FeatureCard from '../FeatureCard';

const FeaturesSection = () => (
  <section id="features" className="py-20 px-4 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Powerful Features</h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Everything you need to build amazing software, all in one place.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          title="Smart Code Completion"
          description="AI-powered code suggestions that help you write better code faster."
          Icon={Code}
        />
        <FeatureCard
          title="Git Integration"
          description="Seamless version control with built-in Git commands and visualization."
          Icon={GitBranch}
        />
        <FeatureCard
          title="Integrated Terminal"
          description="Full-featured terminal built right into your development environment."
          Icon={Terminal}
        />
        <FeatureCard
          title="Cloud Deployment"
          description="Deploy your applications to any cloud provider with one click."
          Icon={Cloud}
        />
        <FeatureCard
          title="Enterprise Security"
          description="Bank-grade security with end-to-end encryption and audit logs."
          Icon={Lock}
        />
        <FeatureCard
          title="Fast Performance"
          description="Lightning-fast IDE performance with native speed optimizations."
          Icon={Zap}
        />
        <FeatureCard
          title="Database Tools"
          description="Built-in database management and query optimization tools."
          Icon={Database}
        />
        <FeatureCard
          title="Resource Efficient"
          description="Optimized resource usage for smooth development experience."
          Icon={Cpu}
        />
      </div>
    </div>
  </section>
);

export default FeaturesSection;
