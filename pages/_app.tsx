// pages/_app.tsx
import '../styles/globals.css'; // Make sure this is at the top

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
