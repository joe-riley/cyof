// import React, { useState, useEffect } from "react";
import React from "react";
import '../App.css';

import {
  Jumbotron,
  Carousel,
  Container,
  // Col,
  // Form,
  // Button,
  // Card,
  // CardColumns,
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
          {/* <Form onSubmit={null}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  value=""
                  onChange={(e) => console.log(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Placeholder"
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type="submit" variant="success" size="lg">
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form> */}
        </Container>
      </Jumbotron>

      {/* <Container>
        <h2>
          {searchedBooks.length
            ? `Viewing ${searchedBooks.length} results:`
            : "Search for a book to begin"}
        </h2>
        <CardColumns>
          {searchedBooks.map((book) => {
            return (
              <Card key={book.bookId} border="dark">
                {book.image ? (
                  <Card.Img
                    src={book.image}
                    alt={`The cover for ${book.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className="small">Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedBookIds?.some(
                        (savedBookId) => savedBookId === book.bookId
                      )}
                      className="btn-block btn-info"
                      onClick={() => handleSaveBook(book.bookId)}
                    >
                      {savedBookIds?.some(
                        (savedBookId) => savedBookId === book.bookId
                      )
                        ? "This book has already been saved!"
                        : "Save this Book!"}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container> */}
    </>
  );
};

export default LandingPage;