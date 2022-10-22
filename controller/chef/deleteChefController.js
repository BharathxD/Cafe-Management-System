const DB = require("../../config/getConnection");

exports.delete = (req, res) => {
  DB.query(
    `DELETE FROM chef WHERE chef_id = '${req.params.id}'`,
    null,
    (rows, err) => {
      !err ? res.redirect("/chefs") : console.log(err);
    }
  );
};
