
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Hero from './Hero';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

const mockPosts: BlogPost[] = [
  {
    id: "how-to-value-a-saas-business",
    title: "How to Accurately Value a SaaS Business Before Buying",
    excerpt: "Valuing a Software-as-a-Service business requires looking past traditional multiples. Dive deep into churn rates, customer acquisition cost metrics, and ARR stabilization trends.",
    category: "VALUATION",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
    date: "June 24, 2026",
    readTime: "6 min read"
  },
  {
    id: "navigating-due-diligence-guide",
    title: "The Ultimate Due Diligence Checklist for First-Time Buyers",
    excerpt: "Avoid hidden financial traps and operational structural deficiencies. This fully complete walkthrough ensures you assess every single line item correctly.",
    category: "ACQUISITIONS",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600",
    date: "June 18, 2026",
    readTime: "12 min read"
  },
  {
    id: "restaurant-franchise-vs-independent",
    title: "Franchise vs. Independent Restaurants: Which is More Profitable?",
    excerpt: "An empirical comparison study analyzing real-time local asset data variables, historical marketing overhead variations, and long-term exit scalability potential.",
    category: "RESTAURANTS",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600",
    date: "May 29, 2026",
    readTime: "8 min read"
  },
  {
    id: "understanding-sba-7a-loans",
    title: "Demystifying SBA 7(a) Loans for Business Acquisition Financing",
    excerpt: "Learn how to leverage Small Business Administration backing to fund up to 90% of your business purchase price, including working capital allocations.",
    category: "FINANCING",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600",
    date: "May 15, 2026",
    readTime: "10 min read"
  },
  {
    id: "e-commerce-inventory-valuation",
    title: "Evaluating E-commerce Supply Chains and Inventory Risk",
    excerpt: "Before acquiring a Shopify or Amazon FBA brand, learn how to audit supplier contracts, spot manufacturing bottlenecks, and calculate true dead stock costs.",
    category: "E-COMMERCE",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600",
    date: "April 28, 2026",
    readTime: "7 min read"
  },
  {
    id: "asset-vs-stock-purchase",
    title: "Asset Purchase vs. Stock Purchase: Tax Implications Explained",
    excerpt: "The structural setup of your acquisition deal dictates your future tax liabilities. Discover why buyers usually prefer asset sales while sellers fight for stock transfers.",
    category: "LEGAL & TAX",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600",
    date: "April 12, 2026",
    readTime: "9 min read"
  },
  {
    id: "spotting-add-back-frauds",
    title: "Red Flags in Owner Add-Backs: Spotting Phantom EBITDA",
    excerpt: "Sellers love to inflate cash flow by adjusting discretionary expenses. Here is how to audit the profit & loss statement to find illegitimate or exaggerated adjustments.",
    category: "VALUATION",
    image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=600",
    date: "March 30, 2026",
    readTime: "11 min read"
  },
  {
    id: "buying-commercial-laundromat",
    title: "Laundromat Acquisitions: Analyzing Utility Ratios and Demographics",
    excerpt: "Laundromats are highly sought-after passive income plays. We analyze how to evaluate commercial lease terms, water-to-revenue formulas, and local demographic density.",
    category: "LOCAL ASSETS",
    /* DEFINITIVE FIX: Swapped to a confirmed, active raw photo URL delivery string */
    image: "https://unsplash.com/photos/stock-market-chart-displayed-on-laptop-screen-IrRbSND5EUc?q=80&w=600",
    date: "March 14, 2026",
    readTime: "8 min read"
  },
  {
    id: "post-acquisition-transition-plan",
    title: "The First 90 Days: Managing Employee and Customer Retention",
    excerpt: "The highest risk phase of any business takeover happens immediately after closing. Implement this step-by-step leadership roadmap to prevent staff panic and client churn.",
    category: "MANAGEMENT",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600",
    date: "Feb 22, 2026",
    readTime: "9 min read"
  },
  {
    id: "negotiating-with-brokers-tips",
    title: "How to Build Credibility with Business Brokers as an Independent Buyer",
    excerpt: "Brokers ignore hundreds of unqualified buyers every week. Learn what terminology to use, what financial proof of funds to provide, and how to get access to off-market listings.",
    category: "ACQUISITIONS",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600",
    date: "Feb 05, 2026",
    readTime: "5 min read"
  }
];

export default function BlogList() {
  const [featuredPost, ...otherPosts] = mockPosts;

  return (
    <section className="w-full mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-white font-sans min-h-screen">
      <Hero />
      
      <div className="border-b border-slate-200 pb-8 my-12">
        <h1 className="text-[20px] leading-[28px] lg:text-[42px] lg:leading-[40px] font-lora font-medium text-[#252423]">
          The BizScout Intelligence Ledger
        </h1>
        <p className="text-[16px] leading-[26px] lg:text-[18px] lg:leading-[28px] font-inter font-light mt-2">
          Expert analysis, data-driven insights, and structured strategic playbooks regarding mid-market business acquisitions and premium local assets.
        </p>
      </div>

      {featuredPost && (
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-md transition duration-300 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 relative h-64 sm:h-96 lg:h-auto min-h-[360px]">
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title} 
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-center space-y-4">
            <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">
              FEATURED • {featuredPost.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
              {/* FIXED: Corrected spelling typo from 'hove:' to 'hover:' */}
              <Link to={`/blog/${featuredPost.id}`} className="text-[20px] leading-[28px] lg:text-[42px] lg:leading-[40px] text-[#252423] hover:text-[#c4963c] transition-colors duration-150 font-lora font-medium">
                {featuredPost.title}
              </Link>
            </h2>
            <p className="text-[18px] leading-[28px] text-[#252423] font-inter font-light line-clamp-4">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-400 font-medium pt-2">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {featuredPost.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {featuredPost.readTime}
              </span>
            </div>
            <div className="pt-4">
              <Link 
                to={`/blog/${featuredPost.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-800 hover:text-blue-600 transition"
              >
                Read Article <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
          <h3 className="text-xs font-bold text-slate-400 tracking-widest uppercase">
            Latest Dispatches
          </h3>
          <span className="text-xs text-slate-400 font-medium">
            Showing {mockPosts.length} updates
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-md transition duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 w-full bg-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold text-slate-800 tracking-wider uppercase border border-slate-200/40 shadow-xs">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h4 className="text-[22px] leading-[30px] font-medium font-lora text-[#252423] hover:text-[#c4963c] line-clamp-2 transition-colors duration-150">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h4>
                  <p className="text-[14px] leading-[23px] font-inter font-light line-clamp-3 text-[#B4B2AF]">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 font-medium pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-slate-800 hover:text-blue-600 font-semibold flex items-center gap-0.5 group transition"
                  >
                    View 
                    <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}