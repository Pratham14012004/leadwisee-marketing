
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaSearch, FaArrowRight } from 'react-icons/fa';

import SectionHeading from '../components/common/SectionHeading';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
`;

const BlogHero = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 0;
`;

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0 auto 3rem;
  position: relative;
  
  svg {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    color: ${props => props.theme.textLight};
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border-radius: 2rem;
  border: 1px solid ${props => props.theme.border};
  font-size: 1rem;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`;

const FiltersContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const FilterTag = styled.button`
  background-color: ${props => props.isActive ? props.theme.primary : props.theme.background};
  color: ${props => props.isActive ? 'white' : props.theme.text};
  border: 1px solid ${props => props.isActive ? props.theme.primary : props.theme.border};
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.isActive ? props.theme.primary : props.theme.backgroundHover};
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BlogCard = styled(motion.article)`
  background: ${props => props.theme.background};
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const BlogImage = styled.div`
  height: 200px;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  color: ${props => props.theme.textLight};
`;

const BlogCategory = styled.span`
  background-color: ${props => {
    const category = props.category.toLowerCase();
    if (category === 'ppc') return 'rgba(var(--primary-rgb), 0.1)';
    if (category === 'social media') return 'rgba(59, 89, 152, 0.1)';
    if (category === 'seo') return 'rgba(76, 175, 80, 0.1)';
    if (category === 'e-commerce') return 'rgba(245, 124, 0, 0.1)';
    if (category === 'content') return 'rgba(156, 39, 176, 0.1)';
    return 'rgba(var(--primary-rgb), 0.1)';
  }};
  
  color: ${props => {
    const category = props.category.toLowerCase();
    if (category === 'ppc') return 'var(--primary-color)';
    if (category === 'social media') return '#3b5998';
    if (category === 'seo') return '#4CAF50';
    if (category === 'e-commerce') return '#F57C00';
    if (category === 'content') return '#9C27B0';
    return 'var(--primary-color)';
  }};
  
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
`;

const BlogDate = styled.span``;

const BlogTitle = styled.h3`
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  
  a {
    color: ${props => props.theme.text};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.primary};
    }
  }
`;

const BlogExcerpt = styled.p`
  color: ${props => props.theme.textLight};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 0.9375rem;
`;

const ReadMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.primary};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: ${props => props.theme.primaryDark};
    
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
    color: ${props => props.theme.textLight};
    margin-bottom: 1.5rem;
  }
`;

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState([]);
  
  // Mock blog post data
  const blogPosts = [
    {
      id: 'google-ads-optimization',
      title: '10 Google Ads Optimization Tips for Higher ROI',
      excerpt: 'Learn how to optimize your Google Ads campaigns to maximize return on investment and reduce wasted ad spend.',
      category: 'PPC',
      date: 'June 15, 2023',
      image: 'https://source.unsplash.com/random/600x400/?google,advertising',
      slug: 'google-ads-optimization-tips'
    },
    {
      id: 'social-media-trends',
      title: 'Social Media Trends to Watch in 2023',
      excerpt: 'Stay ahead of the curve with these emerging social media trends that will shape marketing strategies in 2023 and beyond.',
      category: 'Social Media',
      date: 'May 28, 2023',
      image: 'https://source.unsplash.com/random/600x400/?social,media',
      slug: 'social-media-trends-2023'
    },
    {
      id: 'ecommerce-conversion',
      title: 'E-commerce Conversion Rate Optimization Strategies',
      excerpt: 'Discover proven strategies to increase your e-commerce conversion rates and boost sales without increasing traffic.',
      category: 'E-commerce',
      date: 'May 12, 2023',
      image: 'https://source.unsplash.com/random/600x400/?ecommerce,shopping',
      slug: 'ecommerce-conversion-rate-optimization'
    },
    {
      id: 'seo-algorithm-updates',
      title: 'How to Navigate Google's Algorithm Updates',
      excerpt: 'Learn how to adapt your SEO strategy to stay ahead of Google's frequent algorithm updates and maintain your rankings.',
      category: 'SEO',
      date: 'April 30, 2023',
      image: 'https://source.unsplash.com/random/600x400/?seo,google',
      slug: 'navigating-google-algorithm-updates'
    },
    {
      id: 'content-marketing-roi',
      title: 'Measuring Content Marketing ROI: A Complete Guide',
      excerpt: 'Discover effective methods to measure and prove the ROI of your content marketing efforts to stakeholders.',
      category: 'Content',
      date: 'April 18, 2023',
      image: 'https://source.unsplash.com/random/600x400/?content,marketing',
      slug: 'measuring-content-marketing-roi'
    },
    {
      id: 'facebook-ad-targeting',
      title: 'Facebook Ad Targeting After iOS Privacy Changes',
      excerpt: 'Strategies to maintain effective Facebook ad targeting in the wake of iOS privacy changes and cookie restrictions.',
      category: 'Social Media',
      date: 'April 5, 2023',
      image: 'https://source.unsplash.com/random/600x400/?facebook,ads',
      slug: 'facebook-ad-targeting-ios-privacy'
    },
    {
      id: 'b2b-lead-generation',
      title: 'B2B Lead Generation Tactics That Actually Work',
      excerpt: 'Proven lead generation strategies specifically designed for B2B companies to attract qualified prospects.',
      category: 'PPC',
      date: 'March 22, 2023',
      image: 'https://source.unsplash.com/random/600x400/?business,leads',
      slug: 'b2b-lead-generation-tactics'
    },
    {
      id: 'ecommerce-email-marketing',
      title: 'Email Marketing Automation for E-commerce',
      excerpt: 'Learn how to set up effective email marketing automation flows that drive repeat purchases and increase customer lifetime value.',
      category: 'E-commerce',
      date: 'March 10, 2023',
      image: 'https://source.unsplash.com/random/600x400/?email,marketing',
      slug: 'ecommerce-email-marketing-automation'
    },
    {
      id: 'voice-search-optimization',
      title: 'Voice Search Optimization: The Complete Guide',
      excerpt: 'How to optimize your website and content for voice search as more users adopt smart speakers and voice assistants.',
      category: 'SEO',
      date: 'February 25, 2023',
      image: 'https://source.unsplash.com/random/600x400/?voice,search',
      slug: 'voice-search-optimization-guide'
    }
  ];
  
  // Filter categories from blog posts
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  // Filter posts based on search and category
  useEffect(() => {
    const filtered = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredPosts(filtered);
  }, [searchTerm, activeCategory]);
  
  return (
    <>
      <Helmet>
        <title>Marketing Blog | Leadwisee - Performance Marketing Agency</title>
        <meta name="description" content="Explore the latest marketing insights, trends, and strategies on our blog to help grow your business online." />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <BlogHero>
          <SectionHeading
            subtitle="Marketing Insights"
            title="Our Blog"
            alignment="center"
          />
          <p style={{ maxWidth: '700px', margin: '0 auto' }}>
            Discover the latest marketing trends, strategies, and insights to help grow your business online and maximize your ROI.
          </p>
        </BlogHero>
        
        <BlogContainer>
          <SearchContainer>
            <FaSearch />
            <SearchInput 
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
          
          <FiltersContainer>
            {categories.map(category => (
              <FilterTag 
                key={category}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </FilterTag>
            ))}
          </FiltersContainer>
          
          <BlogGrid>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <BlogCard 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogImage image={post.image} />
                  <BlogContent>
                    <BlogMeta>
                      <BlogCategory category={post.category}>{post.category}</BlogCategory>
                      <BlogDate>{post.date}</BlogDate>
                    </BlogMeta>
                    <BlogTitle>
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </BlogTitle>
                    <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                    <ReadMoreLink to={`/blog/${post.slug}`}>
                      Read More <FaArrowRight />
                    </ReadMoreLink>
                  </BlogContent>
                </BlogCard>
              ))
            ) : (
              <EmptyState>
                <h3>No articles found</h3>
                <p>Try adjusting your search or filter criteria to find what you're looking for.</p>
                <FilterTag 
                  isActive={false}
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('All');
                  }}
                >
                  Clear Filters
                </FilterTag>
              </EmptyState>
            )}
          </BlogGrid>
        </BlogContainer>
      </motion.div>
    </>
  );
};

export default Blog;
