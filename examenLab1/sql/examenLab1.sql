DROP TABLE IF EXISTS Albums;

CREATE TABLE Albums (
    albumId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    title VARCHAR(256) NOT NULL,
    artist VARCHAR(256) NOT NULL,
    releaseDate DATE NOT NULL,
    imageUrl VARCHAR(512) NOT NULL,
    numTracks INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(userId)
);

CREATE OR REPLACE VIEW AlbumsWithUsers AS 
    SELECT Albums.*, Users.username, Users.fullName, Users.avatarUrl, Users.city, Users.age
    FROM Albums
    JOIN Users ON Albums.userId = Users.userId;

INSERT INTO Albums (userId, title, artist, releaseDate, imageUrl, numTracks) VALUES
    (1, 'Wasting Light', 'Foo Fighters', '2011-04-12', 'https://upload.wikimedia.org/wikipedia/en/0/05/Foo_Fighters_Wasting_Light_Album_Cover.jpg', 11),
    (1, 'Random Access Memories', 'Daft Punk', '2013-05-17', 'https://upload.wikimedia.org/wikipedia/en/2/26/Daft_Punk_-_Random_Access_Memories.png', 13),
    (2, 'El Madrileño', 'C. Tangana', '2021-02-26', 'https://upload.wikimedia.org/wikipedia/en/8/8f/ElMadrile%C3%B1oCTangana.jpg', 14),
    (2, 'The Sacrament of Sin', 'Powerwolf', '2018-07-20', 'https://upload.wikimedia.org/wikipedia/en/0/01/Cover_art_for_Powerwolf%E2%80%99s_seventh_album%2C_The_Sacrament_of_Sin.jpeg', 11),
    (3, 'Origin of Symmetry', 'Muse', '2001-06-18', 'https://upload.wikimedia.org/wikipedia/en/3/35/Muse_-_Origin_of_Symmetry_cover_art.png', 12),
    (3, 'Teatro d ira: Vol. I', 'Maneskin', '2021-03-19', 'https://upload.wikimedia.org/wikipedia/en/1/10/M%C3%A5neskin_-_Teatro_d%27ira_Vol._1.png', 8);