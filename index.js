const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000;

const chefs = require('./data/cardData.json')

app.use(cors())

app.get('/', (req, res) => {
res.send('Meal master server')
});

app.get('/chefs', (req, res) =>{
    res.send(chefs);
})

app.listen(port, () => {
    console.log(`The meal master API is running on port: ${port}`);
})