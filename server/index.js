const express = require("express");
const app = express();
const getProduct = require("./getProduct")
const getProducts = require("./getProducts");

app.get("/", (req, res) => {
    console.log("hello this is a get request");
    res.json("Hello this was a get request!");
})



app.get("/api/products", getProducts);

app.get("/api/products/:id", getProduct)

app.listen(2020, () => {console.log
("server running on port 2020");
});
