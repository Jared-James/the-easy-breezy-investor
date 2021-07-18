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
        <p>Welcome, I’m Brie.</p>
        <p>I am a finance and marketing student that will be working as a Financial Consultant next year at Ernst & Young</p>
        <p>We are tested on money skills every single day, yet we were never taught these skills in school, nor do we really socialise about it. </p>
        <p>I have started The Easy Breezy Investor to share financial information I have found helpful based on personal experiences.  </p>
        <p>Your finances will always be part of your life, so why not learn a little about it. </p>
        <p>It helped me and I hope it can help you too. </p>
        <p>And just as Benjamin Franklin said, “an investment in knowledge pays the best interest”.</p>
      </div>
    </div>
  </Layout>
);

export default About;
