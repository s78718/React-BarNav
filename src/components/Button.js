import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <Link to="sign up">
      <button className="btnup">Sign up</button>
      <button className="btnin">Sign in</button>
    </Link>
  );
}
