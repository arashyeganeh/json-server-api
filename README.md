# JSON Server API

A lightweight Node.js application that serves an API from a file-based JSON structure. It dynamically generates API routes based on the folder structure, making it easy to create and manage mock APIs without a database.

## Features
* Serves JSON data as an API
* Folder-based dynamic routing
* Built-in caching for improved performance
* Middleware for logging
* Supports static file serving and EJS templating

## Installation

```sh
git clone https://github.com/arashyeganeh/json-server-api
cd json-server-api
npm install
```

###  Usage

```sh
npm start
```

By default, the server runs on `http://localhost:3000`.

###  API Structure

Place your JSON files inside the `api` folder. The folder structure determines the API routes.

For example, given the following structure:

```sh
api/
	posts.json	--> http://localhost/api/posts
	users.json	--> http://localhost/api/users
  	users/
		2.json	--> http://localhost/api/users/2
```

You can access:

- GET /api/posts → Returns posts.json
- GET /api/users → Returns users.json
- GET /api/users/2 → Returns 2.json

### Middleware

The application includes:

* Logging: Logs incoming requests
* Compression: Enables Gzip compression
* Static File Serving: Serves files from the public folder
## Configuration
By default, the server runs on port `80` and port `3000` in the development stage. To change the port, set the PORT environment variable in `package.json`.

## License

This project is licensed under the MIT License.