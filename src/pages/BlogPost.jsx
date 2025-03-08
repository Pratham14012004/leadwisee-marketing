
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaCalendarAlt, FaUser, FaTag, FaFacebook, FaTwitter, FaLinkedin, FaArrowLeft } from 'react-icons/fa';

const BlogPostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 1.5rem 5rem;
`;

const BlogPostHero = styled.div`
  margin-bottom: 3rem;
`;

const BlogPostImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.textLight};
  text-decoration: none;
  margin-bottom: 1.5rem;
  transition: color 0.3s ease;
  font-size: 0.9375rem;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const BlogTitle = styled.h1`
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  margin-bottom: 1.5rem;
  line-height: 1.3;
`;

const BlogMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.textLight};
  font-size: 0.9375rem;
  
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  a {
    color: ${props => props.theme.textLight};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.primary};
    }
  }
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

const BlogContent = styled.div`
  line-height: 1.8;
  color: ${props => props.theme.text};
  
  p {
    margin-bottom: 1.5rem;
  }
  
  h2 {
    font-size: 1.75rem;
    margin: 2.5rem 0 1.25rem;
  }
  
  h3 {
    font-size: 1.5rem;
    margin: 2.25rem 0 1.25rem;
  }
  
  ul, ol {
    margin: 1.5rem 0;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.75rem;
    }
  }
  
  blockquote {
    border-left: 4px solid ${props => props.theme.primary};
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: ${props => props.theme.textLight};
  }
  
  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s ease;
    
    &:hover {
      border-color: ${props => props.theme.primary};
    }
  }
  
  img {
    max-width: 100%;
    border-radius: 0.5rem;
    margin: 2rem 0;
  }
  
  code {
    background: ${props => props.theme.backgroundAlt};
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
  }
`;

const ShareSection = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${props => props.theme.border};
  
  h4 {
    margin-bottom: 1rem;
  }
`;

const ShareButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 0.8;
    }
    
    &.facebook {
      background-color: #3b5998;
    }
    
    &.twitter {
      background-color: #1da1f2;
    }
    
    &.linkedin {
      background-color: #0077b5;
    }
  }
`;

const RelatedArticles = styled.div`
  margin-top: 4rem;
  
  h3 {
    margin-bottom: 1.5rem;
  }
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const RelatedCard = styled(Link)`
  display: flex;
  gap: 1rem;
  text-decoration: none;
  color: ${props => props.theme.text};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    
    h4 {
      color: ${props => props.theme.primary};
    }
  }
  
  .image {
    width: 100px;
    height: 70px;
    flex-shrink: 0;
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    background-position: center;
    border-radius: 0.25rem;
  }
  
  .content {
    h4 {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      transition: color 0.3s ease;
    }
    
    .meta {
      font-size: 0.8125rem;
      color: ${props => props.theme.textLight};
    }
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 5rem 1rem;
  
  h2 {
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 2rem;
    color: ${props => props.theme.textLight};
  }
`;

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  
  // Mock blog post data
  const blogPosts = [
    {
      id: 'google-ads-optimization-tips',
      title: '10 Google Ads Optimization Tips for Higher ROI',
      excerpt: 'Learn how to optimize your Google Ads campaigns to maximize return on investment and reduce wasted ad spend.',
      category: 'PPC',
      author: 'Alex Johnson',
      date: 'June 15, 2023',
      image: 'https://source.unsplash.com/random/1200x600/?google,advertising',
      slug: 'google-ads-optimization-tips',
      content: `
        <p>Google Ads remains one of the most effective digital marketing channels for businesses of all sizes. However, without proper optimization, it's easy to waste budget on underperforming campaigns. In this article, we'll share 10 proven optimization techniques to improve your Google Ads performance and maximize ROI.</p>

        <h2>1. Implement Proper Campaign Structure</h2>
        <p>A well-organized campaign structure is the foundation of Google Ads success. Group your keywords into tightly themed ad groups, with each ad group focusing on a specific product, service, or concept. This organization allows you to create highly relevant ad copy that matches user search intent, improving your Quality Score and lowering your cost per click.</p>

        <h2>2. Leverage Negative Keywords</h2>
        <p>Negative keywords prevent your ads from showing for irrelevant search queries. Regularly review your Search Terms report to identify and add negative keywords. This practice helps eliminate wasted spend and ensures your budget is allocated to searches with genuine purchase intent.</p>

        <h2>3. Optimize for Quality Score</h2>
        <p>Quality Score is Google's rating of the quality and relevance of your keywords and ads. Higher Quality Scores lead to lower costs and better ad positions. To improve your Quality Score:</p>
        <ul>
          <li>Create relevant, compelling ad copy that includes your keywords</li>
          <li>Design landing pages that directly relate to your ad's offer</li>
          <li>Ensure fast loading times and mobile-friendly landing pages</li>
          <li>Aim for strong click-through rates (CTRs)</li>
        </ul>

        <h2>4. Use Ad Extensions</h2>
        <p>Ad extensions increase the visibility and functionality of your ads by providing additional information and links. Implement all relevant extensions, including:</p>
        <ul>
          <li>Sitelink extensions</li>
          <li>Callout extensions</li>
          <li>Structured snippet extensions</li>
          <li>Call extensions</li>
          <li>Location extensions</li>
        </ul>
        <p>These extensions improve your ad's performance and provide a better user experience.</p>

        <h2>5. Implement Conversion Tracking</h2>
        <p>Without proper conversion tracking, you're flying blind. Set up conversion tracking to measure actions that matter to your business, such as purchases, form submissions, or phone calls. This data is crucial for optimizing campaigns based on actual results rather than just clicks or impressions.</p>

        <h2>6. Adopt Smart Bidding Strategies</h2>
        <p>Google's automated bidding strategies use machine learning to optimize for conversions or conversion value. Consider implementing strategies like:</p>
        <ul>
          <li>Target CPA (Cost Per Acquisition)</li>
          <li>Target ROAS (Return On Ad Spend)</li>
          <li>Maximize Conversions</li>
          <li>Enhanced CPC</li>
        </ul>
        <p>Start with manual bidding to gather data, then transition to automated strategies once you have sufficient conversion history.</p>

        <h2>7. Create Compelling Ad Copy</h2>
        <p>Your ad copy needs to stand out from competitors and compel users to click. Include:</p>
        <ul>
          <li>Your main keyword in the headline and description</li>
          <li>A clear value proposition</li>
          <li>A strong call-to-action</li>
          <li>Unique selling points or special offers</li>
        </ul>
        <p>Test multiple ad variations to determine which messaging resonates best with your audience.</p>

        <h2>8. Refine Audience Targeting</h2>
        <p>Use audience targeting options to reach users most likely to convert:</p>
        <ul>
          <li>Remarketing to previous site visitors</li>
          <li>Customer match for targeting existing customers</li>
          <li>Similar audiences to find new users similar to your converters</li>
          <li>In-market audiences for users actively researching products like yours</li>
        </ul>
        <p>Apply audience targeting as observation initially to gather data, then adjust bids or target exclusively based on performance.</p>

        <h2>9. Optimize for Mobile</h2>
        <p>With over 50% of Google Ads clicks coming from mobile devices, optimizing for mobile is essential:</p>
        <ul>
          <li>Create mobile-preferred ads</li>
          <li>Ensure landing pages are mobile-friendly</li>
          <li>Adjust bids for mobile devices based on performance</li>
          <li>Use call extensions and call-only campaigns for businesses that receive phone inquiries</li>
        </ul>

        <h2>10. Conduct Regular Account Audits</h2>
        <p>Schedule regular comprehensive account audits to identify opportunities for improvement:</p>
        <ul>
          <li>Review campaign performance against KPIs</li>
          <li>Analyze keyword performance and adjust bids accordingly</li>
          <li>Identify and pause underperforming ads and keywords</li>
          <li>Look for gaps in keyword coverage</li>
          <li>Check for budget constraints limiting high-performing campaigns</li>
        </ul>
        <p>A structured audit process helps ensure continuous improvement in your account's performance.</p>

        <h3>Conclusion</h3>
        <p>Implementing these optimization techniques will help you improve the performance of your Google Ads campaigns and achieve a higher return on investment. Remember that optimization is an ongoing process – continually test, learn, and refine your approach based on performance data.</p>

        <p>By focusing on relevance, quality, and data-driven decision making, you can create Google Ads campaigns that consistently deliver results for your business.</p>
      `
    },
    {
      id: 'social-media-trends-2023',
      title: 'Social Media Trends to Watch in 2023',
      excerpt: 'Stay ahead of the curve with these emerging social media trends that will shape marketing strategies in 2023 and beyond.',
      category: 'Social Media',
      author: 'Sarah Miller',
      date: 'May 28, 2023',
      image: 'https://source.unsplash.com/random/1200x600/?social,media',
      slug: 'social-media-trends-2023',
      content: `<p>Placeholder content for Social Media Trends article...</p>`
    },
    {
      id: 'ecommerce-conversion-rate-optimization',
      title: 'E-commerce Conversion Rate Optimization Strategies',
      excerpt: 'Discover proven strategies to increase your e-commerce conversion rates and boost sales without increasing traffic.',
      category: 'E-commerce',
      author: 'Michael Chen',
      date: 'May 12, 2023',
      image: 'https://source.unsplash.com/random/1200x600/?ecommerce,shopping',
      slug: 'ecommerce-conversion-rate-optimization',
      content: `<p>Placeholder content for E-commerce CRO article...</p>`
    },
    {
      id: 'navigating-google-algorithm-updates',
      title: 'How to Navigate Google's Algorithm Updates',
      excerpt: 'Learn how to adapt your SEO strategy to stay ahead of Google's frequent algorithm updates and maintain your rankings.',
      category: 'SEO',
      author: 'David Wilson',
      date: 'April 30, 2023',
      image: 'https://source.unsplash.com/random/1200x600/?seo,google',
      slug: 'navigating-google-algorithm-updates',
      content: `<p>Placeholder content for Google Algorithm Updates article...</p>`
    },
    {
      id: 'measuring-content-marketing-roi',
      title: 'Measuring Content Marketing ROI: A Complete Guide',
      excerpt: 'Discover effective methods to measure and prove the ROI of your content marketing efforts to stakeholders.',
      category: 'Content',
      author: 'Emma Thompson',
      date: 'April 18, 2023',
      image: 'https://source.unsplash.com/random/1200x600/?content,marketing',
      slug: 'measuring-content-marketing-roi',
      content: `<p>Placeholder content for Content Marketing ROI article...</p>`
    }
  ];
  
  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const currentPost = blogPosts.find(post => post.slug === slug);
    
    if (currentPost) {
      setPost(currentPost);
      
      // Find related posts from the same category
      const related = blogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 2);
      
      setRelatedPosts(related);
      window.scrollTo(0, 0);
    }
  }, [slug]);
  
  if (!post) {
    return (
      <NotFound>
        <h2>Article Not Found</h2>
        <p>The article you're looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="btn btn-primary">
          Back to Blog
        </Link>
      </NotFound>
    );
  }

  // Function to get share URLs
  const getShareUrl = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    
    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
      default:
        return '#';
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Leadwisee Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <BlogPostContainer>
          <BlogPostHero>
            <BackLink to="/blog">
              <FaArrowLeft /> Back to Blog
            </BackLink>
            
            <BlogPostImage image={post.image} />
            
            <BlogTitle>{post.title}</BlogTitle>
            
            <BlogMeta>
              <div>
                <FaCalendarAlt />
                <span>{post.date}</span>
              </div>
              
              <div>
                <FaUser />
                <span>{post.author}</span>
              </div>
              
              <div>
                <FaTag />
                <BlogCategory category={post.category}>{post.category}</BlogCategory>
              </div>
            </BlogMeta>
          </BlogPostHero>
          
          <BlogContent dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <ShareSection>
            <h4>Share this article</h4>
            <ShareButtons>
              <a 
                href={getShareUrl('facebook')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="facebook"
                aria-label="Share on Facebook"
              >
                <FaFacebook />
              </a>
              
              <a 
                href={getShareUrl('twitter')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="twitter"
                aria-label="Share on Twitter"
              >
                <FaTwitter />
              </a>
              
              <a 
                href={getShareUrl('linkedin')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="linkedin"
                aria-label="Share on LinkedIn"
              >
                <FaLinkedin />
              </a>
            </ShareButtons>
          </ShareSection>
          
          {relatedPosts.length > 0 && (
            <RelatedArticles>
              <h3>Related Articles</h3>
              <RelatedGrid>
                {relatedPosts.map(relatedPost => (
                  <RelatedCard 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.slug}`}
                    image={relatedPost.image}
                  >
                    <div className="image"></div>
                    <div className="content">
                      <h4>{relatedPost.title}</h4>
                      <div className="meta">{relatedPost.date}</div>
                    </div>
                  </RelatedCard>
                ))}
              </RelatedGrid>
            </RelatedArticles>
          )}
        </BlogPostContainer>
      </motion.div>
    </>
  );
};

export default BlogPost;
