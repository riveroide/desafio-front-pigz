import "./App.css";
import BusinessForm from "./components/BusinessForm";
import Cards from "./components/Cards";
import CardsWithButtons from "./components/CardsWithButtons";
import Contact from "./components/Contact";
import FeaturesCardsSteps from "./components/FeaturesCardsSteps";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PigzPigz from "./components/PigzPigz";
import SubscriptionPrice from "./components/SubscriptionPrice";
import SupportTitles from "./components/SupportTitles";

function App() {
  return (
    <div className="md:w-[30%]">
      <div>
        <Header />
      </div>
      <div className="mt-28 text-[#333333]">
        <BusinessForm />
      </div>
      <div>
        <PigzPigz />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <SubscriptionPrice />
      </div>
      <div>
        <FeaturesCardsSteps />
      </div>
      <div>
        <SupportTitles/>
      </div>
      <div>
        <CardsWithButtons/>
      </div>
      <div>
        <Contact/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
