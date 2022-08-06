import React from 'react';

interface LineIconProps {
  title: string;
  href: string;
  children: React.ReactNode;
}

const LineIcon = ({ title, href, children }: LineIconProps) => {
  return (
    <a title={title} href={href}>
      {children}
    </a>
  );
};

export default LineIcon;
