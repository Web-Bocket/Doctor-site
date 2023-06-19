const Razorpay = require('razorpay');

const OrderFun = async (req, res) => {
    try {
        const instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET });

        const { amount } = req.body;

        console.log(amount);

        const options = {
            amount: amount, // amount in the smallest currency unit
            currency: "INR"
        };

        const order = await instance.orders.create(options);
        console.log(order);

        return res.status(200).send({ message: "Order Created Successfully", order_id: order.id });
    } catch (err) {
        return res.status(500).json({ error: `Error creating order: ${err.message}` });
    }
};

const VerifyFun = async (req, res) => {
    res.send("Verify Working");
};

module.exports = { OrderFun, VerifyFun };
