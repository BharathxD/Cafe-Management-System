const DB = require("../../config/getConnection");
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
  DB.query("SELECT * FROM ORDER_TABLE", null, (rows, err) => {
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
    });
};

exports.item_csv = (req, res) => {
  DB.query("SELECT * FROM item", null, (rows, err) => {
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
    });
};

exports.customer_csv = (req, res) => {
  DB.query("SELECT * FROM customer", null, (rows, err) => {
      try {
        let data = JSON.parse(JSON.stringify(rows));
        var header = [
          "Customer ID",
          "Customer Name",
          "Customer Email",
          "Customer Mobile",
        ];
        getCSV(res, header, data, 'Customer');
      } catch (e) {
        console.log(e);
      } 
    });
};

exports.chef_csv = (req, res) => {
  DB.query("SELECT * FROM chef", null, (rows, err) => {
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
    });
};

exports.invoice_csv = (req, res) => {
  DB.query("SELECT invoice_id, customer_name, customer_no, customer_email, payment_method, order_total FROM invoice INNER JOIN customer", null, (rows, err) => {
      try {
        let data = JSON.parse(JSON.stringify(rows));
        var header = [
          "Invoice ID",
          "Customer Name",
          "Customer Email",
          "Payment Meethod",
          "Order Total"
        ];
        getCSV(res, header, data, 'Invoice');
      } catch (e) {
        console.log(e);
      } 
    });
};