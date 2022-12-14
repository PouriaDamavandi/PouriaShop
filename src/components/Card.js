import React, { Component } from "react";
import styles from "./Card.module.css";
import down from "../images/down.svg";
import up from "../images/up.svg";
import { Link } from "react-router-dom";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  downHandler = () => {
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }
  };
  upHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  render() {
    const { image, name, price , id } = this.props;
    const { counter } = this.state;
    return (
      <div className={styles.container}>
        <img src={image} alt="Laptop" />
        <h3><Link to={`/products/${id}`}>{name}</Link></h3>
        <p>
          {price}
          {counter
            ? `* ${counter}= ${counter * Number(price.split(" ")[0])} $`
            : ""}{" "}
        </p>
        <div className={styles.counter}>
          <img
            className={!counter ? styles.deactive : ""}
            src={down}
            alt="Arrow Down"
            onClick={this.downHandler}
          />
          <span>{counter}</span>
          <img src={up} alt="Arrow Up" onClick={this.upHandler} />
        </div>
      </div>
    );
  }
}

export default Card;
