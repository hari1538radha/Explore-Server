Explore-Server

Explore-Server is a Node.js server-side application that serves as the backend for the Explore web application. The server provides RESTful API endpoints that allow the client-side application to query and manipulate data stored in a MongoDB database.
Installation

To run the Explore-Server application locally, you need to have Node.js and npm installed on your machine. Once you have these installed, follow these steps:

    Clone the repository to your local machine.
    Navigate to the root directory of the project in your terminal.
    Run npm install to install the dependencies.
    Create a .env file in the root directory and set the following environment variables:

makefile

PORT=3000
DB_URI=<your MongoDB database URI>
JWT_SECRET=<your JWT secret key>

    Run npm start to start the server.
    Open a web browser and navigate to http://localhost:3000/api.

API Documentation

The Explore-Server API provides the following endpoints:
Authentication

    POST /api/auth/register: Register a new user account.
    POST /api/auth/login: Authenticate a user and return a JSON Web Token (JWT).

Places

    GET /api/places: Get a list of all places.
    GET /api/places/:placeId: Get details of a specific place by ID.
    POST /api/places: Create a new place.
    PATCH /api/places/:placeId: Update an existing place by ID.
    DELETE /api/places/:placeId: Delete an existing place by ID.

Users

    GET /api/users: Get a list of all users.
    GET /api/users/:userId: Get details of a specific user by ID.
    PATCH /api/users/:userId: Update an existing user by ID.
    DELETE /api/users/:userId: Delete an existing user by ID.

Favorites

    GET /api/favorites: Get a list of all favorites.
    GET /api/favorites/:favoriteId: Get details of a specific favorite by ID.
    POST /api/favorites: Create a new favorite.
    DELETE /api/favorites/:favoriteId: Delete an existing favorite by ID.

Note: Some of the endpoints require authentication with a JWT. To authenticate, include a Authorization header with the value Bearer <your JWT> in the request.

For more information on the API endpoints and usage, refer to the API documentation in the docs directory.
Contributing

If you would like to contribute to the Explore-Server project, feel free to fork the repository and submit a pull request. Please make sure to follow the code style and formatting conventions used in the project.
License

Explore-Server is licensed under the MIT License.

