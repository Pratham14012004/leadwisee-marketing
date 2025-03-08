import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

// Theme
import { lightTheme, darkTheme, GlobalStyles } from './styles/theme';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CookieConsent from './components/common/CookieConsent';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Industries from './pages/Industries';
import IndustryDetail from './pages/IndustryDetail';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Testimonials from './pages/Testimonials';
import NotFound from './pages/NotFound';
import {
  B2BMarketingPage,
  ECommerceMarketingPage,
  RetailMarketingPage,
  FashionLuxuryMarketingPage,
  HealthcareMarketingPage,
  EntertainmentMarketingPage,
  CoachingMarketingPage,
  InteriorDesignMarketingPage
} from './pages/IndustryPages';

import './App.css';

export default function App() {
  // State for theme toggle
  const [theme, setTheme] = useState('light');

  // Function to toggle theme
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    localStorage.setItem('preferredTheme', theme === 'light' ? 'dark' : 'light');
  };

  // Load saved theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <div className="app">
          <Helmet>
            <title>Leadwisee - Performance Marketing Agency</title>
            <meta name="description" content="Leadwisee is a performance marketing agency specializing in PPC, Social Media, and E-commerce marketing strategies to drive conversions." />
            <link rel="canonical" href="https://leadwisee.com" />
            {/* Schema markup for organization */}
            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "Leadwisee",
                  "url": "https://leadwisee.com",
                  "logo": "https://leadwisee.com/logo.png",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-123-456-7890",
                    "contactType": "customer service"
                  },
                  "sameAs": [
                    "https://www.facebook.com/leadwisee",
                    "https://www.linkedin.com/company/leadwisee",
                    "https://twitter.com/leadwisee"
                  ]
                }
              `}
            </script>
          </Helmet>

          <Navbar theme={theme} toggleTheme={toggleTheme} />

          <main>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/industries" element={<Industries />} />
                
                {/* Industry Routes */}
                <Route path="/industries/:slug" element={<IndustryDetail />} />
                <Route path="/industries/b2b" element={<B2BMarketingPage />} />
                <Route path="/industries/saas" element={<IndustryDetail />} />
                <Route path="/industries/ecommerce" element={<ECommerceMarketingPage />} />
                <Route path="/industries/retail" element={<RetailMarketingPage />} />
                <Route path="/industries/fashion-luxury" element={<FashionLuxuryMarketingPage />} />
                <Route path="/industries/healthcare" element={<HealthcareMarketingPage />} />
                <Route path="/industries/entertainment" element={<EntertainmentMarketingPage />} />
                <Route path="/industries/coaching" element={<CoachingMarketingPage />} />
                <Route path="/industries/interior-design" element={<InteriorDesignMarketingPage />} />
                <Route path="/industries/real-estate" element={<IndustryDetail />} />
                
                {/* Other Routes */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />
          <CookieConsent />
        </div>
      </Router>
    </ThemeProvider>
  );
}