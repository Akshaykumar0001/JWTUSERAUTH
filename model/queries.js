const getData = "SELECT * FROM jwtauth";
const CheckEmailExists = "SELECT s FROM jwtauth s where s.email =$1";
const InsertQuery =
  " INSERT INTO jwtauth(id, name, email, password) VALUES($1, $2, $3, $4)";
  const EmailSelector = "SELECT * FROM jwtauth WHERE email = $1"
module.exports = {
  CheckEmailExists,
  InsertQuery,
  EmailSelector,
  getData
};
