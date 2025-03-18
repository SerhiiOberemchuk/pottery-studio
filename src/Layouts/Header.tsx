import Logo from '@/components/common/Logo';
import UserActions from '@/components/common/UserActions';
import MenuButton from '@/components/MobileMenu/MenuButton';
import MobileMenu from '@/components/MobileMenu/MobileMenu';
import NavigationLinks from '@/components/MobileMenu/NavigationLinks';

function Header() {
  return (
    <header className="border-background-0 border-1 backdrop-blur-xs relative py-2">
      <div className="container flex items-center justify-between">
        <Logo type="header" />
        <div className="flex w-full max-w-[11rem] items-center justify-between xl:max-w-[57rem]">
          <div className="hidden gap-6 xl:flex">
            <NavigationLinks type="header" />
          </div>
          <UserActions />
          <MenuButton />
        </div>
      </div>
      <MobileMenu />
    </header>
  );
}

export default Header;
