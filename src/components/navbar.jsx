import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const links = [
  { name: "Login", link: "/login" },
  { name: "Checkin", link: "/checkin" },
  { name: "Home", link: "/" },
];
const NavBar = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };
  return (
    <header>
      <h1>
        <Link to="/">Logo</Link>
      </h1>
      {state?.logged ? (
        <div className="user">
          <span className="username">{state?.name}</span>
          <button className="btn-logout" onClick={onLogout}>
            Cerrar sesión
          </button>
        </div>
      ) : (
        <div id="navbar">
          {links?.map((link) => {
            return (
              <span className="types" key={link.link}>
                <Link to={link.link}>{link.name}</Link>
              </span>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default NavBar;
