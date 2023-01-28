import "./App.css";
import BusinessForm from "./components/BusinessForm";
import Cards from "./components/Cards";
import Header from "./components/Header";
import PigzPigz from "./components/PigzPigz";

function App() {
  return (
    <div className="xl: w-[414px]">
      <div>
        <Header/>
      </div>
      <div>
        <BusinessForm/>
      </div>
      <div>
      <PigzPigz/>
      </div>
      <div>
        <Cards/>
      </div>
      
    </div>
  )
}

export default App;
