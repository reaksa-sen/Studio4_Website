/* eslint-disable @next/next/no-img-element */
import MenuIcon from '@heroicons/react/outline/MenuIcon';
import XIcon from '@heroicons/react/outline/XIcon';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Menu } from '@headlessui/react';
import ChevronDownIcon from '@heroicons/react/solid/ChevronDownIcon';
import { Language, useLanguageModalContext } from 'hooks/LanguageModalContext';
import English from '../public/languages/english/translation.json';
import Khmer from '../public/languages/khmer/translation.json';

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
        className={classNames(
          'flex items-center  px-3 py-2 text-lg font-semibold leading-normal hover:text-primary-500',
          isActive ? 'text-primary-600' : 'text-white'
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
        onClick={onClick}
        href={href}
        className={classNames(
          'block rounded-md px-3 py-2 font-semibold',
          isActive ? 'text-primary-600' : 'text-white'
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
  <button onClick={() => onClick()} type="button" className="block p-2 lg:hidden">
    {isNavOpen && <XIcon className="h-6 w-6 fill-current text-gray-200" aria-hidden="true" />}
    {!isNavOpen && <MenuIcon className="h-6 w-6 fill-current text-gray-200" aria-hidden="true" />}
  </button>
);

const Navigator = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { lang, setLanguage } = useLanguageModalContext();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navLinkNames = lang === 'en' ? English : Khmer;
  function handleNavBar() {
    setIsNavOpen(!isNavOpen);
  }
  //   router.push({ pathname, query }, asPath, {
  //     locale: lang === 'km' ? 'kh' : lang,
  //     shallow: true
  //   });
  // }, [lang]);

  return (
    <nav className="fixed z-20 w-full bg-transparent bg-gradient-to-b from-gray-800">
      <div className="container px-4 py-4">
        <div className=" flex justify-center">
          <div className="hidden md:flex ">
            <NavLink exact href="/about" name="About" />
            <NavLink href="/movies" name="Movies" />
            <NavLink href="/works" name="Works" />
            <Link href="/" passHref>
              <a>
                <img src="/images/logo.png" className=" h-16 w-auto" alt="studio" />
              </a>
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
              <a>
                <img src="/images/logo.png" className=" h-12 w-auto" alt="studio" />
              </a>
            </Link>
          </div>
        </div>
        <div
          className={classNames(
            'container border-b border-primary-600 pl-4 lg:hidden',
            isNavOpen ? '' : 'hidden'
          )}
          id="mobile-menu"
        >
          <div className="grid-cols grid grid-cols-2 px-2 pt-2 pb-3">
            <SmNavLink exact href="/about" name="About" onClick={handleNavBar} />
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
