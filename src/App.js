import React from 'react';
import './App.css';
import AppointmentList from "./components/AppointmentList.js"
import NavBar from "./navbar/NavBar"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <AppointmentList />
      </div>
    )
  }
}

export default App;
