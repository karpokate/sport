const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const pool = require("./db/singleton");

const db = require("./queries");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/products", db.getProducts);
app.get("/products/:product_id", db.getProductById);
app.post("/products", db.createProduct);
app.put("/products/:product_id", db.updateProduct);
app.delete("/products/:product_id", db.deleteProduct);

app.get("/brands", db.getBrands);
app.get("/brands/:brand_id", db.getBrandById);
app.post("/brands", db.createBrand);
app.put("/brands/:brand_id", db.updateBrand);
app.delete("/brands/:brand_id", db.deleteBrand);

app.get("/categories", db.getCategories);
app.get("/categories/:category_id", db.getCategoryById);
app.post("/categories", db.createCategory);
app.put("/categories/:category_id", db.updateCategory);
app.delete("/categories/:category_id", db.deleteCategory);
