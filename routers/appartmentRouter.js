const { Router } = require("express");
const { getAppartment, getAdvertiser, writeAppartment } = require("../db");


const appartmentRouter = Router();


appartmentRouter.get("/", async (req, res) => {
    const result = await getAppartment();
    console.log(result.toString());
    res.send(result);
    res.end();
})

appartmentRouter.get('/city/:city', async (req, res) => {
    console.log(req);
    const { city } = req.params;  //destructuring
    const allAppartmentJSON = await getAppartment();
    const allAppartment = JSON.parse(allAppartmentJSON);
    const myAppartment = allAppartment.filter(a => a.city == city);
    try {
        res.send(myAppartment);
    }
    catch (error) {
        res.send(null);
    }
    res.end();
})

appartmentRouter.get('/price/:StartinPrice/:EndingPrice', async (req, res) => {
    console.log(req);
    const { StartinPrice, EndingPrice } = req.params;  //destructuring
    const allAppartmentJSON = await getAppartment();
    const allAppartment = JSON.parse(allAppartmentJSON);
    const myAppartment = allAppartment.filter(a => a.cost >= StartinPrice && a.cost <= EndingPrice);
    try {
        res.send(myAppartment);
    }
    catch (error) {
        res.send(null);
    }
    res.end();
})

appartmentRouter.get('/id/:fName/:lName', async (req, res) => {
    // console.log(req);
    const { fName, lName } = req.params;  //destructuring
    const allAdvertiserJSON = await getAdvertiser();
    const allAdvertiser = JSON.parse(allAdvertiserJSON);
    const myAdvertiser = allAdvertiser.find(a => a.firstName == fName && a.lastName == lName);
    const idAdvertiser = myAdvertiser.id;
    const allAppartmentJSON = await getAppartment();
    const allAppartment = JSON.parse(allAppartmentJSON);
    const myAppartment = allAppartment.filter(a => a.idAdvertiser == idAdvertiser);
    try {
        res.send(myAppartment);
    }
    catch (error) {
        res.send(null);
    }
    res.end();
})
appartmentRouter.post('/', async (req, res) => {
    const appartment = req.body;
    const oldAppartment = JSON.parse(await getAppartment())
    oldAppartment.push(appartment);
    await writeAppartment(oldAppartment)

    res.send('appartment added ' + appartment.name);
    res.end();
})

module.exports = { appartmentRouter };