import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => (
  <section className="py-20 px-4 bg-white" id="pricing">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Choose the plan that best fits your needs. All plans include our core features.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Free Plan */}
        <div className="border rounded-xl p-8 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-bold mb-4">Free</h3>
          <p className="text-gray-600 mb-4">Perfect for personal projects</p>
          <div className="mb-8">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-gray-600">/month</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2">
              <Check className="text-green-500" />
              <span>Up to 3 projects</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500" />
              <span>Basic IDE features</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500" />
              <span>Community support</span>
            </li>
          </ul>
          <Button className="w-full">Get Started</Button>
        </div>

        {/* Pro Plan */}
        <div className="border rounded-xl p-8 bg-primary/5 hover:shadow-lg transition-shadow relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </div>
          <h3 className="text-2xl font-bold mb-4">Pro</h3>
          <p className="text-gray-600 mb-4">For professional developers</p>
          <div className="mb-8">
            <span className="text-4xl font-bold">$19</span>
            <span className="text-gray-600">/month</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2">
              <Check className="text-green-500" />
              <span>Unlimited projects</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500" />
              <span>Advanced IDE features</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500" />
              <span>Priority support</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500" />
              <span>Custom themes</span>
            </li>
          </ul>
          <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
        </div>

        {/* Enterprise Plan */}
        <div className="border rounded-xl p-8 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
          <p className="text-gray-600 mb-4">For teams and organizations</p>
          <div className="mb-8">
            <span className="text-4xl font-bold">$99</span>
            <span className="text-gray-600">/month</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2">
              <Check className="text-green-500" />
              <span>Everything in Pro</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500" />
              <span>SSO Authentication</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500" />
              <span>24/7 Support</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500" />
              <span>Custom integrations</span>
            </li>
          </ul>
          <Button className="w-full">Contact Sales</Button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;