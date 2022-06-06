import { Fragment, lazy, Suspense, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/layout/Main";
import MainAdmin from "./components/layoutAdmin/MainAdmin";
import MainShipper from "./components/layoutShipper/MainShipper";

//Admin
const ADMDashBoardPage = lazy(() => import("./pages-admin/ADMDashBoardPage"));
const ADMAccountPage = lazy(() => import("./pages-admin/ADMAccountPage"));
const ADMCategoryPage = lazy(() => import("./pages-admin/ADMCategoryPage"));
const ADMMyAccountPage = lazy(() => import("./pages-admin/ADMMyAccountPage"));
const ADMOrdersPage = lazy(() => import("./pages-admin/ADMOrdersPage"));
const ADMProductPage = lazy(() => import("./pages-admin/ADMProductPage"));
const ADMRewardPage = lazy(() => import("./pages-admin/ADMRewardPage"));
const ADMSupportPage = lazy(() => import("./pages-admin/ADMSupportPage"));

// User
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const AccountPage = lazy(() => import("./pages/AccountPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const CartPage = lazy(() => import("./pages/CartPage"));

//Shipper
const SOrdersPage = lazy(() => import("./pages-shipper/SOrdersPage"));

function handleRole(role) {
  let roleList = [];
  if (role) {
    role.forEach((role) => {
      roleList.push(role.id);
    });
  } else {
    return;
  }
  return roleList;
}

export default function AppRouter() {
  const token = localStorage.getItem("token");
  const role = JSON.parse(localStorage.getItem("role"));
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          handleRole(role)?.includes(1) ? (
            <MainAdmin></MainAdmin>
          ) : (
            <Navigate to="/" />
          )
        }
      >
        <Route
          path="/admin/"
          element={<ADMDashBoardPage></ADMDashBoardPage>}
        ></Route>
        <Route
          path="/admin/account"
          element={<ADMAccountPage></ADMAccountPage>}
        ></Route>
        <Route
          path="/admin/reward-points"
          element={<ADMRewardPage></ADMRewardPage>}
        ></Route>
        <Route
          path="/admin/product"
          element={<ADMProductPage></ADMProductPage>}
        ></Route>
        <Route
          path="/admin/category"
          element={<ADMCategoryPage></ADMCategoryPage>}
        ></Route>
        <Route
          path="/admin/orders"
          element={<ADMOrdersPage></ADMOrdersPage>}
        ></Route>
        <Route
          path="/admin/support"
          element={<ADMSupportPage></ADMSupportPage>}
        ></Route>
        <Route
          path="/admin/my-account"
          element={<ADMMyAccountPage></ADMMyAccountPage>}
        ></Route>
      </Route>
      <Route
        path="/"
        element={
          handleRole(role)?.includes(2) || !handleRole(role) ? (
            <Main></Main>
          ) : (
            <Navigate to="/shipper" />
          )
        }
      >
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/product"
          element={
            <ProductPage
              title="All Plant"
              desc="Your plants will arrive in happy, healthy condition. If not, we replace them for free under our 30-Day Guarantee."
            ></ProductPage>
          }
        ></Route>
        <Route
          path="/other-product"
          element={
            <ProductPage
              title="Other Product"
              desc="Shop our in-stock favorites, ready to ship and brighten up your home."
            ></ProductPage>
          }
        ></Route>
        <Route
          path="/new-release"
          element={
            <ProductPage
              title="New Release"
              desc="New plants, new gifts, new sill, new you."
            ></ProductPage>
          }
        ></Route>
        <Route
          path="/account"
          element={
            token !== null ? (
              <AccountPage></AccountPage>
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
        <Route
          path="/product/:productId"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="/search" element={<SearchPage></SearchPage>}></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="/about-us" element={<AboutUsPage></AboutUsPage>}></Route>
        <Route
          path="/cart"
          element={
            token !== null ? <CartPage></CartPage> : <Navigate to="/login" />
          }
        ></Route>
      </Route>
      <Route
        path="/shipper"
        element={
          handleRole(role)?.includes(3) ? (
            <MainShipper></MainShipper>
          ) : (
            <Navigate to="/admin" />
          )
        }
      >
        <Route
          path="shipper/orders"
          element={<SOrdersPage></SOrdersPage>}
        ></Route>
        <Route
          path="shipper/account"
          element={<ADMMyAccountPage></ADMMyAccountPage>}
        ></Route>
      </Route>
    </Routes>
  );
}
