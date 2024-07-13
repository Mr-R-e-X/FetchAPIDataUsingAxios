// Please do not change the prewritten code
let axios = require("axios");
const Solution = async () => {
  // Write your code here
  try {
    let response = await axios.get(
      "https://api.codingninjas.com/api/v3/event_tags"
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
Solution();
module.exports = Solution;
