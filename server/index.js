// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize express app
const app = express();
const port = 5000;

// Middleware setup
app.use(bodyParser.json());  // Parse JSON datamongodb+srv://<db_username>:<db_password>@cluster.hozl3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster
app.use(cors(
    {
        origin: ["https://portfolio-v-frontend.vercel.app"],
        methods: ["POST","GET"],
        credentials: true
    }
));  // Allow cross-origin requests

// MongoDB Atlas connection URI
const dbURI = 'mongodb+srv://ambadkarvaishnavi667:Sunitaambadkar@signup.q9zwd.mongodb.net/porfolio_con?retryWrites=true&w=majority&appName=signup';

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));

// Define Contact Schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

// Create Contact model
const Contact = mongoose.model('Contact', contactSchema);
app.get("/",(req,res) =>
    {
        res.json("Hi");
    })

// POST route to handle contact form submissions
app.post('/submit-contact', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Save contact data to MongoDB
        const newContact = new Contact({ name, email, message });
        await newContact.save();

        // Send success response
        res.status(200).json({ message: 'Data inserted successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to insert data', error: err });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
