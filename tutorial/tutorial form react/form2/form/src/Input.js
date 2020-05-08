import React from 'react';
import "./Input.css";


const placeHolderMapper = {
  username: "Enter username",
  email:"Enter email",
  password: "Enter password",
  password2: "Enter password again",
};
const typeMapper = {
  username: "text",
  email: "email",
};

const Input = (props)=> {
  return (
    <div className="form-control">
      <label for={props.href}>{props.children}</label>
      <input
        type={typeMapper[props.href]?typeMapper[props.href]:"password"}
        id={props.href}
        placeholder={placeHolderMapper[props.href]}
      />
      <small>Error message</small>
    </div>
  );  
}

export default Input;