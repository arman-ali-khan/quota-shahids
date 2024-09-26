import ContextProvider from "@/Context/ContextProvider";
import "@/styles/globals.css";
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';


export default function App({ Component, pageProps }) {
  return   <ContextProvider> <ProgressBar
  height="4px"
  color="red"
  options={{ showSpinner: false }}
  shallowRouting
/><Component {...pageProps} /></ContextProvider>;
}
