import { Helmet } from 'react-helmet-async'
import Hero from './components/Hero'
import PriceCta from './components/PriceCta'
import PriceForm from './components/PriceForm'
import Faq from './components/Faq'
import PriceBanner from './components/PriceBanner'
const Price = () => {
  return (
    <main>
      <Helmet>
        <title>Pricing | BizScout</title>
      </Helmet>
      <Hero />
      <PriceCta />
     
      <PriceBanner />
      <Faq />
      <PriceForm />
    </main>
  )
}

export default Price