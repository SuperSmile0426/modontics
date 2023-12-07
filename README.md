# Book Searching Application

This is a web application that allows users to search for books, get details for a specific book, and save books as favorites. The application uses React.JS and Typescript and utilizes the Gutendex API to retrieve book details.

## Implementation

### Part 1: Displaying the list of books

Displays a list of books returned by the Gutendex API.
Each entry in the list contains the id, title, downloads, and authors of the book.
Pagination is implemented to handle large amounts of data.

### Part 2: Searching for book titles

A textbox field for book searching is provided.
Performs a new request to the API when the value changes, and updates the displayed book list.
Pagination is updated accordingly.

### Part 3: Getting details of a specific book

2nd page displays all the details of a specific book.
Includes the fields from the list, as well as the "bookshelves" and "subjects" fields of the API.
A back button is available that redirects the user back to the book list.

## Bonus Objectives

Crated an "Add to favorites" functionality using local storage.
Made the page mobile-friendly.
Developed a skeleton loader to enhance the app's visual appeal and UX while waiting for data to be fetched.
Implemented the e2e testing with cypress.

## Technical Details and Deliverables

### Technologies Used

React.JS \
Typescript \
Styled Component \
Axios \
Redux \
Redux-Saga \
React-paginate \
Prettier \
Eslint \
Cypress

### Installation and Usage by scripts

#### Install dependencies

`yarn install`

#### Start the application

`yarn run dev`

#### Build the application

`yarn run build`

#### Test the application with cypress

`yarn run test:e2e:dev`

### Installation and Run by Docker

#### Bringing up the containers

```
docker-compose -f docker-compose.yml up
```

#### Down the containers

```
docker-compose -f docker-compose.yml down
```

### Set Env variable

Make .env file and Add below variable

```
REACT_APP_SERVER_URL=https://gutendex.com/books
```

### Access the application

```
http://localhost:5173
```
