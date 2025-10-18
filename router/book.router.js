const { Router } = require("express");
const {getAllBooks,getOneBook,addBook,updateBook,deleteBook,searchBooks} = require("../controller/book.controller");
const bookValidatorMiddleware = require("../middleware/book.validator.middleware");
const adminCheck = require("../middleware/admin.check");

const BookRouter = Router();

// Endi to‘g‘ridan-to‘g‘ri ishlaydi:
BookRouter.get("/get_all_books", getAllBooks);
BookRouter.get("/get_one_book/:id", getOneBook);
BookRouter.get("/search_books", searchBooks);
BookRouter.post("/add_book", adminCheck, bookValidatorMiddleware, addBook);
BookRouter.put("/update_book/:id", adminCheck, updateBook);
BookRouter.delete("/delete_book/:id", adminCheck, deleteBook);

module.exports = BookRouter;
