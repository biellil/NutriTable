import { Header } from '../pages/components/Header/index';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="sticky-header">
        <Header />
      </div>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
