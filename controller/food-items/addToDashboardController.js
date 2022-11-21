const DB = require('../../config/getConnection');

exports.onSubmit = (req, res) => {
  DB.query(
      `INSERT INTO order_table SET order_name = ?, order_price = ?, order_chef = ?, order_prescription = ?`,
      [itemName,
        itemPrice,
        req.body.selectedChefName,
        req.body.orderPrescription],
      (rows, err) => {
        if (!err) {
          res.redirect('/');
        } else {
          res.render('food-items/createItem', {
            status: false,
            error: true,
            getSearchResults: 'itemSearchResults',
          });
          console.log(err);
        }
      }
    );
};

exports.add = (req, res) => {
  DB.query(
      'SELECT item.item_name, chef.chef_name, item.item_price FROM item, chef WHERE item_id = ?',[req.params.id],(rows, err) => {
        itemName = rows[0].item_name;
        itemPrice = rows[0].item_price;
        if (!err) {
          res.render('food-items/addtodashboard', {
            status: false,
            error: false,
            getSearchResults: 'itemSearchResults',
            rows: rows,
          });
        } else { console.log(err); }
      }
    );
};