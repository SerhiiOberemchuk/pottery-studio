import { cn } from '@/utils/cn';
import Link from 'next/link';
import React from 'react';
import { NavigationLinksProps } from './NavigationLinks';

type Props = NavigationLinksProps & {
  href: string;
  titleLink: string;
  className?: string;
};

function LinkMobileMenu({ href, titleLink, className, type }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        type === 'header' && 'body_2 uppercase',
        type === 'footer' && 'big_btns capitalize',
        className
      )}
    >
      {titleLink.toLocaleLowerCase()}
    </Link>
  );
}

export default LinkMobileMenu;
