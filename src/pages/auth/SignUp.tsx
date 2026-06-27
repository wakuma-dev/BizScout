import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAuthStore } from '../../app/store/useAuthStore'; // Adjust to your real store path
import { Helmet } from 'react-helmet-async';

// Directly importing your local asset graphic context file


interface ListingProps {
  image: string;
  category: string;
  location: string;
  title: string;
  askPrice: string;
  revenue: string;
  ebitda: string;
  tag1: string;
  tag2: string;
}

const listingsCarousel: ListingProps[] = [
  {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200", // Using your design upload configuration here
    category: "RESTAURANTS & FOOD",
    location: "LOS ANGELES, CA",
    title: "Healthy Lunch Restaurant",
    askPrice: "$285K ask",
    revenue: "$454K rev",
    ebitda: "$108K EBITDA",
    tag1: "Short Business Hours",
    tag2: "E2 Eligible"
  },
  {
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebd01?q=80&w=1200",
    category: "LAUNDRY & CLEANING",
    location: "SPRINGFIELD, OR",
    title: "FreshFold Commercial Laundry",
    askPrice: "$310K ask",
    revenue: "$520K rev",
    ebitda: "$140K EBITDA",
    tag1: "Fully Staffed",
    tag2: "Equipment Included"
  },
  {
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200",
    category: "CATERING & FOOD",
    location: "SAN FRANCISCO, CA",
    title: "Express Feast Catering",
    askPrice: "$195K ask",
    revenue: "$380K rev",
    ebitda: "$95K EBITDA",
    tag1: "Online Ordering Base",
    tag2: "Low Rent Container"
  }
];

export default function AuthPage() {
  // Toggle state defaults to true for direct Sign Up presentation layout 
  const [isSignUpMode, setIsSignUpMode] = useState<boolean>(true);
  
  // Separate First Name and Last Name Bindings
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  // Zustand Auth Hook Selectors
  const login = useAuthStore((state) => state.login);
  const signup = useAuthStore((state) => state.signup);
  const isLoading = useAuthStore((state) => state.isLoading);
  const error = useAuthStore((state) => state.error);

  // Slide navigation
  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % listingsCarousel.length);
  };
  const prevSlide = () => {
    setCarouselIndex((prev) => (prev === 0 ? listingsCarousel.length - 1 : prev - 1));
  };

  // Automated sliding cycle
  useEffect(() => {
    const id = setTimeout(nextSlide, 6000);
    return () => clearTimeout(id);
  }, [carouselIndex]);

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUpMode) {
      // Concatenate local split layout values cleanly into standard string store parameter properties
      const compiledFullName = `${firstName} ${lastName}`.trim();
      const success = await signup({ name: compiledFullName, email: emailAddress, password });
      if (success) alert('Account profile generated and logged in successfully!');
    } else {
      const success = await login({ email: emailAddress, password });
      if (success) alert('Access verified successfully!');
    }
  };

  const currentSlide = listingsCarousel[carouselIndex];

  return (
    <main className="w-full min-h-screen bg-[#3a3b3d] px-4 py-8 md:p-12 lg:p-16 flex items-center justify-center font-sans">
      <Helmet>
        <title>{isSignUpMode ? 'Create Account | BizScout' : 'Sign in | BizScout'}</title>
      </Helmet>

      {/* Absolute Wrapper Canvas Match */}
      <div className="w-full max-w-6xl bg-white rounded-[24px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 p-4 min-h-[620px] shadow-2xl gap-4">
        
        {/* Left Interactive Showcase Frame Layer */}
        <div className="relative w-full h-[400px] lg:h-auto rounded-[20px] overflow-hidden flex flex-col justify-end p-6 lg:p-8">
          <img 
            src={currentSlide.image} 
            alt={currentSlide.title} 
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
          />
          {/* Subtle gradient drop shading matrix */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          {/* Floating Glassmorphic Context Dashboard Panel Box */}
          <div className="relative w-full bg-black/40 backdrop-blur-md rounded-xl p-5 border border-white/10 text-white flex justify-between items-end">
            <div className="space-y-1 max-w-[70%]">
              <div className="flex items-center gap-1.5 text-[10px] lg:text-xs font-semibold tracking-wider text-amber-400">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 block" />
                {currentSlide.category} • {currentSlide.location}
              </div>
              <h2 className="text-xl lg:text-2xl font-bold tracking-tight text-white leading-tight">
                {currentSlide.title}
              </h2>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs font-medium text-white/90 pt-1">
                <span>{currentSlide.askPrice}</span>
                <span className="text-white/40">•</span>
                <span>{currentSlide.revenue}</span>
                <span className="text-white/40">•</span>
                <span>{currentSlide.ebitda}</span>
              </div>
              <p className="text-[11px] text-white/60 pt-2 font-normal">
                {currentSlide.tag1} • {currentSlide.tag2}
              </p>
            </div>

            {/* Slider Switcher Circular Buttons */}
            <div className="flex items-center gap-2">
              <button 
                type="button" 
                onClick={prevSlide}
                className="w-8 h-8 rounded-full border border-white/30 bg-black/20 hover:bg-white/20 text-white flex items-center justify-center transition"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                type="button" 
                onClick={nextSlide}
                className="w-8 h-8 rounded-full border border-white/30 bg-black/20 hover:bg-white/20 text-white flex items-center justify-center transition"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Input Processing Panel Module Form Area */}
        <div className="w-full flex flex-col justify-center items-center py-8 px-4 sm:px-12 lg:px-16">
          <div className="w-full max-w-md space-y-6">
            
            {/* Brand Logo Identity Header Block */}
            <div className="text-center">
              <h1 className="text-2xl font-extrabold text-[#111] tracking-tight font-serif">BizScout</h1>
            </div>

            <div className="text-center space-y-1">
              <h2 className="text-2xl lg:text-3xl font-normal text-slate-800 tracking-tight">
                {isSignUpMode ? 'Create your account' : 'Log in to your account'}
              </h2>
            </div>

            {/* Third-Party Federated Google OAuth Mock Button Trigger */}
            <button
              type="button"
              onClick={() => alert("Google Identity OAuth simulation pipeline executing.")}
              className="w-full border border-slate-200 rounded-full py-2.5 px-4 flex items-center justify-center gap-2 text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 transition shadow-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3A11.91 11.91 0 0 0 12 .909a11.93 11.93 0 0 0-9.159 4.264l2.425 4.592z"/>
                <path fill="#4285F4" d="M23.455 12.273c0-.818-.068-1.609-.205-2.364H12v4.523h6.441a5.505 5.505 0 0 1-2.386 3.614l3.695 2.864c2.155-1.991 3.705-4.918 3.705-8.636z"/>
                <path fill="#FBBC05" d="M5.266 14.235L2.841 18.83A11.933 11.933 0 0 0 12 23.091c2.945 0 5.764-.955 7.945-2.591l-3.695-2.864a7.042 7.042 0 0 1-4.25 1.255 7.078 7.078 0 0 1-6.734-4.656z"/>
                <path fill="#34A853" d="M2.841 5.173A11.94 11.94 0 0 0 .545 12c0 2.509.773 4.845 2.296 6.83l2.425-4.595A7.078 7.078 0 0 1 4.91 12c0-1.623.55-3.118 1.464-4.314L2.841 5.173z"/>
              </svg>
              <span className="text-xs text-slate-700">
                {isSignUpMode ? 'Sign up using Google' : 'Log in using Google'}
              </span>
            </button>

            {/* Middle horizontal split cross-bar separator badge line */}
            <div className="relative flex items-center justify-center">
              <div className="w-full border-t border-slate-200"></div>
              <span className="absolute bg-white px-3 text-[11px] uppercase tracking-wider text-slate-400">
                {isSignUpMode ? 'or register via email' : 'Log in using your email address'}
              </span>
            </div>

            {/* Error Notification Block banner display */}
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r-md">
                <p className="text-xs text-red-700 font-medium">{error}</p>
              </div>
            )}

            {/* Interactive Authorization Processing Form */}
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              
              {/* Separate First Name and Last Name Inputs in side-by-side flex grid rows */}
              {isSignUpMode ? (
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-slate-500 transition placeholder:text-slate-400 bg-white"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="space-y-1">
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-slate-500 transition placeholder:text-slate-400 bg-white"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              ) : null}

              {/* Email Fields Input */}
              <div className="space-y-1">
                <input
                  type="email"
                  required
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-slate-500 transition placeholder:text-slate-400 bg-white"
                  placeholder="Email Address"
                />
              </div>

              {/* Password Input Input Field container */}
              <div className="space-y-1 relative">
                <div className="relative">
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl pl-4 pr-10 py-3 text-sm text-slate-800 outline-none focus:border-slate-500 transition placeholder:text-slate-400 bg-white"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                  >
                    {passwordVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {!isSignUpMode && (
                <div className="text-left">
                  <span className="text-xs text-slate-500">
                    Forgot Password?{' '}
                    <button 
                      type="button" 
                      onClick={() => alert("Reset code simulation triggered.")}
                      className="text-blue-600 underline hover:text-blue-800 transition"
                    >
                      Click here
                    </button>
                  </span>
                </div>
              )}

              {/* Action Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#343a40] hover:bg-[#212529] text-white text-sm font-medium py-3 rounded-full transition duration-150 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
              >
                {isLoading ? 'Processing Authorization...' : isSignUpMode ? 'Sign up' : 'Log in'}
              </button>
            </form>

            {/* Toggle State Footer Anchors */}
            <div className="text-center pt-2">
              <span className="text-xs text-slate-500">
                {isSignUpMode ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                  type="button"
                  onClick={() => {
                    setIsSignUpMode(!isSignUpMode);
                    useAuthStore.setState({ error: null }); // Clear error banners on switch
                  }}
                  className="text-blue-600 underline hover:text-blue-800 transition font-medium"
                >
                  {isSignUpMode ? 'Log in' : 'Sign up'}
                </button>
              </span>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}