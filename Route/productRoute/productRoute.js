const route = require('express').Router();
const path = require('path');
const Route = path.join(__dirname, '../');
const verify = require(path.join(Route, '../verify'));
const Product = require(path.join(Route, '../model/product'));
const Category = require(path.join(Route, '../model/category'));
const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');
const multer = require('multer');


// --setting multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })



//Add category
route.post('/add_category', async (req, res) => {
    try {
        const addCat = await Category.create(req.body);
        res.json({ addCat })
    } catch (error) {
        console.log(error);
    }
})


//Get all Product
route.get('/', async (req, res) => {

    try {
        const cat = await Category.find();
        // console.log(cat);
        
        const legthOfCategory=cat.length;
        const last10Product= await Product.find().sort({_id:-1}).limit(10);
        // console.log(cat);
        const comapnyWiseProduct=[];
        cat.map(async(e, index) => {
            let allProducts=await Product.find({p_brand:e.companyType})
            // comapnyWiseProduct.push(allProducts);
            key=e.companyType            
            comapnyWiseProduct.push(allProducts);            
            if((index+1)===legthOfCategory){
                res.json({comapnyWiseProduct,last10Product:last10Product,cat});
            }
            return comapnyWiseProduct;
        })
       
    } catch (error) {
        console.log(error)
    }

})
// Adding product
//remain to add verify
route.post('/upload_product', verify, upload.single('p_image'), async (req, res) => {
    // res.json({addProduct:addProduct});
    // const addProduct=await Product.create(req.body);
    const image = req.file.filename;
    const { p_brand, p_model, p_os, p_cellularTechnology, p_memoryStorage, p_color, p_screeSize, p_ram, p_battery, p_sim, p_camera, p_addDate, p_quantity, p_price, p_description } = req.body;
    try {
        console.log(req.user.isAdmin)
        if (req.user.isAdmin) {
            const addProduct = await Product.create({ p_image: image, p_brand, p_model, p_os, p_cellularTechnology, p_memoryStorage, p_color, p_screeSize, p_ram, p_battery, p_sim, p_camera, p_addDate, p_quantity, p_price, p_description });
            res.json({ addProduct: addProduct });
        } else {
            res.json("You are not user");
        }
    } catch (error) {
        console.log(error)
    }

})


//Updating and deleting product
//remain to add verify
route.post('/', upload.single('p_image'), async (req, res) => {
    if (req.params.deletid) {
        const deleteProduct = await findOneAndDelete({ _id: req.params.deleteid });
        res.json({ deleteProduct: deleteProduct });
    } else {
        if (req.file) {
            req.file.p_image = req.file.filename;
        }
        try {
            const updateProduct = await Product.findOneAndUpdate({ _id: req.params.updateid }, { $set: req.body }, { $new })
        } catch (error) {
            console.log(error)
        }
    }
})
module.exports = route;