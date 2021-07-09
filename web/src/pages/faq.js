import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import * as styles from "../pageStyles/faq.module.css";

const Faq = () => (
  <Layout>
    <SEO title="faq" />
    <div className={styles.container}>
      <div className={styles.container__title}><h1>FAQ!</h1></div>
      <div className={styles.container__about}>
        <h1>Most asked questions</h1>
        <ul>
          <li>Are McDonald's veggie dippers gluten free? </li>
          <p>
            Yes, but only without the bun of course. The Pepper & Pesto Dipper
            itself has no gluten containing ingredients and is cooked in a
            separate fryer, away from other ingredients containing gluten.
            However, due to our kitchen set up, we cannot gua...
          </p>
          <li>
            Where can I find information about allergens and sensitivities?{" "}
          </li>
          <p>
            You can find the main allergens in our menu items by viewing the
            ingredient declarations in our menu pages or by clicking on the
            Allergen Info icon at the top of the ho...
          </p>
          <li>Why do you only serve breakfast until 11:00? </li>
          <p>
            Items on our breakfast menu are cooked slightly differently and at a
            different temperature from items on our main menu. This means we
            don't have enough space in our kitchens to accommodate the cooking
            and preparation of our breakfast and main menus...
          </p>

        </ul>
      </div>
    </div>
  </Layout>
);

export default Faq;
