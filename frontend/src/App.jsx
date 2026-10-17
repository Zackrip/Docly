import React, { useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import LandingPage from "./components/landing/LandingPage";
import Marquee from "./components/landing/Marquee";
import About from "./components/landing/About";
import Eyes from "./components/landing/Eyes";

import LocomotiveScroll from "locomotive-scroll";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChatPage from "./pages/chat/ChatPage";

import LoginPage from "./pages/authentication/LoginPage";
import RegisterPage from "./pages/authentication/RegisterPage";

import DashboardLayout from "./components/layout/DashboardLayout";

import ProtectedRoutes from "./protectRoutes/protectedRoutes";
import PublicRoutes from "./protectRoutes/publicroutes";

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <div className="w-full text-white">
              <Navbar />
              <LandingPage />
              <Marquee />
              <About />
              <Eyes />
              <Footer />
            </div>
          }
        />

        {/* Login */}
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <LoginPage />
            </PublicRoutes>
          }
        />

        {/* Register */}
        <Route
          path="/register"
          element={
            <PublicRoutes>
              <RegisterPage />
            </PublicRoutes>
          }
        />

        {/* Protected Dashboard */}
        <Route
          element={
            <ProtectedRoutes>
              <DashboardLayout />
            </ProtectedRoutes>
          }
        >
          <Route path="/ask-docly" element={<ChatPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
