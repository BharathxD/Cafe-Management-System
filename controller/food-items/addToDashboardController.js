const DB = require('../../config/getConnection');

exports.onSubmit = (req, res) => {
  DB.query(
      `INSERT INTO order_table SET order_name = '${itemName}', order_price = '${itemPrice}', order_chef = '${req.body.selectedChefName}', order_prescription = '${req.body.orderPrescription}'`,
      null,
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
