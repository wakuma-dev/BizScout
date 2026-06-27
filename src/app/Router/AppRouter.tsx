import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../../components/common/ScrollToTop";
import MainLayout from "../../components/layout/MainLayout";
import AuthLayout from "../../components/layout/AuthLayout";
import FeatureProductList from "../../pages/buyers/components/FeatureProductList";
import FeatureDetails from "../../pages/buyers/FeatureDetails";
import PartnerForm from "../../pages/form/PartnerForm";
import FormLayout from "../../components/layout/FormLayout";
import SignUpPage from "../../pages/auth/SignUp";
const Buyers = lazy(() => import("../../pages/buyers/Buyers"));
const Private = lazy(() => import("../../pages/buyers/Private"));
const Resource = lazy(() => import("../../pages/resource/Resource"));
const Brokers = lazy(() => import("../../pages/brokers/Brokers"));
const Price = lazy(() => import("../../pages/pricing/Price"));
const Seller = lazy(() => import("../../pages/sellers/Sellers"));
const Partners = lazy(() => import("../../pages/partners/Partners"));
const Login = lazy(() => import("../../pages/auth/Login"));
const Feature = lazy(() => import("../../pages/buyers/Feature"));
const Blog = lazy(() => import("../../pages/blog/Blog"));
const Careers = lazy(() => import("../../pages/careers/Careers"));
const Terms = lazy(() => import("../../pages/terms/Terms"));
const Policy = lazy(() => import("../../pages/policy/Policy"));
const Faqs = lazy(() => import("../../pages/faqs/Faqs"));
const SellerPricing = lazy(() => import("../../pages/sellerPricing/SellerPricing"));
const Program = lazy(() => import("../../pages/program/Program"));
const OnBoarding = lazy(() => import("../../pages/OnBoarding"));
export default function AppRouter() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Feature />} />
          <Route path="forBuyersFeature" element={<Buyers />} />
          <Route path="bizScottPrivateClient" element={<Private />} />
          <Route path="toolsResource" element={<Resource />} />
          <Route path="brokers" element={<Brokers />} />
          <Route path="pricing" element={<Price />} />
          <Route path="sellers" element={<Seller />} />
          <Route path="partners" element={<Partners />} />
          <Route path="blog" element={<Blog />} />
          <Route path="careers" element={<Careers />} />
          <Route path="terms" element={<Terms />} />
          <Route path="policy" element={<Policy />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="sellerPricing" element={<SellerPricing />} />
          <Route path="affiliateProgram" element={<Program />} />
          <Route path="/onBoarding" element={<OnBoarding />} />
          <Route path="feature">
          <Route index element={<FeatureProductList />} />
          <Route path=":productId" element={<FeatureDetails />} />
          </Route>
        </Route>
        <Route path="/login" element={<AuthLayout />}>
         <Route index element={<Login />} />
         <Route path="/signUp" element={<SignUpPage />} />
        </Route>
        <Route path="/partnerWithBizScout" element={<FormLayout />}>
          <Route index element={<PartnerForm />} />
        </Route>
      </Routes>

    </Suspense>
  );
}