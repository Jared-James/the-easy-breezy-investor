import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import * as styles from '../pageStyles/privacy.module.css'

const Privacy = () => (
  <Layout>
    <SEO title="Privacy" />
    <div className={styles.container}>
      <div className={styles.container__title}>
        <h1>Privacy!</h1>
      </div>
      <div className={styles.container__about}>
        <h1>Privacy stuff</h1>
        <p>Will go here</p>
      </div>
    </div>
  </Layout>
);

export default Privacy;