const DB = require("../../config/getConnection");

exports.edit = (req, res) => {
  DB.query(
    `SELECT * FROM item WHERE item_id = '${req.params.id}'`,
    null,
    (rows, err) => {
      !err
        ? res.render("food-items/updateITem", {
            rows: rows,
            status: false,
            error: false,
            getSearchResults: "itemSearchResults",
          })
        : console.log(err);
    }
  );
};

exports.onEdit = (req, res) => {
  const { itemID, itemName, itemAvailability, itemPrice, itemLDescription } =
    req.body;
  DB.query(
    `UPDATE item SET item_name = '${itemName}', item_availability = '${itemAvailability}', item_price = '${itemPrice}', item_long_description = '${itemLDescription}' WHERE item_id = '${itemID}'`,
    null,
    (rows, err) => {
      if (!err) {
        res.redirect("/item");
      } else {
        res.render("food-items/updateItem", {
          status: false,
          error: true,
          getSearchResults: "itemSearchResults",
          rows: rows,
        });
        console.log(err);
      }
    }
  );
};
