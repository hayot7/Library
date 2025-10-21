const mongoose = require("mongoose")


const audioBookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    audioUrl: {
        type: String,
        required: true,
    },
    desc: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("AudioBook", audioBookSchema)
