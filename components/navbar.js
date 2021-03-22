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

const navbar = ({ dark, page }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        id={style.navbar}
        className={dark ? style.dark : style.clear}
        light
        expand="md"
      >
        <NavbarBrand id={style.logo} href="/">
          LOGO
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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                nav
                className={style.navItem}
                id={page === 'solutions' ? style.selectedPage : ''}
              >
                Solutions
              </DropdownToggle>
              <DropdownMenu id={style.dropdownMenu} right>
                <DropdownItem className={style.dropdownItem}>
                  {' '}
                  <Link
                    href="/solutions/archival"
                    as={process.env.BACKEND_URL + '/solutions/archival'}
                  >
                    <a>Archival</a>
                  </Link>
                </DropdownItem>
                <DropdownItem divider className={style.dropdownDivider} />
                <DropdownItem className={style.dropdownItem}>
                  {' '}
                  <Link
                    href="/solutions/schools"
                    as={process.env.BACKEND_URL + '/solutions/schools'}
                  >
                    <a>Schools</a>
                  </Link>
                </DropdownItem>
                <DropdownItem divider className={style.dropdownDivider} />
                <DropdownItem className={style.dropdownItem}>
                  {' '}
                  <Link
                    href="/solutions/labs"
                    as={process.env.BACKEND_URL + '/solutions/labs'}
                  >
                    <a>Labs</a>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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
