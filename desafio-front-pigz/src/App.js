import "./App.css";
import BusinessForm from "./components/BusinessForm";
import Header from "./components/Header";
import PigzPigz from "./components/PigzPigz";

function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className="relative">
        <BusinessForm/>
      </div>
      <div className="absolute">
      <PigzPigz/>
      </div>
      
    </div>
  )
}

export default App;
