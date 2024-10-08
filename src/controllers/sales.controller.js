//hacer un controlador 
const Sale =require("../models/sale.model")

const saleController = {
    list: async function (req,res) {
        try {
            const sales=await Sale.find();
            res.status(200).json({"sales": sales });
        } catch (error) {
            res.status(500).json(err);
        }
    },
    create: async function (req,res) {
        try {
            const sale = new Sale(req.body);
            const product= await Product.findById(req.body.product);
            sale.total = sale.quantity*product.price;
            await sale.save();
            res.status(200).json({"sales": sales });
        } catch (error) {
            res.status(500).json(err);
        }
    },
};

module.exports= saleController;