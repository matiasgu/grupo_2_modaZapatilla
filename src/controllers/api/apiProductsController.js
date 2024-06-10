const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const productAPI = {
    list: (req, res) => {
        let { title, brand, price, category } = req.query;
        console.log(typeof category);
        db.Product.findAll({
            include: ["images"],
            where: {
                title: {
                    [Op.like]: `%${title ? title : ""}%`,
                },
                brand: {
                    [Op.like]: `%${brand ? brand : ""}%`,
                },
                price: {
                    [Op.lte]: price ? price : 9999999999,
                },
            },
            category: [category ? [category, "ASC"] : ["id", "ASC"]],
        })
            .then((products) => {
                let respuesta = {};
                if (products.length == 0) {
                    respuesta = {
                        meta: {
                            status: 204,
                            total: products.length,
                            url: "api/products",
                        },
                        data: products,
                    };
                } else {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: products.length,
                            url: "api/products",
                        },
                        data: products,
                    };
                }
                return res.status(200).json(respuesta);
            })
            .catch(() => {
                return res.status(500).json({
                    meta: {
                        status: 500,
                        error: "Internal server error",
                        url: "api/products",
                    },
                });
            });
    },
    detail: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: ["images", "colors"],
        })
            .then((product) => {
                if (product) {
                    return res.status(200).json({
                        meta: {
                            status: 200,
                            url: `api/products/${req.params.id}`,
                        },
                        data: product,
                    });
                } else {
                    return res.status(404).json({
                        meta: {
                            status: 204,
                            url: `api/products/${req.params.id}`,
                        },
                    });
                }
            })
            .catch(() => {
                return res.status(500).json({
                    meta: {
                        status: 500,
                        url: `api/products/${req.params.id}`,
                        error: "Internal server error",
                    },
                });
            });
    },
    delete: (req, res) => {
        db.Product.findByPk(req.params.id).then((product) => {
            if (!product) {
                res.status(404).json({
                    meta: {
                        status: 404,
                        url: `api/products/${req.params.id}`,
                    },
                });
                return;
            } else {
                product
                    .destroy()
                    .then(() => {
                        return res.status(200).json({
                            meta: {
                                status: 200,
                                url: `api/products/${req.params.id}`,
                            },
                        });
                    })
                    .catch(() => {
                        return res.status(500).json({
                            meta: {
                                status: 500,
                                url: `api/products/${req.params.id}`,
                                error: "Internal server error",
                            },
                        });
                    });
            }
        });
    },
    create: (req, res) => {
        db.Product.create(req.body, {
            include: [{ model: db.ProductImage, as: "images" }],
        })
            .then((product) => {
                return product
                    .setSizes(req.body.sizes)
                    .then(() => product.setColors(req.body.colors))
                    .then(() => {
                        return res.status(200).json({
                            meta: {
                                status: 200,
                                url: "api/products/create",
                            },
                        });
                    });
            })
            .catch(() => {
                return res.status(500).json({
                    meta: {
                        status: 500,
                        url: "api/products/create",
                        error: "Internal server error",
                    },
                });
            });
    },
};

module.exports = productAPI;