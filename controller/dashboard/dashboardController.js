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
  DB.query(
    `INSERT INTO invoice(payment_method, order_total, customer_id) values(?, ?, (SELECT customer_id FROM customer WHERE customer_no = ?))
  `,
    [getUserPaymentMethod, getOrderTotal, getUserContact],
    (rows, err) => {
      if (err) {
        req.flash('error', 'Uh-oh, Please check your Mobile number or Try again 😥')
      }
      req.flash('success', `Your order has been successfully placed 😄`)
    }
  );
};

exports.onSearch = (req, res) => {
  res.redirect("/");
};
