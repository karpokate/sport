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
    price,
    quantity,
    date_of
  } = request.body;

  pool.query(
    "INSERT INTO Products (product_name, artikul, description_of, image_url, price, quantity, date_of) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [
      product_name,
      artikul,
      description_of,
      image_url,
      price,
      quantity,
      date_of
    ],
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
    price,
    quantity,
    date_of
  } = request.body;

  pool.query(
    "UPDATE Products SET product_name=$2, artikul=$3, description_of=$4, image_url=$5, price=$6, quantity=$7, date_of=$8 WHERE product_id = $1",
    [
      product_id,
      product_name,
      artikul,
      description_of,
      image_url,
      price,
      quantity,
      date_of
    ],
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
    [brand_name],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Brand deleted with ID: ${brand_id}`);
    }
  );
};

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
  const { category_name } = request.body;

  pool.query(
    "INSERT INTO Categories (category_name) VALUES ($1)",
    [category_name],
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
  const { category_name } = request.body;

  pool.query(
    "UPDATE Categories SET category_name=$2 WHERE category_id = $1",
    [category_name],
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
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};
