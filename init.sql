CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(20),
  email VARCHAR(100),
  hashed_pass CHAR(60),
  display_name VARCHAR(20),
  pronouns VARCHAR(20),
  created DATE,
  last_logged_in DATE,
  bio VARCHAR(100),
  profile_picture BYTEA
);
CREATE TABLE IF NOT EXISTS fixations (
  id SERIAL PRIMARY KEY,
  user_id INT,
  title VARCHAR(20),
  image BYTEA,
  description TEXT,
  starred BOOLEAN,
  created DATE,
  last_edited DATE,
  CONSTRAINT fk_user_id FOREIGN KEY (user_id)
  REFERENCES users(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS infodumps (
  id SERIAL PRIMARY KEY,
  fixation_id INT,
  author_id INT,
  title VARCHAR(20),
  content TEXT,
  image BYTEA,
  pinned BOOLEAN,
  created DATE,
  last_edited DATE,
  CONSTRAINT fk_fixation_id FOREIGN KEY (fixation_id)
  REFERENCES fixations(id) ON DELETE CASCADE,
  CONSTRAINT fk_author_id FOREIGN KEY (author_id)
  REFERENCES users(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS tags (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  description VARCHAR(100)
);
-- Creating the join table between tags and users (many-to-many) --
CREATE TABLE IF NOT EXISTS userTags (
  id SERIAL PRIMARY KEY,
  user_id INT,
  tag_id INT,
  CONSTRAINT fk_user_id FOREIGN KEY (user_id)
  REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_tag_id FOREIGN KEY (tag_id)
  REFERENCES tags(id) ON DELETE CASCADE
);
-- Creating the join table between infodumps and users (many-to-many) --
CREATE TABLE IF NOT EXISTS infodumpTags (
  id SERIAL PRIMARY KEY,
  infodump_id INT,
  tag_id INT,
  CONSTRAINT fk_infodump_id FOREIGN KEY (infodump_id)
  REFERENCES infodumps(id) ON DELETE CASCADE,
  CONSTRAINT fk_tag_id FOREIGN KEY (tag_id)
  REFERENCES tags(id) ON DELETE CASCADE
);
-- Creating the join table between fixations and users (many-to-many) --
CREATE TABLE IF NOT EXISTS fixationTags (
  id SERIAL PRIMARY KEY,
  fixation_id INT,
  tag_id INT,
  CONSTRAINT fk_fixation_id FOREIGN KEY (fixation_id)
  REFERENCES fixations(id) ON DELETE CASCADE,
  CONSTRAINT fk_tag_id FOREIGN KEY (tag_id)
  REFERENCES tags(id) ON DELETE CASCADE
);
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO admin;