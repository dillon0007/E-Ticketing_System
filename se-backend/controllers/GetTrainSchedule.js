require("dotenv").config();
const axios = require("axios");

// POST api/gettrainschedule
// @public

const GetTrainSchedule = async (req, res) => {
  try {
    const { trainNo } = req.body;

    if (!trainNo) {
      return res.status(400).json({ msg: "Please enter train number" });
    }

    const url = `https://irctc1.p.rapidapi.com/api/v1/getTrainSchedule?trainNo=${trainNo}`;

    const response = await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": process.env.X_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.X_RAPID_API_HOST,
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {}
};

module.exports = { GetTrainSchedule };
