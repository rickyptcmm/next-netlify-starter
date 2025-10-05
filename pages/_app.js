// pages/_app.js
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return <Component {...pageProps} />;
}
