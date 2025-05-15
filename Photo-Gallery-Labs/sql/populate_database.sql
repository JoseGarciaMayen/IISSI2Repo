INSERT INTO Users
VALUES
	(1, 'Agustín', 'Borrego', '654321987', 'agu@gallery.com', 'agu', 'pbkdf2:sha256:150000$uqfMc1rm$37b2a7fc88de0ce96f3cc0c4e47915414542eac2f98ff32e589af89f41ff5b58', 'https://github.eii.us.es/avatars/u/22?s=460'),
	(2, 'David', 'Ruiz', '987654321', 'david@gallery.com', 'druiz', 'pbkdf2:sha256:150000$tbwxky0J$0d8d6c0b7a9f46d69f3c3502178d4ac3fe1b4dafa7c362ccc401e9f65106b127', 'https://github.eii.us.es/avatars/u/32?s=460'),
	(3, 'Inma', 'Hernández', '456123789', 'inma@gallery.com', 'inma', 'pbkdf2:sha256:150000$RVTpLkIl$976062ffde4796faa57d73fb0abc6743fe337849589163cfe6e3334f477883d7', 'https://github.eii.us.es/avatars/u/38?s=460');

INSERT INTO Photos
VALUES
	(1, 'Tortilla', 'A typical Spanish tortilla. With onion, of course.', '2012-04-23 18:25:43', 'https://comidasespanolas.com/wp-content/uploads/2019/12/Receta-de-tortilla-espa%C3%B1ola-tradicional.jpg', 'Public', 1),
	(2, 'Samoyed', 'A very fluffy dog', '2013-04-23 18:21:43', 'https://www.dogsnsw.org.au/media/img/BrowseAllBreed/Samoyed-.jpg', 'Public', 2),
	(3, 'Coding in C#', 'A piece of very intricate code', '2020-04-23 18:20:43', 'https://pbs.twimg.com/media/Ea4HJNaXsAEbzzF?format=jpg&name=900x900', 'Public', 3),
	(4, 'The future society', 'This is what society would look like if PHP didn\'t exist', '2016-05-10 18:21:43', 'https://pbs.twimg.com/media/Eeeb3R0VAAAiVCp.jpg', 'Public', 1),
	(5, 'Comfy cat', 'A drawing of a cat about to sleep', '2016-04-23 18:21:43', 'https://pbs.twimg.com/media/EZ4Z2QDUYAANA-Z?format=png', 'Public', 2),
	(6, 'Seville', 'The beautiful city of Seville, Spain', '2016-04-23 18:20:43', 'https://urbansevilla.es/wp-content/uploads/2019/03/urban-sevilla-foto-ciudad.jpg', 'Public', 3),
	(7, 'Mont Saint-Michel', 'An island located in Normandy, France', '2019-04-23 18:20:43', 'https://www.timetravelturtle.com/wp-content/uploads/2019/11/Mont-St-Michel-2019-356_new.jpg', 'Public', 2),
	(8, 'Night operations', 'A plane flying over Toronto at night', '2020-02-28 13:33:37', 'https://www.airlive.net/wp-content/uploads/2016/09/maxresdefault-23.jpg', 'Private', 1),
	(9, 'Abstract art', 'A very weird clipart', '2015-05-01 12:23:11', 'https://clipartart.com/images/worst-clipart-ever-1.jpg', 'Private', 2),
	(10, 'Knitting', 'Very relaxing', '2019-01-12 21:30:00', 'https://cdn.shopify.com/s/files/1/0078/5065/5857/t/8/assets/62638885ceb5--CocoKnitsBook_Appendix_Photo5_2692.jpg?1338', 'Private', 3);

INSERT INTO BadWords (word)
VALUES
	('caca'), ('culo'), ('pedo'), ('pis');

INSERT INTO Tags
VALUES
	(1, 'photography'),
	(2, 'animals'),
	(3, 'cute'),
	(4, 'creative'),
	(5, 'cities'),
	(6, 'engineering'),
	(7, 'food'),
	(8, 'drawing'),
	(9, 'spain'),
	(10, 'flying'),
	(11, 'funny'),
	(12, 'futuristic'),
	(13, 'videogames');

INSERT INTO PhotosTags (photoId, tagId)
VALUES
	(1, 1), (1, 7), (1, 9),
	(2, 1), (2, 2), (2, 3),
	(3, 4), (3, 6), 
	(4, 1), (4, 6), (4, 12),
	(5, 2), (5, 3), (5, 8),
	(6, 1), (6, 5), (6, 9),
	(7, 1), (7, 5),
	(8, 10), (8, 6),
	(9, 4), (9, 8),
	(10, 1), (10, 4);

INSERT INTO Comments (text, date, userId, photoId)
VALUES
	('Delicious!', '2019-01-20 19:45:00', 2, 1),
	('It\'s better without onion, though...', '2019-01-21 20:01:12', 3, 1),
	('You\'re clueless', '2019-01-21 22:10:02', 2, 1),
	('Good boy!', '2015-08-20 19:50:00', 1, 2),
	('Looks hard...', '2020-02-28 13:37:00', 2, 3),
	('Ole!', '2019-12-20 14:55:34', 2, 6);

INSERT INTO Votes (value, userId, photoId)
VALUES
	(+1, 1, 1), (+1, 2, 1), (+1, 3, 1),
	(+1, 1, 2), (+1, 2, 2), (+1, 3, 2),
	(-1, 2, 3), (-1, 1, 3), 
	(+1, 2, 4),
	(+1, 2, 5), (+1, 3, 5),
	(+1, 1, 6),
	(+1, 1, 7), (-1, 3, 7),
	(+1, 1, 8),
	(+1, 2, 9),
	(+1, 3, 10);

INSERT INTO UsersFollows (followerId, followedId)
VALUES
	(2, 1), (3, 1), (1, 2), (1, 3);