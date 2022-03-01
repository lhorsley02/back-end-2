const express = require("express");
const cors = require("cors");
const SERVER_PORT = 4004

const {getHouses, deleteHouse, createHouse, updateHouse} = require('./controller')

const app = express();


app.use(express.json());
app.use(cors());

app.get('/api/houses', getHouses);
app.delete('/api/houses/:id', deleteHouse);
app.post('/api/movies', createHouse)
app.put('/api/houses/:id', updateHouse)



app.listen(SERVER_PORT, () => {
    console.log(`Docked at port ${SERVER_PORT}`)
});