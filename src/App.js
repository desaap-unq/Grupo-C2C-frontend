import React from 'react';
import './App.css';
import Home from './components/Home';
// BROWSER=chrome npm start

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <Home/>
      </div>
    );
  }
}

export default App;