import React from 'react';
import './App.css';
import Home from './components/Home';
import ViandasNavBar from "./components/Navbars/ViandasNavBar";

class App extends React.Component {
  render() {
    return (
      <>
        <ViandasNavBar  history={this.props.history} />
        <div className="App">
         <Home/>
        </div>
      </>
    );
  }
}

export default App;