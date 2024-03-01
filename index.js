const mongoose = require("mongoose");

// Importing the Mongoose model for student data
const studentModel = require("./models/student.model1");

// Connect to MongoDB database (assuming it's running locally on port 27017)
mongoose.connect("mongodb://127.0.0.1/University");
const db = mongoose.connection;

// Event listener for MongoDB connection errors
db.on("error", () => {
  console.log("Connection failed!");
});

// Event listener for successful MongoDB connection
db.once("open", () => {
  console.log("Database connected...");

  // Call function to create student documents
  createDocs();

  // Call function to delete student documents
  deleteDocs();

  // Call function to update student documents
  updateDocs();

  // Call function to read student documents
  readDocs();
});

// Function to create student documents
async function createDocs() {
  // Sample student data
  let students = {
    name: "Mohd",
    class: "10th",
    rollNumber: 9,
    subjects: ["English", "Urdu"],
    email: "example@gmail.com",
  };

  // Create student documents in the database
  const studentData = await studentModel.create(students);
  console.log(studentData);
}

// Function to delete student documents
async function deleteDocs() {
  try {
    // Delete all documents except the one with the specified _id
    const result = await studentModel.deleteMany({
      _id: { $ne: "65e0cf542a641f7792fd47b2" },
    });
    console.log(`${result.deletedCount} documents deleted`);
  } catch (error) {
    console.log("An error occurred:", error);
  }
}

// Function to update student documents
async function updateDocs() {
  try {
    // Define rollNumber and new subjects to be added
    const rollNumber = "678";
    const newSubject = ["Express", "Node.js"];

    // Update documents by pushing new subjects to the subjects array
    const result = await studentModel.updateOne(
      { rollNumber: rollNumber },
      { $push: { subjects: { $each: newSubject } } }
    );
    console.log(`${result.modifiedCount} docs modified`);
  } catch (error) {
    console.log("Error while updating docs!", error);
  }
}

// Function to read student documents
async function readDocs() {
  try {
    // Read all student documents from the database
    const result = await studentModel.find();
    console.log(result);
  } catch (error) {
    console.log("Error while reading docs!", error);
  }
}
