// import React, { useState, useEffect } from "react";
import React from "react";
import '../App.css';

import {
  Jumbotron,
  Carousel,
  Container,
} from "react-bootstrap";

// import Auth from "../utils/auth";
// import { useMutation } from "@apollo/client";
import { } from "../utils/localStorage";

const LandingPage = () => {
  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <Carousel>
            <Carousel.Item>
              <img
                className="dblock w-100"
                src="images/landingCarousel/choose.jpg"
                alt="CHOOSE"
              />
              <Carousel.Caption>
                <h3>CHOOSE</h3>
                <p>your involvement with your health.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="dblock w-100"
                src="images/landingCarousel/your.jpg"
                alt="YOUR"
              />
              <Carousel.Caption className="text-dark">
                <h3>YOUR</h3>
                <p>own pace, your time, your rules.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="dblock w-100"
                src="images/landingCarousel/own.jpg"
                alt="OWN"
              />
              <Carousel.Caption>
                <h3>OWN</h3>
                <p>the fitness of your mind and body.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="dblock w-100"
                src="images/landingCarousel/fitness.jpg"
                alt="FITENESS"
              />
              <Carousel.Caption className="text-dark">
                <h3>FITNESS</h3>
                <p>is a choice- a commitment.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Jumbotron>
    </>
  );
};

export default LandingPage;