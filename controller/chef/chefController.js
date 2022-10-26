const DB = require('../../config/getConnection');

exports.view = (req, res) => {
  DB.query(`SELECT * FROM CHEF`, (err, rows) => {
    !err
      ? res.render('chef/chefs', {
          rows: rows,
          total: rows.length,
        })
      : console.log(err);
  });
};

exports.find = (req, res) => {
  let searchValue = req.body.getSearchResults;
  DB.query(
    `SELECT * FROM CHEF WHERE chef_name LIKE ? OR chef_brigade LIKE ? OR chef_id LIKE ?`,
    ['%'+searchValue+'%', '%'+searchValue+'%', '%'+searchValue+'%'],
    (rows, err) => {
      console.log(rows);
      !err
        ? res.render('chef/chefs', {
            rows: rows,
            total: rows.length,
          })
        : console.log(err);
    }
  );
};
