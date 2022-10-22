const DB = require('../../config/getConnection');

exports.read = (req, res) => {
  DB.query(
    `SELECT * FROM CHEF WHERE chef_id = '${req.params.chefid}'`,
    null,
    (rows, err) => {
      !err
        ? res.render('chef/readChef', {
            rows: rows,
            getSearchResults: 'chefSearchResults',
          })
        : console.log(err);
    }
  );
};
