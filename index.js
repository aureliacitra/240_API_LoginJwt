const express = require('express');
const connectDatabase = require('./config/db');

const app = express();
const PORT = 3000;

// Middleware for parsing JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/api'));

// Asynchronous function to initialize the database connection and start the server
async function startServer() {
    await connectDatabase();
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

startServer();