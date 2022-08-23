import React, { Component } from "react";
import styles from "./Cards.module.css";
import Card from "./Card";
import laptop1 from "../images/laptop1.jpg";
import laptop2 from "../images/laptop2.jpg";
import laptop3 from "../images/laptop3.jpg";
import laptop4 from "../images/laptop4.jpg";
import { v4 } from "uuid";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      phoneData: [
        { image: laptop1, name: "Sony", price: "1150 $", id:1 },
        { image: laptop2, name: "HP", price: "1050 $", id:2 },
        { image: laptop3, name: "Macbook", price: "1200 $" , id:3 },
        { image: laptop4, name: "ASUS", price: "1100 $" , id:4},
      ],
    };
  }

  render() {
    return (
      <div className={styles.container}>
        {/* <Card image={laptop1} name={"Sony"} price={"1150 $"} />
        <Card image={laptop2} name={"HP"} price={"1050 $"} />
        <Card image={laptop3} name={"Macbook"} price={"1200 $"} />
        <Card image={laptop4} name={"ASUS"} price={"1100 $"} /> */}
        {this.state.phoneData.map((phone) => (
          <Card
            key={v4()}
            image={phone.image}
            name={phone.name}
            price={phone.price}
            id={phone.id}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
