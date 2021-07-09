import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import * as styles from "../pageStyles/legal.module.css";

const Legal = () => (
  <Layout>
    <SEO title="legal" />
    <div className={styles.container}>
      <div className={styles.container__title}>
        <h1>Legal</h1>
      </div>
      <div className={styles.container__about}>
        <h1>Legal stuff</h1>
        <p>Will go here</p>
      </div>
    </div>
  </Layout>
);

export default Legal;
