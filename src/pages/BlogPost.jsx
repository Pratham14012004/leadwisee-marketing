
import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaTag, FaShare, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const BlogPostContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.textLight};
  font-weight: 500;
  margin-bottom: 2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

const BlogHeader = styled.header`
  margin-bottom: 2rem;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const BlogMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.textLight};
  font-size: 0.9375rem;
  
  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const BlogCategory = styled.span`
  background-color: ${(props) => {
    const category = props.category.toLowerCase();
    if (category === "ppc") return "rgba(var(--primary-rgb), 0.1)";
    if (category === "social media") return "rgba(59, 89, 152, 0.1)";
    if (category === "seo") return "rgba(76, 175, 80, 0.1)";
    if (category === "e-commerce") return "rgba(245, 124, 0, 0.1)";
    if (category === "content") return "rgba(156, 39, 176, 0.1)";
    return "rgba(var(--primary-rgb), 0.1)";
  }};

  color: ${(props) => {
    const category = props.category.toLowerCase();
    if (category === "ppc") return "var(--primary-color)";
    if (category === "social media") return "#3b5998";
    if (category === "seo") return "#4CAF50";
    if (category === "e-commerce") return "#F57C00";
    if (category === "content") return "#9C27B0";
    return "var(--primary-color)";
  }};

  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
`;

const FeaturedImage = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 2rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BlogContent = styled.div`
  line-height: 1.8;
  color: ${(props) => props.theme.text};
  
  p {
    margin-bottom: 1.5rem;
  }
  
  h2 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    font-size: 1.75rem;
  }
  
  h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
  
  blockquote {
    border-left: 4px solid ${(props) => props.theme.primary};
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: ${(props) => props.theme.textLight};
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 2rem 0;
  }
`;

const ShareSection = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${(props) => props.theme.border};
  
  h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }
`;

const SocialShareLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.backgroundAlt};
    color: ${(props) => props.theme.textLight};
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
    }
    
    &.facebook:hover {
      background-color: #4267B2;
      color: white;
    }
    
    &.twitter:hover {
      background-color: #1DA1F2;
      color: white;
    }
    
    &.linkedin:hover {
      background-color: #0A66C2;
      color: white;
    }
  }
`;

const RelatedPostsSection = styled.div`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid ${(props) => props.theme.border};
  
  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;

const RelatedPostsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const RelatedPostCard = styled(Link)`
  display: block;
  background: ${(props) => props.theme.background};
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  .related-post-image {
    height: 150px;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .related-post-content {
    padding: 1rem;
  }
  
  h4 {
    color: ${(props) => props.theme.text};
    margin-bottom: 0.5rem;
    font-size: 1.125rem;
    transition: color 0.3s ease;
  }
  
  &:hover h4 {
    color: ${(props) => props.theme.primary};
  }
  
  .related-post-meta {
    color: ${(props) => props.theme.textLight};
    font-size: 0.875rem;
  }
`;

const NotFoundMessage = styled.div`
  text-align: center;
  padding: 4rem 1rem;
  
  h2 {
    margin-bottom: 1rem;
  }
  
  p {
    color: ${(props) => props.theme.textLight};
    margin-bottom: 2rem;
  }
`;

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  // Mock blog post data
  const blogPosts = [
    {
      id: "google-ads-optimization-tips",
      title: "10 Google Ads Optimization Tips for Higher ROI",
      excerpt:
        "Learn how to optimize your Google Ads campaigns to maximize return on investment and reduce wasted ad spend.",
      category: "PPC",
      date: "June 15, 2023",
      image: "https://source.unsplash.com/random/900x600/?google,advertising",
      slug: "google-ads-optimization-tips",
      author: "Alex Johnson",
      content: `
        <p>Google Ads remains one of the most effective digital advertising platforms for businesses of all sizes. However, many advertisers struggle to achieve a positive return on investment (ROI) from their campaigns. In this article, we'll share 10 proven optimization tips to help you improve your Google Ads performance and maximize your ROI.</p>

        <h2>1. Implement Proper Campaign Structure</h2>
        <p>A well-organized campaign structure is the foundation of successful Google Ads management. Group your keywords into tightly themed ad groups, with each ad group focusing on a specific product, service, or theme. This allows you to create highly relevant ads and landing pages, which improves Quality Score and reduces cost per click.</p>
        
        <h2>2. Use Negative Keywords Strategically</h2>
        <p>Negative keywords prevent your ads from showing for irrelevant search queries. Regularly review your search terms report to identify irrelevant or non-converting search terms and add them as negative keywords. This helps reduce wasted spend and improves campaign performance.</p>
        
        <h2>3. Optimize for Quality Score</h2>
        <p>Quality Score is a critical factor in determining your ad position and cost per click. To improve Quality Score, focus on increasing your click-through rate (CTR), creating relevant ad copy, and ensuring a good landing page experience. A high Quality Score can significantly reduce your cost per click and improve your ad position.</p>
        
        <h2>4. Test Multiple Ad Variations</h2>
        <p>Always test at least 3-4 ad variations within each ad group to identify which messaging resonates best with your audience. Include different headlines, descriptions, and calls to action in your ad variations. Use Google's ad rotation settings to optimize for conversions once you have sufficient data.</p>
        
        <h2>5. Implement Conversion Tracking</h2>
        <p>Proper conversion tracking is essential for measuring campaign performance and optimizing for ROI. Set up conversion tracking for all valuable actions on your website, such as form submissions, phone calls, and purchases. This data will help you make informed decisions about keyword bids, ad copy, and campaign structure.</p>
        
        <h2>6. Use Bid Adjustments Strategically</h2>
        <p>Bid adjustments allow you to increase or decrease your bids based on device, location, time of day, and audience segments. Analyze your conversion data to identify high-performing segments and adjust your bids accordingly. For example, if mobile devices convert at a higher rate than desktop, consider increasing your mobile bid adjustment.</p>
        
        <h2>7. Optimize Landing Pages for Conversions</h2>
        <p>Your landing page experience has a significant impact on conversion rates and Quality Score. Ensure your landing pages are relevant to your ad copy and provide a clear call to action. Test different landing page elements, such as headlines, images, and form fields, to improve conversion rates.</p>
        
        <h2>8. Leverage Audience Targeting</h2>
        <p>Google Ads offers powerful audience targeting options, such as remarketing, in-market audiences, and similar audiences. Use these targeting options to reach users who are more likely to convert. For remarketing campaigns, create different audience segments based on user behavior and tailor your messaging accordingly.</p>
        
        <h2>9. Optimize Bidding Strategies</h2>
        <p>Choose the right bidding strategy based on your campaign goals and available data. If you have sufficient conversion data, consider using automated bidding strategies like Target CPA or Target ROAS. These strategies use machine learning to optimize your bids for conversions or conversion value.</p>
        
        <h2>10. Regularly Review and Refine</h2>
        <p>Regular campaign management is crucial for maintaining and improving performance. Set aside time each week to review your campaign metrics, identify areas for improvement, and implement changes. Focus on key metrics such as conversion rate, cost per conversion, and return on ad spend (ROAS).</p>
        
        <h3>Conclusion</h3>
        <p>Implementing these 10 optimization tips can significantly improve your Google Ads performance and maximize your ROI. Remember that Google Ads optimization is an ongoing process, and continuous testing and refinement are essential for long-term success. By focusing on relevant targeting, compelling ad copy, and conversion-optimized landing pages, you can create high-performing campaigns that drive measurable results for your business.</p>
      `,
      relatedPosts: ["b2b-lead-generation-tactics", "voice-search-optimization-guide", "facebook-ad-targeting-ios-privacy"]
    },
    {
      id: "social-media-trends-2023",
      title: "Social Media Trends to Watch in 2023",
      excerpt:
        "Stay ahead of the curve with these emerging social media trends that will shape marketing strategies in 2023 and beyond.",
      category: "Social Media",
      date: "May 28, 2023",
      image: "https://source.unsplash.com/random/900x600/?social,media",
      slug: "social-media-trends-2023",
      author: "Sarah Williams",
      content: `
        <p>Social media continues to evolve at a rapid pace, with new features, platforms, and user behaviors emerging constantly. Staying ahead of these trends is essential for businesses looking to maintain a competitive edge in their social media marketing efforts. In this article, we'll explore the top social media trends that marketers should watch in 2023.</p>

        <h2>1. Short-Form Video Dominance Continues</h2>
        <p>Short-form video content has exploded in popularity thanks to platforms like TikTok, Instagram Reels, and YouTube Shorts. This trend shows no signs of slowing down in 2023. Brands that can create engaging, concise video content that captures attention in the first few seconds will have a significant advantage. Focus on creating authentic, entertaining videos that provide value to your audience while showcasing your brand personality.</p>
        
        <h2>2. Social Commerce Evolution</h2>
        <p>Social commerce is becoming increasingly sophisticated, with platforms introducing new features to streamline the shopping experience. From Instagram Shops to TikTok's partnership with Shopify, social platforms are making it easier than ever for users to discover and purchase products without leaving the app. In 2023, expect to see more advanced social commerce features, including augmented reality try-on experiences and improved checkout functionality.</p>
        
        <h2>3. Creator Economy Expansion</h2>
        <p>The creator economy continues to grow, with more individuals monetizing their content and influence. Platforms are introducing new tools to help creators earn revenue, such as subscription models, tipping features, and creator funds. For brands, this means more opportunities to collaborate with creators of all sizes, not just those with massive followings. Micro and nano-influencers with highly engaged niche audiences often deliver better results than celebrities with larger but less engaged followings.</p>
        
        <h2>4. Community Building Focus</h2>
        <p>As organic reach continues to decline on many platforms, building engaged communities is becoming more important than ever. Features like Facebook Groups, Twitter Communities, and Instagram Close Friends allow brands to create more intimate spaces for deeper connections with their most loyal followers. In 2023, expect to see more brands focusing on community building strategies that foster genuine relationships and encourage user participation.</p>
        
        <h2>5. Authenticity and Transparency</h2>
        <p>Social media users are increasingly demanding authenticity and transparency from the brands they follow. In 2023, successful brands will embrace imperfection, share behind-the-scenes content, and communicate honestly about their values and practices. This shift away from overly polished content allows brands to create more relatable and trustworthy connections with their audiences.</p>
        
        <h2>6. Social Audio Evolution</h2>
        <p>While the initial hype around Clubhouse has died down, social audio is evolving in new ways. Twitter Spaces, LinkedIn Audio Events, and similar features on other platforms are making audio a more integrated part of the social media experience. In 2023, brands should explore how they can use these audio features for thought leadership, customer engagement, and community building.</p>
        
        <h2>7. Augmented Reality Integration</h2>
        <p>Augmented reality (AR) is becoming more accessible and widespread on social platforms. From Instagram and Snapchat filters to virtual try-on experiences for products, AR is enhancing the social media experience in meaningful ways. In 2023, expect to see more brands using AR to create interactive experiences that showcase their products and engage users in creative ways.</p>
        
        <h2>8. Social SEO Importance</h2>
        <p>As more users turn to social media for product discovery and research, social SEO is becoming increasingly important. Platforms like TikTok, Pinterest, and Instagram are functioning more like search engines, with users searching for specific topics and keywords. In 2023, successful brands will optimize their social content for searchability, using relevant keywords, hashtags, and descriptions to ensure their content is discoverable.</p>
        
        <h2>9. Social Responsibility Expectations</h2>
        <p>Users expect brands to take stands on social and environmental issues and demonstrate their commitment to social responsibility. In 2023, successful brands will go beyond performative activism to show genuine commitment to causes that align with their values. This includes showcasing diversity and inclusion, supporting environmental sustainability, and being transparent about ethical practices.</p>
        
        <h2>10. Data Privacy and First-Party Data</h2>
        <p>With increasing privacy regulations and the phasing out of third-party cookies, brands are facing challenges in targeting and measuring social media performance. In 2023, successful brands will focus on collecting first-party data through methods like social media surveys, polls, contests, and user-generated content campaigns. Building direct relationships with customers will become more valuable than relying on platform targeting alone.</p>
        
        <h3>Conclusion</h3>
        <p>The social media landscape will continue to evolve rapidly in 2023, presenting both challenges and opportunities for marketers. By staying informed about these trends and adapting your strategy accordingly, you can create more effective social media campaigns that drive meaningful results for your business. Remember that the most successful social media strategies are those that remain flexible and responsive to changing user behaviors and platform features.</p>
      `,
      relatedPosts: ["facebook-ad-targeting-ios-privacy", "content-marketing-roi", "ecommerce-email-marketing-automation"]
    },
    {
      id: "ecommerce-conversion-rate-optimization",
      title: "E-commerce Conversion Rate Optimization Strategies",
      excerpt:
        "Discover proven strategies to increase your e-commerce conversion rates and boost sales without increasing traffic.",
      category: "E-commerce",
      date: "May 12, 2023",
      image: "https://source.unsplash.com/random/900x600/?ecommerce,shopping",
      slug: "ecommerce-conversion-rate-optimization",
      author: "Emily Rodriguez",
      content: `
        <p>In the competitive world of e-commerce, driving traffic to your store is only half the battle. The real challenge lies in converting those visitors into paying customers. Conversion Rate Optimization (CRO) is the systematic process of increasing the percentage of website visitors who complete a desired action—whether that's making a purchase, signing up for a newsletter, or creating an account.</p>

        <p>In this article, we'll explore proven strategies to optimize your e-commerce conversion rates and boost sales without necessarily increasing traffic.</p>

        <h2>Understanding Your Current Conversion Rate</h2>
        <p>Before implementing any optimization strategies, it's essential to establish your baseline conversion rate. The average e-commerce conversion rate typically ranges from 1-4%, varying by industry, product type, and price point. Calculate your conversion rate by dividing the number of conversions by the total number of visitors, then multiplying by 100.</p>
        
        <p>Once you have your baseline, you can set realistic improvement goals and measure the impact of your optimization efforts.</p>

        <h2>1. Optimize Your Product Pages</h2>
        <p>Product pages are where purchasing decisions happen, making them critical for conversion optimization:</p>
        
        <ul>
          <li><strong>High-Quality Images:</strong> Include multiple high-resolution images showing products from different angles. Consider adding zoom functionality and 360-degree views for a better shopping experience.</li>
          <li><strong>Compelling Product Descriptions:</strong> Write clear, benefit-focused descriptions that address customer pain points and highlight unique selling propositions.</li>
          <li><strong>Social Proof:</strong> Display customer reviews, ratings, and user-generated content to build trust and credibility.</li>
          <li><strong>Clear Pricing:</strong> Make pricing information transparent, including any potential additional costs such as shipping or taxes.</li>
          <li><strong>Prominent Add-to-Cart Buttons:</strong> Use contrasting colors and clear design for call-to-action buttons.</li>
        </ul>

        <h2>2. Streamline the Checkout Process</h2>
        <p>A complicated checkout process is one of the primary reasons for cart abandonment. Optimize yours with these strategies:</p>
        
        <ul>
          <li><strong>One-Page Checkout:</strong> Minimize the number of steps required to complete a purchase.</li>
          <li><strong>Guest Checkout Option:</strong> Don't force users to create an account before purchasing.</li>
          <li><strong>Progress Indicators:</strong> Show customers where they are in the checkout process and how many steps remain.</li>
          <li><strong>Multiple Payment Options:</strong> Offer various payment methods including credit cards, PayPal, Apple Pay, etc.</li>
          <li><strong>Address Auto-Complete:</strong> Implement tools that automatically fill in address information to reduce typing errors and save time.</li>
          <li><strong>Save Cart Information:</strong> Allow returning users to save their cart and checkout information for future purchases.</li>
        </ul>

        <h2>3. Implement Trust Signals</h2>
        <p>Building trust is essential for converting first-time visitors:</p>
        
        <ul>
          <li><strong>Security Badges:</strong> Display SSL certificates and secure payment icons prominently during checkout.</li>
          <li><strong>Money-Back Guarantee:</strong> Offer and highlight satisfaction guarantees to reduce perceived risk.</li>
          <li><strong>Clear Return Policy:</strong> Make your return and refund policies easily accessible and understandable.</li>
          <li><strong>Customer Testimonials:</strong> Feature real customer feedback throughout your site.</li>
          <li><strong>Live Chat Support:</strong> Provide immediate assistance to address customer concerns in real-time.</li>
        </ul>

        <h2>4. Leverage Urgency and Scarcity</h2>
        <p>Creating a sense of urgency or scarcity can motivate visitors to take immediate action:</p>
        
        <ul>
          <li><strong>Limited-Time Offers:</strong> Display countdown timers for special promotions or sales.</li>
          <li><strong>Low Stock Notifications:</strong> Indicate when products are almost sold out.</li>
          <li><strong>Sale Countdowns:</strong> Show when a discount or promotion will end.</li>
          <li><strong>Exclusive or Limited-Edition Products:</strong> Highlight products that are only available for a limited time or in limited quantities.</li>
        </ul>

        <h2>5. Optimize for Mobile</h2>
        <p>With mobile commerce growing rapidly, ensuring a seamless mobile shopping experience is crucial:</p>
        
        <ul>
          <li><strong>Responsive Design:</strong> Ensure your store looks and functions well on all device sizes.</li>
          <li><strong>Simplified Navigation:</strong> Create thumb-friendly menus and buttons.</li>
          <li><strong>Quick Loading Times:</strong> Optimize images and code for faster mobile loading.</li>
          <li><strong>Mobile-Specific Features:</strong> Implement mobile-friendly payment options like Apple Pay or Google Pay.</li>
          <li><strong>Click-to-Call Functionality:</strong> Allow mobile users to contact your support team with one tap.</li>
        </ul>

        <h2>6. Personalize the Shopping Experience</h2>
        <p>Personalization can significantly impact conversion rates by making the shopping experience more relevant:</p>
        
        <ul>
          <li><strong>Product Recommendations:</strong> Suggest items based on browsing history, purchase history, or items in cart.</li>
          <li><strong>Personalized Email Marketing:</strong> Send targeted offers based on customer behavior and preferences.</li>
          <li><strong>Geolocation Features:</strong> Adjust currency, language, and shipping options based on location.</li>
          <li><strong>Recently Viewed Items:</strong> Display products that customers have previously viewed to encourage return engagement.</li>
        </ul>

        <h2>7. Implement Cart Abandonment Recovery</h2>
        <p>With cart abandonment rates averaging around 70%, recovery strategies are essential:</p>
        
        <ul>
          <li><strong>Exit-Intent Popups:</strong> Offer incentives when users attempt to leave your site with items in their cart.</li>
          <li><strong>Abandonment Emails:</strong> Send reminder emails with potentially personalized offers to users who leave items in their cart.</li>
          <li><strong>Retargeting Ads:</strong> Display ads featuring abandoned cart items on other websites.</li>
          <li><strong>Saved Carts:</strong> Automatically save cart contents for returning visitors.</li>
        </ul>

        <h2>8. A/B Test Key Elements</h2>
        <p>Continuous testing is the cornerstone of effective CRO:</p>
        
        <ul>
          <li><strong>Call-to-Action Buttons:</strong> Test different colors, text, sizes, and placements.</li>
          <li><strong>Product Page Layouts:</strong> Experiment with different arrangements of images, descriptions, and buttons.</li>
          <li><strong>Checkout Flow:</strong> Test single-page versus multi-step checkout processes.</li>
          <li><strong>Pricing Presentation:</strong> Test different ways of displaying prices, discounts, and shipping costs.</li>
          <li><strong>Copy Variations:</strong> Test different headline and product description styles.</li>
        </ul>

        <h3>Conclusion</h3>
        <p>Conversion rate optimization is not a one-time effort but an ongoing process of testing, learning, and refining. By implementing these strategies and continuously measuring their impact, you can systematically improve your e-commerce conversion rates and increase revenue without necessarily increasing your marketing spend.</p>
        
        <p>Remember that even small improvements in conversion rate can translate to significant revenue gains. A strategic approach to CRO focused on enhancing the customer experience will not only boost immediate sales but also contribute to long-term customer loyalty and business growth.</p>
      `,
      relatedPosts: ["ecommerce-email-marketing-automation", "voice-search-optimization-guide", "measuring-content-marketing-roi"]
    },
    // More blog posts would be added here
  ];
  
  // Find the current blog post based on slug
  const currentPost = blogPosts.find(post => post.slug === slug);
  
  // If post not found, show error message
  if (!currentPost) {
    return (
      <>
        <Helmet>
          <title>Blog Post Not Found | Leadwisee</title>
        </Helmet>
        
        <BlogPostContainer>
          <NotFoundMessage>
            <h2>Blog Post Not Found</h2>
            <p>Sorry, the blog post you're looking for doesn't exist or may have been moved.</p>
            <BackButton to="/blog">
              <FaArrowLeft /> Back to Blog
            </BackButton>
          </NotFoundMessage>
        </BlogPostContainer>
      </>
    );
  }
  
  // Get related posts
  const relatedPosts = currentPost.relatedPosts
    ? currentPost.relatedPosts.map(slug => blogPosts.find(post => post.id === slug)).filter(Boolean)
    : [];
  
  return (
    <>
      <Helmet>
        <title>{currentPost.title} | Leadwisee Blog</title>
        <meta name="description" content={currentPost.excerpt} />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <BlogPostContainer>
          <BackButton to="/blog">
            <FaArrowLeft /> Back to Blog
          </BackButton>
          
          <BlogHeader>
            <BlogTitle>{currentPost.title}</BlogTitle>
            <BlogMeta>
              <div className="meta-item">
                <FaCalendarAlt />
                {currentPost.date}
              </div>
              <div className="meta-item">
                <FaTag />
                <BlogCategory category={currentPost.category}>
                  {currentPost.category}
                </BlogCategory>
              </div>
            </BlogMeta>
          </BlogHeader>
          
          <FeaturedImage>
            <img src={currentPost.image} alt={currentPost.title} />
          </FeaturedImage>
          
          <BlogContent dangerouslySetInnerHTML={{ __html: currentPost.content }} />
          
          <ShareSection>
            <h3>
              <FaShare /> Share this article
            </h3>
            <SocialShareLinks>
              <a href="#" className="facebook" aria-label="Share on Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="twitter" aria-label="Share on Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="linkedin" aria-label="Share on LinkedIn">
                <FaLinkedin />
              </a>
            </SocialShareLinks>
          </ShareSection>
          
          {relatedPosts.length > 0 && (
            <RelatedPostsSection>
              <h3>Related Articles</h3>
              <RelatedPostsGrid>
                {relatedPosts.map(post => (
                  <RelatedPostCard key={post.id} to={`/blog/${post.slug}`}>
                    <div className="related-post-image">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="related-post-content">
                      <h4>{post.title}</h4>
                      <div className="related-post-meta">{post.date}</div>
                    </div>
                  </RelatedPostCard>
                ))}
              </RelatedPostsGrid>
            </RelatedPostsSection>
          )}
        </BlogPostContainer>
      </motion.div>
    </>
  );
};

export default BlogPost;
