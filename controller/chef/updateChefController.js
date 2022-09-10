const pool = require("../../database/sqlConnection");

exports.edit = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("Connection: ", connection.threadId);
    connection.query('SELECT * FROM chef WHERE chef_id = ?',[req.params.id], (err, rows) => {
      connection.release();
      !err
        ? res.render("chef/updatechef", {
            rows: rows,
            status: false,
            error: false,
            getSearchResults: 'chefSearchResults'
          })
        : console.log(err);
    });
  });
};

exports.onEdit = (req, res) => {
  const { chefID, chefName, chefContact, chefBrigade } =
      req.body;
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("Connection: ", connection.threadId);
    connection.query("UPDATE chef SET chef_id = ?, chef_name = ?, chef_contact = ?, chef_brigade = ? WHERE chef_id = ?",
    [chefID, chefName, chefContact, chefBrigade, req.params.id], (err, rows) => {
      connection.release();
      if (!err) {
        res.redirect("/chefs");
      } else {
        res.render("chef/updatechef", {
          status: false,
          error: true,
          getSearchResults: 'chefSearchResults',
          rows: rows,
        });
        console.log(err);
      }
    });
  });
};
