import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6"; // Standardized matching set for X/Twitter and Facebook

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
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebd01?q=80&w=600",
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

export default function BlogDetails() {
  const { productId } = useParams<{ productId: string }>(); 
  const navigate = useNavigate();

  const currentPost = mockPosts.find(post => post.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center font-sans p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Article Not Found</h2>
        <p className="text-slate-500 text-sm mb-6">The requested publication might have been archived or moved.</p>
        <button 
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 text-sm bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 px-4 rounded-full transition"
        >
          <ArrowLeft size={16} /> Return to Intelligence Ledger
        </button>
      </div>
    );
  }

  const relatedPosts = mockPosts.filter(p => p.id !== currentPost.id).slice(0, 2);

  return (
    <main className="w-full min-h-screen bg-white font-sans antialiased text-slate-800 pb-20">
      
      {/* Top Media Hero Frame Header Element Matrix */}
      <div className="relative w-full h-[320px] sm:h-[460px] bg-slate-900 overflow-hidden">
        <img 
          src={currentPost.image} 
          alt={currentPost.title} 
          className="w-full h-full object-cover opacity-65 blur-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        
        {/* Absolute Positioning Overlay Content Frame Text Block */}
        <div className="absolute bottom-0 inset-x-0 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 text-white">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white mb-4 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-xs transition"
          >
            <ArrowLeft size={14} /> Back to Ledger Feed
          </Link>
          
          <div className="space-y-3">
            <span className="inline-block bg-amber-500 text-slate-950 text-[10px] font-extrabold tracking-widest px-2.5 py-1 rounded-md uppercase">
              {currentPost.category}
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight max-w-4xl leading-tight">
              {currentPost.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-white/80 pt-2">
              <span className="flex items-center gap-1"><Calendar size={14} /> {currentPost.date}</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span className="flex items-center gap-1"><Clock size={14} /> {currentPost.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Layout Wrapper Context Body Partition Split */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side Column - Rich Article Text Context Body */}
        <article className="lg:col-span-8 space-y-6">
          <p className="text-lg text-slate-600 font-medium leading-relaxed italic border-l-4 border-slate-300 pl-4 py-1">
            "{currentPost.excerpt}"
          </p>

          <div className="text-slate-700 text-base leading-relaxed space-y-5 font-normal">
            <p>
              When navigating mid-market acquisitions or reviewing target premium local assets, initial superficial balance evaluation processes are rarely completely sufficient. Sophisticated search operators must deploy a multi-layered investigative structure to cross-verify performance integrity.
            </p>
            
            <h2 className="text-xl font-bold tracking-tight text-slate-900 pt-4 font-serif">1. Understanding Structural Underlying Metrics</h2>
            <p>
              Every transaction framework presents a unique composition layer. For instance, in software infrastructure setups, relying on generic baseline models masks underlying attrition trends or contractual fragility. Buyers must implement cohort isolation techniques to calculate true long-term enterprise sustainability coefficients accurately.
            </p>

            <blockquote className="bg-slate-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-6">
              <p className="text-sm font-medium text-slate-800 leading-normal">
                "The highest risk allocation vectors inside an acquisition timeline materialize inside the initial analytical screening cycles. Overlooking granular operational interdependencies represents the single highest catalyst for post-transaction equity devaluation."
              </p>
            </blockquote>

            <h2 className="text-xl font-bold tracking-tight text-slate-900 pt-4 font-serif">2. Auditing Financial Discrepancies and Add-Back Integrity</h2>
            <p>
              Discretionary adjustments or specialized owner add-backs frequently introduce statistical distortion matrices. A diligent transaction sponsor must cross-reference itemized bank statements against official tax ledgers to ensure cash-flow metrics are perfectly representative of normal, independent operations without unscaled founder assistance.
            </p>
            <p>
              Ultimately, securing appropriate leverage channels—like institutional SBA structural programs or proprietary private line agreements—requires presenting structured data arrays that stand up to institutional compliance review workflows.
            </p>
          </div>

          {/* Social Share Toolbar Block */}
          <div className="border-t border-b border-slate-200 py-4 flex flex-wrap items-center justify-between gap-4 mt-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Share Article:</span>
              <button onClick={() => alert('Link copied')} className="p-2 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition">
                <Share2 size={16} />
              </button>
              
              {/* Linked to react-icons/fa6 FaXTwitter component */}
              <button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 hover:text-black transition flex items-center justify-center">
                <FaXTwitter size={16} />
              </button>
              
              {/* Linked to react-icons/ci CiLinkedin component */}
              <button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 hover:text-blue-700 transition flex items-center justify-center">
                <CiLinkedin size={20} />
              </button>
              
              {/* Linked to react-icons/fa6 FaFacebookF component */}
              <button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 hover:text-blue-600 transition flex items-center justify-center">
                <FaFacebookF size={15} />
              </button>
            </div>
            
            <button className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-medium py-1.5 px-3 rounded-md border border-slate-200 hover:border-slate-300 transition">
              <Bookmark size={14} /> Bookmark for Later
            </button>
          </div>

          {/* Institutional Editorial Author Meta Deck */}
          <div className="bg-slate-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 border border-slate-100">
            <div className="w-12 h-12 rounded-full bg-slate-900 text-amber-400 font-serif font-black flex items-center justify-center text-lg flex-shrink-0">
              BS
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-sm font-bold text-slate-900">Written by BizScout Intelligence Group</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Our specialized editorial team collaborates alongside senior transaction brokers, investment council members, and tax experts to construct rigorous operational playbooks for active search entrepreneurs.
              </p>
            </div>
          </div>
        </article>

        {/* Right Side Column - Strategic Sidebar Recommendations Grid Panel */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* Action Call To Option (CTA) Box Layer */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-sm border border-slate-800">
            <h3 className="text-lg font-bold tracking-tight font-serif mb-2">Ready to Acquired?</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4">
              Get unmitigated visibility mapping tools, deal discovery pipelines, and direct institutional verification protocols configured to find proprietary acquisitions.
            </p>
            <Link 
              to="/pricing" 
              className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold py-2.5 rounded-lg transition"
            >
              Explore Search Plans
            </Link>
          </div>

          {/* Related Articles Context Module List Array Grid */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-400 tracking-widest uppercase border-b border-slate-100 pb-2">
              Next In Ledger
            </h3>
            
            <div className="space-y-4">
              {relatedPosts.map(post => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.id}`} 
                  className="block group bg-white border border-slate-200/60 rounded-xl overflow-hidden shadow-xs hover:shadow-sm transition"
                >
                  <div className="relative h-28 w-full bg-slate-100">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 space-y-1.5">
                    <span className="text-[9px] font-extrabold text-amber-600 tracking-wider uppercase">
                      {post.category}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 line-clamp-2 group-hover:text-blue-600 transition leading-snug">
                      {post.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </aside>

      </div>
    </main>
  );
}