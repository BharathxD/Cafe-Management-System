const DB = require("../../config/getConnection");

exports.edit = (req, res) => {
  DB.query(
    `SELECT * FROM chef WHERE chef_id = ?`,
    [req.params.id],
    (rows, err) => {
      !err
        ? res.render("chef/updatechef", {
            rows: rows,
            status: false,
            error: false,
            getSearchResults: "chefSearchResults",
          })
        : console.log(err);
    }
  );
};

exports.onEdit = (req, res) => {
  const { chefID, chefName, chefContact, chefNumber, chefBrigade } = req.body;
  DB.query(
    `UPDATE chef SET chef_name = ?, chef_contact = ?, chef_number = ?, chef_brigade = ? WHERE chef_id = ?`,
    [chefName, chefContact, chefNumber, chefBrigade, chefID],
    (rows, err) => {
      if (!err) {
        req.flash('success', `${chefName} record has been Updated Successfully 😄`)
        res.redirect("/chefs");
      } else {
        req.flash('error', `${chefName} record can't be Updated at the moment 😥`)
        res.redirect("/chefs");
        console.log(err);
      }
    }
  );
};
