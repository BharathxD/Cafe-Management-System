const DB = require("../../config/getConnection");

exports.edit = (req, res) => {
  DB.query(
    `SELECT * FROM item WHERE item_id = ?`,
    [req.params.id],
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
  const { itemID, itemName, itemAvailability, itemPrice, itemCategory, itemLDescription } =
    req.body;
  DB.query(
    `UPDATE item SET item_name = ?, item_availability = ?, item_price = ?, item_category = ?, item_long_description = ? WHERE item_id = ?`,
    [itemName, itemAvailability, itemPrice, itemCategory, itemLDescription, itemID],
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
