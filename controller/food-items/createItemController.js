const DB = require("../../config/getConnection");

exports.add = (req, res) => {
  res.render("food-items/createitem", {
    status: false,
    error: false,
    getSearchResults: "itemSearchResults",
  });
};

exports.onSubmit = (req, res) => {
  const {
    itemName,
    itemCategory,
    itemAvailability,
    itemPrice,
    itemLDescription,
  } = req.body;
  DB.query(
    `INSERT INTO item SET item_name = ?,  item_category = ?, item_availability = ?, item_price = ?, item_long_description = ?`,
    [itemName, itemCategory, itemAvailability, itemPrice, itemLDescription],
    (rows, err) => {
      if (!err) {
        res.render("food-items/createItem", {
          status: true,
          error: false,
          getSearchResults: "itemSearchResults",
        });
      } else {
        res.render("food-items/createItem", {
          status: false,
          error: true,
          getSearchResults: "itemSearchResults",
        });
        console.log(err);
      }
    }
  );
};
