DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
  userId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  fullName VARCHAR(256) NOT NULL,
  username VARCHAR(64) UNIQUE NOT NULL,
  avatarUrl VARCHAR(512),
  city VARCHAR(128),
  age INT,
  password VARCHAR(512) NOT NULL
);

-- La password de todos los usuarios es iissi
INSERT INTO Users (userId, fullName, username, password, avatarUrl, city, age) VALUES
	(1, 'Carlos Arévalo', 'carevalo', 'pbkdf2:sha256:150000$MjN72ikE$897d960e08be9150d943c747ff6194904fd325821945ff7d7f5c1d1d08b40bbd', 'https://randomuser.me/api/portraits/men/62.jpg', 'Sevilla', 25),
	(2, 'Beatriz Barrios', 'beatriz', 'pbkdf2:sha256:150000$MjN72ikE$897d960e08be9150d943c747ff6194904fd325821945ff7d7f5c1d1d08b40bbd', 'https://randomuser.me/api/portraits/women/10.jpg', 'Barcelona', 30),
	(3, 'Claudia Carmona', 'claudia', 'pbkdf2:sha256:150000$MjN72ikE$897d960e08be9150d943c747ff6194904fd325821945ff7d7f5c1d1d08b40bbd', 'https://randomuser.me/api/portraits/women/11.jpg', 'Valencia', 35),
  (4, 'David Díaz', 'david', 'pbkdf2:sha256:150000$MjN72ikE$897d960e08be9150d943c747ff6194904fd325821945ff7d7f5c1d1d08b40bbd', 'https://randomuser.me/api/portraits/men/61.jpg', 'Sevilla', 40),
  (5, 'Elena Esteban', 'elena', 'pbkdf2:sha256:150000$MjN72ikE$897d960e08be9150d943c747ff6194904fd325821945ff7d7f5c1d1d08b40bbd', 'https://randomuser.me/api/portraits/women/20.jpg', 'Bilbao', 45),
  (6, 'Fernando Fernández', 'fernando', 'pbkdf2:sha256:150000$MjN72ikE$897d960e08be9150d943c747ff6194904fd325821945ff7d7f5c1d1d08b40bbd', 'https://randomuser.me/api/portraits/men/1.jpg', 'Málaga', 50),
  (7, 'Gloria Gómez', 'gloria', 'pbkdf2:sha256:150000$MjN72ikE$897d960e08be9150d943c747ff6194904fd325821945ff7d7f5c1d1d08b40bbd', 'https://randomuser.me/api/portraits/women/25.jpg', 'Zaragoza', 55),
  (8, 'Héctor Hernández', 'hector', 'pbkdf2:sha256:150000$MjN72ikE$897d960e08be9150d943c747ff6194904fd325821945ff7d7f5c1d1d08b40bbd', 'https://randomuser.me/api/portraits/men/99.jpg', 'Alicante', 60);
