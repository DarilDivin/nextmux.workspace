// Footer.tsx
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-300 p-4 py-2 text-sm lg:text-left text-center bottom-0 rounded-md">
      <p>Tous droits réservés <Link href='#'>NEXTMUX</Link> © 2024.</p>
    </footer>
  );
};

export default Footer;
