import Logo from '@/components/common/Logo';
import NavigationLinks from '@/components/MobileMenu/NavigationLinks';
import React from 'react';

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-brown py-6">
      <div className="container flex flex-col items-center gap-8">
        <Logo type="footer" />
        <div className="flex flex-col items-center gap-2">
          <NavigationLinks type="footer" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
