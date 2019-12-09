--создаем таблицы
CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(256),
  artikul VARCHAR(256),
  description_of VARCHAR(256),
  image_url VARCHAR(256),
  price INT, 
  quantity INT,
  date_of Date,
  brand_id INT, 
  category_id INT
);
CREATE TABLE brands (
    brand_id SERIAL PRIMARY KEY,
    brand_name VARCHAR(256),
    country_of_brand VARCHAR(256)
);

CREATE TABLE categories(
  category_id SERIAL PRIMARY KEY,
  category_name VARCHAR(256)
);


