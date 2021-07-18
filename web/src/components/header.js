import { Link } from "gatsby";
import React from "react";
import * as styles from "./header.module.css";

const Header = () => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to="/">The EasyBreezy Investor</Link>
        <div className={styles.about}>
          <ul className={styles.list}>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              {/* <Link to="/faq">FAQ</Link> */}
            </li>
            <li>
              {/* <Link to="/contact">Contact</Link> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
