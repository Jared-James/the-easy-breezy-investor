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
          </ul>
          <div className={styles.button}>
            <Button variant="outlined" color="primary">
              Contact <MailOutlineIcon className={styles.chaticon} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
