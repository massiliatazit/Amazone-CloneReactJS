import React from "react";

import "./home.css";

import { Container, Jumbotron, Button, Row} from "react-bootstrap";
import AddProduct from "./AddProduct.jsx";
import Product from "./Product";

function Home() {
  return (
    <Container>
    <div className="home">
      <div className="home_container px-0">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/BlackFriday/Fuji_TallHero_BFWeek_v1_en_US_1x._CB415746974_.jpg"
          style={{ height: "600px", width: "2000px" }}
          alt="home image"
        ></img>
        <AddProduct />
        
        <div className="home_row d-flex justify-content-around">
         
          <Product />
          <Product />
          <Product />

         
        </div>
        <div className="home_row">
          <Product />
          <Product />
          <Product />

        </div>
        <div className="home_row"></div>
      </div>
    </div>
    </Container>
  );
}

export default Home;
