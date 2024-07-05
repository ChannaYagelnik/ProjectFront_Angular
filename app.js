const express = require('express');
const cors = require("cors");
const { appartmentRouter } = require("./routers/appartmentRouter");
const { advertiserRouter } = require("./routers/advertiserRouter")
// const {stopManager} = require('./middlewares/manangerStop');
const app = express();  //יצירת אובייקט בעל יכולות של שרת 

const PORT = 8080;


app.use((req, res, next) => {
    console.log("request arrived to server");
    next();
})
app.use(express.json()); //כדי שנוכל לקבל את הבאדי שנשלח - חייבים להשתמש ב-middleware
app.use(cors());         //השאה לכל הלקוחות בכל מחשב שהוא להפעיל את כל סוגי הבקשות
//בדוגמא שבהערה יש הגבלה רק על מקור אחד וללא פעולת מחיקה
/* app.use( cors({ 
                    origin: 'http://localhost:3000' , 
                    credentials :  true,  
                    methods: 'GET,PUT,POST,OPTIONS', 
                    allowedHeaders: 'Content-Type,
                    Authorization' 
                }));
*/
// app.use(stopManager);
app.use("/advertiser", advertiserRouter);
app.use("/appartment", appartmentRouter);

app.listen(PORT, (err) => {
    if (err)
        console.log('error while running server', err);
    else
        console.log('server is running in port: ' + PORT);
})


