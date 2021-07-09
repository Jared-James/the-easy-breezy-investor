import React from "react";
import Header from "./header";
import { Link } from "gatsby";
import Scroll from "./scroll";
import "../styles/layout.css";
import * as styles from "./layout.module.css";
import { Icon, InlineIcon } from "@iconify/react";
import githubIcon from "@iconify-icons/icon-park/github";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => {
  const handleClick = (event) => {
    const anchor = document.querySelector("#back-to-top-anchor");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <>
      <Header
        siteTitle={siteTitle}
        onHideNav={onHideNav}
        onShowNav={onShowNav}
        showNav={showNav}
        id="back-to-top-anchor"
      />
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <ul>
            <li>
              <Scroll showBelow={250} />
            </li>
            <li className={styles.line}>
              <span>|</span>
            </li>
            <li className={styles.siteInfo}>
              &copy; {new Date().getFullYear()}, The EasyBreezy Investor{" "}
            </li>
            <li className={styles.line}>
              <span>|</span>
            </li>
            <li className={styles.footer__list}>
              <Link to="/legal">Legal Stuff</Link>
            </li>
            <li className={styles.line}>
              <span>|</span>
            </li>
            <li className={styles.footer__list}>
              <Link to="/privacy">Privacy policy</Link>
            </li>
            <li className={styles.line}>
              <span>|</span>
            </li>
            <li>
              Made By:{" "}
              <a href="https://github.com/Jared-James" target="_blank">
                <Icon icon={githubIcon} width="2rem" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Layout;
