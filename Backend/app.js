require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51PrkOXCL8GJ43t3V7zkignahzYbRBTCE17mKdQVfaOXwljKFpyyDYBshPpMezdOBMDS9lYgqi8GdYYHx4N9pik3Q00FJDAiuhb");

app.use(express.json());
app.use(cors());

// checkout api
app.post("/api/create-checkout-session",async(req,res)=>{
    const {amount,desc} = req.body;


    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: desc, // description of the item
              },
              unit_amount: amount * 100, // convert amount to cents
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "http://localhost:3000/sucess",
        cancel_url: "http://localhost:3000/cancel",
      });

    res.json({id:session.id})
 
})


app.listen(7000,()=>{
    console.log("server start")
})