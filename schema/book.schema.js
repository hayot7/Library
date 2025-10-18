const { Schema, model } = require("mongoose");

const Book = new Schema({
  title: {
    type: String,
    required: true,
  },
  birth_date: {
    type: Date,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  published_year: {
    type: String,
    required: true,
  },
  page: {
    type: String,
    required: true,
  },
  published_home: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },

  // ✅ to‘g‘rilangan qism:
  author_info: {
    type: Schema.Types.ObjectId, // boshqa kolleksiya bilan bog‘lanadi
    ref: "Author", // bu model nomi bilan bir xil bo‘lishi kerak
    required: true,
  },
},
{
  versionKey: false,
  timestamps: true, 
});
module.exports = model("Book", Book);
