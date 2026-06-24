import { Helmet } from "react-helmet-async"
import SellersHero from "./components/SellersHero"
import WhyWeChooseUs from "./components/WhyWeChooseUs"
import Testimonials from "./components/Testimonials"
import SellersForm from "./components/SellersForm"
import SellersBenefit from "./components/SellersBenefit"
const Sellers = () => {
  return (
    <main>
      <Helmet>
        <title>Sell Your Business | BizScout</title>
      </Helmet>
      <SellersHero />
      <WhyWeChooseUs />
      <SellersBenefit />
      <Testimonials />
      <SellersForm />
    </main>
  )
}

export default Sellers