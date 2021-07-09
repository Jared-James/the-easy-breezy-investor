import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import * as styles from "../pageStyles/about.module.css";

const About = () => (
  <Layout>
    <SEO title="about" />
    <div className={styles.container}>
      <div className={styles.container__title}><h1>Welcome!</h1></div>
      <div className={styles.container__about}>
        <p>My name is Brie</p>
        <p>lorem ipsum dolor sit amet</p>
        <p>
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet lorem ipsum dolor sit amet
        </p>
      </div>
    </div>
  </Layout>
);

export default About;
