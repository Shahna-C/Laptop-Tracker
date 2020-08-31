create schema if not exists  laptopdb;
use laptopdb;
CREATE TABLE
    laptop
    (
        id BIGINT NOT NULL,
        contact BOOLEAN NOT NULL,
        email VARCHAR (100),
        model VARCHAR (100),
        name VARCHAR (100),
        phone VARCHAR(100),
        purchase_date DATETIME,
        purchase_price NUMERIC,
        serial_number VARCHAR(100),
        PRIMARY KEY (id)
    );

CREATE TABLE
    hibernate_sequence
    (
        next_val BIGINT
    );

INSERT INTO laptop (id, contact, email, model, name, phone, serial_number, purchase_price)
  VALUES (1, 1, 'jeff@bikes.com', 'Sony Vaio - Notebook', 'Jeff Miller', '328-443-5555', 4419619200000, '1100');
INSERT INTO laptop (id, contact, email, model, name, phone, serial_number, purchase_price)
  VALUES (2, 0, 'samantha@bikes.com', 'Apple - Macbook Pro', 'Samantha Davis', '448-397-5555', 4419619200000, '1999');
INSERT INTO laptop (id, contact, email, model, name, phone, serial_number, purchase_price)
  VALUES (3, 1, 'dave@bikes.com', 'Asus - ZenBook', 'Dave Warren', '563-891-5555', 4419619200000, '2100');

INSERT INTO hibernate_sequence (next_val) VALUES (4);
