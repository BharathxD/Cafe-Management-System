const DB = require('../../config/getConnection');

exports.add = (req, res) => {
  res.render('food-items/createitem', {
    status: false,
    error: false,
    getSearchResults: 'itemSearchResults',
  });
};

exports.onSubmit = (req, res) => {
    const { itemName, itemCategory, itemAvailability,itemPrice, itemLDescription } = req.body;
    DB.query(
      `INSERT INTO item SET item_name = '${itemName}',  item_category = '${itemCategory}', item_availability = '${itemAvailability}', item_price = '${itemPrice}', item_long_description = '${itemLDescription}'`,
      null,
      (rows, err) => {
        if (!err) {
          res.render('food-items/createItem', {
            status: true,
            error: false,
            getSearchResults: 'itemSearchResults',
          });
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
