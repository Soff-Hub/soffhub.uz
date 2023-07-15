import "swiper/css";
import "swiper/css/navigation";
import '../public/assets/css/style.css';
import { useEffect } from "react";

import { I18nextProvider } from 'react-i18next';
import i18n from '../util/i18n'; // Import the i18n configuration


function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const WOW = require('wowjs');
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();
    }, []);
    return (
    <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
    </I18nextProvider>)
}

export default MyApp


