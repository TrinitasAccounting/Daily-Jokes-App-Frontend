

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import HomePage from './Components/HomePage';
import Navbar from "./Components/Navbar";
import AboutPage from './Components/AboutPage';




function App() {
  return (

    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>


    </Router>


  );
}

export default App;
