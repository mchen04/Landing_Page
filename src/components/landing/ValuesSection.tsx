import { Heart, Sparkles, Users } from 'lucide-react';

const ValuesSection = () => (
  <section className="py-20 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Customer First</h3>
          <p className="text-gray-600">Your success is our top priority. We're here to support you every step of the way.</p>
        </div>
        <div className="text-center p-6">
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Innovation</h3>
          <p className="text-gray-600">We're constantly pushing boundaries to bring you the latest technology.</p>
        </div>
        <div className="text-center p-6">
          <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Community</h3>
          <p className="text-gray-600">Join a thriving community of developers and creators.</p>
        </div>
      </div>
    </div>
  </section>
);

export default ValuesSection;