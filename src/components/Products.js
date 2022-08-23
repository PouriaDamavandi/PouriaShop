import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import styles from "../components/Products.module.css";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const response = await axios.get(
        process.env.REACT_APP_BASE_URL + "/products"
      );
      this.setState({
        products: response.data,
      });
      this.setState({ loading: false });
    } catch (error) {
      alert(error.message);
    }
  }
  render() {
    const { products, loading } = this.state;
    return (
      <div className={styles.container}>
        {!loading ? (
          products.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              name={product.title}
              price={`${product.price} $`}
              id={product.id}
            />
          ))
        ) : (
          <h1>Loading . . .</h1>
        )}
      </div>
    );
  }
}

export default Products;
