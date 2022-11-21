const DB = require('../../config/getConnection');

exports.onView = (req, res) => {
  DB.query(
    'SELECT * FROM customer WHERE customer_id = ?',[req.params.id],
    (rows, err) => {
      !err
        ? res.render('Customer/UpdateCustomer', {
            rows: rows,
            status: false,
            error: false,
            getSearchResults: 'userSearchResults'
          })
        : console.log(err);
    });
};

exports.onEdit = (req, res) => {
  const { customerName, customerEmail, customerNo } = req.body;
  DB.query('UPDATE customer SET customer_name = ?, customer_email = ?, customer_no = ? WHERE customer_id = ?',[customerName, customerEmail, customerNo, req.params.id],
    (rows, err) => {
      if (!err) {
        req.flash('success', `${customerName}'s record has been Updated Successfully 😄`)
        res.redirect('/customer');
      } else {
        req.flash('error', `${customerName}'s record can't be Updated at the moment 😥`)
        res.render('Customer/UpdateCustomer', {
          getSearchResults: 'userSearchResults'
        });
        console.log(err);
      }
    });
  
};
