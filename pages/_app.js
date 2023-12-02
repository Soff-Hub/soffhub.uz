import "swiper/css";
import "swiper/css/navigation";
import "../public/assets/css/style.css";
import { useEffect } from "react";

import { I18nextProvider } from "react-i18next";
import i18n from "../util/i18n"; // Import the i18n configuration

import store from "../store/store";
import { Provider } from "react-redux";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* <link rel="icon" href="../public/favicon.ico" /> */}

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="author" content="nouthemes" />
        <meta
          name="keywords"
          content="Soff hub, Soffhub, IT companiya, soff, IT company"
        />
        <meta
          name="description"
          content="IT company that prepares orders in a high-quality and fast manner"
        />
      </Head>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Component {...pageProps} />
        </I18nextProvider>
      </Provider>
    </>
  );
}

export default MyApp;
