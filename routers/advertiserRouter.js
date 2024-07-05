const { Router } = require("express");
const { getAdvertiser, writeAdvertiser } = require("../db");

const { v4: uuidv4 } = require('uuid');


const advertiserRouter = Router();


advertiserRouter.get("/", async (req, res) => {
    const result = await getAdvertiser();
    console.log(result.toString());
    res.send(result);
    res.end();
})

advertiserRouter.get('/:email/:password', async (req, res) => {
    console.log(req);
    const { email, password } = req.params;  //destructuring
    const allAdvertiserJSON = await getAdvertiser();
    const allAdvertiser = JSON.parse(allAdvertiserJSON);
    const myAdvertiser = allAdvertiser.find(a => a.email == email && a.password == password);
    try {
        res.send(myAdvertiser);
    }
    catch (error) {
        res.send(null);
    }
    res.end();
})

advertiserRouter.get('/:id', async (req, res) => {
    console.log(req);
    const {id } = req.params;  //destructuring
    const allAdvertiserJSON = await getAdvertiser();
    const allAdvertiser = JSON.parse(allAdvertiserJSON);
    const myAdvertiser = allAdvertiser.find(a => a.id == id);
    try {
        res.send(myAdvertiser);
    }
    catch (error) {
        res.send(null);
    }
    res.end();
})


//axios.post('http://localhost:8080/users' , user);
advertiserRouter.post('/', async (req, res) => {
    const advertiser = req.body;
    // advertiser.id = uuidv4();
    const oldAdvertiser = JSON.parse(await getAdvertiser())
    oldAdvertiser.push(advertiser);
    await writeAdvertiser(oldAdvertiser)
    res.send('advertiser added ' + advertiser.password);
    res.end();
})

module.exports = { advertiserRouter };