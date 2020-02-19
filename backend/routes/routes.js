const routes = (app) => {
    app.route('/')
        .get((req, res) => {
            res.json("Hello World");
        })
}

export default routes;