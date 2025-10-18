const {Router} = require("express")
const { getAllAuthors, search, getOneAuthors, addAuthors, updateAuthors, deleteAuthor } = require("../controller/author.controller")
const authorvalidatorMiddleware = require("../middleware/author.validator.middlwware")
const adminCheck = require("../middleware/admin.check")

const AuthorRouter = Router()

AuthorRouter.get("/get_all_authors", getAllAuthors)
AuthorRouter.get("/search", search)
AuthorRouter.get("/get_one_author/:name", getOneAuthors)
AuthorRouter.post("/add_author", adminCheck, authorvalidatorMiddleware, addAuthors)
AuthorRouter.put("/update_author/:id", adminCheck, updateAuthors)
AuthorRouter.delete("/delete_author/:id", adminCheck, deleteAuthor)

module.exports = AuthorRouter