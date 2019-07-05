
const products = require("../products.json")

const getProduct = (req, res) => {
    console.log(req.params);
    const findProduct = products.filter(product => product.id === +req.params.id);
    if (findProduct.length > 0){
        res.json(findProduct[0]);
    } else {
        res.status(500).json("Item not in list!")
    }
}


module.exports = getProduct;