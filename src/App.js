import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { About, Contact, Experience, Hero, Navbar, Tech, Work } from "./components";

function App() {

  return (
    <BrowserRouter>
      <div className="App relative z-0 bg-[#eee]">
        <div className="relative w-full h-[100vh] ">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Work/>
        <Contact/>
      </div>
    </BrowserRouter>
  );
}

export default App;
