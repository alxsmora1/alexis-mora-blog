import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";

export default props => (
  <nav className="navigation">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://alxsmora1.github.io/portfolio/#/"
    >
      Portfolio
    </a>
    <Link to="/contact">Contact</Link>
    <ThemeChanger />
  </nav>
);
