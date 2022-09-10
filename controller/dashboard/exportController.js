const pool = require("../../config/sqlConnection");
const data_exporter = require("json2csv").Parser;

exports.csv = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("Connection: ", connection.threadId);
    connection.query("SELECT * FROM ORDER_TABLE", (err, rows) => {
      try {
        let data = JSON.parse(JSON.stringify(rows));
        var header = [
          "Order ID",
          "Item Name",
          "Chef",
          "Item Price",
          "Item Description",
        ];
        var json = new data_exporter({ header });
        var csv = json.parse(data);
        res.setHeader("Content-Type", "text/csv");
        res.setHeader(
          "Content-Disposition",
          "attachment;filename=dashboard.csv",
        );
        res.status(200).end(csv);
      } catch (e) {
        console.log(e);
      } 
        connection.release();
    });
  });
};
