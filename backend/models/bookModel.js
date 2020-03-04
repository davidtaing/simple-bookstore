import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: [String],
        required: true,
    },
    isbn: {
        type: String,
        required: true,
    },
    isbn13: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
})

export const getCoverPhoto = (isbn) => {return `http://covers.openlibrary.org/b/isbn/${this.isbn}-L.jpg`}
