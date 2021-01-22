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
  getProductsByCategory = async (e) => {
    let category = e.currentTarget.value;
    console.log(category);
    if (category === "all") {
      let products = await fetchProducts();
      this.setState({ products });
    } else {
      let products = await fetchProductsByCategory(category);
      console.log(products);
      this.setState({ products });
    }
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
            <Row>
              <Col md={10}>
                {" "}
                <hr></hr>
              </Col>
              <Col md={2}>
                sort by
                <select
                  className="text-center selectCategory"
                  onChange={(e) => this.getProductsByCategory(e)}
                >
                  <option value="all">items</option>
                  <option value="nails">nails</option>
                  <option value="hair">hair style</option>
                </select>
              </Col>
            </Row>
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
