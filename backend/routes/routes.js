import { 
    getBooks, 
    addBook, 
    updateBook,
    getBookByIsbn, 
    deleteBookByIsbn
} from "../controllers/bookController";

const routes = (app) => {
    // Get all books
    app.route('/books')
        .get(getBooks)

    app.route('/book')
        // Add or update book
        .post(addBook)
        .put(updateBook)

    app.route('/book/isbn/:isbn')
        // Get book by isbn
        .get(getBookByIsbn)
        // Delete book by isbn
        .delete(deleteBookByIsbn)
}
 
export default routes;
