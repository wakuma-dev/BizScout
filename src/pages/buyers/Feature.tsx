
import FeatureAbout from "./components/FeatureAbout"
import FeatureCard from "./components/FeatureCard"
import FeatureCta from "./components/FeatureCta"
import FeatureDesc from "./components/FeatureDesc"
import FeatureFaq from "./components/FeatureFaq"
import FeatureHero from "./components/FeatureHero"
import FeatureProductList from "./components/FeatureProductList"
import FeatureTeam from "./components/FeatureTeam"
import FeatureTestimonials from "./components/FeatureTestimonials"


const Feature = () => {
  return (
  <main>
    <FeatureHero />
    <FeatureDesc />
    <FeatureAbout />
    <FeatureTeam />
    <FeatureProductList />
    <FeatureTestimonials />
    <FeatureCard />
    <FeatureFaq />
    <FeatureCta />
  </main>
  )
}

export default Feature