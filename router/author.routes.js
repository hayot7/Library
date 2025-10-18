const {Router} = require("express")
const { getAllAuthors, search, getOneAuthor, addAuthor, updateAuthor, deleteAuthor } = require("../controller/author.controller")



const AuthorRouter = Router()

AuthorRouter.get("/get_all_author", getAllAuthors)
AuthorRouter.get("/search", search)
AuthorRouter.get("/get_one_author/:id", getOneAuthor)
AuthorRouter.get("/add_author", addAuthor)
AuthorRouter.get("/update_author/:id", updateAuthor)
AuthorRouter.get("/delete_author/:id", deleteAuthor)

module.exports = AuthorRouter