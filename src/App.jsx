import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/theme";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Industries from "./pages/Industries";
import Results from "./pages/Results";
import BlogListing from "./pages/BlogListing";
import BlogPost from "./pages/BlogPost";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Industry Pages
import { 
  SaasMarketingPage,
  B2BMarketingPage,
  EcommerceMarketingPage,
  RealEstateMarketingPage,
  HealthcareMarketingPage,
  FashionMarketingPage,
  OttMarketingPage,
  CoachingConsultingMarketingPage
} from "./pages/IndustryPages";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Services Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetail />} />

          {/* Industries Routes */}
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/saas" element={<SaasMarketingPage />} />
          <Route path="/industries/b2b" element={<B2BMarketingPage />} />
          <Route path="/industries/ecommerce" element={<EcommerceMarketingPage />} />
          <Route path="/industries/real-estate" element={<RealEstateMarketingPage />} />
          <Route path="/industries/healthcare" element={<HealthcareMarketingPage />} />
          <Route path="/industries/fashion" element={<FashionMarketingPage />} />
          <Route path="/industries/ott" element={<OttMarketingPage />} />
          <Route path="/industries/coaching-consulting" element={<CoachingConsultingMarketingPage />} />

          {/* Results Page */}
          <Route path="/results" element={<Results />} />

          {/* Blog Routes */}
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/blog/:blogSlug" element={<BlogPost />} />

          {/* Case Studies Routes */}
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:caseStudyId" element={<CaseStudyDetail />} />

          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;