// import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <NavBar />
        <Component {...pageProps} />
        <div className="layout-left-bar"></div>
        {/* <Footer /> */}
      </SessionProvider>

      <style jsx>{`
        .layout-left-bar {
          display: block;
          width: 25px;
          height: 100vh;
          background: #2b2b2b;
          position: fixed;
          left: 0;
          top: 0;
        }
      `}</style>
    </>
  );
}

export default MyApp;
