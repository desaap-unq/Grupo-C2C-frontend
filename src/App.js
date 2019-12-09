import React from "react";
import "./App.css";
import { useAuth0 } from "./contexts/auth0-context";
import Auth0Header from "./components/Headers/Auth0Header";

function App() {
  // const {isLoading, user, loginWithRedirect, logout} = useAuth0();

  return (
    // <>
    // <Auth0Header />
    // <div className="App">
    //   {!isLoading && !user && (
    //     <>
          <h1> Clic Below! </h1>
    //       <button onClick={loginWithRedirect} >
    //         Login
    //       </button>
    //     </>
    //   )}
    //   {!isLoading && user && (
    //     <>
    //       <h1> You are Logged in! </h1>
    //       <p> hello {user.name} </p>

    //       {user.picture && <img src={user.picture} alt="My Avatar" />}
    //       <hr />

    //       <button
    //         onClick={() => logout({returnTo: window.location.origin})}
    //       >
    //         LogOut
    //       </button>  
    //     </>
    //   )}
    // </div>
    // </>
  );
}

export default App;