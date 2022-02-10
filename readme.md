# Welcome to Killer Sudoku!

Killer Sudoku is a game based off of the general idea of a traditional sudoku board game. Despite its name, it's usually considered easier than the traditional version! I don't know about that one <del>because these people seem to not know what they're talking about</del>, but for me Killer Sudoku is way more interesting.

# About This Project

This is my first attempt at building a web app completely from scratch using React and Node.js.

## Backend

The backend side is built using Node.js and resources are stored in MongoDB databases. I contemplated using a dummy backend like Google Firebase for this purpose, but changed my mind because I was curious what a backend looked like. And I'm happy that I did! It was a fun ride. Below are some of the backend features.

### Store sudoku boards

Sudoku boards are stored in the database in the general format below:

-  Solution: A 9x9 matrix that contains the solution
-  Regions (or Cages): A region is a block of contiguous cells. Regions are stored as an array of Region objects. A region object contains the information about the cells that it consists of and their sum.

### Store users

The user information is kept simple but can be expanded later on with the project. At the moment, a user profile contains the email address, their encrypted password, and their roles (admin/player).

### Support RESTful APIs

The backend supports mostly GET and POST requests from the front end to get the user information/get sudoku boards. The admin user can also add new boards to the board collection.
- POST `/users`  Create a new user account
- POST `/users/login`	Log in existing user
- GET `/users`	Get the user information
- POST `/users/logout` Log out user
- POST `/boards` Fetch a random sudoku board
- GET `/boards` Add a new board to the collection

## Frontend
I consider frontend as the more difficult part of this particular project, since it is a gaming application with a lot of interactions, all handled using React. Some of the notable features:

### Main UI
One of my biggest challenges in this project is to build the meat of the board.
The main 9x9 grid is not that hard to build, but to figure out how to dynamically construct the region (or the cage), more specifically the line that group them together is a big challenge. I finally had it down using a bunch of conditional svg elements in my code base.

### Build Your Own (BYO) UI
This is the GUI that allows whoever logs in as the admin user to create and submit a new board to the board collection. This was created because I found myself extremely miserable when I had to manually enter and hardcode a killer sudoku board during the initial stage of the app for testing purposes. I wanted to build something that helps me not go through that process again, so here it is.

This is supposed to be easy to use. First you enter all the numbers into the grid, then when you're done with that, create regions that exhaustively cover all cells in the board. Then click Submit!

**Note that I added in some helper buttons to populate the BYO board and test out the functionality of the front end, but if you try to submit those populated values, it should not be successful because the database does not allow duplicate boards.**

### Protected Resources
As its name suggests, it refers to how the normal player is blocked from accessing the Build Your Own page. In the same vein, unauthenticated users are barred from entering the game. When they try to do something they're not allowed to, a popup block should jump into their faces.

### A bunch of other UI features that feel too trivial to list all out
But I'll list them out anyways...
- Input Validation and Instant Feedback on Validity
- Draft Mode when you want to turn the board into a scratch pad
- Instruction pop up
- Authentication using bearer token stored in local storage
- ...
- Most of them extensively require the use of React State management. I usually use props drilling when the components need information from at most 2 parent levels apart, and use React Redux for other cases.

