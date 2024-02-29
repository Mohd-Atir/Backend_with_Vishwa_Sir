const mongoose = require("mongoose");

// importing custom schema module which I created in student.module1.js file
const studentModel = require("./models/student.model1");

// connecting to mongodb
mongoose.connect("mongodb://127.0.0.1/University");
const db = mongoose.connection; // connection starting

db.on("error", () => {
  console.log("Connection failed!");
});

db.once("open", () => {
  console.log("Database connected...");
  // Documents insertion function calling here to add docs in mongodb collection
  // createDocs();

  // Documents deletion function calling here to add docs in mongodb collection
  // deleteDocs();

  // Documents updation function calling here to add docs in mongodb collection
  // updateDocs()

  // Documents reading function calling here to add docs in mongodb collection
  readDocs()
});

// Documents creation logic function here
/** 
async function createDocs() {
  let students = {
    name: "Mohd",
    class: "10th",
    rollNumber: 9,
    subjects: ["English", "Urdu"],
    email: "example@gmail.com"
  };

  const studentData = await studentModel.create(students);
  console.log(studentData);
}*/

// Documents deletion logic function
/**
async function deleteDocs() {
  try {
    const result = await studentModel.deleteMany({
      _id: { $ne: "65e0cf542a641f7792fd47b2" },
    });
    console.log(`${result.deletedCount} documents deleted`);
  } catch (error) {
    console.log("An error occured :", error);
  }
}*/

// Documents updation logic function
/** 
async function updateDocs(){
  try {
    const rollNumber = '678'
    const newSubject = ['Express', 'Node.js']
    const result = await studentModel.updateOne({'rollNumber': rollNumber}, {$push: {subjects: {$each: newSubject}}})
    console.log(`${result.modifiedCount} docs modified`);
  } catch (error) {
    console.log("Error while updating docs!", error);
  }
}*/

// Documents reading logic function
async function readDocs(){
  try {
    const result = await studentModel.find()
    console.log(result);
  } catch (error) {
    console.log("Error while reading docs!", error);
  }
}