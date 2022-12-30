const DB = require("../../config/getConnection");

const calculateTotal = (rows) => {
  let total = 0;
  rows.forEach((element) => {
    total += element.order_price;
  });
  return total;
};

const getOrderCount = (rows) => {
  let orderCount = 0;
  rows.forEach((element) => {
    orderCount++;
  })
  return orderCount;
}

exports.view = (req, res) => {
  DB.query(`SELECT * FROM ORDER_TABLE`, null, (rows, err) => {
    if (err) {
      console.log(err);
      return;
    }
    const total = calculateTotal(rows);
    const afterGST = total * 0.025;
    const withGST = total + afterGST;
    const withRoundedTotal = withGST.toFixed(2);
    res.render("dashboard/dashboard", {
      rows,
      orderCount: getOrderCount(rows),
      total,
      bill: total === 0 ? false : true,
      actualTotal: total || 0,
      afterGST,
      withGST,
      withRoundedTotal,
    });
  });
};

exports.find = (req, res) => {
  const { getUserPaymentMethod, getOrderTotal, getUserContact } = req.body;
  DB.query(
    `INSERT INTO invoice(payment_method, order_total, customer_id, order_date) 
     VALUES(?, ?, (SELECT customer_id FROM customer WHERE customer_no = ?), CURDATE())`,
    [getUserPaymentMethod, getOrderTotal, getUserContact],
    (rows, err) => {
      if (err) {
        console.log(err);
        req.flash(
          "error",
          "Uh-oh, Please check your Mobile number or Try again 😥"
        );
        return;
      }
      req.flash("success", `Your order has been successfully placed 😄`);
      res.redirect("/");
    }
  );
};

exports.onSearch = (req, res) => {
  res.redirect("/");
};
