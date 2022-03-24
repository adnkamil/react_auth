import React from "react";
import { Link } from "react-router-dom";
import navbarStyle from "./navbarStyle.js";

const { Ul } = navbarStyle()

export default function Nav() {
  return (
      <Ul>
        <div className="left">
          <Link to='/' className="logo">TOKOPAEDI</Link>
        </div>
        <div className="right">
          <div className="nav-point">
            <Link to='/' className="item">Home</Link>
            <Link to='cart' className="item">Cart</Link>
          </div>
          <button><Link to='login' className="login">Login</Link></button>
        </div>
      </Ul>
  )
}
