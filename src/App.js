import "./App.css";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Head from "./components/head/Head.jsx";
import Nav from "./components/nav/Nav.jsx";

function App() {
  return (
    <>
      <Head />
      <Nav />
      <About />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
