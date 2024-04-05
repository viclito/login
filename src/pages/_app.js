import "@/styles/globals.css";
import Navbar from "../../components/Navbar/Navbar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {

  const router = useRouter();
  
  const pagesWithNavbar = ['/task', '/project'];

  const showNavbar = pagesWithNavbar.includes(router.pathname);

  return<>
  {showNavbar && <Navbar/>} 
  <Component {...pageProps} />
  </> ;
}
