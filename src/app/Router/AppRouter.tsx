import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../../components/common/ScrollToTop";
import MainLayout from "../../components/layout/MainLayout";
import AuthLayout from "../../components/layout/AuthLayout";

const Buyers = lazy(() => import("../../pages/buyers/Buyers"));
const Private = lazy(() => import("../../pages/buyers/Private"));
const Resource = lazy(() => import("../../pages/resource/Resource"));
const Brokers = lazy(() => import("../../pages/brokers/Brokers"));
const Price = lazy(() => import("../../pages/pricing/Price"));
const Seller = lazy(() => import("../../pages/sellers/Sellers"));
const Partners = lazy(() => import("../../pages/partners/Partners"));
const Login = lazy(() => import("../../pages/auth/Login"));
const Feature = lazy(() => import("../../pages/buyers/Feature"));
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
        </Route>
        <Route path="/login" element={<AuthLayout />}>
         <Route path="/login" element={<Login />} />
        </Route>
      </Routes>

    </Suspense>
  );
}