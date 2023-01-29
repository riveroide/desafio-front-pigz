import "./App.css";
import BusinessForm from "./components/BusinessForm";
import Cards from "./components/Cards";
import Header from "./components/Header";
import PigzPigz from "./components/PigzPigz";
import SubscriptionPrice from "./components/SubscriptionPrice";

function App() {
  return (
    <div className="xl: w-[414px]">
      <div>
        <Header/>
      </div>
      <div className="mt-28 text-[#333333]">
        <BusinessForm/>
      </div>
      <div>
      <PigzPigz/>
      </div>
      <div>
        <Cards/>
      </div>
      <div>
        <SubscriptionPrice/>
      </div>    
    </div>
  )
}

export default App;
