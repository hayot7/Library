const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const BookRouter = require("./router/book.router");
const AuthorRouter = require("./router/author.router"); 
const CitationRouter = require("./router/citation.router");
const errorMiddleware = require("./middleware/error.middleware")
const authRouter = require("./router/auth.router")
const cookieparser = require("cookie-parser");
const profileRouter = require("./router/profile.router");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(cors());
app.use(cookieparser())

connectDB();

// Routerni ulaymiz
app.use(BookRouter);
app.use(AuthorRouter); 
app.use(CitationRouter);
app.use(authRouter);
app.use(profileRouter);

//error middleware
app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log("Server is running at:", PORT);
});
