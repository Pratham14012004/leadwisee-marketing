
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaCalendarAlt, FaUser, FaTag, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import SectionHeading from '../components/common/SectionHeading';

const BlogPostContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem 5rem;
`;

const BlogPostHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }
  
  .meta {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.textSecondary};
    
    .meta-item {
      display: flex;
      align-items: center;
      
      svg {
        margin-right: 0.5rem;
        color: ${props => props.theme.colors.primary};
      }
    }
  }
  
  .featured-image {
    width: 100%;
    height: 500px;
    border-radius: 12px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    @media (max-width: 768px) {
      height: 300px;
    }
  }
`;

const BlogContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const MainContent = styled.div`
  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.8;
  }
  
  h2 {
    font-size: 2rem;
    margin: 3rem 0 1.5rem;
  }
  
  h3 {
    font-size: 1.6rem;
    margin: 2.5rem 0 1.25rem;
  }
  
  ul, ol {
    margin: 1.5rem 0;
    padding-left: 2rem;
    
    li {
      margin-bottom: 0.8rem;
      line-height: 1.7;
    }
  }
  
  blockquote {
    border-left: 4px solid ${props => props.theme.colors.primary};
    padding: 1rem 2rem;
    margin: 2rem 0;
    background-color: ${props => props.theme.colors.bgAlt};
    font-style: italic;
    
    p {
      margin-bottom: 0;
    }
  }
  
  img {
    max-width: 100%;
    border-radius: 8px;
    margin: 2rem 0;
  }
  
  .article-share {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid ${props => props.theme.colors.border};
    
    h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
    
    .share-buttons {
      display: flex;
      gap: 1rem;
      
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.bgAlt};
        color: ${props => props.theme.colors.text};
        transition: all 0.3s ease;
        
        &:hover {
          background-color: ${props => props.theme.colors.primary};
          color: white;
        }
      }
    }
  }
`;

const PostNavigation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${props => props.theme.colors.border};
  
  .nav-item {
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
    }
    
    &.next {
      text-align: right;
    }
    
    .label {
      display: flex;
      align-items: center;
      font-size: 0.9rem;
      font-weight: 500;
      color: ${props => props.theme.colors.textSecondary};
      margin-bottom: 0.5rem;
      
      svg {
        margin: 0 0.5rem;
      }
    }
    
    .title {
      font-size: 1.1rem;
      font-weight: 600;
      color: ${props => props.theme.colors.text};
    }
  }
`;

const Sidebar = styled.div`
  .sidebar-section {
    background-color: ${props => props.theme.colors.bgAlt};
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 2rem;
    
    h3 {
      font-size: 1.3rem;
      margin-bottom: 1.5rem;
      position: relative;
      padding-bottom: 0.75rem;
      
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50px;
        height: 3px;
        background-color: ${props => props.theme.colors.primary};
      }
    }
  }
  
  .author-bio {
    text-align: center;
    
    .author-image {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 1.5rem;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .author-name {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    
    .author-role {
      color: ${props => props.theme.colors.primary};
      font-weight: 500;
      margin-bottom: 1rem;
    }
    
    p {
      font-size: 1rem;
      line-height: 1.7;
    }
  }
  
  .table-of-contents {
    ul {
      list-style: none;
      padding: 0;
      
      li {
        margin-bottom: 0.8rem;
        
        a {
          color: ${props => props.theme.colors.text};
          text-decoration: none;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          
          &:hover {
            color: ${props => props.theme.colors.primary};
          }
          
          &:before {
            content: '•';
            color: ${props => props.theme.colors.primary};
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
  
  .related-posts {
    .post-item {
      display: flex;
      margin-bottom: 1.5rem;
      
      .post-image {
        width: 80px;
        height: 80px;
        border-radius: 8px;
        overflow: hidden;
        flex-shrink: 0;
        margin-right: 1rem;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      
      .post-info {
        .post-title {
          font-weight: 600;
          margin-bottom: 0.4rem;
          line-height: 1.4;
          
          a {
            color: ${props => props.theme.colors.text};
            text-decoration: none;
            transition: color 0.3s ease;
            
            &:hover {
              color: ${props => props.theme.colors.primary};
            }
          }
        }
        
        .post-date {
          font-size: 0.9rem;
          color: ${props => props.theme.colors.textSecondary};
        }
      }
    }
  }
`;

const BlogPost = () => {
  const { slug } = useParams();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Sample blog post data (in a real app, this would come from an API or CMS)
  const post = {
    title: "7 Proven Strategies to Increase Your Google Ads Quality Score",
    date: "August 15, 2023",
    author: {
      name: "Sarah Johnson",
      role: "PPC Specialist",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      bio: "Sarah has 8+ years of experience in digital marketing with a focus on PPC campaign optimization. She specializes in helping businesses improve their ad performance and ROI."
    },
    category: "PPC Advertising",
    readTime: "8 min read",
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: `<p>Quality Score is one of the most important metrics in Google Ads, directly impacting your ad positions, cost-per-click, and overall campaign performance. In this comprehensive guide, we'll explore proven strategies to boost your Quality Score and improve your PPC results.</p>
    
    <h2>What is Quality Score and Why Does it Matter?</h2>
    
    <p>Quality Score is Google's rating of the quality and relevance of your keywords, ads, and landing pages. It's measured on a scale from 1-10, with 10 being the highest. A high Quality Score can lead to:</p>
    
    <ul>
      <li>Lower cost-per-click (CPC)</li>
      <li>Better ad positions</li>
      <li>Higher ad visibility</li>
      <li>Improved return on investment</li>
    </ul>
    
    <p>According to Google, accounts with above-average Quality Scores typically pay 50% less per conversion compared to those with below-average scores. This significant cost difference makes Quality Score optimization essential for campaign success.</p>
    
    <h2>7 Effective Strategies to Improve Your Quality Score</h2>
    
    <h3>1. Structure Your Account for Relevance</h3>
    
    <p>The foundation of a good Quality Score is a well-structured Google Ads account. Create tightly themed ad groups with a limited number of closely related keywords (ideally 10-15 per ad group). This organization allows you to craft highly relevant ad copy that specifically addresses the searcher's intent.</p>
    
    <blockquote>
      <p>Pro Tip: Consider using single keyword ad groups (SKAGs) for your highest-value or highest-volume keywords to maximize relevance and control.</p>
    </blockquote>
    
    <h3>2. Focus on Keyword Relevance</h3>
    
    <p>Choose keywords that are directly relevant to your products or services. Regularly review your search term reports to identify irrelevant searches that are triggering your ads, and add these as negative keywords. This prevents wasting budget on traffic that won't convert while improving your click-through rate.</p>
    
    <p>Additionally, use appropriate match types to control when your ads appear. While broad match can help discover new keyword opportunities, using too many broad match keywords without proper negative keyword management can hurt your Quality Score.</p>
    
    <h3>3. Write Compelling, Relevant Ad Copy</h3>
    
    <p>Your ad text should directly reflect the keywords in your ad group and clearly communicate your value proposition. Include your main keyword in your headlines and descriptions to improve relevance. With Google's responsive search ads, you can test multiple headlines and descriptions to determine which combinations perform best.</p>
    
    <p>Key elements of high-performing ad copy include:</p>
    
    <ul>
      <li>Inclusion of target keywords in headlines</li>
      <li>Clear unique selling propositions</li>
      <li>Strong call-to-action</li>
      <li>Addressing customer pain points</li>
      <li>Highlighting special offers or promotions</li>
    </ul>
    
    <h3>4. Create Dedicated, Relevant Landing Pages</h3>
    
    <p>Landing page experience is a crucial component of Quality Score. Your landing pages should be closely aligned with both your ads and keywords. If someone searches for "blue running shoes" and clicks on an ad for blue running shoes, they should be taken to a page featuring blue running shoes—not a general athletic footwear category page.</p>
    
    <p>Important landing page factors include:</p>
    
    <ul>
      <li>Relevant content that matches search intent</li>
      <li>Fast load times (under 3 seconds ideally)</li>
      <li>Mobile responsiveness</li>
      <li>Easy navigation and clear calls-to-action</li>
      <li>Minimal form fields and friction points</li>
    </ul>
    
    <h3>5. Improve Click-Through Rates (CTR)</h3>
    
    <p>CTR is one of the strongest indicators of ad relevance and directly impacts Quality Score. A high CTR signals to Google that your ad is relevant to users searching for that keyword. To improve CTR:</p>
    
    <ul>
      <li>Test different ad messaging and value propositions</li>
      <li>Utilize all available ad extensions (sitelinks, callouts, structured snippets, etc.)</li>
      <li>Include prices, promotions, and exclusive offers when appropriate</li>
      <li>Address your audience directly and solve their problems</li>
    </ul>
    
    <h3>6. Implement Ad Extensions</h3>
    
    <p>Ad extensions improve the visibility and utility of your ads, which can lead to higher CTRs and better Quality Scores. They provide additional information and give your ads more real estate on the search results page. Important extensions to implement include:</p>
    
    <ul>
      <li>Sitelink extensions</li>
      <li>Callout extensions</li>
      <li>Structured snippet extensions</li>
      <li>Call extensions</li>
      <li>Location extensions</li>
      <li>Price extensions</li>
    </ul>
    
    <h3>7. Monitor and Optimize Regularly</h3>
    
    <p>Quality Score improvement is an ongoing process. Regularly review your Quality Score data at the keyword level to identify areas for improvement. Google provides component scores for expected CTR, ad relevance, and landing page experience, making it easier to determine where to focus your optimization efforts.</p>
    
    <p>Set up a recurring schedule to:</p>
    
    <ul>
      <li>Review search term reports and update negative keywords</li>
      <li>Test new ad variations</li>
      <li>Optimize landing pages</li>
      <li>Pause or optimize underperforming keywords</li>
      <li>Monitor competitor ads and positioning</li>
    </ul>
    
    <h2>Measuring the Impact of Your Quality Score Improvements</h2>
    
    <p>As you implement these strategies, track their impact on your campaign performance. Look beyond just the Quality Score itself to metrics like:</p>
    
    <ul>
      <li>Average CPC</li>
      <li>Impression share</li>
      <li>Average position</li>
      <li>Conversion rates</li>
      <li>Cost per conversion</li>
    </ul>
    
    <p>These metrics will help you quantify the business impact of your Quality Score improvements. In most cases, you should see lower costs and better results as your Quality Score increases.</p>
    
    <h2>Conclusion</h2>
    
    <p>Improving your Google Ads Quality Score requires a systematic approach focused on relevance across your account structure, keywords, ad copy, and landing pages. By implementing these seven strategies, you can enhance your campaign performance while reducing your advertising costs.</p>
    
    <p>Remember that Quality Score optimization isn't a one-time task but an ongoing process. Consistently monitor your performance, test new approaches, and refine your campaigns based on the data. Over time, these efforts will lead to more efficient and effective Google Ads campaigns.</p>`,
    tableOfContents: [
      "What is Quality Score and Why Does it Matter?",
      "7 Effective Strategies to Improve Your Quality Score",
      "Structure Your Account for Relevance",
      "Focus on Keyword Relevance",
      "Write Compelling, Relevant Ad Copy",
      "Create Dedicated, Relevant Landing Pages",
      "Improve Click-Through Rates (CTR)",
      "Implement Ad Extensions",
      "Monitor and Optimize Regularly",
      "Measuring the Impact of Your Quality Score Improvements",
      "Conclusion"
    ],
    relatedPosts: [
      {
        title: "Google Ads Automation: When to Trust the Machines and When to Take Control",
        date: "July 28, 2023",
        image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80",
        slug: "google-ads-automation"
      },
      {
        title: "The Ultimate Guide to Google Ads Budget Optimization",
        date: "June 15, 2023",
        image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2090&q=80",
        slug: "google-ads-budget-optimization"
      },
      {
        title: "Advanced Match Type Strategies in a Post-Exact Match World",
        date: "May 10, 2023",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        slug: "advanced-match-type-strategies"
      }
    ],
    previousPost: {
      title: "Facebook Ads vs. Google Ads: Which Platform Is Right For Your Business?",
      slug: "facebook-ads-vs-google-ads"
    },
    nextPost: {
      title: "How to Create an Effective B2B Content Marketing Strategy",
      slug: "b2b-content-marketing-strategy"
    }
  };
  
  return (
    <>
      <Helmet>
        <title>{post.title} | Leadwisee Blog</title>
        <meta 
          name="description" 
          content="Learn proven strategies to improve your Google Ads Quality Score and enhance your PPC campaign performance."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BlogPostContainer>
          <BlogPostHeader>
            <h1>{post.title}</h1>
            
            <div className="meta">
              <div className="meta-item">
                <FaCalendarAlt />
                <span>{post.date}</span>
              </div>
              <div className="meta-item">
                <FaUser />
                <span>{post.author.name}</span>
              </div>
              <div className="meta-item">
                <FaTag />
                <span>{post.category}</span>
              </div>
              <div className="meta-item">
                <FaClock />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="featured-image">
              <img src={post.featuredImage} alt={post.title} />
            </div>
          </BlogPostHeader>
          
          <BlogContent>
            <MainContent>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              
              <div className="article-share">
                <h3>Share This Article</h3>
                <div className="share-buttons">
                  <a href="#" aria-label="Share on Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#" aria-label="Share on Twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" aria-label="Share on LinkedIn">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              
              <PostNavigation>
                <Link to={`/blog/${post.previousPost.slug}`} className="nav-item prev">
                  <div className="label">
                    <FaArrowLeft /> Previous Article
                  </div>
                  <div className="title">{post.previousPost.title}</div>
                </Link>
                
                <Link to={`/blog/${post.nextPost.slug}`} className="nav-item next">
                  <div className="label">
                    Next Article <FaArrowRight />
                  </div>
                  <div className="title">{post.nextPost.title}</div>
                </Link>
              </PostNavigation>
            </MainContent>
            
            <Sidebar>
              <div className="sidebar-section author-bio">
                <div className="author-image">
                  <img src={post.author.image} alt={post.author.name} />
                </div>
                <div className="author-name">{post.author.name}</div>
                <div className="author-role">{post.author.role}</div>
                <p>{post.author.bio}</p>
              </div>
              
              <div className="sidebar-section table-of-contents">
                <h3>Table of Contents</h3>
                <ul>
                  {post.tableOfContents.map((item, index) => (
                    <li key={index}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="sidebar-section related-posts">
                <h3>Related Articles</h3>
                {post.relatedPosts.map((relatedPost, index) => (
                  <div className="post-item" key={index}>
                    <div className="post-image">
                      <img src={relatedPost.image} alt={relatedPost.title} />
                    </div>
                    <div className="post-info">
                      <div className="post-title">
                        <Link to={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                      </div>
                      <div className="post-date">{relatedPost.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Sidebar>
          </BlogContent>
          
          <div style={{ marginTop: "6rem" }}>
            <SectionHeading
              subtitle="More Resources"
              title="Explore Our <span>Latest Articles</span>"
              description="Discover more insights and strategies to improve your digital marketing performance"
              centered
            />
            
            {/* You could include a list of additional blog posts here */}
          </div>
        </BlogPostContainer>
      </motion.div>
    </>
  );
};

export default BlogPost;
