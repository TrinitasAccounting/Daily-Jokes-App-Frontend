import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import JokesPage from './Components/Jokes Page/JokesPage';
import UserSignUpPage from './Components/UserSignUpPage/UserSignUpPage';
import DonationsMainPage from './Components/DonationsPage/DonationsMainPage';
import TextLegalConsentForm from './Components/TextingLegal/TextLegalConsentForm';



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
      {
        path: '/signup',
        element: <UserSignUpPage />
      },
      {
        path: '/donations',
        element: <DonationsMainPage />
      },
      {
        path: '/text/legal',
        element: <TextLegalConsentForm />
      },
    ]
  }
])



const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);




reportWebVitals();
