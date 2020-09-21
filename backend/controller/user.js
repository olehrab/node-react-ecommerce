const User = require('../model/user');

// module.exports.getAllUser = (req, res) => {
// 	const limit = Number(req.query.limit) || 0;
// 	const sort = req.query.sort == 'desc' ? -1 : 1;

// 	User.find()
// 		.select(['-_id'])
// 		.limit(limit)
// 		.sort({
// 			id: sort,
// 		})
// 		.then((users) => {
// 			res.json(users);
// 		})
// 		.catch((err) => console.log(err));
// };

// module.exports.getUser = (req, res) => {
// 	const id = req.params.id;

// 	User.findOne({
// 		id,
// 	})
// 		.select(['-_id'])
// 		.then((user) => {
// 			res.json(user);
// 		})
// 		.catch((err) => console.log(err));
// };

module.exports.addUser = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            status: false,
            message: 'Data is undefined',
        });
    }

    try {
        const userCount = await User.countDocuments();

        const user = new User({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
			phonenumber: req.body.phonenumber,
            role: req.body.role || "Customer",
            user_status: req.body.user_status || "inactive",
        });

        await user.save();
        return res.status(200).json({
            status: true,
            message: 'User registered successfully',
            user: user
        });
	} catch (err) {
        console.log(err);
        return res.status(500).json({
            status: false,
            message: 'Error creating user',
            error: err.message
        });
    }
};

// module.exports.editUser = (req, res) => {
// 	if (typeof req.body == undefined || req.params.id == null) {
// 		res.json({
// 			status: 'error',
// 			message: 'something went wrong! check your sent data',
// 		});
// 	} else {
// 		res.json({
// 			id: parseInt(req.params.id),
// 			email: req.body.email,
// 			username: req.body.username,
// 			password: req.body.password,
// 			name: {
// 				firstname: req.body.firstname,
// 				lastname: req.body.lastname,
// 			},
// 			address: {
// 				city: req.body.address.city,
// 				street: req.body.address.street,
// 				number: req.body.number,
// 				zipcode: req.body.zipcode,
// 				geolocation: {
// 					lat: req.body.address.geolocation.lat,
// 					long: req.body.address.geolocation.long,
// 				},
// 			},
// 			phone: req.body.phone,
// 		});
// 	}
// };

// module.exports.deleteUser = (req, res) => {
// 	if (req.params.id == null) {
// 		res.json({
// 			status: 'error',
// 			message: 'cart id should be provided',
// 		});
// 	} else {
// 		User.findOne({ id: req.params.id })
// 			.select(['-_id'])
// 			.then((user) => {
// 				res.json(user);
// 			})
// 			.catch((err) => console.log(err));
// 	}
// };
