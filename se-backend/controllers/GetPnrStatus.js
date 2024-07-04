require("dotenv").config();
const axios = require("axios");

// POST api/getpnrstatus
// @public
const GetPnrStatus = async (req, res) => {
  try {
    const { pnrNumber } = req.body;

    if (!pnrNumber) {
      return res.status(400).json({ msg: "Please fill all the fields" });
    }

    const url = `https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${pnrNumber}`;

    const response = await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": process.env.X_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.X_RAPID_API_HOST,
      },
    });
    const data = await response.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { GetPnrStatus };
