const pool = require("../../database/sqlConnection");

exports.edit = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("Connection: ", connection.threadId);
    connection.query('SELECT * FROM USER WHERE id = ?',[req.params.id], (err, rows) => {
      connection.release();
      !err
        ? res.render("user/updateUser", {
            rows: rows,
            status: false,
            error: false
          })
        : console.log(err);
    });
  });
};

exports.onEdit = (req, res) => {
  const { firstName, lastName, mobileNumber, collegeID, emailAddress } =
      req.body;
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("Connection: ", connection.threadId);
    connection.query("UPDATE user SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE id = ?",
    [firstName, lastName, emailAddress, mobileNumber, req.params.id], (err, rows) => {
      connection.release();
      if (!err) {
        res.redirect("/ourteam");
      } else {
        res.render("user/updateUser", {
          status: false,
          error: true
        });
        console.log(err);
      }
    });
  });
};
