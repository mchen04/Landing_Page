import { Button } from '@/components/ui/button';
import { Terminal, Sparkles, Code2 } from 'lucide-react';

const HeroSection = () => (
  <section className="hero-gradient pt-32 pb-20 px-4 relative overflow-hidden min-h-[90vh] flex items-center">
    {/* Background with grid pattern */}
    <div className="absolute inset-0 bg-grid-white/10" />
    
    {/* Content container */}
    <div className="max-w-7xl mx-auto text-center relative z-10">
      {/* Badge/pill component */}
      <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/90 mb-8 animate-fade-in">
        <Sparkles className="h-4 w-4" />
        <span className="text-sm font-medium">Introducing AI-Powered Code Analysis</span>
      </div>

      {/* Main heading */}
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
        Transform Your Code <br className="hidden md:block" />
        Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">Living Intelligence</span>
      </h1>

      {/* Subheading with enhanced description */}
      <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
        DevForge empowers developers with real-time AI analysis, smart collaboration tools, 
        and automated optimization. Write better code, faster.
      </p>

      {/* Feature highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
        {[
          { icon: Code2, text: "Smart Code Analysis" },
          { icon: Terminal, text: "Real-time Optimization" },
          { icon: Sparkles, text: "AI-Powered Insights" }
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center justify-center gap-2 text-white/80">
            <Icon className="h-5 w-5" />
            <span>{text}</span>
          </div>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button 
          size="lg" 
          className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform px-8 h-14 text-lg"
        >
          Start Coding Now
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="bg-white/10 text-white border-white hover:bg-white/20 gap-2 px-8 h-14 text-lg"
        >
          Watch Demo
        </Button>
      </div>

      {/* Trust badges */}
      <div className="mt-16 text-white/80 text-sm">
        <p className="mb-4 text-white/60">Trusted by developers at</p>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {['Google', 'Microsoft', 'Amazon', 'Meta'].map((company) => (
            <span key={company} className="font-semibold">{company}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;