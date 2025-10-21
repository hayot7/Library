const express = require("express");
const router = express.Router();
const {
  createAudioBook,
  getAllAudioBooks,
  getAudioBookById,
  updateAudioBook,
  deleteAudioBook,
  addAudioBook,
} = require("../controller/audioBook.controller");
const audioBookValidatorMiddleware = require("../middleware/audiobook.validator.middleware");

router.post("/", audioBookValidatorMiddleware, addAudioBook);
router.get("/", getAllAudioBooks);
router.get("/:id", getAudioBookById);
router.put("/:id", audioBookValidatorMiddleware, updateAudioBook);
router.delete("/:id", deleteAudioBook);

module.exports = router;
