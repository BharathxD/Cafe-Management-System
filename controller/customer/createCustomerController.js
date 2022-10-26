const DB = require('../../config/getConnection');

exports.onView = (req, res) => {
  res.render('Customer/CreateCustomer', {
    status: false,
    error: false,
    getSearchResults: 'userSearchResults',
  });
};

exports.onSubmit = (req, res) => {
  const { customerName, customerNo, customerEmail } = req.body;
  DB.query(
    `INSERT INTO customer SET customer_name = ?, customer_no = ?, customer_email = ?`,
    [customerName,
      customerNo,
      customerEmail],
    (rows, err) => {
      if (!err) {
        console.log('Success');
        res.render('Customer/CreateCustomer', {
          status: true,
          error: false,
          getSearchResults: 'userSearchResults',
        });
      } else {
        res.render('Customer/CreateCustomer', {
          status: false,
          error: true,
          getSearchResults: 'userSearchResults',
        });
        console.log(err);
      }
    }
  );
};
