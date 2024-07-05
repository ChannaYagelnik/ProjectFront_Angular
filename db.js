const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const APPARTMENT_DB_PATH = path.join(__dirname, 'data/appartment.json');
const ASVERTISER_DB_PATH = path.join(__dirname, 'data/advertiser.json');

const readFunc = promisify(fs.readFile);  //fs.readFile('path', ()=>{})  ||||  const text = await readFunc('path');
const writeFunc = promisify(fs.writeFile);

//advertiser
async function getAdvertiser() {
    return await readFromDB(ASVERTISER_DB_PATH);
}

async function writeAdvertiser(advertiser) {
    await writeToDB(ASVERTISER_DB_PATH, advertiser);
}



//appartment
async function getAppartment() {
    return await readFromDB(APPARTMENT_DB_PATH);
}

async function writeAppartment(appartment) {
    await writeToDB(APPARTMENT_DB_PATH, appartment);
}


//basic CRUD operations
async function readFromDB(path) {
    const data = await readFunc(path);
    return data;
}

async function writeToDB(path, data) {
    await writeFunc(path, JSON.stringify(data));
}

module.exports = { getAdvertiser, writeAdvertiser ,getAppartment, writeAppartment  }