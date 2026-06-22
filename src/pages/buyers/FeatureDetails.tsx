import { useParams, Link } from "react-router-dom";
import { ProductData } from "./components/FeatureProductList";

export default function FeatureDetails() {
  const { productId } = useParams<{ productId: string }>();

  // FIXED: Changed item.id to evaluate against stringified value of the param input
  const product = ProductData.find((item) => String(item.id) === productId);

  if (!product) {
    return (
      <div className="w-full min-h-[50dvh] flex flex-col items-center justify-center bg-[#FAF7F4] p-12 text-center">
        <p className="text-[#6B6A69] font-inter mb-4">Opportunity could not be found.</p>
        <Link to="/feature" className="text-[#C4963C] font-medium hover:underline">
          Return to listings
        </Link>
      </div>
    );
  }

  return (
    <main className="px-4 md:px-8 lg:px-12 py-12 w-full min-h-[100dvh] bg-[#F6F6F5] flex flex-col lg:flex-row gap-8">
      {/* Content Side column */}
      <div className="w-full lg:w-2/3 p-6 bg-white rounded-xl shadow-sm flex flex-col gap-6">
        <div className="w-full h-64 lg:h-96 bg-gray-200 rounded-lg flex items-center justify-center font-mono text-gray-400 text-sm">
          [Image Display Asset: {product.image}]
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-lora font-normal text-[#252423] leading-snug">
          {product.title}
        </h2>
        
        <p className="text-[#6B6A69] font-inter font-light text-[16px] leading-[28px]">
          {product.subTitle}
        </p>
      </div>

      {/* Meta Specs Sticky Side Panel column */}
      <div className="w-full lg:w-1/3 p-6 bg-white rounded-xl shadow-sm h-fit flex flex-col gap-4">
        <h3 className="font-inter font-medium text-gray-400 uppercase text-xs tracking-wider">Financial Overview</h3>
        <div>
          <span className="text-sm font-mono text-[#8F8D8B]">Asking Price</span>
          <p className="text-3xl font-bold font-inter text-[#C4963C]">${product.price.toLocaleString()},000</p>
        </div>
        <div className="border-t border-gray-100 pt-3">
          <span className="text-sm font-mono text-[#8F8D8B]">Headcount</span>
          <p className="text-lg font-medium font-inter text-[#252423]">{product.employeeNumber} active employees</p>
        </div>
        <Link to="/" className="mt-4 text-center border border-gray-200 rounded-lg py-2.5 text-sm font-inter text-[#252423] hover:bg-gray-50 transition-colors">
          ← Back to All Listings
        </Link>
      </div>
    </main>
  );
}