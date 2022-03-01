const houses = require('./db.json');
let globalID = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    deleteHouse: (req, res) => {
        let index = houses.findIndex(house => +house.id === +req.params.id);
        houses.splice(index, 1);
        res.status(200).send(houses);
    },
    createHouse: (req, res) => {
        req.body.price = +req.body.price;

        let newHouse = req.body;

        newHouse.id = globalID;

        houses.push(newMovie);

        res.status(200).sent(houses);
        globalID++
    },
    updateHouse: (req, res) => {
        let {id} = req.params;
        let {type} = req.body;

        let index = houses.findIndex(house => +house.id === +id);

        if(houses[index].price === 0 && type === 'minus') {
            res.status(400).send('Price cannot be less than 0');
        } else if(type === 'minus') {
            houses[index].price -= 10000;
            res.status(200).send(houses);
        } else if(type === 'plus') {
            houses[index].price += 10000;
            res.status(200).send(houses);
        } else {
            res.sendStatus(400);
        }
    }
}
