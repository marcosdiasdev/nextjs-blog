import "../styles/global.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  console.log("Render");
  return <Component {...pageProps} />;
}
