import './App.css';
import React, { Component } from 'react';
import './styles.css';
import UserAuthPage from "./pages/userAuthPage";
import MainPage from './pages/mainPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route index element={<UserAuthPage />}>
          </Route>
          <Route path='/*' element={<MainPage />}>
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
