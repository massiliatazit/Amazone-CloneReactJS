import React, { Component } from "react";
import { Media, Container, Row, Col, Alert, Card } from "react-bootstrap";
import { getReviews, fetchSingleProduct } from "../fetches/Fetches";

import StarIcon from "@material-ui/icons/Star";

import "./details.css";

export default class Details extends Component {
  state = {
    reviews: [],
    products: [],
  };

  componentDidMount = async () => {
    let reviews = await getReviews(this.props.match.params.id);
    let products = await fetchSingleProduct(this.props.match.params.id);
    this.setState({ products });
    this.setState({ reviews: reviews.reviews });
  };
  render() {
    console.log("PRODUCTS", this.state.products.reviews);
    console.log("REVIEWS", this.state.reviews);

    return (
      <Container className="mb-5 mt-4 py-5">
        <Row className="mb-5 mt-5 pt-5">
          <Col md={6} className="d-flex justify-content-center">
            <img
              src={this.state.products.imgURL}
              className="product-image-detail"
              alt="product-cart"
            />
          </Col>
          <Col md={6}>
            <h1 className="product-name text-center mb-3">
              {this.state.products.name} &#9813;
            </h1>
            <p>{this.state.products.description}</p>
            <div className="d-flex flex-column">
              <h5>{this.state.products.price}€</h5>
              <h5>{this.state.products.brand}</h5>
            </div>
          </Col>
        </Row>
        <h2 className="text-center">Reviews:</h2>
        <Container>
          {this.state.reviews &&
            this.state.reviews.map((e) => (
              <Row>
                <Col className="mt-3 d-flex justify-content-center">
                  <Card className="review-card text-center">
                    <div className="first-half d-flex justify-content-center align-items-center text-center"></div>
                    <Card.Body className="p-3 mt-2">
                      <Card.Text className="description text-muted">
                        {e.comment}
                      </Card.Text>
                      <div className="d-flex justify-content-between">
                        <Card.Subtitle className="mb-2 text-muted">
                          {Array.from({ length: e.rate }).map((star) => (
                            <StarIcon />
                          ))}
                        </Card.Subtitle>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            ))}
        </Container>
      </Container>
    );
  }
}
