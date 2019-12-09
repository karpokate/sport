const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

//const dbB = require("./controlers/brand");
const dbC = require("./controlers/category");
const dbP = require("./controlers/products");

const brandRouter = require("./routs/brandRouter");
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

app.get("/products", dbP.getProducts);
app.get("/products/:product_id", dbP.getProductById);
app.post("/products", dbP.createProduct);
app.put("/products/:product_id", dbP.updateProduct);
app.delete("/products/:product_id", dbP.deleteProduct);

/*app.get("/brands", dbB.getBrands);
app.get("/brands/:brand_id", dbB.getBrandById);
app.post("/brands", dbB.createBrand);
app.put("/brands/:brand_id", dbB.updateBrand);
app.delete("/brands/:brand_id", dbB.deleteBrand);
*/
app.get("/categories", dbC.getCategories);
app.get("/categories/:category_id", dbC.getCategoryById);
app.post("/categories", dbC.createCategory);
app.put("/categories/:category_id", dbC.updateCategory);
app.delete("/categories/:category_id", dbC.deleteCategory);

brandRouter.GET();
brandRouter.GET_ONE;
brandRouter.UPDATE;
brandRouter.POST;
brandRouter.DELETE;
