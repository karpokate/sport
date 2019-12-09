const app = express();

const db = require("../controlers/category");

app.get("/categories", db.getCategories);
app.get("/categories/:category_id", db.getCategoryById);
app.post("/categories", db.createCategory);
app.put("/categories/:category_id", db.updateCategory);
app.delete("/categories/:category_id", db.deleteCategory);
