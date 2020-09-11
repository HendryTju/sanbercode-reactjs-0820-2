// Thanks prasetyo507
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import "../App.css";

const Nav = () => {
  const [themes] = useContext(ThemeContext);
  return (
    <>
      <header>
        <div className="navbar-top">
          <nav className={themes ? "light" : "dark"}>
            <ul>
              <li>
                <Link className={themes ? "light" : "dark"} to="/">
                  Tugas 9
                </Link>
              </li>
              <li>
                <Link className={themes ? "light" : "dark"} to="/tugas10">
                  tugas 10
                </Link>
              </li>
              <li>
                <Link className={themes ? "light" : "dark"} to="/tugas11">
                  tugas 11
                </Link>
              </li>
              <li>
                <Link className={themes ? "light" : "dark"} to="/tugas12">
                  tugas 12
                </Link>
              </li>
              <li>
                <Link className={themes ? "light" : "dark"} to="/tugas13">
                  tugas 13
                </Link>
              </li>
              <li>
                <Link className={themes ? "light" : "dark"} to="/tugas14">
                  tugas 14
                </Link>
              </li>
              <li>
                <Link className={themes ? "light" : "dark"} to="/tugas15">
                  tugas 15
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
