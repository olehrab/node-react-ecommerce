const Product = require('../model/product');

module.exports.getAllProducts = (req, res) => {
	const limit = Number(req.query.limit) || 0;
	const sort = req.query.sort === 'desc' ? -1 : 1;

	Product.find()
		.limit(limit)
		.sort({ _id: sort })
		.then((products) => {
			res.status(200).json({
				status: true,
				message: 'Products fetched successfully',
				data: products,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				status: false,
				message: 'Failed to fetch products',
			});
		});
};


module.exports.getProduct = (req, res) => {
	const _id = req.params.id; // Assuming the route parameter is still 'id'

	Product.findById(_id)
		.then((product) => {
			if (product) {
				res.status(200).json({
					status: true,
					message: 'Product fetched successfully',
					data: product,
				});
			} else {
				res.status(404).json({
					status: false,
					message: 'Product not found',
				});
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				status: false,
				message: 'Failed to fetch product',
			});
		});
};


module.exports.getProductCategories = (req, res) => {
	Product.distinct('category')
		.then((categories) => {
			res.status(200).json({
				status: true,
				message: 'Categories fetched successfully',
				data: categories,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				status: false,
				message: 'Failed to fetch categories',
			});
		});
};


module.exports.getProductsInCategory = (req, res) => {
	const category = req.params.category;
	const limit = Number(req.query.limit) || 0;
	const sort = req.query.sort === 'desc' ? -1 : 1;

	Product.find({ category })
		.select(['-_id'])
		.limit(limit)
		.sort({ id: sort })
		.then((products) => {
			res.status(200).json({
				status: true,
				message: 'Products in category fetched successfully',
				data: products,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				status: false,
				message: 'Failed to fetch products in category',
			});
		});
};

module.exports.addProduct = (req, res) => {
	if (!req.body) {
		return res.status(400).json({
			status: false,
			message: 'Data is undefined',
		});
	}

	const product = new Product({
		title: req.body.title,
		price: req.body.price,
		description: req.body.description,
		image: req.body.image,
		category: req.body.category,
		quantity: req.body.quantity
	});

	product.save()
		.then((savedProduct) => {
			res.status(201).json({
				status: true,
				message: 'Product added successfully',
				data: savedProduct,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				status: false,
				message: 'Failed to add product',
			});
		});
};


module.exports.editProduct = (req, res) => {
	if (!req.body || !req.params.id) {
		return res.status(400).json({
			status: false,
			message: 'Invalid request data',
		});
	}

	Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then((updatedProduct) => {
			if (updatedProduct) {
				res.status(200).json({
					status: true,
					message: 'Product updated successfully',
					data: updatedProduct,
				});
			} else {
				res.status(404).json({
					status: false,
					message: 'Product not found',
				});
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				status: false,
				message: 'Failed to update product',
			});
		});
};


module.exports.deleteProduct = (req, res) => {
	if (!req.params.id) {
		return res.status(400).json({
			status: false,
			message: 'Product ID should be provided',
		});
	}

	Product.findByIdAndDelete(req.params.id)
		.then((deletedProduct) => {
			if (deletedProduct) {
				res.status(200).json({
					status: true,
					message: 'Product deleted successfully',
					data: deletedProduct,
				});
			} else {
				res.status(404).json({
					status: false,
					message: 'Product not found',
				});
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				status: false,
				message: 'Failed to delete product',
			});
		});
};

module.exports.searchProducts = (req, res) => {
    const searchQuery = req.query.query || '';

    Product.find({ title: { $regex: searchQuery, $options: 'i' } })
        .then((products) => {
            res.status(200).json({
                status: true,
                message: 'Products fetched successfully',
                data: products,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                status: false,
                message: 'Failed to fetch products',
            });
        });
};
