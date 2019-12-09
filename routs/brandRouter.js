const app = express();

const db = require("../controlers/brand");

app.get("/brands", db.getBrands);
app.get("/brands/:brand_id", db.getBrandById);
app.post("/brands", db.createBrand);
app.put("/brands/:brand_id", db.updateBrand);
app.delete("/brands/:brand_id", db.deleteBrand);
