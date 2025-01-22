

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Outlet, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";

import './App.css';
import HomePage from './Components/HomePage';
import Navbar from "./Components/Navbar";
import AboutPage from './Components/AboutPage';
import NavTest from "./Components/NavTest";





function App() {

  const [allJokes, setAllJokes] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  let x = 47;

  // Fetches to the backend API for all Joke routes__________________________________________

  // GET fetch for all Jokes
  useEffect(() => {
    fetch('https://app-dailyjokesapp-webapi-canada-dev-001.azurewebsites.net/api/jokes')
      .then(res => {
        if (res.ok) {
          res.json().then(data => setAllJokes(data))
        }
      })
  }, [])







  // Fetches to the backend API for all Users routes_________________________________________

  // GET fetch for all Users
  useEffect(() => {
    fetch('https://app-dailyjokesapp-webapi-canada-dev-001.azurewebsites.net/api/users')
      .then(res => {
        if (res.ok) {
          res.json().then(data => setAllUsers(data))
        }
      })
  }, [])




  return (
    <div>
      <Navbar />

      <Outlet context={{
        allJokes,
      }} />
    </div>



  );
}

export default App;
