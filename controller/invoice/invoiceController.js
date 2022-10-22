const DB = require("../../config/getConnection");

exports.view = (req, res) => {
  DB.query(
    `SELECT * FROM invoice INNER JOIN customer USING(customer_id);`,
    null,
    (rows, err) => {
      res.render("invoice/invoice", {
        rows: rows,
        total: rows.length,
      });
    }
  );
};

exports.find = (req, res) => {
  res.render("invoice/invoice");
};

exports.onDelete = (req, res) => {
  DB.query(
    `DELETE FROM invoice WHERE invoice_id = "${req.params.id}"`,
    null,
    (rows, err) => {
      !err ? res.redirect("/Invoice") : console.log(err);
    }
  );
};
