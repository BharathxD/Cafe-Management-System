const DB = require("../../config/getConnection");

exports.onView = (req, res) => {
  DB.query(`SELECT * FROM customer`, null, (rows, err) => {
    !err
      ? res.render("Customer/ViewCustomer", {
          rows: rows,
          total: rows.length,
        })
      : console.log(err);
  });
};

exports.onSearch = (req, res) => {
  let searchValue = req.body.getSearchResults;
  DB.query(
    `SELECT * FROM customer WHERE customer_name LIKE ? OR customer_email LIKE ? OR customer_no LIKE ?`,
    ['%'+searchValue+'%', '%'+searchValue+'%', '%'+searchValue+'%'],
    (rows, err) => {
      !err
        ? res.render("Customer/ViewCustomer", {
            rows: rows,
            total: rows.length,
          })
        : console.log(err);
    }
  );
};
