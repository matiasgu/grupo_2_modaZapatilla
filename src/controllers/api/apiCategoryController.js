const db = require("../../database/models");

const categoryAPI = {
    list: (req, res) => {
        db.Category.findAll()
            .then(categories => {
                let response = {};
                if (categories.length == 0) {
                    response = {
                        meta: {
                            status: 204,
                            total: categories.length,
                            url: "api/categories"
                        },
                        data: categories
                    };
                } else {
                    response = {
                        meta: {
                            status: 200,
                            total: categories.length,
                            url: "api/categories"
                        },
                        data: categories
                    };
                }
                return res.status(200).json(response);
            })
            .catch(() => {
                return res.status(500).json({
                    meta: {
                        status: 500,
                        error: "Internal server error",
                        url: "api/categories"
                    }
                });
            });
    }
};

module.exports = categoryAPI;
