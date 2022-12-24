import React from "react";
import classes from "./Spinner.module.css";

const spinner = () => (
  <div className={classes.Loader}>
    <div class="loader">Loading...</div>
  </div>
);

export default spinner;
