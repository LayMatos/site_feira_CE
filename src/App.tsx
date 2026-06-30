import Hero from "./components/hero";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans antialiased">
      <Hero />
      <About />
      <Speakers />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
