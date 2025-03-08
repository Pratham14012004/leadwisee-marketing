import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaTag, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

// Styled components
const PageWrapper = styled.div`
  padding-top: 100px;
`;

const BlogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 20px;
`;

const BlogPostHeader = styled.div`
  margin-bottom: 40px;

  .category {
    display: inline-block;
    padding: 5px 15px;
    background: ${props => props.theme.colors.primaryLight};
    color: ${props => props.theme.colors.primary};
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 15px;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textMuted};

  .meta-item {
    display: flex;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 10px;

    svg {
      margin-right: 5px;
    }
  }
`;

const BlogContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;

  p {
    margin-bottom: 25px;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 40px 0 20px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 30px 0 15px;
  }

  ul, ol {
    margin: 20px 0;
    padding-left: 20px;

    li {
      margin-bottom: 10px;
    }
  }

  blockquote {
    border-left: 4px solid ${props => props.theme.colors.primary};
    padding: 15px 20px;
    margin: 30px 0;
    background: ${props => props.theme.colors.backgroundAlt};
    font-style: italic;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 30px 0;
  }

  code {
    background: ${props => props.theme.colors.backgroundAlt};
    padding: 3px 5px;
    border-radius: 4px;
    font-family: monospace;
  }

  pre {
    background: ${props => props.theme.colors.textDark};
    color: white;
    padding: 20px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 30px 0;

    code {
      background: transparent;
    }
  }
`;

const ShareSection = styled.div`
  margin-top: 50px;
  padding-top: 30px;
  border-top: 1px solid ${props => props.theme.colors.border};

  h4 {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }

  .share-buttons {
    display: flex;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 15px;
      background: ${props => props.theme.colors.backgroundAlt};
      color: ${props => props.theme.colors.text};
      transition: all 0.3s ease;

      &:hover {
        background: ${props => props.theme.colors.primary};
        color: white;
      }
    }
  }
`;

const RelatedPosts = styled.div`
  margin-top: 80px;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .related-posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 20px;
  }
`;

const RelatedPostCard = styled(Link)`
  display: block;
  background: ${props => props.theme.colors.cardBg};
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .content {
    padding: 15px;

    h4 {
      font-size: 1.1rem;
      margin-bottom: 10px;
    }

    .date {
      font-size: 0.85rem;
      color: ${props => props.theme.colors.textMuted};
    }
  }
`;

const AuthorSection = styled.div`
  margin-top: 50px;
  padding: 30px;
  border-radius: 10px;
  background: ${props => props.theme.colors.backgroundAlt};
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .author-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;

    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }

  .author-info {
    flex: 1;

    h4 {
      font-size: 1.3rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 10px;
    }
  }
`;

const BlogPost = () => {
  const { slug } = useParams();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Sample blog post data (in a real app, this would come from an API or CMS)
  const post = {
    id: 1,
    title: "The Ultimate Guide to Performance Marketing in 2023",
    slug: "ultimate-guide-performance-marketing-2023",
    category: "Performance Marketing",
    date: "June 15, 2023",
    author: {
      name: "Sarah Johnson",
      role: "Chief Marketing Officer",
      bio: "Sarah brings 15+ years of digital marketing expertise, having previously led marketing at several Fortune 500 companies.",
      image: "https://source.unsplash.com/random/200x200/?portrait,woman"
    },
    readTime: "8 min read",
    image: "https://source.unsplash.com/random/1200x800/?marketing,digital",
    content: `
      <p>Performance marketing has evolved significantly over the past decade, transforming from a niche digital marketing approach to a must-have strategy for businesses of all sizes. Unlike traditional marketing methods that focus on impressions and brand awareness, performance marketing is all about measurable results: leads, conversions, and revenue.</p>

      <h2>What is Performance Marketing?</h2>

      <p>Performance marketing is a comprehensive approach to digital marketing where advertisers pay only when specific actions are completed, such as a sale, lead, or click. This focus on measurable outcomes makes it particularly attractive to businesses looking to maximize their marketing ROI.</p>

      <p>The key differentiator of performance marketing is its data-driven nature. Every campaign, ad, and strategy is meticulously tracked and optimized based on performance metrics, allowing marketers to make informed decisions about where to allocate their budgets for maximum impact.</p>

      <h2>Key Performance Marketing Channels in 2023</h2>

      <h3>1. Search Engine Marketing (SEM)</h3>

      <p>Google Ads and Bing Ads continue to be powerhouse channels for performance marketers. With the ability to target users based on their search intent, SEM allows businesses to capture high-intent traffic at the moment users are actively looking for their products or services.</p>

      <p>In 2023, we're seeing a significant shift towards automation and AI-driven bidding strategies. Google's Smart Bidding and similar technologies are becoming increasingly sophisticated, allowing marketers to optimize for specific business outcomes rather than just clicks or conversions.</p>

      <h3>2. Social Media Advertising</h3>

      <p>Platforms like Facebook, Instagram, LinkedIn, and TikTok offer robust advertising options with precise targeting capabilities. The interactive nature of social media also allows for engaging ad formats that can drive higher conversion rates.</p>

      <p>Video content is dominating social media advertising in 2023, with short-form videos showing particularly high engagement rates. Additionally, social commerce features are making it easier than ever to convert users directly within social platforms.</p>

      <h3>3. Affiliate Marketing</h3>

      <p>Affiliate marketing remains a cornerstone of performance marketing strategies. By partnering with influencers and content creators who promote products to their audiences, brands can tap into established trust relationships and reach highly engaged audiences.</p>

      <p>The affiliate marketing landscape is becoming more sophisticated, with many brands moving beyond simple commission structures to more complex attribution models that reward affiliates for their role in the customer journey, even if they weren't the last touch before conversion.</p>

      <h2>Emerging Trends in Performance Marketing</h2>

      <h3>1. First-Party Data Prioritization</h3>

      <p>With the phasing out of third-party cookies and increasing privacy regulations, performance marketers are shifting their focus to collecting and leveraging first-party data. Building direct relationships with customers and capturing their consent for data usage is becoming essential for effective targeting and personalization.</p>

      <h3>2. AI and Machine Learning Integration</h3>

      <p>Artificial intelligence is revolutionizing performance marketing by enabling more sophisticated audience targeting, predictive analytics, and automated optimization. AI-powered tools can analyze vast amounts of data to identify patterns and opportunities that human marketers might miss.</p>

      <h3>3. Cross-Channel Attribution</h3>

      <p>As consumer journeys become increasingly complex and span multiple devices and platforms, accurate attribution is more challenging and more important than ever. Advanced attribution models that consider the entire customer journey, rather than just the last click, are becoming standard for sophisticated performance marketers.</p>

      <blockquote>
        "The best performance marketing strategies don't just focus on immediate conversions, but consider the entire customer lifecycle, from acquisition to retention and advocacy."
      </blockquote>

      <h2>Measuring Performance Marketing Success</h2>

      <p>While specific KPIs will vary depending on your business goals, some essential metrics for measuring performance marketing success include:</p>

      <ul>
        <li><strong>Return on Ad Spend (ROAS)</strong>: The revenue generated for every dollar spent on advertising.</li>
        <li><strong>Customer Acquisition Cost (CAC)</strong>: The total cost of acquiring a new customer, including all marketing and sales expenses.</li>
        <li><strong>Lifetime Value (LTV)</strong>: The total revenue a business can expect from a single customer account throughout their relationship.</li>
        <li><strong>Conversion Rate</strong>: The percentage of users who take the desired action, such as making a purchase or filling out a form.</li>
        <li><strong>Cost Per Acquisition (CPA)</strong>: The cost of acquiring a conversion, which could be a sale, lead, or other desired action.</li>
      </ul>

      <h2>Building a Successful Performance Marketing Strategy</h2>

      <ol>
        <li><strong>Define Clear Objectives</strong>: Start by establishing specific, measurable goals that align with your business objectives.</li>
        <li><strong>Understand Your Audience</strong>: Develop detailed buyer personas and use data to understand your audience's preferences, behaviors, and pain points.</li>
        <li><strong>Select the Right Channels</strong>: Choose marketing channels based on where your target audience spends their time and which platforms best support your goals.</li>
        <li><strong>Create Compelling Content</strong>: Develop high-quality, relevant content that resonates with your audience and drives them to take action.</li>
        <li><strong>Implement Robust Tracking</strong>: Set up comprehensive tracking to measure performance across all channels and touchpoints.</li>
        <li><strong>Continuously Test and Optimize</strong>: Use A/B testing and data analysis to refine your campaigns and improve results over time.</li>
        <li><strong>Scale What Works</strong>: Once you've identified successful strategies, increase investment in those areas while continuing to test new approaches.</li>
      </ol>

      <h2>Conclusion</h2>

      <p>Performance marketing continues to evolve, offering businesses powerful ways to connect with customers while ensuring a strong return on investment. By staying abreast of emerging trends, leveraging data effectively, and maintaining a focus on measurable outcomes, marketers can develop performance marketing strategies that drive significant business growth in 2023 and beyond.</p>

      <p>The most successful performance marketers will be those who can balance the science of data-driven optimization with the art of creating compelling campaigns that resonate with their target audience on a human level.</p>
    `,
    tags: ["Performance Marketing", "Digital Strategy", "ROI", "Marketing Analytics"]
  };

  // Related posts data
  const relatedPosts = [
    {
      id: 2,
      title: "5 PPC Strategies That Deliver Results in 2023",
      slug: "ppc-strategies-results-2023",
      date: "May 28, 2023",
      image: "https://source.unsplash.com/random/400x300/?advertising"
    },
    {
      id: 3,
      title: "How to Measure Marketing ROI Effectively",
      slug: "measure-marketing-roi-effectively",
      date: "June 5, 2023",
      image: "https://source.unsplash.com/random/400x300/?analytics"
    },
    {
      id: 4,
      title: "The Future of Social Media Marketing",
      slug: "future-social-media-marketing",
      date: "June 10, 2023",
      image: "https://source.unsplash.com/random/400x300/?socialmedia"
    }
  ];

  return (
    <>
      <Helmet>
        <title>{post.title} | Leadwisee Blog</title>
        <meta
          name="description"
          content={post.content.substring(0, 155).replace(/<[^>]*>/g, '')}
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageWrapper>
          <BlogContainer>
            <BlogPostHeader>
              <span className="category">{post.category}</span>
              <h1>{post.title}</h1>

              <MetaInfo>
                <div className="meta-item">
                  <FaCalendarAlt />
                  <span>{post.date}</span>
                </div>
                <div className="meta-item">
                  <FaUser />
                  <span>{post.author.name}</span>
                </div>
                <div className="meta-item">
                  <FaClock />
                  <span>{post.readTime}</span>
                </div>
              </MetaInfo>
            </BlogPostHeader>

            <FeaturedImage 
              src={post.image} 
              alt={post.title} 
            />

            <BlogContent dangerouslySetInnerHTML={{ __html: post.content }} />

            <MetaInfo style={{ marginTop: '30px' }}>
              {post.tags.map((tag, index) => (
                <div key={index} className="meta-item">
                  <FaTag />
                  <span>{tag}</span>
                </div>
              ))}
            </MetaInfo>

            <ShareSection>
              <h4>Share this post</h4>
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
                <a href="#" aria-label="Share via Email">
                  <FaEnvelope />
                </a>
              </div>
            </ShareSection>

            <AuthorSection>
              <img 
                className="author-image" 
                src={post.author.image} 
                alt={post.author.name} 
              />
              <div className="author-info">
                <h4>{post.author.name}</h4>
                <p>{post.author.role}</p>
                <p>{post.author.bio}</p>
              </div>
            </AuthorSection>

            <RelatedPosts>
              <h3>You might also like</h3>
              <div className="related-posts-grid">
                {relatedPosts.map((relatedPost) => (
                  <RelatedPostCard key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                    />
                    <div className="content">
                      <h4>{relatedPost.title}</h4>
                      <span className="date">{relatedPost.date}</span>
                    </div>
                  </RelatedPostCard>
                ))}
              </div>
            </RelatedPosts>
          </BlogContainer>
        </PageWrapper>
      </motion.div>
    </>
  );
};

export default BlogPost;