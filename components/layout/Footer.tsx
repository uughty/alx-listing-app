import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-8">
      <p>&copy; {new Date().getFullYear()} My Real Estate App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
