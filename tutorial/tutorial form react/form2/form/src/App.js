import React from 'react';
import './App.css';
import Input from "./Input";

function App() {
  return (
    <div className="container">
      <form id="form" className="form">
        <h2>Register with us</h2>
        <Input href={"username"} >Username</Input>
        <Input href={"email"} >Email</Input>
        <Input href={"password"} >Password</Input>
        <Input href={"password2"} >Confirm Password</Input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
