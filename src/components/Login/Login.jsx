import { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";

// eslint-disable-next-line react/prop-types
const Login = ({ setShowLogin }) => {
  // Login / signup state
  const [curState, setCurState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{curState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {curState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{curState === "Sign Up" ? "create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing , i agree to terms and conditions </p>
        </div>
        {curState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account{" "}
            <span onClick={() => setCurState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
