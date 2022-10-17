import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <div className="layout-left-bar"></div>
      {/* <Footer /> */}

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
