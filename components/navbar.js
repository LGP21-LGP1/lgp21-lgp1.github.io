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
        <NavbarBrand href="/">LOGO</NavbarBrand>
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
                    href="/solutions/solution1"
                    as={process.env.BACKEND_URL + '/solutions/solution1'}
                  >
                    <a>Solution 1</a>
                  </Link>
                </DropdownItem>
                <DropdownItem divider className={style.dropdownDivider} />
                <DropdownItem className={style.dropdownItem}>
                  {' '}
                  <Link
                    href="/solutions/solution2"
                    as={process.env.BACKEND_URL + '/solutions/solution2'}
                  >
                    <a>Solution 2</a>
                  </Link>
                </DropdownItem>
                <DropdownItem divider className={style.dropdownDivider} />
                <DropdownItem className={style.dropdownItem}>
                  {' '}
                  <Link
                    href="/solutions/solution3"
                    as={process.env.BACKEND_URL + '/solutions/solution3'}
                  >
                    <a>Solution 3</a>
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