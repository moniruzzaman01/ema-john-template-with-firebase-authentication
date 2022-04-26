import "./SignUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spineer from "../spineer/Spineer";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  console.log("form-data", email, password, confirmPassword);
  const handleSignupForm = (event) => {
    event.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  return (
    <div className="sign-up">
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignupForm}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={(e) => setEmail(e.target.value)}
              type="email"
              name=""
              id="1"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={(e) => setPassword(e.target.value)}
              type="password"
              name=""
              id="2"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              onBlur={(e) => setConfirmPassword(e.target.value)}
              type="password"
              name=""
              id="3"
              required
            />
          </div>
          {loading ? <Spineer /> : ""}
          <input className="form-submit" type="submit" value="SignUp" />
        </form>
        <p style={{ textAlign: "center" }}>
          Already have account?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
        <div className="separator">
          <div></div>
          <span>or</span>
          <div></div>
        </div>
        <button onClick={handleGoogleSignIn} className="google-signin">
          <FontAwesomeIcon icon={faCoffee} />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
