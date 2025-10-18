const CustomErrorHandle = require("../error/custom-error-handler");
const bookSchema = require("../schema/book.schema");
const Book = require("../schema/book.schema");

// Barcha kitoblarni olish
const getAllBooks = async (req, res, next) => {
  try {
    const books = await bookSchema.find().populate("author_info")
    res.status(200).json(books);
  } catch (error) {
    next(error)
  }
};

// Bitta kitobni olish
const getOneBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await bookSchema.findOne(id);
    console.log("salom");
   
    

    // if (!foundedbook) {
    //  throw CustomErrorHandle.hotFound("Book not found")
    // }

    res.status(200).json(book);
  } catch (error) {
    next(error)
  }
};

// Kitob qidirish (nomi bo‘yicha)
const searchBooks = async (req, res, next) => {
  try {
    const { title } = req.query;
    const books = await Book.find({
      title: { $regex: title, $options: "i" },
    });

    res.status(200).json(books);
  } catch (error) {
    next(error)
  }
};

// Yangi kitob qo‘shish
const addBook = async (req, res, next) => {
  try {
    const { title, birth_date, period, img, genre, published_year, page, published_home, desc, author_info } = req.body;
    await Book.create({ title, birth_date, period, img, genre, published_year, page, published_home, desc, author_info });

    res.status(201).json({ message: "Book added successfully" });
  } catch (error) {
    next(error)
  }
};

// Kitobni yangilash
const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Book.findByIdAndUpdate(id, { title, birth_date, period, img, genre, published_year, page, published_home, desc, author_info });

    if (!updated) {
       throw CustomErrorHandle.hotFound("Book not found")
    }

    res.status(200).json(updated);
  } catch (error) {
    next(error)
  }
};

// Kitobni o‘chirish
const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Book.findByIdAndDelete(id);

    if (!deleted) {
      throw CustomErrorHandle.hotFound("Book not found")
    }

    res.status(200).json({ message: "Book deleted" });
  } catch (error) {
    next(error)
  }
};

module.exports = {
  getAllBooks,
  getOneBook,
  searchBooks,
  addBook,
  updateBook,
  deleteBook,
};
