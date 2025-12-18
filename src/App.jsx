import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsappFloat.jsx";
import ScrollTop from "./components/ScrollTop.jsx";
import InstagramFloat from "./components/InstagramFloat.jsx";

function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Header />
      <Services />
      <Footer />
      <ScrollTop/>
      <InstagramFloat />
      <WhatsAppFloat />
    </div>
  );
}


export const PHONE_NUMBER = "573145690393";
export default App;
