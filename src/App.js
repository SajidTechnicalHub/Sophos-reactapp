
import './App.css';
import Navigation from './components/Home/Navigation';
import Home from './components/Dashboard/Home/Home';
import HomePage from './components/Dashboard/Home/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container-flude">

      {/* <Home /> */}
      <Navigation />
    
      
    </div>
  );
}

export default App;
