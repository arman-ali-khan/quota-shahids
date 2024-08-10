import "@/styles/globals.css";
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';


export default function App({ Component, pageProps }) {
  return   <> <ProgressBar
  height="4px"
  color="red"
  options={{ showSpinner: false }}
  shallowRouting
/><Component {...pageProps} /></>;
}
