INSERT INTO products
    (product_name, artikul, description_of, image_url, price,quantity, date_of, brand_id, category_id)
VALUES
    ("Boot","VB23","This is profesional shoes for winter sportsmen.", "http://img_url", "100", "5", "01/01/19","1","1"),
    ("T-shirt", "TTR61", "White T-shirt for real men", "http://img_url","50", "9", "03/09/18","3","2"),
    ("Ski", "NM12", "Profesional Ski", "http://img_url", "2000", "2", "08/08/19","2","3")
    
INSERT INTO brands
    (brand_name, country_of_brand)
VALUES
    ("Adidas", "Germany"),
    ("Puma", "USA"),
    ("CAT", "USA")

INSERT INTO categories
    (category_name, category_description)
VALUES
    ("Shoes","This is shoes category."),
    ("Wear", "This is wear category."),
    ("Winter season","This is winter season category.")