import { useState, useReducer } from 'react';
// FIXED: Combined into a single valid named destructuring import statement
import { Eye, EyeOff } from 'lucide-react'; 

type LoginState = {
  emailAddress: string;
  password: string;
}

type LoginAction = 
  | {
      type: "SET_FIELD";
      field: keyof LoginState;
      value: string;
    };

const initialState: LoginState = {
  emailAddress: "",
  password: ""
};

function reducer(state: LoginState, action: LoginAction): LoginState {
  switch(action.type) {
    case "SET_FIELD": 
      return {
        ...state,
        [action.field]: action.value
      };
    default: 
      return state;
  }
}

export default function Login() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (field: keyof LoginState, value: string) => {
    dispatch({ type: "SET_FIELD", field, value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect auth parameters to api services here safely
    alert(`Logging in execution payload for account profile: ${state.emailAddress}`);
  };

  return (
    <main className="w-full min-h-screen bg-[#2F3639] flex items-center justify-center px-4 sm:px-8">
      
      {/* Central Login Authentication Card Box Container */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 lg:p-10 my-6 transition-all">
        
        {/* Identity Branding Headers */}
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-[28px] font-lora font-normal text-[#252423]">
            Welcome <span className="text-[#C4963C]">Back.</span>
          </h2>
          <p className="text-sm font-inter font-light text-[#8F8D8B]">
            Enter your credentials below to securely manage portal operations.
          </p>
        </div>

        {/* Credentials Form Interface */}
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
          
          {/* Email Address Form Parameter Input Group */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-xs uppercase tracking-wider font-mono font-semibold text-[#252423]">
              Email Address
            </label>
            <input 
              type="email"
              required
              placeholder="name@company.com"
              value={state.emailAddress}
              onChange={(e) => handleInputChange("emailAddress", e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm font-inter outline-none transition-colors focus:border-[#C4963C]"
            />
          </div>

          {/* Secure Password Masked Input Parameter Group */}
          <div className="flex flex-col gap-1.5 w-full relative">
            <label className="text-xs uppercase tracking-wider font-mono font-semibold text-[#252423]">
              Password
            </label>
            <div className="w-full relative flex items-center">
              <input 
                type={isVisible ? "text" : "password"}
                required
                placeholder="••••••••"
                value={state.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm font-inter outline-none transition-colors focus:border-[#C4963C] pr-12"
              />
              
              {/* Dynamic Eye Component Mask Visibility Toggle Button */}
              <button
                type="button"
                onClick={() => setIsVisible(!isVisible)}
                className="absolute right-4 text-gray-400 hover:text-[#252423] transition-colors focus:outline-none select-none"
              >
                {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Context Utility Links option box */}
          <div className="flex items-center justify-end text-xs font-inter text-[#C4963C] hover:underline cursor-pointer">
            Forgot Password?
          </div>

          {/* Processing Pipeline Execute Button Trigger */}
          <button
            type="submit"
            className="w-full bg-[#252423] hover:bg-[#3d3b3a] text-white font-inter font-medium text-sm py-3.5 rounded-lg transition-colors mt-2 shadow-sm"
          >
            Sign In to Dashboard
          </button>

        </form>

      </div>
    </main>
  );
}