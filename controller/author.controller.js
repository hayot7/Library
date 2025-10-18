const AuthorSchema = require("../schema/author.schema")

const getAllAuthors = async (req, res, next) => {
    try {
        const authors = await AuthorSchema.find()
        res.status(200).json(authors)
    } catch (error) {
       next(error)
    }
}

const search = async (req, res, next) => {
    try {
        const { name } = req.query

        const search = await AuthorSchema.find({
            full_name: { $regex: name, $options: "i" }
        })

        res.status(200).json({
            search
        })
    } catch (error) {
       next(error)
    }
}

const addAuthors = async (req, res, next) => {
    try {
        const { full_name, birth_date, death_date, img, bio, creativity, region, period } = req.body

        await AuthorSchema.create({ full_name, birth_date, death_date, img, bio, creativity, region, period })

        res.status(201).json({
            message: "Added new author"
        })

    } catch (error) {
       next(error)
    }
}

const getOneAuthors = async (req, res, next) => {
    try {
        const { name } = req.params   

        const foundedAuthor = await AuthorSchema.findOne({ full_name: name }) // ✅ "findByName(name)" o‘rniga to‘g‘risi

        if (!foundedAuthor) {
            return res.status(404).json({
                message: "Author not found"
            })
        }

        res.status(200).json(foundedAuthor)
    } catch (error) {
       next(error)
    }
}

const updateAuthors = async (req, res, next) => {
    try {
        const { full_name, birth_date, death_date, img, bio, creativity, region, period } = req.body
        const { id } = req.params
        const foundedAuthor = await AuthorSchema.findById(id.trim())
        res.status(404).json({
                message: "Author not found"
            })

        if (!foundedAuthor) {
            return res.status(404).json({
                message: "Update author"
            })
        }

        await AuthorSchema.findByIdUpdate(id, { full_name, birth_date, death_date, img, bio, creativity, region, period })
    } catch (error) {
       next(error)
    }
}

const deleteAuthor = async (req, res, next) => {
    try {
        const { id } = req.params
        const foundedAuthor = await AuthorSchema.findById(id.trim())

        if (!foundedAuthor) {
            return res.status(404).json({
                message: "Author not found"
            })
        }
        await AuthorSchema.findByIdAndDelete(id)

        res.status(200).json({
                message: "Delete author"
            })
    } catch (error) {
       next(error)
    }
}

module.exports = {
    getAllAuthors,
    search,
    getOneAuthors,
    addAuthors,
    updateAuthors,
    deleteAuthor
}
