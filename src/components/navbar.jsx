import React from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "Login", link: "/login" },
  { name: "Checkin", link: "/checkin" },
  { name: "Home", link: "/" },
];
const NavBar = () => {
  return (
    <header>
      <div id="navbar">
        {links?.map((link) => {
          return (
            <span className="types" key={link.link}>
              <Link to={link.link}>{link.name}</Link>
            </span>
          );
        })}
      </div>
    </header>
  );
};

export default NavBar;
