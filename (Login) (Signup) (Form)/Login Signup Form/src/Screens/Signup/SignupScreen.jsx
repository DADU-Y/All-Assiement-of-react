import React from "react";
import styles from "./SignupScreen.module.css";

const Signup = ({switchtologin}) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.div1}>
        <h1 className={styles.heading1}>
          Welcome <br /> Back
        </h1>
        <p className={styles.para1}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </p>
      </div>

      <div className={styles.div2}>
        <form>
          <h1 className={styles.heading1}>Sign up</h1>
          <div className={styles.underline}></div>

          <input className={styles.input1} type="text" placeholder="Username" />
          <input className={styles.input2} type="email" placeholder="Email" />
          <input className={styles.input3} type="password" placeholder="Password" />

          <button className={styles.button1} onClick={switchtologin}>Sign up</button>

          <p className={styles.para1} onClick={switchtologin}>
            Already have an account? <a href="#">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
