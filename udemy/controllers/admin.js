const Product = require("../models/product")

exports.getAddProduct = (req, res, next) => {

    res.render("admin/add-product", { pageTitle: "Add Product", path: "/admin/add-product" })

}

exports.postAddproduct = (req, res, next) => {
    // const obj = JSON.parse(JSON.stringify(req.body))
    // console.log(obj)
    const product = new Product(req.body.title)
    product.save()


    res.redirect("/")

}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {



        res.render("admin/products", { prods: products, pageTitle: "Admin Products", path: "/admin/products" })

    })
}

