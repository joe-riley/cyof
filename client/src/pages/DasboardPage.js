// import React, { useState, useEffect } from "react";
import React from "react";
import '../App.css';
import WorkoutCard from "../components/WorkoutCard"

import {
  Jumbotron,
  // Carousel,
  // Container,
} from "react-bootstrap";

// import Auth from "../utils/auth";
// import { useMutation } from "@apollo/client";
import { } from "../utils/localStorage";

const DashboardPage = () => {
  return (
    <>
     <Jumbotron fluid className="text-light bg-dark">
       <WorkoutCard />
     </Jumbotron>
    </>
  );
};
  
export default DashboardPage;
