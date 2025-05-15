DROP TABLE IF EXISTS Comments;
DROP TABLE IF EXISTS UsersFollows;
DROP TABLE IF EXISTS PhotosTags;
DROP TABLE IF EXISTS Tags;
DROP TABLE IF EXISTS Photos;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
	userId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	firstName VARCHAR(128) NOT NULL,
	lastName VARCHAR(128) NOT NULL,
	telephone VARCHAR(32) NOT NULL,
	email VARCHAR(128) NOT NULL,
	username VARCHAR(64) UNIQUE NOT NULL,
	`password` VARCHAR(256) NOT NULL,
	avatarUrl VARCHAR(512)
);

CREATE TABLE Photos (
	photoId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(128) NOT NULL,
	`description` VARCHAR(512),
	date DATETIME DEFAULT CURRENT_TIMESTAMP,
	`url` VARCHAR(512) NOT NULL,
	visibility VARCHAR(16) NOT NULL,
	userId INT NOT NULL,
	FOREIGN KEY (userId) REFERENCES Users (userId),
	CONSTRAINT ValidVisibility CHECK (visibility in ('Public', 'Private'))
);

CREATE TABLE Tags (
	tagId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(128) NOT NULL UNIQUE
);

CREATE TABLE PhotosTags (
	photoTagId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	photoId INT NOT NULL,
	tagId INT NOT NULL,
	UNIQUE(photoId, tagId),
	FOREIGN KEY (photoId) REFERENCES Photos (photoId) ON DELETE CASCADE,
	FOREIGN KEY (tagId) REFERENCES Tags (tagId) ON DELETE CASCADE
);

CREATE TABLE UsersFollows (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	followerId INT NOT NULL,
  	followedId INT NOT NULL,
  	FOREIGN KEY (followerId) REFERENCES Users (userId),
  	FOREIGN KEY (followedId) REFERENCES Users (userId)
);

CREATE TABLE Comments (
	commentId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	text VARCHAR(512) NOT NULL,
	date DATETIME DEFAULT CURRENT_TIMESTAMP,
	userId INT NOT NULL,
	photoId INT NOT NULL,
	FOREIGN KEY (userId) REFERENCES Users (userId),
	FOREIGN KEY (photoId) REFERENCES Photos (photoId)
);


CREATE OR REPLACE VIEW photoswithtags AS 
SELECT * FROM photostags NATURAL JOIN photos NATURAL JOIN tags ORDER BY tags.`name`;

CREATE OR REPLACE VIEW v_usersFollows AS 
SELECT U.userId,U.firstName f_follower,U.lastName l_follower,U.avatarUrl avatarUrl_follower,F.id,F.followedId,UF.firstName f_followed,UF.lastName l_followed ,UF.avatarUrl avatarUrl_followed
	FROM users U 
	LEFT JOIN usersfollows F ON F.followerId=U.userId
	LEFT JOIN users UF ON F.followedId=UF.userId
	ORDER BY 1
;

CREATE OR REPLACE VIEW v_usersComments AS 
SELECT U.userId,firstName,lastName,avatarUrl,C.photoId,url,commentId,`text`,C.`date` 
	FROM users U 
	LEFT JOIN comments C ON U.userId=C.userId
	LEFT JOIN photos P ON P.photoId=C.photoId
	ORDER BY userId,commentId
;

