DROP TABLE IF EXISTS listing_categories;
DROP TABLE IF EXISTS listings;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  bio TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE listings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(150) NOT NULL,
  author VARCHAR(150) NOT NULL,
  isbn VARCHAR(20),
  description TEXT,
  book_condition VARCHAR(50),
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE listing_categories (
  listing_id INT NOT NULL,
  category_id INT NOT NULL,
  PRIMARY KEY (listing_id, category_id),
  FOREIGN KEY (listing_id) REFERENCES listings(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO users (name, email, password, bio) VALUES
('Alice Smith', 'alice@example.com', 'password123', 'Loves classic fiction and book swaps.'),
('Bob Jones', 'bob@example.com', 'password123', 'Interested in tech and textbooks.'),
('Chloe Patel', 'chloe@example.com', 'password123', 'Enjoys non-fiction and self-help books.');

INSERT INTO listings (user_id, title, author, isbn, description, book_condition, status) VALUES
(1, 'The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565', 'Classic novel in good condition.', 'Good', 'Available'),
(2, 'Introduction to Algorithms', 'Cormen et al.', '9780262046305', 'Useful textbook for computing students.', 'Used', 'Available'),
(3, 'Atomic Habits', 'James Clear', '9781847941831', 'Popular self-help book.', 'Like New', 'Reserved');

INSERT INTO categories (name) VALUES
('Fiction'),
('Classic'),
('Textbook'),
('Computer Science'),
('Non-fiction'),
('Self-help');

INSERT INTO listing_categories (listing_id, category_id) VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(3, 5),
(3, 6);
