import "./App.css";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Head from "./components/head/Head.jsx";
import Nav from "./components/nav/Nav.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Head />
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
