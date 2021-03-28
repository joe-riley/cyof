import React, { useState } from 'react';
import moment from 'moment';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
// import { REMOVE_BOOK } from '../utils/mutations';
import { Jumbotron, Container, CardColumns, Card, Button, Modal, Row, Col } from 'react-bootstrap';
import Auth from '../utils/auth';
import WorkoutForm from './WorkoutForm';
// import { removeBookId } from '../utils/localStorage';

const WorkoutCard = () => {
  const [showModal, setShowModal] = useState(false);
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};
  // const [removeBook, { error }] = useMutation(REMOVE_BOOK);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  // const handleDeleteBook = async (bookId) => {
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     await removeBook({
  //       variables: { bookId },
  //     });

  //     if (error) {
  //       throw new Error("Something went wrong!");
  //     }

  //     // remove book from localstorage
  //     removeBookId(bookId);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

              console.log(userData)
  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Your Past Workouts</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedWorkouts.length
            ? `Viewing ${userData.savedWorkouts.length} saved ${
                userData.savedWorkouts.length === 1 ? "workout" : "workouts"
              }:`
            : "You have no workouts!"}
        </h2>
        <CardColumns>
          {userData.savedWorkouts.map((workout) => {
            return (
              <Card key={workout._id} border="dark">
                {/* {workout.links[0] ? (
                  <Card.Img
                    src={workout.links[0]}
                    alt={`The cover for ${workout.name}`}
                    variant="top"
                  />
                ) : null} */}
                <Card.Body>
                  <Card.Title>{workout.name}</Card.Title>
                  <p className="small">Date: {workout.createdAt}</p>
                  <Card.Subtitle>{workout.description}</Card.Subtitle>
                  <Row>
                    {workout.sets ?(
                      <Col className="col-sm-3"><h5>Sets: <span>{workout.sets}</span></h5></Col>
                    ) : null }
                    {workout.reps ?(
                      <span className="col-sm-3"><h5>Reps: <span>{workout.reps}</span></h5></span>
                    ) : null }
                    {workout.weights[0] ?(
                      <span className="col-sm-4"><h5>Weight: <span>{workout.weights[0]}</span></h5></span>
                    ) : null }
                  </Row>
                  {workout.time ?(
                    <span><h5>Time: <span>{workout.time}</span></h5></span>
                  ) : null }
                  {workout.distance ?(
                    <span><h5>Distance: <span>{workout.distance}</span></h5></span>
                  ) : null }
                  {workout.resistance ?(
                    <span><h5>Reistance: <span>{workout.resistance}</span></h5></span>
                  ) : null }
 
                  <Button
                    className="btn-block btn-submit"
                    onClick={() => setShowModal(true)}
                  >
                    Edit
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to edit a workout */}
        <Modal.Header closeButton>
          <Modal.Title id='workout-form-modal'>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <WorkoutForm handleModalClose={() => setShowModal(false)} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WorkoutCard;
