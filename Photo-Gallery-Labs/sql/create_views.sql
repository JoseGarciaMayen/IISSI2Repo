CREATE OR REPLACE VIEW PhotosWithUsers AS
    SELECT P.*, U.username, U.avatarUrl
    FROM Photos P NATURAL JOIN Users U;

CREATE OR REPLACE VIEW CommentsWithUsers AS
	SELECT C.*, U.username, U.avatarUrl
	FROM Comments C NATURAL JOIN Users U;