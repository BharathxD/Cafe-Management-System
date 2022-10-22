const DB = require('../../config/getConnection');

exports.read = (req, res) => {
    DB.query(`SELECT * FROM order_table WHERE order_id = '${req.params.id}'`,null, (rows, err) => {
        !err
          ? res.render('dashboard/readDashboard', {
              rows: rows,
              getSearchResults: 'orderSearchResults'
            })
          : console.log(err);
      });
  };