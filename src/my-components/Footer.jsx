import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white p-9">
        <hr />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-green-400 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:example@example.com" className="hover:text-green-400 transition-colors">example@example.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-green-400 transition-colors">+123 456 7890</a></li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-400 transition-colors">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-400 transition-colors">
                <i className="bx bxl-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-400 transition-colors">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          <p>&copy; 2025 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
