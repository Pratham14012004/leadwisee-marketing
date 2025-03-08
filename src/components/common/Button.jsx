import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

// Base button styles
const BaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.size === 'large' ? '0.875rem 2rem' : props.size === 'small' ? '0.5rem 1rem' : '0.75rem 1.5rem'};
  font-size: ${props => props.size === 'large' ? '1.125rem' : props.size === 'small' ? '0.875rem' : '1rem'};
  font-weight: 600;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  text-align: center;
  
  /* For icons */
  svg {
    margin-left: ${props => props.iconPosition === 'right' ? '0.5rem' : '0'};
    margin-right: ${props => props.iconPosition === 'left' ? '0.5rem' : '0'};
  }
  
  /* Wide button */
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  /* Disabled state */
  opacity: ${props => props.disabled ? '0.6' : '1'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

// Primary button
const PrimaryButton = styled(BaseButton)`
  background-color: ${props => props.theme.primary};
  color: white;
  
  &:hover {
    background-color: ${props => props.theme.primaryDark};
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

// Secondary button
const SecondaryButton = styled(BaseButton)`
  background-color: transparent;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  
  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

// Text button
const TextButton = styled(BaseButton)`
  background-color: transparent;
  color: ${props => props.theme.primary};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  
  &:hover {
    color: ${props => props.theme.primaryDark};
    background-color: ${props => props.theme.backgroundSecondary};
  }
`;

// Custom Link component that handles scrolling to top
const ScrollToTopLink = ({ to, children, ...rest }) => {
  const handleClick = () => {
    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link to={to} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
};

// Button as Link
const LinkButton = styled(ScrollToTopLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.size === 'large' ? '0.875rem 2rem' : props.size === 'small' ? '0.5rem 1rem' : '0.75rem 1.5rem'};
  font-size: ${props => props.size === 'large' ? '1.125rem' : props.size === 'small' ? '0.875rem' : '1rem'};
  font-weight: 600;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  
  /* For icons */
  svg {
    margin-left: ${props => props.iconPosition === 'right' ? '0.5rem' : '0'};
    margin-right: ${props => props.iconPosition === 'left' ? '0.5rem' : '0'};
  }
  
  /* Wide button */
  width: ${props => props.fullWidth ? '100%' : 'auto'};
`;

// Primary Link button
const PrimaryLinkButton = styled(LinkButton)`
  background-color: ${props => props.theme.primary};
  color: white;
  
  &:hover {
    background-color: ${props => props.theme.primaryDark};
    color: white;
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

// Secondary Link button
const SecondaryLinkButton = styled(LinkButton)`
  background-color: transparent;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  
  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

// Text Link button
const TextLinkButton = styled(LinkButton)`
  background-color: transparent;
  color: ${props => props.theme.primary};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  
  &:hover {
    color: ${props => props.theme.primaryDark};
    background-color: ${props => props.theme.backgroundSecondary};
  }
`;

/**
 * Button component that can be rendered as button or link
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant (primary, secondary, text)
 * @param {string} props.size - Button size (small, medium, large)
 * @param {boolean} props.fullWidth - Whether button should take full width
 * @param {React.ReactNode} props.leftIcon - Icon to display on the left
 * @param {React.ReactNode} props.rightIcon - Icon to display on the right
 * @param {string} props.to - Link destination (if button should be a link)
 * @param {boolean} props.external - Whether link is external (opens in new tab)
 * @param {Function} props.onClick - Click handler
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {React.ReactNode} props.children - Button content
 */
const Button = ({ 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false,
  leftIcon,
  rightIcon,
  to,
  external,
  onClick,
  disabled,
  children,
  ...rest
}) => {
  // Determine icon position
  const iconPosition = leftIcon ? 'left' : rightIcon ? 'right' : null;
  
  // If 'to' prop is provided, render as a Link
  if (to) {
    const linkProps = external ? { 
      as: 'a', 
      href: to, 
      target: '_blank', 
      rel: 'noopener noreferrer',
      onClick: () => {} // No scroll for external links
    } : { to };
    
    switch (variant) {
      case 'secondary':
        return (
          <SecondaryLinkButton 
            size={size}
            fullWidth={fullWidth ? 1 : 0}
            iconPosition={iconPosition}
            {...linkProps}
            {...rest}
          >
            {leftIcon}
            {children}
            {rightIcon}
          </SecondaryLinkButton>
        );
      case 'text':
        return (
          <TextLinkButton 
            size={size}
            fullWidth={fullWidth ? 1 : 0}
            iconPosition={iconPosition}
            {...linkProps}
            {...rest}
          >
            {leftIcon}
            {children}
            {rightIcon}
          </TextLinkButton>
        );
      default: // primary
        return (
          <PrimaryLinkButton 
            size={size}
            fullWidth={fullWidth ? 1 : 0}
            iconPosition={iconPosition}
            {...linkProps}
            {...rest}
          >
            {leftIcon}
            {children}
            {rightIcon}
          </PrimaryLinkButton>
        );
    }
  }
  
  // Otherwise render as a button
  switch (variant) {
    case 'secondary':
      return (
        <SecondaryButton 
          size={size}
          fullWidth={fullWidth ? 1 : 0}
          iconPosition={iconPosition}
          onClick={onClick}
          disabled={disabled}
          {...rest}
        >
          {leftIcon}
          {children}
          {rightIcon}
        </SecondaryButton>
      );
    case 'text':
      return (
        <TextButton 
          size={size}
          fullWidth={fullWidth ? 1 : 0}
          iconPosition={iconPosition}
          onClick={onClick}
          disabled={disabled}
          {...rest}
        >
          {leftIcon}
          {children}
          {rightIcon}
        </TextButton>
      );
    default: // primary
      return (
        <PrimaryButton 
          size={size}
          fullWidth={fullWidth ? 1 : 0}
          iconPosition={iconPosition}
          onClick={onClick}
          disabled={disabled}
          {...rest}
        >
          {leftIcon}
          {children}
          {rightIcon}
        </PrimaryButton>
      );
  }
};

export default Button;