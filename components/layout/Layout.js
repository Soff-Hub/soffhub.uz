import React, { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import LoaderSoffHub from "../elements/loader-soffhub";

const Layout = ({ children }) => {
  const [openClass, setOpenClass] = useState("");

  const handleOpen = () => {
    document.body.classList.add("mobile-menu-active");
    setOpenClass("sidebar-visible");
  };

  const handleRemove = () => {
    if (openClass === "sidebar-visible") {
      setOpenClass("");
      document.body.classList.remove("mobile-menu-active");
    }
  };

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      setLoading(true);
    };

    const handleComplete = (url) => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <>
      { loading ? (
        <LoaderSoffHub />
      ) : (
        <>
          {openClass && (
            <div className="body-overlay-1" onClick={handleRemove} />
          )}

          <Header
            handleOpen={handleOpen}
            handleRemove={handleRemove}
            openClass={openClass}
          />

          <Sidebar openClass={openClass} />
          <main className="main">{children}</main>
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
};

export default Layout;
