const DB = require("../../config/getConnection");

exports.add = (req, res) => {
  res.render("chef/createchef", {
    status: false,
    error: false,
    getSearchResults: "chefSearchResults",
  });
};

exports.onSubmit = (req, res) => {
  const { chefName, chefContact, chefBrigade, chefNumber } = req.body;
  DB.query(
    `INSERT INTO chef SET chef_name = ?, chef_contact = ?, chef_brigade = ?, chef_number = ?`,
    [chefName, chefContact, chefBrigade, chefNumber],
    (rows, err) => {
      if (!err) {
        res.render("chef/createChef", {
          status: true,
          error: false,
          getSearchResults: "chefSearchResults",
        });
      } else {
        res.render("chef/createChef", {
          status: false,
          error: true,
          getSearchResults: "chefSearchResults",
        });
        console.log(err);
      }
    }
  );
};
