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

export const addBook = (req, res) => {
    res.json("added book");
};

export const updateBook = (req, res) => {
    res.json("updated book");
};

export const getBookByIsbn = (req, res) => {
    Book.findOne({isbn: req.params.isbn}, (err, Book) => {
        if (err) {
            res.send(err);
        }
        res.json(Book);
    })
};

export const deleteBookByIsbn = (req, res) => {
    Book.findOneAndDelete({isbn: req.params.isbn}, (err, Book) => {
        if (err) {
            res.send(err);
        }
        res.json({
            message: "Deleted the following book",
            data: Book
        });
    })
};