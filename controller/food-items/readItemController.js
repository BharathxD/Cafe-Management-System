const DB = require('../../config/getConnection');

exports.read = (req, res) => {
    DB.query('SELECT * FROM ITEM WHERE item_id = ?',[req.params.itemid], (rows, err) => {
        !err
          ? res.render('food-items/readItem', {
              rows: rows,
              getSearchResults: 'itemSearchResults'
            })
          : console.log(err);
      });
  };