import React from "react";
import { needAuth } from "../lib/Auth-provider";

const Navbar = (props) => {
  console.log(props.user);

  return (
    <div>
      {" "}
      <nav>
        <div className="nav-wrapper mrus-background">
          <a href="/" className="brand-logo">
            <img src="IronHack.png" alt="" />
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
            <li>
              <a href="/wishlist">Wishlist</a>
            </li>

            {props.user ? (
              <li>
                <a href="/user">Welcome {props.user.email}</a>
              </li>
            ) : (
              <div>
                {" "}
                <li>
                  <a href="/login">Login</a>
                </li>
                <li>
                  <a href="/signup">Signup</a>
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default needAuth(Navbar);
