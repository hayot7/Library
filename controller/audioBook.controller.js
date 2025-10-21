const AudioBook = require("../schema/audioBookSchema.js");


const getAllAudioBooks = async (req, res, next) => {
    try {
        const books = await bookSchema.find().populate("author")
        const count = await AudioBook.countDocuments();
        res.status(200).json({
            count, data: books
        })
        res.status(200).json(books);
    } catch (error) {
        next(error)
    }
};

const getAudioBookById = async (req, res, next) => {
    try {
        const book = AudioBook.findById(req.params.id).populate("author")
        if (!book) return res.status(404).json({
            message: "Audiobook not found"
        })
        res.json(book)
    } catch (error) {
        next(error)
    }
};

const addAudioBook = async (req, res, next) => {
    try {
        const newBook = await AudioBook.create(req.body);

        res.status(201).json({
            message: "AudioBook added succesfully",
            data: newBook
        });
    } catch (error) {
        next(error)
    }
};

const updateAudioBook = async (req, res, next) => {
    try {
        const updated = await AudioBook.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updated) return res.status(404).json({
            message: "notfound"
        })

        res.json({
            message: "AudioBook updated",
            data: updated
        });
    } catch (error) {
        next(error)
    }
};

const deleteAudioBook = async (req, res, next) => {
    try {
        const deleted = await AudioBook.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({
            message: "not found"
        })

        res.json({
            message: "AudioBook deleted"
        });
    } catch (error) {
        next(error)
    }
};

module.exports = {
    addAudioBook,
    getAllAudioBooks,
    getAudioBookById,
    updateAudioBook,
    deleteAudioBook,
};
