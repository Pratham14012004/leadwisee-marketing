
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

// Styled components
const NavContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.body};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.primary};
  
  span {
    color: ${props => props.theme.secondary};
  }
`;

const NavLinks = styled.nav`
  display: none;
  
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  font-weight: 500;
  color: ${props => props.active ? props.theme.primary : props.theme.text};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: ${props => props.theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  margin: 0 1rem;
`;

const DropdownTrigger = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  color: ${props => props.active ? props.theme.primary : props.theme.text};
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  background-color: ${props => props.theme.body};
  box-shadow: ${props => props.theme.shadow};
  border-radius: 0.25rem;
  overflow: hidden;
  z-index: 10;
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: 0.75rem 1rem;
  color: ${props => props.active ? props.theme.primary : props.theme.text};
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.backgroundSecondary};
  }
`;

const ThemeToggler = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  margin-left: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    font-size: 1.25rem;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.body};
  z-index: 2000;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const MobileNavLink = styled(Link)`
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  border-bottom: 1px solid ${props => props.theme.border};
  color: ${props => props.active ? props.theme.primary : props.theme.text};
`;

const MobileDropdownLink = styled(Link)`
  padding: 1rem 1rem 1rem 2rem;
  font-size: 1.125rem;
  border-bottom: 1px solid ${props => props.theme.border};
  color: ${props => props.active ? props.theme.primary : props.theme.textLight};
`;

const CallToAction = styled(Link)`
  display: none;
  
  @media (min-width: 1024px) {
    display: inline-block;
    padding: 0.5rem 1.25rem;
    background-color: ${props => props.theme.primary};
    color: white;
    border-radius: 0.25rem;
    margin-left: 1.5rem;
    font-weight: 500;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: ${props => props.theme.primaryDark};
      color: white;
    }
  }
`;

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  
  const location = useLocation();
  
  // Services dropdown items
  const services = [
    { name: 'PPC Marketing', path: '/services/ppc-marketing' },
    { name: 'Social Media Marketing', path: '/services/social-media-marketing' },
    { name: 'E-commerce Marketing', path: '/services/ecommerce-marketing' }
  ];
  
  // Industries dropdown items
  const industries = [
    { name: 'SAAS', path: '/industries/saas' },
    { name: 'B2B', path: '/industries/b2b' },
    { name: 'E-commerce', path: '/industries/ecommerce' },
    { name: 'Retail', path: '/industries/retail' },
    { name: 'Real Estate', path: '/industries/real-estate' },
    { name: 'Fashion', path: '/industries/fashion' },
    { name: 'Healthcare', path: '/industries/healthcare' },
    { name: 'OTT', path: '/industries/ott' },
    { name: 'Coaching & Consulting', path: '/industries/coaching-consulting' },
    { name: 'Interior Design', path: '/industries/interior-design' }
  ];
  
  // Resources dropdown items
  const resources = [
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Testimonials', path: '/testimonials' }
  ];
  
  // Function to toggle dropdown
  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenDropdown(null);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  // Listen for scroll to add shadow to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);
  
  return (
    <NavContainer style={{ boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none' }}>
      <NavInner>
        <Logo to="/">
          Lead<span>wisee</span>
        </Logo>
        
        <NavLinks>
          <NavLink to="/" active={location.pathname === '/' ? 1 : 0}>
            Home
          </NavLink>
          
          <DropdownContainer onClick={(e) => e.stopPropagation()}>
            <DropdownTrigger 
              active={location.pathname.includes('/services') ? 1 : 0}
              isOpen={openDropdown === 'services'}
              onClick={() => toggleDropdown('services')}
            >
              Services
              <svg 
                width="12" 
                height="8" 
                viewBox="0 0 12 8" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M1.41 0.295L6 4.875L10.59 0.295L12 1.705L6 7.705L0 1.705L1.41 0.295Z" 
                  fill="currentColor"
                />
              </svg>
            </DropdownTrigger>
            
            <AnimatePresence>
              {openDropdown === 'services' && (
                <DropdownMenu
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <DropdownLink 
                    to="/services" 
                    active={location.pathname === '/services' ? 1 : 0}
                  >
                    All Services
                  </DropdownLink>
                  
                  {services.map((service, index) => (
                    <DropdownLink 
                      key={index}
                      to={service.path}
                      active={location.pathname === service.path ? 1 : 0}
                    >
                      {service.name}
                    </DropdownLink>
                  ))}
                </DropdownMenu>
              )}
            </AnimatePresence>
          </DropdownContainer>
          
          <DropdownContainer onClick={(e) => e.stopPropagation()}>
            <DropdownTrigger 
              active={location.pathname.includes('/industries') ? 1 : 0}
              isOpen={openDropdown === 'industries'}
              onClick={() => toggleDropdown('industries')}
            >
              Industries
              <svg 
                width="12" 
                height="8" 
                viewBox="0 0 12 8" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M1.41 0.295L6 4.875L10.59 0.295L12 1.705L6 7.705L0 1.705L1.41 0.295Z" 
                  fill="currentColor"
                />
              </svg>
            </DropdownTrigger>
            
            <AnimatePresence>
              {openDropdown === 'industries' && (
                <DropdownMenu
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  style={{ width: '250px' }}
                >
                  <DropdownLink 
                    to="/industries" 
                    active={location.pathname === '/industries' ? 1 : 0}
                  >
                    All Industries
                  </DropdownLink>
                  
                  {industries.map((industry, index) => (
                    <DropdownLink 
                      key={index}
                      to={industry.path}
                      active={location.pathname === industry.path ? 1 : 0}
                    >
                      {industry.name}
                    </DropdownLink>
                  ))}
                </DropdownMenu>
              )}
            </AnimatePresence>
          </DropdownContainer>
          
          <NavLink to="/about" active={location.pathname === '/about' ? 1 : 0}>
            About
          </NavLink>
          
          <DropdownContainer onClick={(e) => e.stopPropagation()}>
            <DropdownTrigger 
              active={location.pathname.includes('/blog') || location.pathname.includes('/case-studies') || location.pathname.includes('/testimonials') ? 1 : 0}
              isOpen={openDropdown === 'resources'}
              onClick={() => toggleDropdown('resources')}
            >
              Resources
              <svg 
                width="12" 
                height="8" 
                viewBox="0 0 12 8" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M1.41 0.295L6 4.875L10.59 0.295L12 1.705L6 7.705L0 1.705L1.41 0.295Z" 
                  fill="currentColor"
                />
              </svg>
            </DropdownTrigger>
            
            <AnimatePresence>
              {openDropdown === 'resources' && (
                <DropdownMenu
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {resources.map((resource, index) => (
                    <DropdownLink 
                      key={index}
                      to={resource.path}
                      active={location.pathname === resource.path ? 1 : 0}
                    >
                      {resource.name}
                    </DropdownLink>
                  ))}
                </DropdownMenu>
              )}
            </AnimatePresence>
          </DropdownContainer>
          
          <NavLink to="/contact" active={location.pathname === '/contact' ? 1 : 0}>
            Contact
          </NavLink>
          
          <ThemeToggler onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </ThemeToggler>
          
          <CallToAction to="/contact">
            Free Strategy Call
          </CallToAction>
        </NavLinks>
        
        <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
          <FaBars />
        </MobileMenuButton>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <MobileMenuHeader>
                <Logo to="/">
                  Lead<span>wisee</span>
                </Logo>
                
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ThemeToggler onClick={toggleTheme}>
                    {theme === 'light' ? <FaMoon /> : <FaSun />}
                  </ThemeToggler>
                  
                  <MobileMenuButton onClick={() => setMobileMenuOpen(false)}>
                    <FaTimes />
                  </MobileMenuButton>
                </div>
              </MobileMenuHeader>
              
              <MobileNavLinks>
                <MobileNavLink to="/" active={location.pathname === '/' ? 1 : 0}>
                  Home
                </MobileNavLink>
                
                <MobileNavLink 
                  as="div" 
                  onClick={() => toggleDropdown('mobileServices')}
                  active={location.pathname.includes('/services') ? 1 : 0}
                >
                  Services
                  <span style={{ float: 'right' }}>
                    {openDropdown === 'mobileServices' ? '-' : '+'}
                  </span>
                </MobileNavLink>
                
                {openDropdown === 'mobileServices' && (
                  <>
                    <MobileDropdownLink 
                      to="/services" 
                      active={location.pathname === '/services' ? 1 : 0}
                    >
                      All Services
                    </MobileDropdownLink>
                    
                    {services.map((service, index) => (
                      <MobileDropdownLink 
                        key={index}
                        to={service.path}
                        active={location.pathname === service.path ? 1 : 0}
                      >
                        {service.name}
                      </MobileDropdownLink>
                    ))}
                  </>
                )}
                
                <MobileNavLink 
                  as="div" 
                  onClick={() => toggleDropdown('mobileIndustries')}
                  active={location.pathname.includes('/industries') ? 1 : 0}
                >
                  Industries
                  <span style={{ float: 'right' }}>
                    {openDropdown === 'mobileIndustries' ? '-' : '+'}
                  </span>
                </MobileNavLink>
                
                {openDropdown === 'mobileIndustries' && (
                  <>
                    <MobileDropdownLink 
                      to="/industries" 
                      active={location.pathname === '/industries' ? 1 : 0}
                    >
                      All Industries
                    </MobileDropdownLink>
                    
                    {industries.map((industry, index) => (
                      <MobileDropdownLink 
                        key={index}
                        to={industry.path}
                        active={location.pathname === industry.path ? 1 : 0}
                      >
                        {industry.name}
                      </MobileDropdownLink>
                    ))}
                  </>
                )}
                
                <MobileNavLink to="/about" active={location.pathname === '/about' ? 1 : 0}>
                  About
                </MobileNavLink>
                
                <MobileNavLink 
                  as="div" 
                  onClick={() => toggleDropdown('mobileResources')}
                  active={location.pathname.includes('/blog') || location.pathname.includes('/case-studies') || location.pathname.includes('/testimonials') ? 1 : 0}
                >
                  Resources
                  <span style={{ float: 'right' }}>
                    {openDropdown === 'mobileResources' ? '-' : '+'}
                  </span>
                </MobileNavLink>
                
                {openDropdown === 'mobileResources' && (
                  <>
                    {resources.map((resource, index) => (
                      <MobileDropdownLink 
                        key={index}
                        to={resource.path}
                        active={location.pathname === resource.path ? 1 : 0}
                      >
                        {resource.name}
                      </MobileDropdownLink>
                    ))}
                  </>
                )}
                
                <MobileNavLink to="/contact" active={location.pathname === '/contact' ? 1 : 0}>
                  Contact
                </MobileNavLink>
                
                <MobileNavLink 
                  to="/contact" 
                  style={{ 
                    background: theme === 'light' ? '#1E3A8A' : '#3B82F6', 
                    color: 'white',
                    textAlign: 'center',
                    marginTop: '1rem',
                    borderRadius: '0.25rem'
                  }}
                >
                  Free Strategy Call
                </MobileNavLink>
              </MobileNavLinks>
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavInner>
    </NavContainer>
  );
};

export default Navbar;
