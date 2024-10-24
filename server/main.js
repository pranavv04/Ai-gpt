const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("This is testing");
});

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generate = async (prompt) => {
    try {
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
        return result.response.text();
    } catch (error) {
        console.log(error);
    }
};

// Change GET to POST and use req.body for capturing data
app.post('/api/content', async (req, res) => {
    try {
        const data = req.body.question; // Use req.body to access POST data
        const result = await generate(data);
        res.send({
            "result": result
        });
    } catch (error) {
        console.log("error: " + error);
        res.status(500).send('Internal server error');
    }
});

app.listen(3000, () => console.log('server started'));
