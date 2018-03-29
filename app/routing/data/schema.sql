DROP DATABASE IF EXISTS friend_finderDB;
CREATE database friend_finderDB;

USE friend_finderDB;

CREATE TABLE userSurvey (
  uniqueID INTEGER(10) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NULL,
  photo VARCHAR(256) NULL,
  gender VARCHAR(20) NULL,
  question1 INTEGER(5) NULL,
  question2 INTEGER(5) NULL,
  question3 INTEGER(5) NULL,
  question4 INTEGER(5) NULL,
  question5 INTEGER(5) NULL,
  question6 INTEGER(5) NULL,
  question7 INTEGER(5) NULL,
  question8 INTEGER(5) NULL,
  question9 INTEGER(5) NULL,
  question110 INTEGER(5) NULL,
  PRIMARY KEY (uniqueID)
);

CREATE TABLE user_Matches (
  uniqueID INTEGER(10) NOT NULL AUTO_INCREMENT,
  match INTEGER(10) NOT NULL,
  PRIMARY KEY (uniqueID)
);