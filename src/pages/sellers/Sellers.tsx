import { Helmet } from "react-helmet-async"
import SellersHero from "./components/SellersHero"
import WhyWeChooseUs from "./components/WhyWeChooseUs"
import Testimonials from "./components/Testimonials"
import SellersForm from "./components/SellersForm"
import SellersBenefit from "./components/SellersBenefit"
import SellersCta from "./components/SellersCta"
import SellersStats from "./components/SellersStats"
import SellersFaq from "./components/SellersFaq"
const Sellers = () => {
  return (
    <main>
      <Helmet>
        <title>Sell Your Business | BizScout</title>
      </Helmet>
      <SellersHero />
      <WhyWeChooseUs />
      <SellersStats />
      <SellersBenefit />
      <Testimonials />
      <SellersForm />
      <SellersFaq />
      <SellersCta />
    </main>
  )
}

export default Sellers