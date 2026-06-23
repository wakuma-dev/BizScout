import { Helmet } from "react-helmet-async";
import { useReducer, FormEvent } from "react";

type InputProps = {
  email: string;
  industry: string;
  dealSize: string;
  phoneNumber: string;
  duration: string;
};

const initialState: InputProps = {
  email: "",
  industry: "",
  dealSize: "",
  phoneNumber: "",
  duration: "",
};

type InputAction =
  | { type: "SET_FIELD"; payload: { field: keyof InputProps; value: string } }
  | { type: "CLEAR_FORM" };

function reducer(state: InputProps, action: InputAction): InputProps {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case "CLEAR_FORM":
      return initialState;
    default:
      return state;
  }
}

export default function PartnerForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (field: keyof InputProps, value: string) => {
    dispatch({
      type: "SET_FIELD",
      payload: { field, value },
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submitted Broker Data:", state);
  };

  return (
    <main className="w-full h-auto min-h-screen bg-white">
      <Helmet>
        <title>Join BizScout as a Broker</title>
      </Helmet>

      {/* Header Banner */}
      <div className="px-4 md:px-8 lg:px-12 py-16 lg:py-24 bg-[#252423] text-white flex flex-col lg:flex-row items-center justify-center gap-1.5 lg:gap-3">
        <h2 className="text-[30px] leading-[38px] lg:text-[70px] lg:leading-[70px] font-lora font-medium">
          BizScout{" "}
        </h2>
        <p className="text-[18px] leading-[28px] text-white font-inter font-normal">
          Broker Partner Program
        </p>
      </div>

      {/* Main Content Area */}
      <div className="p-4 md:p-8 flex flex-col items-start gap-6 w-full max-w-[1000px] mx-auto rounded-t-lg bg-white -mt-12 h-auto min-h-screen shadow-sm">
        {/* Yellow Circle B Badge */}
        <span className="bg-[#E8CA79] w-10 h-10 flex items-center justify-center rounded-full font-lora font-semibold text-[20px] leading-[28px] text-black">
          B
        </span>

        {/* Title Section */}
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-[31px] leading-[40px] font-inter font-medium text-black">
            Join BizScout as a Broker!
          </h3>
          <p className="text-[#616670] text-[13px] leading-[20px] max-w-2xl">
            Unlock new opportunities and connect with serious buyers and
            sellers. Join BizScout's exclusive broker network and grow your
            business today!
          </p>
        </div>

        {/* Interactive Form - Stacked layout without grid */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 mt-4">
          
          {/* Email Field */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-[14px] font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              required
              value={state.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="broker@example.com"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#E8CA79] focus:border-[#E8CA79]"
            />
          </div>

          {/* Phone Number Field */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-[14px] font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              required
              value={state.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#E8CA79] focus:border-[#E8CA79]"
            />
          </div>

          {/* Industry Focus Field */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-[14px] font-medium text-gray-700">
              Industry Focus
            </label>
            <input
              type="text"
              required
              value={state.industry}
              onChange={(e) => handleChange("industry", e.target.value)}
              placeholder="e.g., SaaS, E-commerce, Retail"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#E8CA79] focus:border-[#E8CA79]"
            />
          </div>

          {/* Average Deal Size Field */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-[14px] font-medium text-gray-700">
              Average Deal Size ($)
            </label>
            <input
              type="text"
              required
              value={state.dealSize}
              onChange={(e) => handleChange("dealSize", e.target.value)}
              placeholder="e.g., 50000"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#E8CA79] focus:border-[#E8CA79]"
            />
          </div>

          {/* Experience / Duration Field */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-[14px] font-medium text-gray-700">
              Years of Experience as a Broker
            </label>
            <input
              type="string"
              required
              value={state.duration}
              onChange={(e) => handleChange("duration", e.target.value)}
              placeholder="e.g., 3"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#E8CA79] focus:border-[#E8CA79]"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mt-4 w-full justify-end">
            <button
              type="button"
              onClick={() => dispatch({ type: "CLEAR_FORM" })}
              className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-black rounded-md transition-colors"
            >
              Clear Form
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 text-sm font-medium text-black bg-[#E8CA79] hover:bg-[#dfbe67] rounded-md transition-colors shadow-sm"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}