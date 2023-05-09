import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

import Header from "~/components/Header";
import "~/styles/globals.css";

const font = Poppins({
  weight: "200",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={font.className}>
      <Component {...pageProps} />
      <Header />
    </div>
  );
}
