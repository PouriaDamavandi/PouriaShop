import React, { Component } from 'react';
import styles from "./Card.module.css";
import down from "../images/down.svg"
import up from "../images/up.svg"

class Card extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
        }
    }
    downHandler = () =>{
      if( this.state.counter >= 1){
      this.setState(prevState =>({
        counter : prevState.counter - 1,
      }) ) 
    }}
    upHandler = () => {
      this.setState(prevState =>({
        counter : prevState.counter + 1,
      }))
    }
    render() {
        const {image, name, price} = this.props;
        const {counter} = this.state;
        return (
            <div className={styles.container}>
                <img src={image} alt="Laptop" />
                <h3>{name}</h3>
                <p>{price}</p>
                       <div className={styles.counter}>
       <img className={this.state.counter ? "" : styles.deactive }src={down} alt="Arrow Down" onClick={this.downHandler}/>
       <span>{counter}</span>
       <img src={up} alt="Arrow Up" onClick={this.upHandler}/>
            </div>
            </div>
        );
    }
}

export default Card;
