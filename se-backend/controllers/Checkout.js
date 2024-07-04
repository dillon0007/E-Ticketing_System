require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// POST api/checkout
const Checkout = async (req, res) => {
  try {
    const amount = req.body.amount;
    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Ticket",
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "",
      cancel_url: "",
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { Checkout };
