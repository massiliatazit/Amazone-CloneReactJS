import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import "./home.css";

import Listproduct from "./Listproduct";
import "./Product.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Container fluid className=" px-0">
          <img
            className="home_image"
            src="https://i.pinimg.com/564x/8b/fa/2e/8bfa2e174d5f22d72c0f3278c53f8e87.jpg"
            style={{ height: "600px", width: "100%" }}
            alt="home image"
          ></img>

          <Row className="d-flex justify-content-around">
            <Listproduct props={this.props} product={this.props.product} />
          </Row>

          <div className="home_row"></div>
        </Container>
      </div>
    );
  }
}
