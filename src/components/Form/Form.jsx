import React from "react";
import validator from "./validation.js"
//Hooks
import { useState } from "react";
//css
import styles from "./Form.module.css";

const Form = (props) => {
  const {login} = props
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setErrors(validator({ ...userData, [e.target.name]: e.target.value }));
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }; 

  const handleSubmit = (e) =>{
    e.preventDefault();
    login(userData);
  }

  return (
    <div className={styles.container_form}>
      <form className={styles.form_login} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <label>Email</label>
          <input
            type="text"
            value={userData.email}
            name="email"
            onChange={handleChange}
          />
          {errors.e1 ? (
            <p>{errors.e1}</p>
          ) : errors.e2 ? (
            <p>{errors.e2}</p>
          ) : (
            <p>{errors.e3}</p>
          )}

        </div>

        <div className={styles.inputs}>
          <label>Password</label>
          <input
            type="text"
            value={userData.password}
            name="password"
            onChange={handleChange}
          />
          {errors.p1 ? (
            <p>{errors.p1}</p>
          ) : errors.p2 ? (
            <p>{errors.p2}</p>
          ) : (
            <p>{errors.p3}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
