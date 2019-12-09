const pool = require("../connect.js");
const getCategories = (request, response) => {
  pool.query(
    "SELECT * FROM Categories ORDER BY category_id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getCategoryById = (request, response) => {
  const category_id = parseInt(request.params.category_id);

  pool.query(
    "SELECT * FROM Categories WHERE category_id = $1",
    [category_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createCategory = (request, response) => {
  const { category_name, category_description } = request.body;

  pool.query(
    "INSERT INTO Categories (category_name, category_description) VALUES ($1, $2)",
    [category_name, category_description],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Category added with ID: ${result.insertId}`);
    }
  );
};

const updateCategory = (request, response) => {
  const category_id = parseInt(request.params.category_id);
  const { category_name, category_description } = request.body;

  pool.query(
    "UPDATE Categories SET category_name=$2, category_description=$3 WHERE category_id = $1",
    [category_id, category_name, category_description],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Category modified with ID: ${category_id}`);
    }
  );
};

const deleteCategory = (request, response) => {
  const category_id = parseInt(request.params.category_id);

  pool.query(
    "DELETE FROM Categories WHERE category_id = $1",
    [category_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Category deleted with ID: ${category_id}`);
    }
  );
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};
