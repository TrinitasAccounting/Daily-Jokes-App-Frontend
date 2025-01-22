import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import AboutPage from './Components/AboutPage';
import JokesPage from './Components/Jokes Page/JokesPage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/jokes',
        element: <JokesPage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
    ]
  }
])



const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);




reportWebVitals();
