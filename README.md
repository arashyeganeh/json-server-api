# JSON Server API

A lightweight Node.js application that serves an API from a file-based JSON structure. It dynamically generates API routes based on the folder structure, making it easy to create and manage mock APIs without a database.

## Features
* Serves JSON data as an API
* Folder-based dynamic routing
* Built-in caching for improved performance
* Middleware for logging and security headers
* Supports static file serving and EJS templating

## Installation

```sh
git clone https://github.com/yourusername/json-serve-api.git
cd json-serve-api
npm install
```

###  Usage

```sh
npm start
```

By default, the server runs on `http://localhost:3001`.

###  API Structure

Place your JSON files inside the api folder. The folder structure determines the API routes.

For example, given the following structure:

```sh
api/
  users/
    list.json
    details.jsonYou can access:
```

You can access:

- GET /api/users/list → Returns list.json
- GET /api/users/details → Returns details.json

### Middleware

The application includes:

* Logging: Logs incoming requests
* Security Headers: Adds basic security headers
* Compression: Enables Gzip compression
* Static File Serving: Serves files from the public folder
## Configuration
Set PORT in the environment variables to change the server port.
## License
This project is licensed under the MIT License.