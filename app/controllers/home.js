const path = require("path");

module.exports = {
  index: (req, res) => {
    //res.status(200).send('<h2> Hello World</h2>');
    res.sendFile(path.join(__dirname, "../views/index.html"));
  },
};
