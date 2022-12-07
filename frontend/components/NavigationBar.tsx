/* eslint-disable @next/next/no-img-element */
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import MenuIcon from '@heroicons/react/outline/MenuIcon';
import XIcon from '@heroicons/react/outline/XIcon';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface NavLinkProps {
  href: string;
  name: string;
  exact?: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = props => {
  const { href, name, exact } = props;
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <a
        aria-label={`click here to view ${name}`}
        className={classNames(
          'flex items-center  px-3 py-2 font-heading text-lg leading-normal hover:text-primary-500',
          isActive ? 'text-primary-500' : 'text-white'
        )}
      >
        {name}
      </a>
    </Link>
  );
};

const SmNavLink: React.FC<NavLinkProps> = props => {
  const { href, name, exact, onClick } = props;
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <a
        aria-label={`click here to view ${name}`}
        onClick={onClick}
        href={href}
        className={classNames(
          'block px-3 py-2 font-heading',
          isActive ? 'text-primary-500' : 'text-white'
        )}
      >
        {name}
      </a>
    </Link>
  );
};

const NavButton: React.FC<{ onClick: () => void; isNavOpen: boolean }> = ({
  onClick,
  isNavOpen
}) => (
  <button onClick={() => onClick()} type="button" className="block lg:hidden">
    {isNavOpen && <XIcon className="h-6 w-6 fill-current text-gray-200" aria-hidden="true" />}
    {!isNavOpen && <MenuIcon className="h-6 w-6 fill-current text-gray-200" aria-hidden="true" />}
  </button>
);

const Navigator = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y < -50) setIsTop(false);
      else setIsTop(true);
    },
    [isTop]
  );

  function handleNavBar() {
    setIsNavOpen(!isNavOpen);
  }
  return (
    <nav
      className={classNames('fixed z-50 w-full', {
        'md:bg-transparent': isTop,
        'bg-black bg-none': !isTop || isNavOpen
      })}
    >
      <div className="container px-4 py-4">
        <div className=" flex justify-center ">
          <div className="hidden gap-x-3 md:flex ">
            <NavLink exact href="/about" name="About" />
            <NavLink href="/movies" name="Movies" />
            <NavLink href="/works" name="Works" />
            <Link href="/" passHref>
              <img src="/images/logo.png" className="h-16 w-auto cursor-pointer" alt="studio4" />
            </Link>
            <NavLink href="/news" name="News" />
            <NavLink href="/artists" name="Artists" />
            <NavLink href="/contact" name="Contact" />
          </div>
        </div>

        <div className="block md:hidden ">
          <div className="flex items-center justify-between">
            <NavButton onClick={() => handleNavBar()} isNavOpen={isNavOpen} />
            <Link href="/" passHref>
              <img src="/images/logo.png" className=" h-12 w-auto cursor-pointer" alt="studio" />
            </Link>
          </div>
        </div>
        <div
          className={classNames(
            'container border-b border-primary-500 pl-4 md:hidden',
            isNavOpen ? '' : 'hidden'
          )}
          id="mobile-menu"
        >
          <div className="grid grid-cols-2 px-2 pt-2 pb-3">
            <SmNavLink href="/about" name="About" onClick={handleNavBar} />
            <SmNavLink href="/movies" name="Movies" onClick={handleNavBar} />
            <SmNavLink href="/works" name="Works" onClick={handleNavBar} />
            <SmNavLink href="/news" name="News" onClick={handleNavBar} />
            <SmNavLink href="/artists" name="Artists" onClick={handleNavBar} />
            <SmNavLink href="/contact" name="Contacts" onClick={handleNavBar} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigator;
