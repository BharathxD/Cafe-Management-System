const DB = require('../../config/getConnection');

exports.edit = (req, res) => {
  DB.query(
    `SELECT * FROM chef WHERE chef_id = '${req.params.id}'`,
    null,
    (rows, err) => {
      !err
        ? res.render('chef/updatechef', {
            rows: rows,
            status: false,
            error: false,
            getSearchResults: 'chefSearchResults',
          })
        : console.log(err);
    }
  );
};

exports.onEdit = (req, res) => {
  const { chefID, chefName, chefContact, chefBrigade } = req.body;
  DB.query(
    `UPDATE chef SET chef_id = '${chefID}', chef_name = '${chefName}', chef_contact = '${chefContact}', chef_brigade = '${chefBrigade}' WHERE chef_id = '${chefID}'`,
    null,
    (rows, err) => {
      if (!err) {
        res.redirect('/chefs');
      } else {
        res.render('chef/updatechef', {
          status: false,
          error: true,
          getSearchResults: 'chefSearchResults',
          rows: rows,
        });
        console.log(err);
      }
    }
  );
};
