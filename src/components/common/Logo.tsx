import Link from 'next/link';
import LogoSVG from '@/assets/icons/logo_header.svg';
import LogoFooter from '@/assets/icons/logo_footer.svg';
import { cn } from '@/utils/cn';

type Props = { className?: string; type: 'header' | 'footer' };

function Logo({ className, type }: Props) {
  return (
    <Link
      href={'/'}
      aria-label="Logo company, link to main page"
      className={cn(className)}
    >
      {type === 'header' ? <LogoSVG /> : <LogoFooter />}
    </Link>
  );
}

export default Logo;
