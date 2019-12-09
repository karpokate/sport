const app = express();

const db = require("../controlers/products");

app.get("/products", db.getProducts);
app.get("/products/:product_id", db.getProductById);
app.post("/products", db.createProduct);
app.put("/products/:product_id", db.updateProduct);
app.delete("/products/:product_id", db.deleteProduct);
