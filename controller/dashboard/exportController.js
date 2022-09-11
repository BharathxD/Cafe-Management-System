const pool = require("../../config/sqlConnection");
const data_exporter = require("json2csv").Parser;

function getCSV(res, header, data, filename) {
  var json = new data_exporter({ header });
        var csv = json.parse(data);
        res.setHeader("Content-Type", "text/csv");
        res.setHeader(
          "Content-Disposition",
          `attachment;filename=${filename}.csv`,
        );
        res.status(200).end(csv);
}

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
        getCSV(res, header, data, 'Dashboard');
      } catch (e) {
        console.log(e);
      } 
        connection.release();
    });
  });
};

exports.item_csv = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("Connection: ", connection.threadId);
    connection.query("SELECT * FROM item", (err, rows) => {
      try {
        let data = JSON.parse(JSON.stringify(rows));
        var header = [
          "Item ID",
          "Item Name",
          "Item Availability",
          "Item Price",
          "Item Description",
        ];
        getCSV(res, header, data, 'Items');
      } catch (e) {
        console.log(e);
      } 
        connection.release();
    });
  });
};

exports.user_csv = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("Connection: ", connection.threadId);
    connection.query("SELECT * FROM user", (err, rows) => {
      try {
        let data = JSON.parse(JSON.stringify(rows));
        var header = [
          "University ID",
          "First Name",
          "Last Name",
          "Email",
          "Mobile",
        ];
        getCSV(res, header, data, 'Users');
      } catch (e) {
        console.log(e);
      } 
        connection.release();
    });
  });
};

exports.chef_csv = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("Connection: ", connection.threadId);
    connection.query("SELECT * FROM chef", (err, rows) => {
      try {
        let data = JSON.parse(JSON.stringify(rows));
        var header = [
          "Chef ID",
          "Chef Name",
          "Chef Contact",
          "Chef Brigade",
        ];
        getCSV(res, header, data, 'Chefs');
      } catch (e) {
        console.log(e);
      } 
        connection.release();
    });
  });
};