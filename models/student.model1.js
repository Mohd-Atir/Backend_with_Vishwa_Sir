const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    class: String,
    rollNumber: {
      type: Number,
      required: true,
    },
    subjects: [String],
    email: {
      type: String,
      minLength: 15,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
