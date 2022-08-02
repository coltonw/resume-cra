import React from 'react';

interface LinkProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Link = ({ href, onClick, children }: LinkProps) => (
  <a
    href={href}
    onClick={onClick}
    className="text-stone-600 font-bold hover:underline cursor-pointer"
  >
    {children}
  </a>
);

export default Link;
