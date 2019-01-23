# Friend-Finder (PseudoCode)

## index.html
Styled with: Bootstrap CSS
Page content will explain to the user the purpose of the survey, how each answer is graded, and ultimately how the match will be made based on the responses given.

A link or button will be provided for the user to start the survey, which will then link to the survey page.

## survey.html
Styled with: Bootstrap CSS
This page will contain the questions that will generate a match at the end. Each question will have 5 answers ranging from 1 (Strongly disagree) to 5 (Strongly Agree). Each answer will have a number value that will be used upon completion to calculate the compatibility between the user and a potential friend. 

After the final question is answered, either at the bottom of the page or in a modal of some sort, the result will be displayed. This result will be the chosen friend for the user based on the total difference of their score. The chosen friend will have the least amount of difference between the friend and user score.

Finally, a button will be available for users to restart the quiz if they'd like.


## app/data/friends.js

Create a variable made up of friends. This variable will be an array of any number of objects. Each object contains information for:
Name - The name of a friend
Image - The picture of the friend
Score - Each answer to a question outputs a number between 1-5 which will be used to calculate the compatibility between the user and the potential friend match.

The friends variable will need to be exported to be used in the api routing file.

## server.js
Install all required npm packages
Set const = require all required npm packages (express, path)

Set required express variables for app and port.

require html and api routes from app (express)

Initiate the event app listener that outputs a listening message on a specified PORT.

## app/routing/apiRoutes.js
Set const = require the friend.js with all potential friend candidates in array form

app get request that will output the results of the friends

