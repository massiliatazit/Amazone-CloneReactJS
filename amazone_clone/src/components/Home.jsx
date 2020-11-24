import React from "react";
import "./home.css";

import { Container, Jumbotron, Button } from "react-bootstrap";

function Home() {
  return (
    <div>
      <div className="home">
        <Jumbotron fluid className="jumbotronhome">
          <div className="JumbotronContent">
            <h1>Watch movies and TV shows</h1>

            <p className="my-5">
              Enjoy exclusive Amazon Originals as well as popular movies and TV
              shows. Join Prime Video now for €5.99 per month. Cancel anytime..
            </p>
            <p>
              <Button variant="primary" className="jumbotronbtn">
                Start your free trial
              </Button>
            </p>
            <div className="membershiptext">
              <p>Membership renews at € 5.99/month.</p>
            </div>
          </div>
        </Jumbotron>
      </div>
    </div>
  );
}

export default Home;
