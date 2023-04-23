import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { Poiret_One } from "next/font/google";

const font = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={font.className}>
      <Component {...pageProps} />
    </div>
  );
}
