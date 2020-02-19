import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import routes from './routes/routes';

const app = express();
const PORT = 3000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/simple-library', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// parser setup
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// CORS setup
app.use(cors());

// routes
routes(app);

app.get("/", (req, res) => {
    res.send(`Application is running on port ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})