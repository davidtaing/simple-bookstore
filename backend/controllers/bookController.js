import mongoose from "mongoose";
import { BookSchema } from "../models/bookModel";

const Book = mongoose.model('Book', BookSchema);

export const getBooks = (req, res) => {
    return 0;
};

export const addOrUpdateBook = (req, res) => {
    return 0;
}

export const getBookByIsbn = (req, res) => {
    return 0;
}

export const deleteBookByIsbn = (req, res) => {
    return 0;
}