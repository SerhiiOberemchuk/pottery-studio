import Link from 'next/link';
import Search from '@/assets/icons/Search.svg';
import User from '@/assets/icons/Login.svg';
import ShoppingBag from '@/assets/icons/Basket.svg';

export default function UserActions() {
  return (
    <nav className="flex gap-1">
      <button type="button" aria-label="Search">
        <Search className="h-9 w-9" />
      </button>
      <Link href="/account" aria-label="Account">
        <User className="h-9 w-9" />
      </Link>
      <Link href="/cart" aria-label="Shopping Cart">
        <ShoppingBag className="h-9 w-9" />
      </Link>
    </nav>
  );
}
