import React from 'react';
import styles from './LoginScreen.module.css';

const LoginScreen = ({switchtosignup}) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.div1}>
        <h1 className={styles.heading1}>Welcome!</h1>
        <p className={styles.para1}>Create your account for free</p>
        <button className={styles.button1}>Login</button>
      </div>

      <div className={styles.div2}>
        <form>
          <h1 className={styles.heading1}>Login</h1>
          <p className={styles.para1}>
            Username / Email Address <span>*</span>
          </p>
          <input
            className={styles.input1}
            type="text"
            placeholder="Enter your Username/Email Address"
          />

          <p className={styles.para2}>
            Password <span>*</span>
          </p>
          <input
            className={styles.input2}
            type="password"
            placeholder="Enter your Password"
          />

          <button type="submit" onClick={switchtosignup} className={styles.loginButton}>
            Login
          </button>

          <p onClick={switchtosignup} className={styles.para3}>Forgot Password?</p>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;