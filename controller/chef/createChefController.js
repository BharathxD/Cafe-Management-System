const pool = require("../../config/sqlConnection");

exports.add = (req, res) => {
  var num = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
  res.render("chef/createchef", {
    status: false,
    error: false,
    getSearchResults: 'chefSearchResults',
    randomID: num
  });
};

exports.onSubmit = (req, res) => {
  var num = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    const {chefName, chefContact, chefBrigade, chefNumber } =
      req.body;
    console.log("Connection: ", connection.threadId);
    connection.query(
      "INSERT INTO chef SET chef_id = ?, chef_name = ?, chef_contact = ?, chef_brigade = ?, chef_number = ?",
      [num, chefName, chefContact, chefBrigade, chefNumber],
      (err, rows) => {
        if (!err) {
          res.render("chef/createChef", {
            status: true,
            error: false,
            getSearchResults: 'chefSearchResults',
            randomID: num
          });
        } else {
          res.render("chef/createChef", {
            status: false,
            error: true,
            getSearchResults: 'chefSearchResults'
          });
          console.log(err);
        }
      }
    );
    connection.release();
  });
};
