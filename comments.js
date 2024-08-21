// Create web server
// Create a new express application
const express = require('express');
const app = express();

// Create a new router
const commentsRouter = express.Router();

// Add a GET route to the router
commentsRouter.get('/', (req, res) => {
    res.json({ message: 'Comments' });
});

// Add the router to the application
app.use('/comments', commentsRouter);

// Start the server
app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});