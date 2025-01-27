

import { BrowserRouter, Routes, Route } from "react-router-dom";
import moment from "moment";

import { Outlet, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";

import './App.css';
// import HomePage from './Components/HomePage';
import Navbar from "./Components/Navbar";
// import AboutPage from './Components/AboutPage';
// import NavTest from "./Components/NavTest";





function App() {


  const [allJokes, setAllJokes] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [openAddNewJokePopUp, setOpenAddNewJokePopUp] = useState(false)
  const [openViewPunchLinePopUp, setOpenViewPunchLinePopUp] = useState(false);
  let currentDate = moment().format("MM-DD-YYYY")

  let x = 47;

  // Fetches to the backend API for all Joke routes__________________________________________

  // GET fetch for all Jokes
  useEffect(() => {
    fetch('https://app-dailyjokesapp-webapi-canada-dev-001.azurewebsites.net/api/jokes')
      .then(res => {
        if (res.ok) {
          res.json().then(data => setAllJokes(data))
        }
        else {
          alert("Error loading, please refresh the page")
        }
      })
  }, [])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://app-dailyjokesapp-webapi-canada-dev-001.azurewebsites.net/api/jokes');
  //       if (!response.ok) {
  //         throw new Error('Network response was not Ok, please refresh the page');
  //       }
  //       const jokeData = await response.json();
  //       setAllJokes(jokeData)
  //     }
  //     catch (err) {
  //       setError(err)
  //     }
  //   }
  // }, [])

  // POST fetch for jokes (When I have authentication turned off, I have this ability hidden on the frontend)
  function addNewJoke(newJoke) {
    fetch('https://app-dailyjokesapp-webapi-canada-dev-001.azurewebsites.net/api/jokes', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newJoke)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(newJokeData => {
            setAllJokes([...allJokes, newJokeData])
          })
        }
        else if (res.status === 400) {
          res.json().then(errorData => alert(`Error: ${errorData.error}`))
        }
        else if (res.status === 401) {
          res.json().then(errorData => alert(`Error: ${errorData.error}`))
        }
        else {
          res.json().then(() => alert("Error: Something went wrong"))
        }
      })
  }

  // DELETE fetch to the backend (will have turned off until authentication development is completed)
  function deleteJoke(id) {
    fetch(`https://app-dailyjokesapp-webapi-canada-dev-001.azurewebsites.net/api/jokes/${id}`, {
      method: "DELETE"
    })
      .then(res => {
        if (res.ok) {
          setAllJokes(jokes => jokes.filter(joke => {
            return joke.jokeId !== id
          }))
        }
        else if (res.status === 400) {
          res.json().then(errorData => alert(`Error: ${errorData.error}`))
        }
      })
  }


  // PUT fetch to update a joke on the backend (server side)
  function updateJokePut(updatedJokeInfo) {
    fetch(`https://app-dailyjokesapp-webapi-canada-dev-001.azurewebsites.net/api/jokes/${updatedJokeInfo.jokeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedJokeInfo)
    })

    handleUpdateOfJokesOnFrontEnd(updatedJokeInfo)

  }

  // Handling the updating of jokes on the frontend (client side)
  // So that the PUT fetch will rerender to the frontend correctly so the user will see the like value update before refreshing
  function handleUpdateOfJokesOnFrontEnd(updatedJoke) {
    const updatedJokesList = allJokes.map(joke => {
      if (joke.jokeId === updatedJoke.jokeId) {
        return updatedJoke
      }
      else {
        return joke
      }
    })
    setAllJokes(updatedJokesList);
  }







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



  // POST fetch for new Users
  function addNewUser(newUser) {
    fetch('https://app-dailyjokesapp-webapi-canada-dev-001.azurewebsites.net/api/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(newUserData => {
            setAllUsers([...allUsers, newUserData])
            alert('Successfully subscribed, you will receive a text confirming your phone number')
          })
        }
        else if (res.status === 400) {
          res.json().then(errorData => alert(`Error: ${errorData.error}`))
        }
        else if (res.status === 401) {
          res.json().then(errorData => alert(`Error: ${errorData.error}`))
        }
        else {
          res.json().then(() => alert("Error: Something went wrong"))
        }
      })
  }








  return (
    <div>
      <Navbar />

      <Outlet context={{
        allJokes,
        openAddNewJokePopUp,
        setOpenAddNewJokePopUp,
        addNewJoke,
        deleteJoke,
        updateJokePut,
        openViewPunchLinePopUp,
        setOpenViewPunchLinePopUp,
        allUsers,
        addNewUser,
        currentDate
      }} />
    </div>



  );
}

export default App;
