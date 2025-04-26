import React from "react";
import { Link } from "gatsby";
import { HeadFC, PageProps } from "gatsby";

const Layout: React.FC<{ pageTitle?: string; children?: React.ReactNode }> = ({ pageTitle, children }) => (
    <div style={{ padding: "20px" }}>
        <header>
            <h1>{pageTitle}</h1>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </nav>
        </header>
        <main>{children}</main>
        <footer>
            <p>&copy; {new Date().getFullYear()} LanikaiSV</p>
        </footer>
    </div>
);
export default Layout;
