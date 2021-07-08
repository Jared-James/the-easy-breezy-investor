import * as styles from "./blog-post-preview-list.module.css";
import { useState } from "react";
import BlogPostPreview from "./blog-post-preview";
import { Link } from "gatsby";
import React from "react";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";

function BlogPostPreviewGrid(props) {
  const [changeView, setView] = useState("grid");
  return (
    <div className={styles.root}>
      <div className={styles.view}>
        <span>
          <ViewModuleIcon onClick={() => setView("grid")} />
        </span>
        <span>
          <ViewAgendaIcon onClick={() => setView("list")} />
        </span>
      </div>
      <ul className={changeView === "grid" ? styles.grid : styles.list}>
        {props.nodes &&
          props.nodes.map((node) => (
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
      </ul>
      {/* {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )} */}
    </div>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostPreviewGrid;
