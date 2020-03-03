const routes = (app) => {
    app.route('/books')
        .get((req, res) => {})

    app.route('/book')
        .get((req, res) => {})
        .post((req, res) => {})
        .delete((req, res) => {})

    app.route('/user/:_id')
        .get((req, res) => {})
}
 
export default routes;
