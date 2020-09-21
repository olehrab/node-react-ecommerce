const User = require('../model/user');
const jwt = require('jsonwebtoken');

module.exports.login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(400).json({
            status: false,
            message: 'Email and password are required'
        });
    }

    try {
        const user = await User.findOne({ email: email, password: password });

        if (user) {
            const token = jwt.sign({ user: email }, 'secret_key');
            return res.status(200).json({
                status: true,
                message: 'Login successful',
                token: token
            });
        } else {
            return res.status(401).json({
                status: false,
                message: 'Email or password is incorrect'
            });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: false,
            message: 'Internal server error'
        });
    }
};


module.exports.register = async (req, res) => {
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

