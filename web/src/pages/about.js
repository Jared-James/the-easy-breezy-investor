import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import * as styles from "../pageStyles/about.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { FaLinkedin } from "react-icons/fa";

const About = () => (
  <Layout>
    <SEO title="about" />
    <div className={styles.container}>
      <h1>Welcome, I’m Brie.</h1>
      <StaticImage src="../images/woman.png" width={500} />
      <div className={styles.container__about}>
        <p>
          I am a finance and marketing student that will be working as a
          Financial Consultant next year at Ernst & Young.
        </p>
        <p>
          We are tested on money skills every single day, yet we were never
          taught these skills in school, nor do we really socialise about it.{" "}
        </p>
        <p>
          I have started The Easy Breezy Investor to share financial information
          I have found helpful based on personal experiences.{" "}
        </p>
        <p>
          Your finances will always be part of your life, so why not learn a
          little about it.{" "}
        </p>
        <p>It helped me and I hope it can help you too. </p>
        <p>
          And just as Benjamin Franklin said,{" "}
          <i>“an investment in knowledge pays the best interest”.</i>
        </p>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/brie-cox/" target="_blank">
          <FaLinkedin
            style={{ height: "100px", fontSize: "1.5rem", color: "black" }}
          />
        </a>
      </div>
    </div>
  </Layout>
);

export default About;
