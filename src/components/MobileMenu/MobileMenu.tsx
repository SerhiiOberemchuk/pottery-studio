'use client';

import { useMobileMenuState } from '@/store/mobileMenuStore';
import { cn } from '@/utils/cn';
import NavigationLinks from './NavigationLinks';

function MobileMenu() {
  const { isMenuOpen } = useMobileMenuState();

  return (
    <div
      className={cn(
        'absolute right-0 top-0 z-0 flex h-[99.9dvh] w-full -translate-y-full flex-col gap-3 bg-white px-6 py-20 transition-all duration-500 xl:hidden',
        isMenuOpen && 'translate-y-0'
      )}
    >
      <NavigationLinks type="header" />
    </div>
  );
}

export default MobileMenu;
