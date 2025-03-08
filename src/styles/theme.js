
import { createGlobalStyle } from 'styled-components';

// Light theme
export const lightTheme = {
  body: '#FFFFFF',
  text: '#1F2937',
  textLight: '#6B7280',
  primary: '#1E3A8A',
  primaryLight: '#3B82F6',
  primaryDark: '#1E40AF',
  secondary: '#10B981',
  accent: '#F59E0B',
  background: '#F9FAFB',
  backgroundSecondary: '#F3F4F6',
  border: '#E5E7EB',
  shadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

// Dark theme
export const darkTheme = {
  body: '#0F172A',
  text: '#F9FAFB',
  textLight: '#9CA3AF',
  primary: '#3B82F6',
  primaryLight: '#60A5FA',
  primaryDark: '#2563EB',
  secondary: '#10B981',
  accent: '#F59E0B',
  background: '#1E293B',
  backgroundSecondary: '#334155',
  border: '#4B5563',
  shadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
};

// Global styles based on the current theme
export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
  }
  
  .card {
    background-color: ${props => props.theme.body};
    box-shadow: ${props => props.theme.shadow};
    border: 1px solid ${props => props.theme.border};
  }
  
  .bg-secondary {
    background-color: ${props => props.theme.backgroundSecondary};
  }
  
  /* Update other global theme-dependent styles here */
`;
