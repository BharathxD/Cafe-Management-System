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
        req.flash('success', `${itemName} has been Updated Successfully 😄`)
        res.redirect("/item");
      } else {
        req.flash('error', `${itemName} can't be Updated at the moment 😥`)
        console.log(err);
        res.render("food-items/updateItem", {
          getSearchResults: "itemSearchResults",
          rows: rows,
        });
      }
    }
  );
};
