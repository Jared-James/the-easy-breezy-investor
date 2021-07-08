import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import { Button } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import * as styles from "./header.module.css";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to="/">{siteTitle}</Link>
        <div className={styles.about}>
          <ul className={styles.list}>
            <li>About</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
         
        </div>
      </div>
    </div>
  </div>
);

export default Header;
