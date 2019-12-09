const pool = require("./connect.js");

const getProducts = (request, response) => {
  pool.query(
    "SELECT * FROM Products ORDER BY product_id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getProductById = (request, response) => {
  const product_id = parseInt(request.params.product_id);

  pool.query(
    "SELECT * FROM Products WHERE product_id = $1",
    [product_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createProduct = (request, response) => {
  const {
    product_name,
    artikul,
    description_of,
    image_url,
    price
  } = request.body;

  pool.query(
    "INSERT INTO Products (product_name, artikul, description_of, image_url, price) VALUES ($1, $2, $3, $4, $5)",
    [product_name, artikul, description_of, image_url, price],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Product added with ID: ${result.insertId}`);
    }
  );
};

const updateProduct = (request, response) => {
  const product_id = parseInt(request.params.product_id);
  const {
    product_name,
    artikul,
    description_of,
    image_url,
    price
  } = request.body;

  pool.query(
    "UPDATE Products SET product_name=$2, artikul=$3, description_of=$4, image_url=$5, price=$6 WHERE product_id = $1",
    [product_id, product_name, artikul, description_of, image_url, price],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Product modified with ID: ${product_id}`);
    }
  );
};

const deleteProduct = (request, response) => {
  const product_id = parseInt(request.params.product_id);

  pool.query(
    "DELETE FROM Products WHERE product_id = $1",
    [product_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Product deleted with ID: ${product_id}`);
    }
  );
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
