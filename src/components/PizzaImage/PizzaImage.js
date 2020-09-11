import React from 'react';

import classes from './PizzaImage.css';
import PizzaImageJpg from '../../assets/pizza.jpg';

const pizzaImage = () => {
  return (
    <div className={classes.PizzaImage}>
      <img src={PizzaImageJpg} className={classes.PizzaImageJpg}/>
    </div>
  );
};

export default pizzaImage;
