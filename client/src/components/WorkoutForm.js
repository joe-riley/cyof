// see SignupForm.js for comments
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
// import { loginUser } from '../utils/API';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

const WorkoutForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login(
        { 
          variables: { ...userFormData }
        }
      );

      if (error) {
        throw new Error('What happened?')
      }
      
      Auth.login(data.login.token)

    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Form 
        noValidate validated={validated} 
        onSubmit={handleFormSubmit}
      >
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor='name'>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='What do you call this workout?'
            name='name'
            onChange={handleInputChange}
            value={userFormData.workoutName}
            required
          />
          <Form.Control.Feedback type='invalid'>A workout name is required!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='descrtiption'>Description</Form.Label>
          <Form.Control
            type='textarea'
            placeholder='Please describe your workout.'
            name='desc'
            onChange={handleInputChange}
            value={userFormData.workoutDescription}
            required
          />
          <Form.Control.Feedback type='invalid'>A description is required!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='sets'>Sets</Form.Label>
          <Form.Control
            type='text'
            placeholder='eg. 5'
            name='sets'
            onChange={handleInputChange}
            value={userFormData.workoutSets}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='reps'>Reps</Form.Label>
          <Form.Control
            type='text'
            placeholder='eg. 8'
            name='reps'
            onChange={handleInputChange}
            value={userFormData.workoutReps}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='time'>Time</Form.Label>
          <Form.Control
            type='text'
            placeholder='eg. 30 mins.'
            name='time'
            onChange={handleInputChange}
            value={userFormData.workoutTime}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='weight'>Weight</Form.Label>
          <Form.Control
            type='text'
            placeholder='eg. 20 kg.'
            name='weight'
            onChange={handleInputChange}
            value={userFormData.workoutWeight}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='distance'>Distance</Form.Label>
          <Form.Control
            type='text'
            placeholder='eg. 3 km.'
            name='distance'
            onChange={handleInputChange}
            value={userFormData.workoutDistance}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='resistance'>Reistance</Form.Label>
          <Form.Control
            type='text'
            placeholder='eg. 40 watts'
            name='resistance'
            onChange={handleInputChange}
            value={userFormData.workoutResitance}
          />
        </Form.Group>
        <Form.Group>
          <Button
            disabled={!(userFormData.workoutName && userFormData.workoutDescription)}
            type='submit'
            variant='success'>
            Save
          </Button>
        </Form.Group>
        <Form.Group>
          <Button
            className="btn-block btn-danger"
            // onClick={() => handleDeleteBook(book.bookId)}
          >
            Delete this workout!
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default WorkoutForm;
