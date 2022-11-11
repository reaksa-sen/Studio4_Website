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

export const NavDropdown: React.FC<{ lang: Language; setLanguage: (lang: Language) => void }> = ({
  lang,
  setLanguage
}) => {
  return (
    <Menu as="div" className="relative px-3 py-2">
      <Menu.Button className="flex items-center gap-1 text-sm font-semibold uppercase hover:text-primary-100">
        {lang === 'km' ? (
          <img className="h-8" src="/images/cambodia.png" alt="kh" />
        ) : (
          <img className="h-8" src="/images/united-kingdom.png" alt="en" />
        )}
        <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
      </Menu.Button>
      <Menu.Items
        className={
          'absolute top-[50px] right-0 z-10 flex w-28 flex-col  items-center rounded bg-white'
        }
      >
        <Menu.Item>
          {({ active }) => {
            return (
              <div
                onClick={() => setLanguage('km')}
                className={`flex w-full flex-row items-center gap-2 p-3 text-center hover:cursor-pointer ${
                  active && ' rounded bg-gray-200'
                }`}
              >
                <img className="h-8" src="/images/cambodia.png" alt="kh" />
                ខ្មែរ
              </div>
            );
          }}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <div
              onClick={() => setLanguage('en')}
              className={`flex w-full flex-row items-center gap-2 p-3  text-center hover:cursor-pointer ${
                active && 'rounded bg-gray-200 '
              }`}
            >
              <img className="h-8" src="/images/united-kingdom.png" alt="en" />
              English
            </div>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

const NavLink: React.FC<NavLinkProps> = props => {
  const { href, name, exact } = props;
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <a
        className={classNames(
          'flex items-center  px-3 py-2 text-sm font-semibold uppercase leading-normal hover:text-[#F8931D]',
          isActive ? 'text-[#F8931D]' : 'text-gray-900'
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
          'block rounded-md px-3 py-2 font-semibold uppercase',
          isActive ? 'text-[#F8931D]' : 'text-gray-900'
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
    {isNavOpen && <XIcon className="h-6 w-6 fill-current text-gray-500" aria-hidden="true" />}
    {!isNavOpen && <MenuIcon className="h-6 w-6 fill-current text-gray-500" aria-hidden="true" />}
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

  useEffect(() => {
    router.push({ pathname, query }, asPath, {
      locale: lang === 'km' ? 'kh' : lang,
      shallow: true
    });
  }, [lang]);

  return (
    <nav className="bg-background">
      <div className="container px-4 py-4">
        <div className="relative flex items-center justify-between">
          <NavButton onClick={() => handleNavBar()} isNavOpen={isNavOpen} />
          <Link href="/" passHref>
            <a>
              <img src="/images/logo.png" className="h-8 w-auto md:h-10 " alt="cfa" />
            </a>
          </Link>

          {/* Links section */}
          <div className="hidden lg:flex ">
            {navLinkNames['navigation-bar'].map((nav, i) => (
              <NavLink key={`navLink-${i}`} exact href={nav.link} name={nav.name} />
            ))}
            <NavDropdown lang={lang} setLanguage={setLanguage} />
          </div>
          <div id="menu" className="flex lg:hidden">
            <div className="flex items-center">
              <NavDropdown lang={lang} setLanguage={setLanguage} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          'container border-b border-gray-200 pl-4 lg:hidden',
          isNavOpen ? '' : 'hidden'
        )}
        id="mobile-menu"
      >
        <div className="grid-cols grid grid-cols-2 px-2 pt-2 pb-3">
          {navLinkNames['navigation-bar'].map((nav, i) => (
            <SmNavLink
              key={`smnavLink-${i}`}
              exact
              href={nav.link}
              name={nav.name}
              onClick={handleNavBar}
            />
          ))}
          {/* <SmNavLink exact href="/" name="Home" onClick={handleNavBar} />
          <SmNavLink href="/newsfeed" name="New & Event" onClick={handleNavBar} />
          <SmNavLink href="/about" name="About" onClick={handleNavBar} />
          <SmNavLink href="/contact" name="Contact Us" onClick={handleNavBar} /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigator;
