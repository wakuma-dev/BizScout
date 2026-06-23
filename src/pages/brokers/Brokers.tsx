import { Helmet } from "react-helmet-async"
import FeatureCta from "../buyers/components/FeatureCta"
import BrokersHero from "./components/BrokersHero"
import BrokersDesc from "./components/BrokersDesc"
import BrokersStats from "./components/BrokersStats"
import BrokersFaq from "./components/BrokersFaq"
const Brokers = () => {
  return (
   <main>
    <Helmet><title>Business Brokers | BizScout - Partner With Us</title></Helmet>
    <BrokersHero />
    <BrokersDesc />
    <BrokersStats />
    <BrokersFaq />
    <FeatureCta />
   </main>

  )
}

export default Brokers