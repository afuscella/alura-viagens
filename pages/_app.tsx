/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { Head } from '@/components/commons/Head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}
