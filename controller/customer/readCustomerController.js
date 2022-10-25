const DB = require('../../config/getConnection');

exports.onRead = (req, res) => {

      DB.query('SELECT * FROM customer WHERE customer_id = ?',[req.params.id], (rows, err) => {
        !err ?
          res.render('Customer/ReadCustomer', {
              rows: rows,
              getSearchResults: 'userSearchResults'
          })
        :
          console.log(err);
      });
  };