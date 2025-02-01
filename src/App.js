

import moment from "moment";

import { Outlet, } from "react-router-dom";
import { useEffect, useState } from "react";

import './App.css';
import Navbar from "./Components/Navbar";






function App() {


  const [allJokes, setAllJokes] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [openAddNewJokePopUp, setOpenAddNewJokePopUp] = useState(false)
  const [openViewPunchLinePopUp, setOpenViewPunchLinePopUp] = useState(false);
  const [openEditJokePopUp, setOpenEditJokePopUp] = useState(false);
  const [openDeleteJokeConfirmationPopUp, setOpenDeleteJokeConfirmationPopUp] = useState(false);
  let currentDate = moment().format("MM-DD-YYYY")



  // Fetches to the backend API for all Joke routes__________________________________________

  // GET fetch for all Jokes
  //The reason I have a setTimeout on this load time is, we are using a free developer plan server. The server will sleep every 20 minutes without activity....
  //so it needs 5 seconds to wake up before we call our fetches. I can upgrade the Azure App Service Plan but I am currently broke so solving this fetch issue with code instead
  useEffect(() => {
    const fetchData = async () => {
      fetch('https://app-dailyjokesapp-webapi-canada-dev-001.azurewebsites.net/api/jokes')
        .then(res => {
          if (res.ok) {
            res.json().then(data => setAllJokes(data))
          }
          else {
            alert("Error loading, please refresh the page")
          }
        })
    }

    const timer = setTimeout(() => {
      fetchData();
    }, 5000)

    return () => clearTimeout(timer);

  }, [])


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




  // Fetches to the backend API for all Users routes______________________________________________________________

  // GET fetch for all Users
  useEffect(() => {
    const fetchUsers = async () => {
      fetch('https://app-dailyjokesapp-webapi-canada-dev-001.azurewebsites.net/api/users')
        .then(res => {
          if (res.ok) {
            res.json().then(data => setAllUsers(data))
          }
        })
    }

    const timer = setTimeout(() => {
      fetchUsers();
    }, 5000);

    return () => clearTimeout(timer);
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
        currentDate,
        openEditJokePopUp,
        setOpenEditJokePopUp,
        openDeleteJokeConfirmationPopUp,
        setOpenDeleteJokeConfirmationPopUp

      }} />
    </div>



  );
}

export default App;
