const pool = require("../config/db");
const queries = require("../model/queries");
const bcrypt = require("bcrypt");
const { jwtToken } = require("../utils/jasonwebtoken");

const GetData = (req, res) => {
  pool.query(queries.getData, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).send(result.rows);
  });
};

const InsertData = async (req, res) => {
  const { id, name, email } = req.body;
  const { password } = req.body;
  const hashedpassword = await bcrypt.hash(password, 10);
  pool.query(queries.CheckEmailExists, [email], (error, result) => {
    if (result.rows.length) {
      return res.send("email already exists");
    }
    pool.query(
      queries.InsertQuery,
      [id, name, email, hashedpassword],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.status(201).send("user created sucessfully");
      }
    );
  });
};

const UserLogin = (req, res) => {
  const { email, password } = req.body;
  pool.query(queries.EmailSelector, [email], async (error, result) => {
    if (result.rows.length === 0) {
      return res.status(401).send("email is incorrect");
    }    
    let Tokens = jwtToken(result.rows[0]);
    const resultPassword = await bcrypt.compare(
      password,
      result.rows[0].password
    );
    if (resultPassword) {
      return res.status(200).json(Tokens);
    }
    return res.status(401).send("password incorrect")
  });
};
module.exports = {
  InsertData,
  UserLogin,
  GetData,
};
