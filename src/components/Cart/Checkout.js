import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChar = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formValidtyCheck, setFormValidtyCheck] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const onConfirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostal = postalRef.current.value;
    const enteredCity = cityRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const postalIsValid = isFiveChar(enteredPostal);
    const cityIsValid = !isEmpty(enteredCity);

    setFormValidtyCheck({
      name: nameIsValid,
      street: streetIsValid,
      postal: postalIsValid,
      city: cityIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && postalIsValid && cityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };

  const nameInputClasses = ` ${classes.control} ${
    formValidtyCheck.name ? "" : classes.invalid
  } `;
  const streetInputClasses = ` ${classes.control} ${
    formValidtyCheck.street ? "" : classes.invalid
  } `;
  const postalInputClasses = ` ${classes.control} ${
    formValidtyCheck.postal ? "" : classes.invalid
  } `;
  const cityInputClasses = ` ${classes.control} ${
    formValidtyCheck.city ? "" : classes.invalid
  } `;

  return (
    <form className={classes.form} onSubmit={onConfirmHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameRef} type="text" id="name" />
        {!formValidtyCheck.name && <p>Please enter name</p>}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input ref={streetRef} type="text" id="street" />
        {!formValidtyCheck.street && <p>Please enter street input</p>}
      </div>
      <div className={postalInputClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalRef} type="text" id="postal" />
        {!formValidtyCheck.postal && <p>Please enter correct postal code</p>}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input ref={cityRef} type="text" id="postal" />
        {!formValidtyCheck.city && <p>Please enter Your City</p>}
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose}>Cancel</button>
        <button className={classes.submit}>Confrim</button>
      </div>
    </form>
  );
};

export default Checkout;
