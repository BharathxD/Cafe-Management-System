const DB = require("../../config/getConnection");

exports.view = (req, res) => {
  DB.query(`SELECT * FROM ORDER_TABLE`, null, (rows, err) => {
    total = 0;
    rows.forEach((element) => {
      total += element.order_price;
    });
    !err
      ? res.render("dashboard/dashboard", {
          rows: rows,
          total: total,
          bill: total == 0 ? false : true,
          actualTotal: total || 0,
          afterGST: total * 0.025 || 0,
          withGST: total + total * 0.025 || 0,
          withRoundedTotal: total + total * 0.025 || 0,
        })
      : console.log(err);
  });
};

exports.find = (req, res) => {
  const { getUserPaymentMethod, getOrderTotal, getUserContact } = req.body;
  console.log(getUserPaymentMethod, getOrderTotal, getUserContact);
  DB.query(
    `INSERT INTO invoice(payment_method, order_total, customer_id) values('${getUserPaymentMethod}', '${getOrderTotal}', (SELECT customer_id FROM customer WHERE customer_no = ${getUserContact}))
  `,
    null,
    (rows, err) => {
      if(err) { console.log(err) }
      res.redirect("/");
    }
  );
};

exports.onSearch = (req, res) => {
  res.redirect("/");
};
