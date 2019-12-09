const pool = require("../connect.js");

const getBrands = (request, response) => {
  pool.query("SELECT * FROM Brands ORDER BY brand_id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getBrandById = (request, response) => {
  const brand_id = parseInt(request.params.brand_id);

  pool.query(
    "SELECT * FROM Brands WHERE brand_id = $1",
    [brand_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createBrand = (request, response) => {
  const { brand_name, country_of_brand } = request.body;

  pool.query(
    "INSERT INTO Brands (brand_name,country_of_brand) VALUES ($1, $2)",
    [brand_name, country_of_brand],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Brand added with ID: ${result.insertId}`);
    }
  );
};

const updateBrand = (request, response) => {
  const brand_id = parseInt(request.params.brand_id);
  const { brand_name, country_of_brand } = request.body;

  pool.query(
    "UPDATE Brands SET brand_name=$2, country_of_brand=$3 WHERE brand_id = $1",
    [brand_name, country_of_brand],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Brand modified with ID: ${brand_id}`);
    }
  );
};

const deleteBrand = (request, response) => {
  const brand_id = parseInt(request.params.brand_id);

  pool.query(
    "DELETE FROM Brands WHERE brand_id = $1",
    [brand_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Brand deleted with ID: ${brand_id}`);
    }
  );
};

module.exports = {
  getBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand
};
