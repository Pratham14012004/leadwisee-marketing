
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaArrowRight, FaFilter } from "react-icons/fa";

import SectionHeading from "../components/common/SectionHeading";

const CaseStudiesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
`;

const CaseStudiesHero = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 0;
`;

const FiltersContainer = styled.div`
  margin-bottom: 2rem;
  
  .filter-heading {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    font-weight: 500;
    
    svg {
      color: ${(props) => props.theme.primary};
    }
  }
`;

const FilterTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const FilterTag = styled.button`
  background-color: ${(props) =>
    props.isActive ? props.theme.primary : props.theme.background};
  color: ${(props) => (props.isActive ? "white" : props.theme.text)};
  border: 1px solid
    ${(props) => (props.isActive ? props.theme.primary : props.theme.border)};
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.isActive ? props.theme.primary : props.theme.backgroundHover};
  }
`;

const CaseStudiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CaseStudyCard = styled(motion.article)`
  background: ${(props) => props.theme.background};
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const CaseStudyImage = styled.div`
  height: 200px;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5));
  }
`;

const CaseStudyIndustryTag = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1;
  background-color: ${(props) => props.theme.primary};
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
`;

const CaseStudyServiceTag = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.9);
  color: ${(props) => props.theme.text};
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
`;

const CaseStudyContent = styled.div`
  padding: 1.5rem;
`;

const CaseStudyTitle = styled.h3`
  margin-bottom: 0.75rem;
  font-size: 1.25rem;

  a {
    color: ${(props) => props.theme.text};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.primary};
    }
  }
`;

const CaseStudyExcerpt = styled.p`
  color: ${(props) => props.theme.textLight};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 0.9375rem;
`;

const ResultsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ResultItem = styled.div`
  background-color: ${(props) => props.theme.backgroundAlt};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  
  span {
    color: ${(props) => props.theme.primary};
    font-weight: 700;
    margin-right: 0.25rem;
  }
`;

const ReadMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.primary};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${(props) => props.theme.primaryDark};

    svg {
      transform: translateX(3px);
    }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  grid-column: 1 / -1;

  h3 {
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme.textLight};
    margin-bottom: 1.5rem;
  }
`;

const CaseStudies = () => {
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [activeService, setActiveService] = useState("All");
  const [filteredCaseStudies, setFilteredCaseStudies] = useState([]);

  // Mock case studies data
  const caseStudiesData = [
    {
      id: "saas-lead-generation",
      title: "SaaS Lead Generation Strategy",
      excerpt: "How we helped a B2B SaaS company increase qualified leads by 187% while reducing cost per acquisition.",
      industry: "B2B SaaS",
      service: "PPC Marketing",
      image: "https://source.unsplash.com/random/600x400/?saas,technology",
      slug: "saas-lead-generation-strategy",
      results: [
        { stat: "187%", label: "Increase in Leads" },
        { stat: "42%", label: "Lower CPA" },
        { stat: "3.8x", label: "ROI" }
      ]
    },
    {
      id: "ecommerce-revenue-growth",
      title: "Scaling E-commerce Revenue",
      excerpt: "A comprehensive marketing approach that helped an online retailer achieve 215% YoY revenue growth.",
      industry: "E-commerce",
      service: "E-commerce Marketing",
      image: "https://source.unsplash.com/random/600x400/?ecommerce,shopping",
      slug: "ecommerce-revenue-growth",
      results: [
        { stat: "215%", label: "Revenue Growth" },
        { stat: "168%", label: "ROAS" },
        { stat: "43%", label: "Repeat Purchase Rate" }
      ]
    },
    {
      id: "real-estate-lead-generation",
      title: "Property Developer Lead Campaign",
      excerpt: "Strategic Facebook and Google campaigns that generated high-quality leads for luxury property developments.",
      industry: "Real Estate",
      service: "Social Media Marketing",
      image: "https://source.unsplash.com/random/600x400/?realestate,property",
      slug: "real-estate-lead-generation",
      results: [
        { stat: "126", label: "Qualified Leads/Month" },
        { stat: "28%", label: "Conversion Rate" },
        { stat: "$42", label: "Cost Per Lead" }
      ]
    },
    {
      id: "fashion-brand-awareness",
      title: "Fashion Brand Social Growth",
      excerpt: "How we helped a fashion brand build brand awareness and drive direct sales through Instagram and TikTok.",
      industry: "Fashion",
      service: "Social Media Marketing",
      image: "https://source.unsplash.com/random/600x400/?fashion,clothing",
      slug: "fashion-brand-awareness",
      results: [
        { stat: "340%", label: "Follower Growth" },
        { stat: "218%", label: "Engagement Rate" },
        { stat: "26%", label: "Traffic from Social" }
      ]
    },
    {
      id: "healthcare-patient-acquisition",
      title: "Healthcare Patient Acquisition",
      excerpt: "HIPAA-compliant marketing campaigns that helped a medical practice attract new patients cost-effectively.",
      industry: "Healthcare",
      service: "PPC Marketing",
      image: "https://source.unsplash.com/random/600x400/?healthcare,medical",
      slug: "healthcare-patient-acquisition",
      results: [
        { stat: "156%", label: "More Appointments" },
        { stat: "32%", label: "Lower Acquisition Cost" },
        { stat: "$860K", label: "Revenue Growth" }
      ]
    },
    {
      id: "coaching-program-launch",
      title: "Online Coaching Program Launch",
      excerpt: "A comprehensive launch strategy that helped a business coach successfully launch a new online program.",
      industry: "Coaching & Consulting",
      service: "Content Marketing",
      image: "https://source.unsplash.com/random/600x400/?coaching,consulting",
      slug: "coaching-program-launch",
      results: [
        { stat: "$420K", label: "Launch Revenue" },
        { stat: "842", label: "Program Enrollments" },
        { stat: "4.2x", label: "Marketing ROI" }
      ]
    },
    {
      id: "interior-design-portfolio",
      title: "Interior Design Client Acquisition",
      excerpt: "Showcasing an interior designer's portfolio effectively to attract high-value residential projects.",
      industry: "Interior Design",
      service: "Website Optimization",
      image: "https://source.unsplash.com/random/600x400/?interior,design",
      slug: "interior-design-portfolio",
      results: [
        { stat: "9", label: "New Luxury Projects" },
        { stat: "$85K", label: "Average Project Value" },
        { stat: "267%", label: "ROI" }
      ]
    },
    {
      id: "ott-subscription-growth",
      title: "OTT Platform Subscription Growth",
      excerpt: "Data-driven user acquisition strategy that helped a streaming platform scale their subscriber base efficiently.",
      industry: "OTT",
      service: "Conversion Optimization",
      image: "https://source.unsplash.com/random/600x400/?streaming,video",
      slug: "ott-subscription-growth",
      results: [
        { stat: "215K", label: "New Subscribers" },
        { stat: "64%", label: "Trial Conversion Rate" },
        { stat: "28%", label: "Lower CAC" }
      ]
    },
    {
      id: "retail-store-traffic",
      title: "Driving Retail Store Traffic",
      excerpt: "Omnichannel campaign that successfully bridged online marketing with offline store visits and sales.",
      industry: "Retail",
      service: "PPC Marketing",
      image: "https://source.unsplash.com/random/600x400/?retail,store",
      slug: "retail-store-traffic",
      results: [
        { stat: "143%", label: "Increase in Store Visits" },
        { stat: "38%", label: "Growth in Store Revenue" },
        { stat: "3.2x", label: "ROAS" }
      ]
    },
  ];

  // Extract unique industries and services
  const industries = ["All", ...new Set(caseStudiesData.map(study => study.industry))];
  const services = ["All", ...new Set(caseStudiesData.map(study => study.service))];

  // Filter case studies based on selected filters
  useEffect(() => {
    const filtered = caseStudiesData.filter(study => {
      const matchesIndustry = activeIndustry === "All" || study.industry === activeIndustry;
      const matchesService = activeService === "All" || study.service === activeService;
      
      return matchesIndustry && matchesService;
    });
    
    setFilteredCaseStudies(filtered);
  }, [activeIndustry, activeService]);

  return (
    <>
      <Helmet>
        <title>Case Studies | Leadwisee - Performance Marketing Agency</title>
        <meta
          name="description"
          content="Explore our case studies showing how we've helped businesses across various industries achieve measurable marketing results."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <CaseStudiesHero>
          <SectionHeading
            subtitle="Success Stories"
            title="Our Case Studies"
            alignment="center"
          />
          <p style={{ maxWidth: "700px", margin: "0 auto" }}>
            Explore our portfolio of successful marketing campaigns and strategies 
            that have delivered measurable results for our clients across various industries.
          </p>
        </CaseStudiesHero>

        <CaseStudiesContainer>
          <FiltersContainer>
            <div className="filter-heading">
              <FaFilter /> Filter by:
            </div>
            
            <div>
              <h4>Industry</h4>
              <FilterTagsContainer>
                {industries.map(industry => (
                  <FilterTag
                    key={`industry-${industry}`}
                    isActive={activeIndustry === industry}
                    onClick={() => setActiveIndustry(industry)}
                  >
                    {industry}
                  </FilterTag>
                ))}
              </FilterTagsContainer>
            </div>
            
            <div>
              <h4>Service</h4>
              <FilterTagsContainer>
                {services.map(service => (
                  <FilterTag
                    key={`service-${service}`}
                    isActive={activeService === service}
                    onClick={() => setActiveService(service)}
                  >
                    {service}
                  </FilterTag>
                ))}
              </FilterTagsContainer>
            </div>
          </FiltersContainer>

          <CaseStudiesGrid>
            {filteredCaseStudies.length > 0 ? (
              filteredCaseStudies.map((study, index) => (
                <CaseStudyCard
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CaseStudyImage image={study.image}>
                    <CaseStudyIndustryTag>{study.industry}</CaseStudyIndustryTag>
                    <CaseStudyServiceTag>{study.service}</CaseStudyServiceTag>
                  </CaseStudyImage>
                  <CaseStudyContent>
                    <CaseStudyTitle>
                      <Link to={`/case-studies/${study.slug}`}>{study.title}</Link>
                    </CaseStudyTitle>
                    <CaseStudyExcerpt>{study.excerpt}</CaseStudyExcerpt>
                    <ResultsList>
                      {study.results.map((result, i) => (
                        <ResultItem key={i}>
                          <span>{result.stat}</span>
                          {result.label}
                        </ResultItem>
                      ))}
                    </ResultsList>
                    <ReadMoreLink to={`/case-studies/${study.slug}`}>
                      View Case Study <FaArrowRight />
                    </ReadMoreLink>
                  </CaseStudyContent>
                </CaseStudyCard>
              ))
            ) : (
              <EmptyState>
                <h3>No case studies found</h3>
                <p>
                  Try adjusting your filter criteria to find what you're looking for.
                </p>
                <FilterTag
                  isActive={false}
                  onClick={() => {
                    setActiveIndustry("All");
                    setActiveService("All");
                  }}
                >
                  Clear Filters
                </FilterTag>
              </EmptyState>
            )}
          </CaseStudiesGrid>
        </CaseStudiesContainer>
      </motion.div>
    </>
  );
};

export default CaseStudies;
