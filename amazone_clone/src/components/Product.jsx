import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./Product.css";

class Product extends Component {
  render() {
    return (
      <Col
        lg={3}
        md={6}
        sm={12}
        className="d-flex justify-content-center"
        key={this.props.product._id}
      >
        <Card className="card p-1 mb-2 mt-3">
          <div className="addToCart mb-2">
            <AddShoppingCartIcon
              className="addToCartIcon"
              onClick={() => this.props.add(this.props.product._id)}
            />
          </div>
          <img
            variant="top"
            src={this.props.product.imgURL}
            className="product-image"
            alt="product"
          />
          <Card.Body>
            <Card.Title className="name">{this.props.product.name}</Card.Title>
            <Card.Text className="description">
              {this.props.product.description}
            </Card.Text>
            <div className="m-0 p-0 d-flex justify-content-between align-items-center text-center">
              <a
                variant="primary"
                className="productDetails"
                onClick={() =>
                  this.props.props &&
                  this.props.props.props.history.push(
                    "/details/" + this.props.product._id
                  )
                }
              >
                Show more
              </a>

              <p className="text-right text-muted m-0 p-0 price">
                {this.props.product.price} €
              </p>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default Product;
