import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import style from './navbar.module.css';
import DesktopLogo from '../public/assets/desktop-logo.svg';
import MobileLogo from '../public/assets/mobile-logo.svg';

const navbar = ({ dark, page }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id={style.navbarContainer}>
      <Navbar
        id={style.navbar}
        className={dark ? style.dark : style.clear}
        light
        expand="md"
      >
        <NavbarBrand id={style.logo} href="/">
          <MobileLogo id={style.mobileLogo} />
          <DesktopLogo id={style.desktopLogo} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} id={style.navbarToggler} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem
              className={style.navItem}
              id={page === 'home' ? style.selectedPage : ''}
            >
              <Link href="/" as={process.env.BACKEND_URL + '/'}>
                <a>Home</a>
              </Link>
            </NavItem>
            <NavItem
              className={style.navItem}
              id={page === 'solutions' ? style.selectedPage : ''}
            >
              <Link
                href="solutions"
                as={process.env.BACKEND_URL + '/solutions'}
              >
                <a>Solutions</a>
              </Link>
            </NavItem>
            <NavItem
              className={style.navItem}
              id={page === 'team' ? style.selectedPage : ''}
            >
              <Link href="/team" as={process.env.BACKEND_URL + '/team'}>
                <a>Team</a>
              </Link>
            </NavItem>
            <NavItem
              className={style.navItem}
              id={page === 'contact' ? style.selectedPage : ''}
            >
              <Link href="/contact" as={process.env.BACKEND_URL + '/contact'}>
                <a>Contact</a>
              </Link>
            </NavItem>
            <NavItem
              className={style.navItem}
              id={page === 'press' ? style.selectedPage : ''}
            >
              <Link href="/press" as={process.env.BACKEND_URL + '/press'}>
                <a>Press</a>
              </Link>
            </NavItem>
            <NavItem
              className={style.navItem}
              id={page === 'blog' ? style.selectedPage : ''}
            >
              <Link href="/blog" as={process.env.BACKEND_URL + '/blog'}>
                <a>Blog</a>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default navbar;
