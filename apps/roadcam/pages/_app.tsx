import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../styles/globals.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RoadCam</title>
      </Head>
      <div className="app">
        {/* <header className="flex">
          <NxLogo width="75" height="50" />
          <h1>Welcome to roadcam!</h1>
        </header> */}
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
