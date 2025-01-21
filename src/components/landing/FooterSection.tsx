const FooterSection = () => (
  <footer className="bg-gray-900 text-white py-12 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-bold text-lg mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4">Product</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4">Resources</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4">Legal</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
      <p>© 2024 Your Brand. All rights reserved.</p>
    </div>
  </footer>
);

export default FooterSection;