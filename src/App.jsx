import "./App.css";
import Hero from "./components/Heros/Hero";
import Navbar from "./components/Navbars/Navbar";
import New from "./components/New/New";
import upArrow from './assets/Vector.png'
import Traditionl from "./components/traditional/Traditionl";
import Aksiya from "./components/aksiya-banner/Aksiya";
import Deserti from "./components/desert/Deserti";
import Bento from "./components/bento/Bento";
import Zefir from "./components/zefir/Zefir";
import Footer from "./components/footer/Footer";
function App() {
 
  return (
    <>
    <header>
      <div className="header-container">
        <Navbar />
        <Hero />
      </div>
      </header>
      <main className="main">
        <div className="top">
         <img src={upArrow} alt="arrow" className="toparrow" />
         <p className="main-p">Наверх</p>
        </div>
        <New />
        <Traditionl />
        <Aksiya />
        <Deserti />
        <New />
        <Bento />
        <New />
        <New />
        <Zefir />
        <Footer />
      </main>
    </>
  );
}

export default App;
