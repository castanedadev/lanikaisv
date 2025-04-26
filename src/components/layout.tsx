import React from "react";
import { Link } from "gatsby";
import { HeadFC, PageProps } from "gatsby";
import { container, navLinkText, navLinkItem, heading, navLinks } from "./layout.module.css";

const Layout: React.FC<{ pageTitle?: string; children?: React.ReactNode }> = ({ pageTitle, children }) => (
    <div className={container}>
        <header>
            <h1 className={heading}>{pageTitle}</h1>
            <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
        </header>
        <main>{children}</main>
        <footer>
            <p>&copy; {new Date().getFullYear()} LanikaiSV</p>
        </footer>
    </div>
);
export default Layout;
