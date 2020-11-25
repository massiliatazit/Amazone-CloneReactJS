import React from "react";
import "./product.css";
import { Card, Col, Container } from "react-bootstrap";

function Product() {
  return (
    <Container className="card_container">
      <Col sm={6} md={3} lg={4} className="card_col">
        <Card style={{ width: "18rem" }} className="product">
          <h2> here some text</h2>
          <Card.Body>
            <img
              src="https://m.media-amazon.com/images/I/41Cg-R+D+WL._AC_SL260_.jpg"
              alt=""
            />
          </Card.Body>
          <a href="#">Show more</a>
        </Card>
      </Col>
    </Container>
  );
}
export default Product;
