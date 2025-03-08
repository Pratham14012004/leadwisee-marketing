import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Nav = styled.nav`
  background-color: ${props => props.theme.colors.background};
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const LogoContainer = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;

  span {
    color: ${props => props.theme.colors.primary};
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 968px) {
    display: none;
  }
`;

const NavItem = styled.div`
  position: relative;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  padding: 0.5rem 1rem;
  margin: 0 0.2rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  &.active {
    color: ${props => props.theme.colors.primary};
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  margin: 0 0.2rem;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${props => props.theme.colors.background};
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 0.8rem 0;
  min-width: 200px;
  z-index: 10;
`;

const DropdownItem = styled(NavLink)`
  display: block;
  padding: 0.6rem 1.2rem;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.bgAlt};
    color: ${props => props.theme.colors.primary};
  }

  &.active {
    color: ${props => props.theme.colors.primary};
  }
`;

const ContactButton = styled(Link)`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.7rem 1.2rem;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  margin-left: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: rotate(15deg);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media screen and (max-width: 968px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;

  @media screen and (max-width: 968px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.colors.background};
    z-index: 99;
    padding: 2rem 1.5rem;
    overflow-y: auto;
  }
`;

const MobileNavItem = styled.div`
  margin-bottom: 1rem;
`;

const MobileLinkStyled = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  padding: 0.8rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.bgAlt};
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  &.active {
    color: ${props => props.theme.colors.primary};
  }
`;

const MobileNavButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  font-weight: 500;
  padding: 0.8rem 0;
  text-align: left;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.bgAlt};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const MobileDropdown = styled(motion.div)`
  padding-left: 1rem;
`;

const MobileDropdownItem = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  padding: 0.6rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.bgAlt};
  font-weight: 400;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  &.active {
    color: ${props => props.theme.colors.primary};
  }

  &:last-child {
    border-bottom: none;
  }
`;

const MobileContactButton = styled(Link)`
  display: block;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 1rem;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  margin-top: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }
`;

const Navbar = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);
  const [mobileServicesDropdown, setMobileServicesDropdown] = useState(false);
  const [mobileIndustriesDropdown, setMobileIndustriesDropdown] = useState(false);
  const [mobileResourcesDropdown, setMobileResourcesDropdown] = useState(false);

  const location = useLocation();

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  return (
    <Nav>
      <Container>
        <LogoContainer to="/">
          Lead<span>wisee</span>
        </LogoContainer>

        <NavMenu>
          <NavItem
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <NavButton onClick={() => setServicesDropdown(!servicesDropdown)}>
              Services {servicesDropdown ? <FaChevronUp /> : <FaChevronDown />}
            </NavButton>

            <AnimatePresence>
              {servicesDropdown && (
                <DropdownMenu
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <DropdownItem to="/services/ppc-advertising">PPC Advertising</DropdownItem>
                  <DropdownItem to="/services/seo">Search Engine Optimization</DropdownItem>
                  <DropdownItem to="/services/social-media-marketing">Social Media Marketing</DropdownItem>
                  <DropdownItem to="/services/conversion-rate-optimization">Conversion Rate Optimization</DropdownItem>
                  <DropdownItem to="/services/email-marketing">Email Marketing</DropdownItem>
                  <DropdownItem to="/services/content-marketing">Content Marketing</DropdownItem>
                  <DropdownItem to="/services">All Services</DropdownItem>
                </DropdownMenu>
              )}
            </AnimatePresence>
          </NavItem>

          <NavItem
            onMouseEnter={() => setIndustriesDropdown(true)}
            onMouseLeave={() => setIndustriesDropdown(false)}
          >
            <NavButton onClick={() => setIndustriesDropdown(!industriesDropdown)}>
              Industries {industriesDropdown ? <FaChevronUp /> : <FaChevronDown />}
            </NavButton>

            <AnimatePresence>
              {industriesDropdown && (
                <DropdownMenu
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <DropdownItem to="/industries/saas">SaaS</DropdownItem>
                  <DropdownItem to="/industries/b2b">B2B</DropdownItem>
                  <DropdownItem to="/industries/ecommerce">E-Commerce</DropdownItem>
                  <DropdownItem to="/industries/real-estate">Real Estate</DropdownItem>
                  <DropdownItem to="/industries/fashion-luxury">Fashion & Luxury</DropdownItem>
                  <DropdownItem to="/industries/healthcare">Healthcare</DropdownItem>
                  <DropdownItem to="/industries/entertainment">OTT & Entertainment</DropdownItem>
                  <DropdownItem to="/industries/coaching">Coaching & Consulting</DropdownItem>
                  <DropdownItem to="/industries">All Industries</DropdownItem>
                </DropdownMenu>
              )}
            </AnimatePresence>
          </NavItem>

          <NavItem
            onMouseEnter={() => setResourcesDropdown(true)}
            onMouseLeave={() => setResourcesDropdown(false)}
          >
            <NavButton onClick={() => setResourcesDropdown(!resourcesDropdown)}>
              Resources {resourcesDropdown ? <FaChevronUp /> : <FaChevronDown />}
            </NavButton>

            <AnimatePresence>
              {resourcesDropdown && (
                <DropdownMenu
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <DropdownItem to="/case-studies">Case Studies</DropdownItem>
                  <DropdownItem to="/blog">Blog</DropdownItem>
                  <DropdownItem to="/testimonials">Testimonials</DropdownItem>
                  <DropdownItem to="/results">Results</DropdownItem>
                </DropdownMenu>
              )}
            </AnimatePresence>
          </NavItem>

          <NavItem>
            <NavLinkStyled to="/about">About</NavLinkStyled>
          </NavItem>

          <ContactButton to="/contact">Contact Us</ContactButton>

          <ThemeToggle onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </ThemeToggle>
        </NavMenu>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ThemeToggle onClick={toggleTheme} style={{ marginRight: '1rem', display: 'none', '@media screen and (max-width: 968px)': { display: 'block' } }}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </ThemeToggle>

          <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </div>
      </Container>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <MobileNavItem>
              <MobileNavButton onClick={() => setMobileServicesDropdown(!mobileServicesDropdown)}>
                Services {mobileServicesDropdown ? <FaChevronUp /> : <FaChevronDown />}
              </MobileNavButton>

              <AnimatePresence>
                {mobileServicesDropdown && (
                  <MobileDropdown
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MobileDropdownItem to="/services/ppc-advertising">PPC Advertising</MobileDropdownItem>
                    <MobileDropdownItem to="/services/seo">Search Engine Optimization</MobileDropdownItem>
                    <MobileDropdownItem to="/services/social-media-marketing">Social Media Marketing</MobileDropdownItem>
                    <MobileDropdownItem to="/services/conversion-rate-optimization">Conversion Rate Optimization</MobileDropdownItem>
                    <MobileDropdownItem to="/services/email-marketing">Email Marketing</MobileDropdownItem>
                    <MobileDropdownItem to="/services/content-marketing">Content Marketing</MobileDropdownItem>
                    <MobileDropdownItem to="/services">All Services</MobileDropdownItem>
                  </MobileDropdown>
                )}
              </AnimatePresence>
            </MobileNavItem>

            <MobileNavItem>
              <MobileNavButton onClick={() => setMobileIndustriesDropdown(!mobileIndustriesDropdown)}>
                Industries {mobileIndustriesDropdown ? <FaChevronUp /> : <FaChevronDown />}
              </MobileNavButton>

              <AnimatePresence>
                {mobileIndustriesDropdown && (
                  <MobileDropdown
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MobileDropdownItem to="/industries/saas">SaaS</MobileDropdownItem>
                    <MobileDropdownItem to="/industries/b2b">B2B</MobileDropdownItem>
                    <MobileDropdownItem to="/industries/ecommerce">E-Commerce</MobileDropdownItem>
                    <MobileDropdownItem to="/industries/real-estate">Real Estate</MobileDropdownItem>
                    <MobileDropdownItem to="/industries/fashion-luxury">Fashion & Luxury</MobileDropdownItem>
                    <MobileDropdownItem to="/industries/healthcare">Healthcare</MobileDropdownItem>
                    <MobileDropdownItem to="/industries/entertainment">OTT & Entertainment</MobileDropdownItem>
                    <MobileDropdownItem to="/industries/coaching">Coaching & Consulting</MobileDropdownItem>
                    <MobileDropdownItem to="/industries">All Industries</MobileDropdownItem>
                  </MobileDropdown>
                )}
              </AnimatePresence>
            </MobileNavItem>

            <MobileNavItem>
              <MobileNavButton onClick={() => setMobileResourcesDropdown(!mobileResourcesDropdown)}>
                Resources {mobileResourcesDropdown ? <FaChevronUp /> : <FaChevronDown />}
              </MobileNavButton>

              <AnimatePresence>
                {mobileResourcesDropdown && (
                  <MobileDropdown
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MobileDropdownItem to="/case-studies">Case Studies</MobileDropdownItem>
                    <MobileDropdownItem to="/blog">Blog</MobileDropdownItem>
                    <MobileDropdownItem to="/testimonials">Testimonials</MobileDropdownItem>
                    <MobileDropdownItem to="/results">Results</MobileDropdownItem>
                  </MobileDropdown>
                )}
              </AnimatePresence>
            </MobileNavItem>

            <MobileNavItem>
              <MobileLinkStyled to="/about">About</MobileLinkStyled>
            </MobileNavItem>

            <MobileContactButton to="/contact">Contact Us</MobileContactButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;