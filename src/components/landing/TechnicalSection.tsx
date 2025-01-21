import { Code2, Database, Network, Shield } from 'lucide-react';

const TechnicalSection = () => {
  const technicalDetails = [
    {
      icon: Network,
      title: "Microservices Architecture",
      description: "Built on a modern microservices architecture using Docker and Kubernetes for seamless scaling.",
      details: [
        "Containerized microservices for modularity",
        "Event-driven architecture with Apache Kafka",
        "Load balancing with NGINX",
        "Distributed caching with Redis"
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      icon: Code2,
      title: "Modern Tech Stack",
      description: "Leveraging cutting-edge technologies for optimal performance and developer experience.",
      details: [
        "Frontend: React with TypeScript",
        "Backend: Node.js and Go microservices",
        "Database: PostgreSQL with TimescaleDB",
        "AI: TensorFlow for code analysis"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security measures to protect your code and data.",
      details: [
        "End-to-end encryption",
        "SOC 2 Type II certified",
        "Regular security audits",
        "Role-based access control"
      ],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    },
    {
      icon: Database,
      title: "Performance Metrics",
      description: "Optimized for speed and efficiency at every level.",
      details: [
        "99.99% uptime SLA",
        "<100ms API response time",
        "Scales to 10k+ concurrent users",
        "Real-time collaboration with no lag"
      ],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Technical Excellence</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Built with scalability, security, and performance in mind. Explore our technical architecture and capabilities.
        </p>
        
        <div className="space-y-24">
          {technicalDetails.map((detail, index) => (
            <div 
              key={detail.title}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
                gap-8 items-center animate-fade-in`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <img 
                  src={detail.image} 
                  alt={detail.title}
                  className="rounded-lg shadow-lg w-full object-cover aspect-video"
                />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <detail.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-semibold">{detail.title}</h3>
                </div>
                
                <p className="text-gray-600 text-lg">{detail.description}</p>
                
                <ul className="space-y-3">
                  {detail.details.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;