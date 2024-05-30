import '../App.css';
import React, { Component } from 'react';
import '../styles.css';
import UserAuthForm from "../components/userAuthForm";

class UserAuthPage extends Component {
  render() {
    return (
      <div className="App">
        <div className="Appbar">
          <h1>Frontend Task - 2</h1>
        </div>
        <div className='Description'>
          <h2>Take a look at some delicious recipes!</h2>
        </div>
        <UserAuthForm />
      </div>
    );
  };
}

export default UserAuthPage;