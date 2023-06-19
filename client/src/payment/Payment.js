import axios from 'axios';
import React, { useState } from 'react';
import Razorpay from 'react-razorpay';

const PaymentComponent = () => {
    const [paymentStatus, setPaymentStatus] = useState('');

    const handlePaymentResponse = (response) => {
        if (response.razorpay_payment_id) {
            setPaymentStatus('success');
            // Payment success handling
        } else {
            setPaymentStatus('failure');
            // Payment failure handling
        }
    };

    const handleOpenPayment = (amount, orderID) => {

        const options = {
            "key": "rzp_test_hNws7mKsb33CzM",
            "amount": Number(amount * 100),
            "currency": "INR",
            "name": "Dr. XYZ",
            "order_id": orderID,
            "handler": function (response) {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
        };
        const rzp = new window.Razorpay(options)
        rzp.open();
    }

    const handlePayment = async (e) => {
        e.preventDefault();

        try {
            const amount = 500;
            const { data } = await axios.post("http://localhost:5000/orders", {
                amount
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });

            const orderID = data.order_id;
            handleOpenPayment(amount, orderID);

        } catch (error) {
            console.log('Payment Error: ', error.message);
        }
    };

    return (
        <div>
            <h1>This is the Payment Page</h1>
            <button onClick={handlePayment}>Payment</button>
            {paymentStatus && <p>Payment Status: {paymentStatus}</p>}
        </div>
    );
};

export default PaymentComponent;

