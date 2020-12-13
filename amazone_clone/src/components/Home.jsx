import React from "react";

import "./home.css";

import { Container, Jumbotron, Button, Row } from "react-bootstrap";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <Container fluid className=" px-0">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/BlackFriday/Fuji_TallHero_BFWeek_v1_en_US_1x._CB415746974_.jpg"
          style={{ height: "600px", width: "100%" }}
          alt="home image"
        ></img>
        <Row>
          <Product />
          <Product />
          <Product />

          <Product />
        </Row>
        {/* <div className="home_row">
          <Product />
          <Product />
          <Product />

          <Product />
        </div> */}
        <div className="home_row"></div>
      </Container>
    </div>
  );
}

export default Home;
