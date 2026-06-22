import { useParams, Link } from "react-router-dom";

export interface ProductProps {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  price: number;
  employeeNumber: number;
}

export const ProductData: ProductProps[] = [
  {
    id: 1,
    title: "Established Catering Operation in Colorado",
    subTitle: "The business is an established catering and private chef operation serving the Roaring Fork Valley corridor between Glenwood Springs and Aspen, Colorado...",
    image: "abebe",
    price: 600,
    employeeNumber: 10
  },
  {
    id: 2,
    title: "Everyday Principal",
    subTitle: "Everyday Principal is a K–12 leadership development company that helps school districts grow and retain high-performing principals...",
    image: "lema",
    price: 600,
    employeeNumber: 5
  },
  {
    id: 3, 
    title: "Craft Malthouse & Specialty Ingredient Company with CPG Brand Portfolio - Mid-Atlantic U.S.",
    subTitle: "Business Overview Established in 2012, this Mid-Atlantic craft malthouse is the first commercial malting operation in its state since Prohibition...",
    image: "girma",
    price: 500,
    employeeNumber: 12
  },
  {
    id: 4,
    title: "Award-Winning Med Spa, Salon | 2 Locations | Sarasota Area",
    subTitle: "This is a rare opportunity to acquire a thriving, full-service med spa and wellness brand with two established locations in the Sarasota area...",
    image: "kebebd",
    price: 185,
    employeeNumber: 28
  },
  {
    id: 5,
    title: "Investor Friendly Fix and Flip General Contractor",
    subTitle: "Exceptional opportunity to acquire a highly profitable, full-service General Contractor with proven financial stability...",
    image: "girmaw",
    price: 290,
    employeeNumber: 2
  },
  {
    id: 6,
    title: "Vibrant Restaurant & Bar with Live Music, Full Bar, and 5-Star Salad Bar - Turnkey Opportunity in Northeast Mississippi",
    subTitle: "Step into a thriving hospitality brand with The Local House, a beloved restaurant and bar located just outside Tupelo in Saltillo, MS...",
    image: "tigi",
    price: 375,
    employeeNumber: 11
  },
  {
    id: 7,
    title: "Profitable Well Established Full Service Auto Repair Shop",
    subTitle: "Great opportunity to acquire long standing profitable Auto Repair shop in Central Palm Beach County...",
    image: "gtima",
    price: 215,
    employeeNumber: 7
  },
  {
    id: 8,
    title: "Iconic 31 Year Old Restaurant For Sale",
    subTitle: "This Iconic Restaurant located in Palm Beach County Florida has a warm ambiance that is both inviting, upscale, and casual...",
    image: "fnkd",
    price: 320,
    employeeNumber: 11
  },
  {
    id: 9,
    title: "Well-Established 25-Year Music and Arts Education Business",
    subTitle: "Well-Established 25-Year Music and Arts Education Business in Bergen County Established performing arts and education center...",
    image: "jkaj",
    price: 460,
    employeeNumber: 40
  }
];

export default function FeatureProductList(){
  const { productId } = useParams<{ productId: string }>();

  return (
    <section className="px-4 md:px-8 lg:px-12 py-8 lg:py-16 bg-[#FAF7F4] min-h-[100dvh] flex flex-col gap-8">
      <div className="flex flex-col items-start gap-3">
        <h4 className="text-[30px] leading-[38px] lg:text-[60px] lg:leading-[60px] font-normal text-[#252423] font-lora">
          Opportunities Worth <span className="text-[#C4963C]">a Closer Look.</span>
        </h4>
        <p className="text-[18px] leading-[28px] font-inter font-light text-[#8F8D8B]">
          Explore featured listings across industries, price points, and deal types.
        </p>
      </div>
      
      {/* Grid container handles layout distribution safely */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProductData.map((product) => {
          const isActive = productId === String(product.id);

          return (
            <Link
              key={product.id}
              to={`/feature/${product.id}`}
              className={`flex flex-col items-start rounded-xl p-4 bg-white border transition-all duration-300 gap-3 group shadow-sm hover:shadow-md ${
                isActive ? "border-[#252423] ring-1 ring-[#252423]" : "border-[#E5E5E5] hover:border-[#C4963C]"
              }`}
            >
              <div className="w-full h-44 bg-[#252423]/5 rounded-lg overflow-hidden border border-gray-100 flex items-center justify-center font-mono text-xs text-gray-400">
                <span>[Mockup Image: {product.image}]</span>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <h5 className="text-[18px] font-medium leading-[24px] text-[#252423] font-inter group-hover:text-[#C4963C] transition-colors line-clamp-2 min-h-[48px]">
                  {product.title}
                </h5>
                <div className="flex items-center justify-between border-t border-gray-100 pt-2 mt-1">
                  <p className="text-[16px] font-semibold font-inter text-[#C4963C]">
                    ${product.price.toLocaleString()},000
                  </p>
                  <span className="text-xs font-mono text-[#8F8D8B]">
                    {product.employeeNumber} Employees
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}