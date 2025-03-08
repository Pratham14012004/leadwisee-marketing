
import React from 'react';
import IndustryTemplate from './IndustryTemplate';

// B2B Marketing Page
export const B2BMarketingPage = () => {
  const pageData = {
    industry: 'B2B',
    title: 'B2B Marketing Agency: Data-Driven Lead Generation for B2B Companies',
    subtitle: 'Account-Based Marketing Strategies That Drive Qualified Leads',
    description: `In the complex world of B2B marketing, generic approaches fall flat. At Leadwisee, we specialize in creating targeted <strong>B2B marketing strategies</strong> that connect your business with high-value prospects and convert them into loyal customers.<br><br>Our team of <strong>B2B performance marketing</strong> experts understands the unique challenges of lengthy sales cycles, multiple stakeholders, and enterprise-level decision making. We've refined our approach to generate quality leads that actually convert, not just inflate your pipeline with unqualified prospects.`,
    keywords: [
      'B2B marketing agency',
      'B2B lead generation',
      'account-based marketing',
      'B2B content marketing',
      'B2B digital strategy',
      'B2B performance marketing',
      'LinkedIn marketing for B2B',
      'demand generation',
      'B2B advertising',
      'B2B sales pipeline'
    ],
    services: [
      {
        title: 'Account-Based Marketing',
        description: 'Target specific high-value accounts with personalized marketing campaigns that speak directly to their pain points and goals. Our ABM strategies align sales and marketing for maximum impact.'
      },
      {
        title: 'B2B Lead Generation',
        description: 'Generate qualified leads through multi-channel campaigns that nurture prospects through the buying journey. We focus on quality over quantity to deliver leads that convert.'
      },
      {
        title: 'LinkedIn Marketing for B2B',
        description: 'Leverage the most powerful B2B platform with targeted LinkedIn ad campaigns, content marketing, and engagement strategies that reach decision-makers.'
      },
      {
        title: 'B2B Content Marketing',
        description: 'Create thought leadership content that positions your brand as an industry leader and generates inbound leads through valuable, actionable insights.'
      },
      {
        title: 'B2B SEO & Technical Audit',
        description: 'Optimize your digital presence with comprehensive SEO audits, technical analysis, and content optimization to increase organic visibility to your target audience.'
      },
      {
        title: 'Marketing Automation',
        description: 'Implement scalable marketing automation solutions that nurture leads, score prospects, and deliver personalized experiences throughout the customer journey.'
      }
    ],
    benefits: [
      {
        title: 'Data-Driven Strategy',
        description: 'We base every decision on comprehensive analytics and testing, ensuring your marketing budgets are invested where they'll generate the highest returns.'
      },
      {
        title: 'Integrated Sales & Marketing Alignment',
        description: 'Our approaches bridge the gap between marketing and sales teams, creating cohesive strategies that move prospects efficiently through your pipeline.'
      },
      {
        title: 'Enterprise-Level Expertise',
        description: 'With experience serving major B2B companies across industries, we understand the complexities of enterprise sales cycles and stakeholder management.'
      },
      {
        title: 'Mobile-First Optimization',
        description: 'All our campaigns are built with mobile-first design principles, ensuring decision-makers can engage with your content seamlessly across devices.'
      },
      {
        title: 'Performance Transparency',
        description: 'Clear reporting dashboards show exactly how our strategies are performing, with direct links between marketing activities and revenue generation.'
      }
    ],
    caseStudies: [
      {
        title: 'SaaS Enterprise Platform',
        description: 'We developed a comprehensive ABM strategy for a B2B SaaS company targeting Fortune 500 financial institutions.',
        results: [
          '285% increase in qualified leads',
          '47% reduction in cost per acquisition',
          '$2.4M in new pipeline generated in 90 days'
        ]
      },
      {
        title: 'Manufacturing Equipment Provider',
        description: 'Created an integrated digital strategy for a manufacturing equipment company looking to reach new industrial customers.',
        results: [
          '156% increase in qualified sales meetings',
          '74% improvement in lead quality score',
          '32% reduction in sales cycle length'
        ]
      }
    ],
    testimonials: [
      {
        quote: 'Leadwisee transformed our approach to B2B marketing. Their team understood our complex sales cycle and created strategies that not only generated leads but significantly improved our conversion rates.',
        name: 'Sarah Johnson',
        position: 'CMO',
        company: 'Enterprise Solutions Inc.'
      },
      {
        quote: 'The ABM strategy Leadwisee developed for us has completely changed how we approach our target accounts. We've seen dramatic improvements in engagement from key decision-makers.',
        name: 'Michael Chen',
        position: 'VP of Marketing',
        company: 'TechScale Systems'
      }
    ],
    faqs: [
      {
        question: 'How is B2B marketing different from B2C marketing?',
        answer: 'B2B marketing involves longer sales cycles, multiple stakeholders in the purchasing decision, and typically higher-value transactions. It requires different strategies focused on education, trust-building, and demonstrating ROI rather than emotional appeals often used in B2C marketing.'
      },
      {
        question: 'What is Account-Based Marketing and why is it effective for B2B?',
        answer: 'Account-Based Marketing (ABM) treats individual high-value accounts as markets of one, creating personalized campaigns specifically designed for key decision-makers within target companies. It\'s effective for B2B because it aligns marketing and sales efforts to focus resources on the accounts most likely to generate significant revenue.'
      },
      {
        question: 'How do you measure success in B2B marketing campaigns?',
        answer: 'We measure success through multiple metrics, including qualified lead generation, sales opportunity creation, pipeline value, conversion rates through the funnel, cost per acquisition, and ultimately ROI. For ABM campaigns, we also track engagement metrics with target accounts and stakeholder interactions.'
      },
      {
        question: 'How long does it typically take to see results from B2B marketing efforts?',
        answer: 'B2B marketing typically has longer time-to-results than B2C due to extended sales cycles. Initial engagement metrics improve within 1-2 months, lead generation typically shows significant improvements within 3-4 months, and revenue impact generally becomes clear within 6-9 months, depending on your industry and average sales cycle length.'
      },
      {
        question: 'How do you approach SEO for B2B companies?',
        answer: 'Our B2B SEO approach includes comprehensive technical audits, keyword research focused on industry-specific terminology, competitive analysis, and content strategy development. We focus on capturing high-intent search queries from decision-makers and creating conversion-optimized journeys.'
      }
    ]
  };

  return <IndustryTemplate {...pageData} />;
};

// E-Commerce Marketing Page
export const ECommerceMarketingPage = () => {
  const pageData = {
    industry: 'E-Commerce',
    title: 'E-Commerce Marketing Agency: Conversion-Focused Digital Strategies',
    subtitle: 'Data-Driven E-Commerce Advertising That Drives Revenue, Not Just Traffic',
    description: `In today's competitive online retail landscape, driving traffic isn't enough—you need to convert visitors into customers and customers into repeat buyers. At Leadwisee, our <strong>e-commerce marketing agency</strong> specializes in end-to-end strategies that optimize every stage of the customer journey.<br><br>From <strong>shopping ads management</strong> to <strong>conversion rate optimization</strong>, our team develops customized solutions that increase AOV, improve ROAS, and drive sustainable growth for online stores of all sizes.`,
    keywords: [
      'e-commerce marketing agency',
      'e-commerce advertising',
      'conversion rate optimization',
      'shopping ads management',
      'D2C marketing',
      'mobile-first marketing',
      'e-commerce SEO',
      'product feed optimization',
      'e-commerce PPC',
      'remarketing campaigns'
    ],
    services: [
      {
        title: 'E-Commerce PPC & Shopping Ads',
        description: 'Strategic management of Google Shopping, Facebook/Instagram Shopping, and Amazon advertising campaigns to drive qualified traffic and maximize ROAS.'
      },
      {
        title: 'Conversion Rate Optimization',
        description: 'Data-driven analysis and optimization of your website, product pages, and checkout process to turn more visitors into paying customers.'
      },
      {
        title: 'Product Feed Optimization',
        description: 'Enhancement of your product feeds for better visibility, higher click-through rates, and improved quality scores across shopping platforms.'
      },
      {
        title: 'E-Commerce SEO & Content Marketing',
        description: 'Comprehensive SEO strategies focused on product-specific keywords, category optimization, and content that drives organic traffic and conversions.'
      },
      {
        title: 'Email & SMS Marketing Automation',
        description: 'Personalized email and SMS campaigns that recover abandoned carts, encourage repeat purchases, and maximize customer lifetime value.'
      },
      {
        title: 'Mobile-First Marketing Strategies',
        description: 'Optimization of the mobile shopping experience with responsive designs, accelerated page speeds, and mobile-specific engagement tactics.'
      }
    ],
    benefits: [
      {
        title: 'Data-Backed Decisions',
        description: 'We leverage analytics and testing to guide every marketing decision, ensuring optimal allocation of your advertising budget for maximum returns.'
      },
      {
        title: 'Multi-Channel Expertise',
        description: 'Our team specializes in creating cohesive strategies across Google, Facebook, Instagram, Amazon, and emerging e-commerce platforms.'
      },
      {
        title: 'Revenue-Focused Metrics',
        description: 'We measure success by revenue generated, not just clicks or impressions, ensuring our strategies directly impact your bottom line.'
      },
      {
        title: 'Technical Optimization',
        description: 'Comprehensive SEO audits, page speed analysis, and crawlability improvements to enhance your site's technical foundation.'
      },
      {
        title: 'Seasonal Strategy Adaptation',
        description: 'Proactive adjustment of campaigns to capitalize on seasonal trends, holiday opportunities, and market shifts.'
      }
    ],
    caseStudies: [
      {
        title: 'Fashion E-Commerce Brand',
        description: 'Developed an integrated PPC, SEO, and CRO strategy for a mid-sized fashion retailer looking to scale their online sales.',
        results: [
          '187% increase in ROAS across shopping campaigns',
          '43% improvement in conversion rate',
          '67% growth in average order value'
        ]
      },
      {
        title: 'Home Goods D2C Brand',
        description: 'Created a mobile-first marketing strategy for a direct-to-consumer home goods brand targeting millennial shoppers.',
        results: [
          '215% increase in mobile conversion rate',
          '78% reduction in cart abandonment',
          '156% growth in returning customer rate'
        ]
      }
    ],
    testimonials: [
      {
        quote: 'Working with Leadwisee transformed our e-commerce marketing. Their team's expertise in shopping ads and conversion optimization helped us achieve record-breaking sales months consistently.',
        name: 'Jessica Martinez',
        position: 'E-Commerce Director',
        company: 'Urban Style Collective'
      },
      {
        quote: 'The product feed optimization and PPC strategies Leadwisee implemented have dramatically improved our ROAS. They truly understand the nuances of e-commerce marketing in a competitive landscape.',
        name: 'David Wilson',
        position: 'Marketing Manager',
        company: 'PrimeHome Products'
      }
    ],
    faqs: [
      {
        question: 'How can I improve my e-commerce conversion rate?',
        answer: 'Improving conversion rates requires a multi-faceted approach: optimizing product pages with clear descriptions and high-quality images, streamlining the checkout process, implementing trust signals, using targeted product recommendations, creating urgency with limited-time offers, and continuously A/B testing key elements. Our CRO strategies typically increase conversion rates by 30-50%.'
      },
      {
        question: 'What's the most effective advertising channel for e-commerce?',
        answer: 'The most effective channel varies by product type, price point, and target audience. Google Shopping works well for high-intent purchases, while Facebook and Instagram are powerful for discovery-based shopping. Amazon Advertising is crucial if you sell on their marketplace. We recommend a multi-channel approach that creates touchpoints throughout the customer journey.'
      },
      {
        question: 'How important is mobile optimization for e-commerce?',
        answer: 'Mobile optimization is critical, with over 70% of e-commerce traffic now coming from mobile devices. Our mobile-first strategies focus on responsive design, accelerated page speeds, simplified navigation, mobile-friendly checkout processes, and targeted mobile ad campaigns to capture this growing segment of shoppers.'
      },
      {
        question: 'How do you approach e-commerce SEO differently than regular SEO?',
        answer: 'E-commerce SEO requires specialized approaches including product page optimization, category page structuring, schema markup for products, inventory management integration, and competitive pricing analysis. We focus on product-specific keywords, shopping intent phrases, and creating content that drives both discovery and purchase decisions.'
      },
      {
        question: 'What e-commerce platforms do you work with?',
        answer: 'We work with all major e-commerce platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom-built solutions. Each platform has unique optimization opportunities, and our team is certified in implementing advanced marketing strategies across all popular e-commerce systems.'
      }
    ]
  };

  return <IndustryTemplate {...pageData} />;
};

// Retail Marketing Page
export const RetailMarketingPage = () => {
  const pageData = {
    industry: 'Retail',
    title: 'Retail Marketing Agency: Bridging Digital & Physical Shopping Experiences',
    subtitle: 'Omnichannel Marketing Strategies for Modern Retail Businesses',
    description: `Today's retail landscape demands seamless connections between online and offline experiences. As a specialized <strong>retail marketing agency</strong>, Leadwisee helps brick-and-mortar stores and multi-channel retailers create cohesive customer journeys that drive foot traffic and digital sales.<br><br>Our <strong>omnichannel marketing strategies</strong> integrate the best of digital innovation with proven retail fundamentals, helping your brand meet customers wherever they prefer to shop.`,
    keywords: [
      'retail marketing agency',
      'omnichannel marketing strategy',
      'in-store traffic generation',
      'retail digital transformation',
      'retail customer acquisition',
      'brick and mortar marketing',
      'retail advertising solutions',
      'local SEO for retail',
      'retail social media marketing',
      'retail analytics'
    ],
    services: [
      {
        title: 'Omnichannel Marketing Strategy',
        description: 'Create seamless customer experiences across online and offline touchpoints with integrated marketing strategies that boost engagement and sales.'
      },
      {
        title: 'In-Store Traffic Generation',
        description: 'Drive qualified foot traffic to your physical locations through targeted local campaigns, mobile marketing, and location-based advertising.'
      },
      {
        title: 'Retail Digital Transformation',
        description: 'Modernize your retail operations with digital solutions that enhance customer experiences, streamline operations, and increase revenue.'
      },
      {
        title: 'Local SEO & Google Business Profile Optimization',
        description: 'Improve local search visibility with tailored local SEO strategies that help nearby customers find your retail locations when they're ready to buy.'
      },
      {
        title: 'Retail Social Media Marketing',
        description: 'Build community and drive sales with retail-focused social media strategies that showcase products, highlight promotions, and engage local customers.'
      },
      {
        title: 'Retail Analytics & Attribution',
        description: 'Gain clear insights into the customer journey with advanced attribution modeling that connects online activities to in-store purchases.'
      }
    ],
    benefits: [
      {
        title: 'True Omnichannel Integration',
        description: 'Our strategies create consistent brand experiences whether customers shop online, in-store, or through mobile apps.'
      },
      {
        title: 'Physical + Digital Expertise',
        description: 'We combine deep knowledge of traditional retail principles with cutting-edge digital marketing techniques.'
      },
      {
        title: 'Local Market Penetration',
        description: 'Targeted campaigns help you dominate local markets and build strong community connections around each location.'
      },
      {
        title: 'Mobile-First Customer Journeys',
        description: 'We optimize every touchpoint for mobile users, recognizing that most retail research now happens on smartphones.'
      },
      {
        title: 'Cross-Channel Measurement',
        description: 'Advanced analytics solutions help track the full customer journey from online research to in-store purchases.'
      }
    ],
    caseStudies: [
      {
        title: 'Regional Retail Chain',
        description: 'Developed an omnichannel marketing strategy for a retail chain with 25 locations across the Southeast.',
        results: [
          '47% increase in store traffic attributed to digital campaigns',
          '124% growth in "store locator" usage',
          '36% higher average transaction value for digitally-engaged customers'
        ]
      },
      {
        title: 'Specialty Home Goods Retailer',
        description: 'Created integrated local marketing campaigns for a home goods retailer expanding into new markets.',
        results: [
          '189% increase in new location foot traffic',
          '67% of in-store customers engaged with digital content first',
          '92% increase in local search visibility'
        ]
      }
    ],
    testimonials: [
      {
        quote: 'Leadwisee helped us seamlessly integrate our online and in-store marketing efforts. Their strategies significantly increased foot traffic while also growing our e-commerce sales—truly omnichannel results.',
        name: 'Robert Greene',
        position: 'Marketing Director',
        company: 'Metro Retail Group'
      },
      {
        quote: 'The local SEO and mobile marketing strategies Leadwisee implemented have transformed how customers find and engage with our retail locations. They truly understand how to bridge digital and physical retail experiences.',
        name: 'Amanda Torres',
        position: 'VP of Marketing',
        company: 'StyleHouse Retail'
      }
    ],
    faqs: [
      {
        question: 'What is omnichannel marketing and why is it important for retail?',
        answer: 'Omnichannel marketing creates a seamless, integrated experience across all channels—website, mobile apps, social media, and physical stores. It's crucial for retail because today's consumers expect consistent experiences regardless of how they interact with your brand. Customers may research online, visit stores to see products, then purchase via mobile app. Omnichannel strategies nurture these complex journeys rather than treating each channel in isolation.'
      },
      {
        question: 'How can digital marketing drive foot traffic to physical stores?',
        answer: 'Digital marketing drives store traffic through several tactics: local SEO and map optimization helps nearby customers find you, location-based mobile ads target customers when they're in proximity to your stores, "buy online, pick up in store" options blend digital convenience with store visits, and social media promotions can highlight in-store exclusives or events to drive foot traffic.'
      },
      {
        question: 'How do you measure the effectiveness of retail marketing campaigns?',
        answer: 'We use multi-touch attribution models that connect online engagement to in-store purchases through tactics like promotion code tracking, dedicated landing pages for in-store offers, foot traffic analysis, customer journey mapping, and point-of-sale integration. This provides a comprehensive view of how marketing activities influence both online and offline sales.'
      },
      {
        question: 'What role does mobile marketing play in retail strategy?',
        answer: 'Mobile marketing is central to modern retail strategy. It includes location-based advertising to reach nearby shoppers, mobile-optimized websites and apps for seamless browsing, mobile loyalty programs and digital wallets for convenient purchasing, push notifications for timely offers, and mobile-based in-store experiences like QR codes for product information.'
      },
      {
        question: 'How important is local SEO for retail businesses?',
        answer: 'Local SEO is critical for retail businesses as it directly influences how visible your stores are when potential customers search for products in your area. Our local SEO strategies include Google Business Profile optimization, local keyword targeting, consistent NAP (Name, Address, Phone) information across directories, location-specific content creation, and local review management to improve rankings in local search results.'
      }
    ]
  };

  return <IndustryTemplate {...pageData} />;
};

// Fashion & Luxury Marketing Page
export const FashionLuxuryMarketingPage = () => {
  const pageData = {
    industry: 'Fashion & Luxury',
    title: 'Fashion & Luxury Marketing Agency: Elevating Premium Brand Experiences',
    subtitle: 'Strategic Digital Marketing for Fashion Brands & Luxury Retailers',
    description: `In the competitive world of luxury and fashion, brand presentation is everything. As a specialized <strong>luxury brand marketing</strong> agency, Leadwisee helps premium brands create digital experiences that match the excellence of their products.<br><br>Our <strong>fashion digital marketing</strong> strategies combine sophisticated aesthetics with performance-driven campaigns that attract and convert high-value customers while maintaining the exclusivity and prestige your brand demands.`,
    keywords: [
      'luxury brand marketing',
      'fashion digital marketing',
      'high-end retail marketing',
      'premium brand advertising',
      'influencer marketing for luxury brands',
      'luxury social media marketing',
      'fashion PPC management',
      'luxury e-commerce strategy',
      'luxury brand positioning',
      'fashion SEO'
    ],
    services: [
      {
        title: 'Luxury Brand Strategy & Positioning',
        description: 'Develop comprehensive digital brand strategies that communicate luxury values, exclusivity, and craftsmanship to discerning audiences.'
      },
      {
        title: 'Premium Fashion PPC & Display',
        description: 'Create sophisticated paid media campaigns that reach high-net-worth individuals and luxury consumers with elegance and precision.'
      },
      {
        title: 'Luxury Influencer Marketing',
        description: 'Curate partnerships with premium influencers and tastemakers whose audiences and aesthetic align perfectly with your luxury positioning.'
      },
      {
        title: 'High-End Social Media Management',
        description: 'Develop and manage social media presences that showcase your products with the sophistication and visual excellence luxury consumers expect.'
      },
      {
        title: 'Fashion SEO & Content Strategy',
        description: 'Create authoritative content and technical optimization that positions your brand as a leader in luxury and fashion search results.'
      },
      {
        title: 'Luxury E-Commerce Experience Optimization',
        description: 'Enhance your online shopping experience to reflect the same level of service and attention to detail found in your boutiques.'
      }
    ],
    benefits: [
      {
        title: 'Prestige-Preserving Growth',
        description: 'Our strategies drive growth while carefully protecting your brand's exclusivity and luxury positioning.'
      },
      {
        title: 'Aesthetic Excellence',
        description: 'We maintain impeccable visual standards across all digital touchpoints, ensuring consistency with your brand identity.'
      },
      {
        title: 'High-Value Audience Targeting',
        description: 'Precision targeting reaches affluent consumers and fashion enthusiasts with demonstrated interest in luxury goods.'
      },
      {
        title: 'Mobile Luxury Experience',
        description: 'Mobile-first design creates sophisticated shopping experiences for luxury consumers on their preferred devices.'
      },
      {
        title: 'Brand Protection',
        description: 'Our approach includes brand monitoring and protection strategies to safeguard your reputation in the digital space.'
      }
    ],
    caseStudies: [
      {
        title: 'Premium Fashion Retailer',
        description: 'Developed an integrated digital strategy for a luxury fashion brand looking to expand their e-commerce presence while maintaining exclusivity.',
        results: [
          '165% increase in online revenue from high-value customers',
          '48% improvement in average order value',
          '73% growth in qualified leads for in-store personal shopping'
        ]
      },
      {
        title: 'Luxury Accessories Brand',
        description: 'Created a sophisticated influencer and social media strategy for a premium accessories brand targeting fashion-forward millennials.',
        results: [
          '215% increase in engagement from target demographic',
          '87% higher conversion rate on influencer-driven traffic',
          '124% growth in social media follower quality score'
        ]
      }
    ],
    testimonials: [
      {
        quote: 'Leadwisee understood the unique challenges of marketing luxury products online. Their strategies helped us increase sales while actually enhancing our brand's exclusive positioning.',
        name: 'Victoria Laurent',
        position: 'Digital Director',
        company: 'Maison Elegance'
      },
      {
        quote: 'The influencer partnerships Leadwisee secured for our brand have been transformative. They found authentic voices that resonate perfectly with our aesthetic and values.',
        name: 'James Richardson',
        position: 'Brand Marketing Manager',
        company: 'Luxe & Modern'
      }
    ],
    faqs: [
      {
        question: 'How is marketing for luxury brands different from mass-market brands?',
        answer: 'Luxury marketing focuses on exclusivity rather than accessibility, emphasizes heritage and craftsmanship over price, targets smaller but higher-value audience segments, maintains meticulous visual standards, and creates desire through scarcity and aspirational positioning. Our strategies respect these principles while adapting them to digital channels.'
      },
      {
        question: 'How do you balance digital reach with luxury exclusivity?',
        answer: 'We maintain exclusivity through precise audience targeting to reach only qualified luxury consumers, creating gated content and experiences that require registration, emphasizing quality over quantity in all metrics, and developing sophisticated retargeting strategies that respect the customer's journey without appearing invasive.'
      },
      {
        question: 'What role does influencer marketing play for luxury brands?',
        answer: 'For luxury brands, influencer marketing is less about reach and more about alignment. We identify influencers whose aesthetic, audience demographics, and personal brand complement your luxury positioning. These partnerships focus on authentic storytelling, behind-the-scenes access, and creating aspirational content rather than direct promotion.'
      },
      {
        question: 'How do you approach e-commerce for high-ticket luxury items?',
        answer: 'Luxury e-commerce requires exceptional attention to detail: immersive product photography and videos that showcase craftsmanship, detailed product stories that communicate heritage, white-glove customer service integration, sophisticated packaging and unboxing experiences, and optimized mobile experiences for affluent consumers who increasingly shop on mobile devices.'
      },
      {
        question: 'How can digital marketing support in-store luxury retail experiences?',
        answer: 'We create integrated strategies that use digital channels to enhance physical retail through appointment booking systems for personalized shopping, digital clienteling tools that help sales associates prepare for customer visits, exclusive event invitations based on online behavior, localized digital campaigns to drive foot traffic to boutiques, and post-purchase digital experiences that extend the relationship.'
      }
    ]
  };

  return <IndustryTemplate {...pageData} />;
};

// Healthcare Marketing Page
export const HealthcareMarketingPage = () => {
  const pageData = {
    industry: 'Healthcare',
    title: 'Healthcare Marketing Agency: HIPAA-Compliant Patient Acquisition',
    subtitle: 'Strategic Digital Marketing for Medical Practices & Healthcare Providers',
    description: `Healthcare marketing requires a specialized approach that balances patient acquisition with regulatory compliance. As a dedicated <strong>healthcare marketing agency</strong>, Leadwisee helps medical practices, hospitals, and wellness providers attract new patients while adhering to HIPAA and healthcare advertising guidelines.<br><br>Our <strong>patient acquisition strategies</strong> are built on deep understanding of healthcare buyer journeys and the unique challenges of marketing sensitive medical services.`,
    keywords: [
      'healthcare marketing agency',
      'medical practice advertising',
      'patient acquisition strategy',
      'HIPAA-compliant marketing',
      'healthcare lead generation',
      'medspa marketing',
      'healthcare PPC',
      'medical SEO',
      'healthcare social media',
      'patient journey optimization'
    ],
    services: [
      {
        title: 'Healthcare PPC & Search Marketing',
        description: 'HIPAA-compliant paid search campaigns that connect patients searching for healthcare solutions with your services at the moment of need.'
      },
      {
        title: 'Medical Practice SEO',
        description: 'Specialized healthcare SEO strategies that improve your visibility for treatment-specific keywords and local searches from potential patients.'
      },
      {
        title: 'Patient Acquisition Campaigns',
        description: 'Multi-channel marketing strategies designed to generate qualified patient leads and guide them through the decision-making process.'
      },
      {
        title: 'Healthcare Local Marketing',
        description: 'Location-focused campaigns that establish your practice as the trusted provider in your community through targeted local strategies.'
      },
      {
        title: 'HIPAA-Compliant Email Marketing',
        description: 'Patient nurturing email workflows that maintain strict compliance while educating prospects and encouraging appointment scheduling.'
      },
      {
        title: 'Healthcare Reputation Management',
        description: 'Proactive management of online reviews and ratings to build trust and credibility with potential patients researching providers.'
      }
    ],
    benefits: [
      {
        title: 'Complete Regulatory Compliance',
        description: 'All our healthcare marketing strategies adhere to HIPAA, FDA, and other relevant regulations governing healthcare advertising.'
      },
      {
        title: 'Specialized Medical Expertise',
        description: 'Our healthcare marketing specialists understand medical terminology, treatment journeys, and patient decision-making processes.'
      },
      {
        title: 'Privacy-First Approach',
        description: 'We implement strict data handling protocols that protect sensitive patient information throughout the marketing process.'
      },
      {
        title: 'Mobile-First Healthcare Journeys',
        description: 'With over 70% of healthcare searches happening on mobile devices, our strategies prioritize excellent mobile experiences.'
      },
      {
        title: 'Multi-Location Marketing',
        description: 'For practices with multiple locations, we develop coordinated strategies that build overall brand strength while driving patients to specific offices.'
      }
    ],
    caseStudies: [
      {
        title: 'Multi-Specialty Medical Group',
        description: 'Developed comprehensive digital marketing strategy for a growing medical practice with multiple specialties and locations.',
        results: [
          '187% increase in appointment request form submissions',
          '43% improvement in patient acquisition cost',
          '124% growth in organic traffic for treatment-specific keywords'
        ]
      },
      {
        title: 'Medspa & Aesthetic Center',
        description: 'Created targeted local marketing campaigns for a premium medspa offering cosmetic and wellness treatments.',
        results: [
          '215% increase in high-value treatment consultations',
          '68% improved conversion rate from ad click to consultation',
          '75% growth in patient lifetime value'
        ]
      }
    ],
    testimonials: [
      {
        quote: 'Leadwisee transformed our practice's digital presence while maintaining strict HIPAA compliance. Their healthcare marketing expertise helped us attract exactly the kind of patients we specialize in treating.',
        name: 'Dr. Jennifer Miller',
        position: 'Medical Director',
        company: 'Advanced Care Medical Group'
      },
      {
        quote: 'The patient acquisition strategies Leadwisee implemented have significantly improved both the quantity and quality of new patients coming to our practice. They truly understand healthcare marketing.',
        name: 'Mark Thompson',
        position: 'Practice Manager',
        company: 'Wellness Medical Associates'
      }
    ],
    faqs: [
      {
        question: 'How do you ensure healthcare marketing campaigns remain HIPAA-compliant?',
        answer: 'We maintain HIPAA compliance through several critical measures: secure, encrypted data handling systems, strict policies for managing Protected Health Information (PHI), staff training on healthcare compliance requirements, proper Business Associate Agreements, secure forms and landing pages for patient information collection, and regular compliance audits of all marketing systems and processes.'
      },
      {
        question: 'What channels are most effective for healthcare patient acquisition?',
        answer: 'The most effective channels typically include Google Ads (capturing high-intent patients actively searching for care), SEO (building long-term visibility for treatment keywords), local search optimization (crucial as 80% of patients search locally), social media for education and community building (particularly Facebook for older demographics), and email marketing for nurturing relationships with existing patients.'
      },
      {
        question: 'How do you approach healthcare content marketing while maintaining medical accuracy?',
        answer: 'Our healthcare content development process includes working with medical professionals to ensure accuracy, having clinical stakeholders review all health-related content, focusing on patient education rather than making treatment promises, clearly distinguishing between general information and medical advice, maintaining citation of reputable medical sources, and following FTC guidelines for health claims.'
      },
      {
        question: 'What role does mobile optimization play in healthcare marketing?',
        answer: 'Mobile optimization is critical in healthcare marketing as over 70% of patients research symptoms and providers on mobile devices. We focus on mobile-friendly website design, simplified appointment request forms for mobile users, click-to-call functionality for immediate connection, mobile page speed optimization, and location-based mobile strategies to reach patients searching for nearby care options.'
      },
      {
        question: 'How do you help healthcare providers manage their online reputation?',
        answer: 'Our reputation management strategies include implementing automated review request systems after positive patient interactions, monitoring review platforms (Google, Healthgrades, Vitals, etc.) for new patient feedback, developing response protocols for different types of reviews, training staff on appropriate review response techniques that maintain HIPAA compliance, and leveraging positive reviews in marketing materials with proper patient consent.'
      }
    ]
  };

  return <IndustryTemplate {...pageData} />;
};

// OTT & Entertainment Marketing Page
export const EntertainmentMarketingPage = () => {
  const pageData = {
    industry: 'OTT & Entertainment',
    title: 'Entertainment & OTT Marketing Agency: Subscriber Acquisition Experts',
    subtitle: 'Data-Driven Marketing for Streaming Services & Media Companies',
    description: `In the crowded entertainment landscape, capturing and retaining audience attention is increasingly challenging. As a specialized <strong>entertainment marketing agency</strong>, Leadwisee helps media companies, streaming platforms, and content creators build engaged audiences and convert them into loyal subscribers.<br><br>Our <strong>OTT platform marketing</strong> strategies are designed to cut through the noise, highlight your unique content offering, and optimize the entire audience journey from discovery to subscription to retention.`,
    keywords: [
      'entertainment marketing agency',
      'OTT platform marketing',
      'subscriber acquisition',
      'streaming service promotion',
      'audience retention strategy',
      'content monetization',
      'video marketing for media',
      'digital entertainment marketing',
      'streaming audience growth',
      'OTT advertising strategy'
    ],
    services: [
      {
        title: 'Subscriber Acquisition Campaigns',
        description: 'Multi-channel marketing strategies designed to attract qualified subscribers and convert them through optimized sign-up experiences.'
      },
      {
        title: 'OTT Content Promotion',
        description: 'Strategic campaigns that highlight your most compelling content to drive interest, free trials, and subscription conversions.'
      },
      {
        title: 'Audience Retention Optimization',
        description: 'Data-driven strategies to reduce churn, increase engagement, and maximize the lifetime value of your subscriber base.'
      },
      {
        title: 'Entertainment SEO & Content Strategy',
        description: 'Specialized search optimization that helps your content get discovered by audiences searching for entertainment options.'
      },
      {
        title: 'Video Marketing & Trailer Optimization',
        description: 'Strategic distribution and optimization of video assets to maximize impact and drive viewer interest across platforms.'
      },
      {
        title: 'Entertainment Audience Targeting',
        description: 'Precision targeting strategies that reach viewers with demonstrated interest in content similar to your offering.'
      }
    ],
    benefits: [
      {
        title: 'Entertainment Industry Expertise',
        description: 'Our specialists understand the unique challenges of marketing entertainment products and streaming services.'
      },
      {
        title: 'Full-Funnel Optimization',
        description: 'We optimize every stage from initial awareness through subscription signup and ongoing retention.'
      },
      {
        title: 'Content-Centric Approach',
        description: 'Our strategies leverage your strongest content assets to differentiate your platform in a crowded marketplace.'
      },
      {
        title: 'Mobile-First Video Experiences',
        description: 'We prioritize excellent mobile experiences, recognizing that over 60% of video consumption now happens on mobile devices.'
      },
      {
        title: 'Data-Driven Content Recommendations',
        description: 'Our analytics help identify which content resonates with specific audience segments to improve targeting and messaging.'
      }
    ],
    caseStudies: [
      {
        title: 'Niche Streaming Platform',
        description: 'Developed comprehensive subscriber acquisition strategy for a specialized streaming service focused on documentary content.',
        results: [
          '156% increase in monthly subscriber acquisitions',
          '42% reduction in customer acquisition cost',
          '68% improvement in free trial conversion rate'
        ]
      },
      {
        title: 'Media Production Company',
        description: 'Created multi-platform content marketing strategy for a production company launching original series across various distribution channels.',
        results: [
          '215% increase in content engagement metrics',
          '87% growth in qualified audience reach',
          '124% improvement in content monetization'
        ]
      }
    ],
    testimonials: [
      {
        quote: 'Leadwisee's understanding of the OTT space is exceptional. Their subscriber acquisition strategies helped us surpass our growth targets while actually reducing our marketing spend.',
        name: 'Chris Anderson',
        position: 'VP of Marketing',
        company: 'StreamSelect Media'
      },
      {
        quote: 'The audience targeting and content promotion strategies Leadwisee developed have significantly improved both our subscriber growth and retention rates. They truly understand how to market entertainment content.',
        name: 'Sarah Jackson',
        position: 'Director of Digital Marketing',
        company: 'Horizon Content Network'
      }
    ],
    faqs: [
      {
        question: 'What are the biggest challenges in marketing OTT platforms today?',
        answer: 'The main challenges include increasing competition for viewer attention, content discovery in a crowded marketplace, differentiating your platform from numerous alternatives, managing subscriber churn, maximizing lifetime value to offset acquisition costs, and creating marketing that highlights your unique content offerings effectively. Our strategies address each of these challenges through data-driven approaches.'
      },
      {
        question: 'How do you approach subscriber acquisition for streaming services?',
        answer: 'Our subscriber acquisition approach includes content-led marketing that showcases your most compelling original content, precision audience targeting based on viewing preferences and behaviors, optimized free trial experiences designed to demonstrate value quickly, strategic paid media across search and social channels, and continuous funnel optimization to improve conversion rates at each stage of the subscription process.'
      },
      {
        question: 'What strategies work best for reducing subscriber churn?',
        answer: 'Effective churn reduction strategies include personalized content recommendations to increase engagement, proactive communication about new content that matches user preferences, streamlined user experiences that remove friction, win-back campaigns for lapsed subscribers, flexible subscription options including seasonal passes or bundling, and strategic use of exclusive content to retain subscribers during potential drop-off periods.'
      },
      {
        question: 'How do you measure success in entertainment marketing campaigns?',
        answer: 'We measure success through comprehensive metrics including cost per subscriber acquisition, free trial conversion rates, subscriber retention and lifetime value, content engagement metrics (viewing time, completion rates), platform usage frequency, content discovery effectiveness, attribution modeling across marketing touchpoints, and ultimately return on marketing investment based on subscriber revenue.'
      },
      {
        question: 'How important is mobile optimization for OTT marketing?',
        answer: 'Mobile optimization is critical as over 60% of video content is now consumed on mobile devices. Our mobile-first strategies include optimized mobile video trailers and previews, simplified subscription processes designed for mobile completion, mobile app install campaigns to drive direct engagement, responsive design for all marketing assets, and strategic use of mobile-specific platforms like Instagram and TikTok for content promotion.'
      }
    ]
  };

  return <IndustryTemplate {...pageData} />;
};

// Coaching & Consulting Marketing Page
export const CoachingMarketingPage = () => {
  const pageData = {
    industry: 'Coaching & Consulting',
    title: 'Coaching & Consulting Marketing Agency: High-Ticket Client Acquisition',
    subtitle: 'Premium Lead Generation Strategies for Coaches, Consultants & Course Creators',
    description: `In the competitive world of coaching and consulting, generic marketing approaches yield mediocre results. As a specialized agency for <strong>coaching business marketing</strong>, Leadwisee helps experts, thought leaders, and consultants attract high-value clients who are ready to invest in premium services.<br><br>Our <strong>consultant lead generation</strong> strategies are designed specifically for knowledge-based businesses that sell high-ticket services and programs, focusing on quality over quantity in every campaign.`,
    keywords: [
      'coaching business marketing',
      'consultant lead generation',
      'high-ticket client acquisition',
      'webinar marketing',
      'course creator marketing',
      'coaching funnel optimization',
      'consultant authority positioning',
      'expert business marketing',
      'coaching program promotion',
      'mastermind marketing'
    ],
    services: [
      {
        title: 'High-Ticket Client Acquisition',
        description: 'Strategic marketing campaigns designed to attract qualified, high-value clients who are ready to invest in premium coaching and consulting services.'
      },
      {
        title: 'Authority Positioning & Personal Branding',
        description: 'Comprehensive strategies to establish you as the recognized expert in your field through thought leadership content and strategic visibility.'
      },
      {
        title: 'Webinar & Event Marketing',
        description: 'End-to-end webinar funnel optimization from registration to attendance to conversion, maximizing the effectiveness of your knowledge-sharing events.'
      },
      {
        title: 'Course & Program Launch Strategies',
        description: 'Specialized marketing campaigns for launching online courses, group programs, and membership sites with maximum enrollment and revenue.'
      },
      {
        title: 'Coaching Business SEO & Content Strategy',
        description: 'Targeted content creation and search optimization that positions your expertise for ideal clients searching for solutions you provide.'
      },
      {
        title: 'Coaching Sales Funnel Optimization',
        description: 'Strategic refinement of your entire client journey from first touch to discovery call to enrollment, improving conversion at each stage.'
      }
    ],
    benefits: [
      {
        title: 'Quality-Focused Lead Generation',
        description: 'Our strategies prioritize attracting fewer, higher-quality prospects who are ideal matches for your premium offerings.'
      },
      {
        title: 'Expertise in High-Ticket Marketing',
        description: 'We understand the unique dynamics of selling premium services and how to market high-investment offerings effectively.'
      },
      {
        title: 'Authentic Authority Building',
        description: 'Our approach builds genuine thought leadership that establishes lasting credibility in your specific expertise area.'
      },
      {
        title: 'Mobile-First Client Experience',
        description: 'We create seamless mobile experiences throughout your marketing funnel, recognizing that busy professionals often engage on mobile devices.'
      },
      {
        title: 'Results-Based Positioning',
        description: 'Our messaging strategies focus on the transformational outcomes you deliver rather than just features of your offerings.'
      }
    ],
    caseStudies: [
      {
        title: 'Business Coach & Consultant',
        description: 'Developed comprehensive marketing strategy for a business coach offering high-ticket 1:1 consulting and group mastermind programs.',
        results: [
          '173% increase in qualified discovery call bookings',
          '47% improvement in discovery call-to-client conversion rate',
          '215% growth in average client value'
        ]
      },
      {
        title: 'Online Course Creator',
        description: 'Created strategic launch campaign for a premium online course in the personal development space.',
        results: [
          '387% ROI on marketing spend during launch',
          '65% increase in webinar attendance rate',
          '42% improvement in webinar-to-sale conversion'
        ]
      }
    ],
    testimonials: [
      {
        quote: 'The client acquisition strategy Leadwisee developed transformed my coaching business. I'm now attracting fewer but far more qualified leads, and my conversion rates and client quality have dramatically improved.',
        name: 'Michael Stevens',
        position: 'Executive Coach',
        company: 'Peak Performance Coaching'
      },
      {
        quote: 'Leadwisee's understanding of marketing for high-ticket services is exceptional. Their strategies helped me position my expertise more effectively and attract clients who truly value and can afford my premium offerings.',
        name: 'Rebecca Johnson',
        position: 'Business Strategist',
        company: 'Growth Catalyst Consulting'
      }
    ],
    faqs: [
      {
        question: 'What's different about marketing high-ticket coaching and consulting services?',
        answer: 'High-ticket marketing requires different approaches than mass-market strategies: longer nurturing sequences to build trust for significant investments, more emphasis on personal connection and credibility, sophisticated qualification mechanisms to filter for serious prospects, value-based rather than price-based positioning, and sales processes designed for higher-touch conversion. Our strategies are specifically designed for these premium service dynamics.'
      },
      {
        question: 'How do you generate leads for coaching and consulting businesses?',
        answer: 'Our lead generation approach for coaches includes creating high-value thought leadership content that demonstrates expertise, implementing strategic lead magnets that solve specific problems for ideal clients, developing webinar and workshop funnels that showcase transformation, utilizing targeted advertising to reach decision-makers, and leveraging authority-building opportunities like podcast guesting and speaking engagements.'
      },
      {
        question: 'What role does personal branding play in coaching marketing?',
        answer: 'Personal branding is essential for coaches and consultants as clients are buying your expertise and approach. Our personal branding strategies include developing a distinctive point of view or methodology, creating consistent visual and messaging elements across platforms, strategically sharing your origin story and "why," establishing content pillars that demonstrate your specific expertise areas, and securing visibility opportunities that position you as an authority.'
      },
      {
        question: 'How do you approach webinar marketing for coaches and consultants?',
        answer: 'Our webinar marketing strategies focus on the entire funnel: compelling webinar topics that address specific pain points, registration page optimization for maximum conversion, strategic email sequences to boost attendance rates, webinar content structuring that demonstrates value while leading to your offer, effective presentation of your coaching offering without being overly "salesy," and post-webinar follow-up sequences to convert interested prospects.'
      },
      {
        question: 'What marketing metrics should coaches and consultants track?',
        answer: 'The most important metrics include lead quality score (not just quantity), discovery call booking rate, discovery call show-up rate, call-to-client conversion percentage, client acquisition cost, average client value and retention, content engagement metrics that indicate audience resonance, and ultimately return on marketing investment based on client revenue. We help establish dashboards tracking these key indicators.'
      }
    ]
  };

  return <IndustryTemplate {...pageData} />;
};

// Interior Design Marketing Page
export const InteriorDesignMarketingPage = () => {
  const pageData = {
    industry: 'Interior Design',
    title: 'Interior Design Marketing Agency: Visual-First Client Acquisition',
    subtitle: 'Digital Marketing Strategies for Interior Designers & Architects',
    description: `For interior designers and architects, showcasing your portfolio and aesthetic vision is essential to attracting ideal clients. As a specialized <strong>interior design marketing</strong> agency, Leadwisee helps design professionals create digital strategies that highlight their unique style and attract high-value projects.<br><br>Our <strong>design portfolio optimization</strong> and lead generation approaches are tailored specifically for creative professionals who need to visually communicate their expertise to discerning clients.`,
    keywords: [
      'interior design marketing',
      'architect digital marketing',
      'luxury project promotion',
      'design portfolio optimization',
      'high-end client acquisition',
      'interior design lead generation',
      'architecture firm marketing',
      'design business growth',
      'portfolio website optimization',
      'houzz marketing'
    ],
    services: [
      {
        title: 'Design Portfolio Optimization',
        description: 'Strategic enhancement of your digital portfolio to showcase your best work in ways that resonate with your ideal clients and highlight your unique style.'
      },
      {
        title: 'Interior Design Lead Generation',
        description: 'Targeted campaigns to attract qualified prospects actively seeking design services for projects that match your expertise and preferred scope.'
      },
      {
        title: 'Luxury Project Marketing',
        description: 'Specialized strategies for promoting high-end residential and commercial design services to affluent clients and luxury property developers.'
      },
      {
        title: 'Design Platform Optimization',
        description: 'Strategic management of your presence on platforms like Houzz, Pinterest, and Instagram to maximize visibility with design-focused audiences.'
      },
      {
        title: 'Interior Design SEO & Content',
        description: 'Specialized search optimization and content creation that helps potential clients find your design services when searching for inspiration or providers.'
      },
      {
        title: 'Visual Social Media Management',
        description: 'Sophisticated social strategies that showcase your portfolio and design aesthetic to build following and generate qualified inquiries.'
      }
    ],
    benefits: [
      {
        title: 'Visual-First Approach',
        description: 'Our strategies prioritize the visual elements of your brand, recognizing that aesthetic impression is crucial in the design industry.'
      },
      {
        title: 'Project Quality Focus',
        description: 'We focus on attracting fewer but higher-quality projects that match your preferred scope, budget range, and design style.'
      },
      {
        title: 'Design Industry Expertise',
        description: 'Our specialists understand the unique client journey for design services and how to nurture prospects effectively.'
      },
      {
        title: 'Mobile-First Portfolio Experience',
        description: 'We ensure your work is beautifully presented across all devices, including tablets and phones where many clients browse design inspiration.'
      },
      {
        title: 'Multi-Platform Integration',
        description: 'Our approaches coordinate your presence across design-specific platforms and traditional marketing channels for maximum impact.'
      }
    ],
    caseStudies: [
      {
        title: 'Luxury Interior Design Firm',
        description: 'Developed comprehensive digital strategy for a high-end interior design firm specializing in luxury residential projects.',
        results: [
          '167% increase in qualified project inquiries',
          '43% growth in average project value',
          '215% improvement in portfolio engagement metrics'
        ]
      },
      {
        title: 'Boutique Architecture Practice',
        description: 'Created targeted lead generation campaign for an architecture firm seeking to attract more commercial renovation projects.',
        results: [
          '124% increase in relevant commercial inquiries',
          '35% higher conversion rate from inquiry to consultation',
          '86% growth in website portfolio time-on-page'
        ]
      }
    ],
    testimonials: [
      {
        quote: 'Leadwisee transformed our digital presence and helped us attract exactly the kind of high-end residential clients we specialize in. Their understanding of the design industry is exceptional.',
        name: 'Alexandra Chen',
        position: 'Principal Designer',
        company: 'Studio Elegance Design'
      },
      {
        quote: 'The lead generation strategy Leadwisee developed has significantly improved both the quantity and quality of project inquiries. We're now able to be more selective with the projects we take on.',
        name: 'Jonathan Miller',
        position: 'Founder',
        company: 'Modern Lines Architecture'
      }
    ],
    faqs: [
      {
        question: 'What marketing channels work best for interior designers and architects?',
        answer: 'The most effective channels typically include visual platforms like Instagram, Pinterest, and Houzz where design-focused audiences seek inspiration; targeted paid advertising on Google and social media to reach clients actively seeking design services; a portfolio-focused website optimized for both aesthetics and lead generation; email marketing for nurturing prospects through the design consideration process; and strategic referral programs with complementary professionals like realtors and contractors.'
      },
      {
        question: 'How should interior designers approach their portfolio website?',
        answer: 'A successful portfolio website should balance visual impact with lead generation through high-quality project photography with consistent aesthetic styling, intuitive project categorization by style and scope, mobile-first design that maintains visual integrity across devices, strategic lead capture forms integrated throughout the portfolio, clear service descriptions with project ranges, carefully curated case studies that tell the story behind selected projects, and simplified inquiry processes that remove friction for interested prospects.'
      },
      {
        question: 'What role does social media play in marketing for design professionals?',
        answer: 'Social media serves multiple crucial functions: portfolio showcase through consistent, high-quality project imagery; style definition through curated content that communicates your aesthetic; behind-the-scenes content that humanizes your process and builds connection; inspiration sharing that demonstrates your design knowledge and perspective; community building with complementary professionals and potential clients; and targeted advertising to reach prospects based on relevant interests, locations, and demographics.'
      },
      {
        question: 'How do you help design professionals attract higher-budget clients?',
        answer: 'Attracting premium clients requires strategic positioning: showcasing higher-end projects prominently in your portfolio, developing messaging that emphasizes value and results rather than cost, creating content that educates on quality and investment, targeting advertising to affluent demographics and locations, highlighting premium materials and craftsmanship in your content, leveraging relationships with luxury brands and vendors, and establishing referral systems with professionals who serve affluent clients.'
      },
      {
        question: 'What content marketing strategies work for interior designers?',
        answer: 'Effective content strategies include before-and-after project features that demonstrate transformation, educational content about design principles and processes, trend analysis that showcases your expertise and perspective, design problem-solving content that addresses common client challenges, material and product spotlights that display your knowledge, space-specific guides for different rooms or project types, and client testimonial stories that highlight the experience of working with you beyond just the visual results.'
      }
    ]
  };

  return <IndustryTemplate {...pageData} />;
};
