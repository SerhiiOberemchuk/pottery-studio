'use client';
import { useMobileMenuState } from '@/store/mobileMenuStore';
import { cn } from '@/utils/cn';

function MenuButton() {
  const { isMenuOpen, togleOpenMenu } = useMobileMenuState();

  return (
    <button
      onClick={togleOpenMenu}
      type="button"
      aria-expanded={isMenuOpen}
      aria-label="Togle button open mobile menu"
      className="z-20 flex h-10 w-10 flex-col items-center justify-center gap-2 hover:cursor-pointer xl:hidden"
    >
      <Line className={cn(isMenuOpen && 'translate-y-[9px] rotate-45')} />
      <Line className={cn(isMenuOpen && 'w-0')} />
      <Line className={cn(isMenuOpen && '-translate-y-[9px] -rotate-45')} />
    </button>
  );
}

export default MenuButton;

function Line({ className }: { className?: string }) {
  return (
    <div
      className={cn('h-px w-7 bg-black transition-all duration-500', className)}
    />
  );
}
