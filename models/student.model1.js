const mongoose = require("mongoose");

// Define a Mongoose schema for student data
const studentSchema = new mongoose.Schema(
  {
    // Define the 'name' attribute with type String and required validation
    name: {
      type: String,
      required: true,
    },
    // Define the 'class' attribute with type String (optional)
    class: String,
    // Define the 'rollNumber' attribute with type Number and required validation
    rollNumber: {
      type: Number,
      required: true,
    },
    // Define the 'subjects' attribute as an array of strings
    subjects: [String],
    // Define the 'email' attribute with type String, minLength validation, and required validation
    email: {
      type: String,
      minLength: 15,
      required: true,
    },
  },
  // Schema options
  { 
    versionKey: false,  // Disable version key (_v) in documents
    timestamps: true    // Enable timestamps (createdAt, updatedAt) for automatic document metadata
  }
);

// Create and export the Mongoose model named "Student" based on the defined schema
module.exports = mongoose.model("Student", studentSchema);
