const pool = require("../../config/sqlConnection");

exports.add = (req, res) => {
  res.render("user/createUser", {
    status: false,
    error: false,
    getSearchResults: 'userSearchResults'
  });
};

exports.onSubmit = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    const { firstName, lastName, mobileNumber, collegeID, emailAddress } =
      req.body;
    console.log("Connection: ", connection.threadId);
    connection.query(
      "INSERT INTO USER SET id = ?, first_name = ?, last_name = ?, email = ?, phone = ?",
      [collegeID, firstName, lastName, emailAddress, mobileNumber],
      (err, rows) => {
        if (!err) {
          res.render("user/createUser", {
            status: true,
            error: false,
            getSearchResults: 'userSearchResults'
          });
        } else {
          res.render("user/createUser", {
            status: false,
            error: true,
            getSearchResults: 'userSearchResults'
          });
          console.log(err);
        }
      }
    );
    connection.release();
  });
};
