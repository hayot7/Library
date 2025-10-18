const {Router} = require("express")
const { getAllBooks, search, getOneBook, addBook, updateBook, deleteBook } = require("../controller/book.controller")



const BookRouter = Router()

AuthorRouter.get("/get_all_book", getAllBooks)
AuthorRouter.get("/search", search)
AuthorRouter.get("/get_one_book/:id", getOneBook)
AuthorRouter.get("/add_book", addBook)
AuthorRouter.get("/update_book/:id", updateBook)
AuthorRouter.get("/delete_book/:id", deleteBook)

module.exports = BookRouter