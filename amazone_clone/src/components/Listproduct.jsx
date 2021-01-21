import React, { Component } from "react";
import { fetchProducts, fetchProductsByCategory } from "../fetches/Fetches";
import Product from "./Product";
import { Container, Row, Col, Alert } from "react-bootstrap";

export default class Listproduct extends Component {
  state = {
    products: [],
    alert: false,
    errorAlert: false,
    loading: true,
  };

  componentDidMount = async () => {
    let products = await fetchProducts();
    this.setState({ products, loading: false });
  };

  render() {
    console.log(this.state.products);
    return (
      <Container
        className="mt-5 pt-5 d-flex justify-content-center"
        style={{ flexDirection: "column" }}
      >
        <Row>
          <Col md={10}>
            {" "}
            <hr></hr>
          </Col>
        </Row>
        <Row className="mt-4 d-flex justify-content-center">
          {this.state.products.length > 0
            ? this.state.products.map((product, index) => (
                <Product
                  product={product}
                  props={this.props}
                  add={this.addCart}
                  key={index}
                />
              ))
            : this.state.products.map((product, index) => (
                <Product
                  product={product}
                  props={this.props}
                  add={this.addCart}
                  key={index}
                />
              ))}
        </Row>
      </Container>
    );
  }
}
