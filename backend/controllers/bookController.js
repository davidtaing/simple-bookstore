import mongoose from "mongoose";
import { BookSchema } from "../models/bookModel";

const Book = mongoose.model('Book', BookSchema);

export const getBooks = (req, res) => {
    Book.find({}, (err, Book) => {
        if (err) {
            res.send(err);
        }
        res.json(Book);
    })
};

export const addOrUpdateBook = (req, res) => {
    res.json("Add or Update Book");
}

export const getBookByIsbn = (req, res) => {
    res.json("Got a single book");
}

export const deleteBookByIsbn = (req, res) => {
    res.json("Deleted book");
}