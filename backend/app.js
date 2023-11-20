const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3333;

app.use(cors());
app.use(express.json());

// Database
const conn = require('./db/conn');
conn();

app.listen(PORT, () => {
    console.log('Servidor Online!!')
});