import React from "react";
import styles from "./Card.module.css";

const Card = ({image, name, price}) => {
    return (
        <div className={styles.container}>
            <img src={image} alt="Laptops" />
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    );
};

export default Card;