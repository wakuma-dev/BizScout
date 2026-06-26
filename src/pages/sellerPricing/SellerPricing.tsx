import { Helmet } from "react-helmet-async"
import Hero from "./components/Hero"
import SellersStats from "./components/SellersStats"
const SellerPricing = () => {
  return (
    <main>
      <Helmet>
        <title>Seller Pricing | BizScout - Fees & Benefits</title>
      </Helmet> 
      <Hero />
      <SellersStats />
    </main>
  )
}

export default SellerPricing