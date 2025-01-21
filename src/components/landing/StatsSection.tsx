import { Users, Code, Zap, Clock } from 'lucide-react';

const stats = [
  { label: "Lines of Code Written", value: "1B+", icon: Code },
  { label: "Active Developers", value: "100k+", icon: Users },
  { label: "Build Time Saved", value: "1000h+", icon: Clock },
  { label: "CI/CD Pipelines", value: "50k+", icon: Zap }
];

const StatsSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
          <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
          <p className="text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;