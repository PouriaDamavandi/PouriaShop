import React, { Component } from "react";
import styles from "./Search.module.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  searchHandler = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  render() {
    return (
      <div className={styles.container}>
        <p>Search what you want</p>
        <div>
          <input
            type="text"
            placeholder="Search ..."
            value={this.state.text}
            onChange={this.searchHandler}
          />
          <br/>
          <br/>
          <span>{this.state.text}</span>
        </div>
      </div>
    );
  }
}

export default Search;
