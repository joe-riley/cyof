const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({

  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  links: [
    {
      type: String,
    },
  ],
  sets: {
    type: Number
  },
  reps: {
    type: Number
  },
  time: {
    type: Number
  },
  weights: [
    {
      type: Number,
    }
  ],
  distance: {
    type: Number,
  },
  resistance: {
    type: Number,
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
},
  { 
    toJSON: {
      virtuals: true,
    }
  }
);

module.exports = workoutSchema;
