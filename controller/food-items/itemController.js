const DB = require('../../config/getConnection');

exports.view = (req, res) => {
  DB.query('SELECT * FROM ITEM', (err, rows) => {
      !err
        ? res.render('food-items/item', {
            rows: rows,
            total: rows.length
          })
        : console.log(err);
    });
};


exports.find= (req, res) => {
    let searchValue = req.body.getSearchResults;
   DB.query(`SELECT * FROM ITEM WHERE item_name LIKE '${searchValue}' OR item_availability LIKE '${searchValue}' OR item_id LIKE '${searchValue}'`,null, (rows, err) => {
      !err
        ? res.render('food-items/item', {
            rows: rows,
            total: rows.length
          })
        : console.log(err);
    });
};