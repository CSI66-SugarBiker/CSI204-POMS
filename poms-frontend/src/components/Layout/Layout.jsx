// src/components/Layout/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Navbar (Fixed on the left) */}
      <div className="w-[270px] fixed h-screen bg-gray-800 text-white">
        <Navbar />
      </div>

      {/* Main Content (Offset by Navbar width) */}
      <div className="flex flex-col flex-grow ml-[270px]">
        {/* Header */}
        <header className="bg-green-600 p-4 text-white">
          <Header />
        </header>

        {/* Main Content */}
        <main className="flex-grow p-4 bg-gray-100">
          <Outlet /> {/* This will render the current page */}
        </main>

        {/* Footer */}
        <footer className="bg-orange-400 p-4 text-white">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layout;