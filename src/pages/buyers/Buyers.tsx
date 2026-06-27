import { Helmet } from 'react-helmet-async'
import Hero from './components/Hero'
import Banner from './components/Banner'
import BuyerFaq from './components/BuyerFaq'
import BuyerDesc from './components/BuyerDesc'
import BuyerCta from './components/BuyerCta'
import BuyerInfo from './components/BuyerInfo'


const Buyers = () => {
  return (
    <main>
      <Helmet>
        <title>Buy a Business - Off Market Deals & Verified Listings | BizScout</title>
      </Helmet>
        <Hero />
        <Banner />
        <BuyerInfo />
        <BuyerCta />
        <BuyerDesc />
        <BuyerFaq />
    </main>

  )
}

export default Buyers