import { Helmet } from 'react-helmet-async'
import Hero from './components/Hero'
import PartnersCta from './components/PartnersCta'
import PartnersCategories from './components/PartnersCategories'
const Partners = () => {
  return (
    <main>
    <Helmet>
      <title>Partners | BizScout - Lenders, Advisors & Tools</title>
    </Helmet>
    <Hero />
    <PartnersCategories />
    <PartnersCta />
    </main>

  )
}

export default Partners 