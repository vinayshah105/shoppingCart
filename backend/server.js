import express from 'express';
import { productList } from './data.js';

const app = express();

//Here app server take get request and it has 2 argument URL and callback req,res arg.
// Here productList is variable/component in which there is data stored
app.get('/api/products', (req, res) => {
    res.send(productList)
})

//port is predefined and that provide temporary port
const port = process.env.PORT || 5000;

//this will start server
app.listen(port, () => {
    console.log(`server start at http://localhost:${port}`)
});