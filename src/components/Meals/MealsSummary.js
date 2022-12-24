import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicous Food, Delivered to You</h2>
      <p>
        Choose your favourite meals from our broad selections of available meals
        and enjoy a delicous lunch or dinner at home
      </p>
      <p>
        All our meals are cooked in high-quality ingredinets, just in-time
        ofcourse by experianced chief
      </p>
    </section>
  );
};

export default MealsSummary;
