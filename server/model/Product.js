const connection = require('../controller/DatabaseController');

const getLastProducts = ()=>{
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM products LIMIT 20;`;
        let query = connection.query(sql, (err, result, field) => {
          if(err) return reject(err);
  
          resolve(Object.values(JSON.parse(JSON.stringify(result))));
        });
      });
}

module.exports = {getLastProducts};