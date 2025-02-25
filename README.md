API CRUD with Express and MySQL
This is a simple CRUD (Create, Read, Update, Delete) API built using Express.js and MySQL. The API allows users to interact with a MySQL database and perform basic operations through HTTP requests. The project is tested using Postman to ensure all endpoints are working correctly.

Technologies Used
Node.js (JavaScript runtime)
Express.js (Web framework)
MySQL (Database)
Postman (API testing tool)
Prerequisites
Before running this project, you need to have the following installed:

Node.js: Download and install Node.js
MySQL: Download and install MySQL
Postman: Download and install Postman
You will also need a MySQL database set up for this project.

Installation
1. Clone the Repository
First, clone the repository to your local machine:

bash
Copy
Edit
git clone https://github.com/SanamRai001/API_CRUD.git
2. Install Dependencies
Navigate to the project directory and run the following command to install all required npm packages:

bash
Copy
Edit
npm install
3. Set Up MySQL Database
Create a MySQL database (e.g., crud_db) and configure the connection. You can create a database using MySQL Workbench or via the command line:

sql
Copy
Edit
CREATE DATABASE crud_db;
Next, configure the database connection in the db.js file (or the relevant file where database configuration is set). You'll need to provide your MySQL username, password, and database name:

js
Copy
Edit
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // your MySQL username
    password: '', // your MySQL password
    database: 'crud_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
});

module.exports = db;
4. Running the API
Run the Express API server by executing the following command:

bash
Copy
Edit
npm start
The server will start running at http://localhost:3000.

API Endpoints
1. Create a New Record (POST)
Endpoint: /api/users
Request Body:
json
Copy
Edit
{
    "name": "John Doe",
    "email": "john.doe@example.com"
}
Response:
json
Copy
Edit
{
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
}
2. Get All Records (GET)
Endpoint: /api/users
Response:
json
Copy
Edit
[
    {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com"
    }
]
3. Get a Single Record by ID (GET)
Endpoint: /api/users/:id
Response:
json
Copy
Edit
{
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
}
4. Update a Record (PUT)
Endpoint: /api/users/:id
Request Body:
json
Copy
Edit
{
    "name": "John Doe Updated",
    "email": "john.doe.updated@example.com"
}
Response:
json
Copy
Edit
{
    "id": 1,
    "name": "John Doe Updated",
    "email": "john.doe.updated@example.com"
}
5. Delete a Record (DELETE)
Endpoint: /api/users/:id
Response:
json
Copy
Edit
{
    "message": "User deleted successfully"
}
Testing with Postman
To test the API, you can use Postman to send requests to the endpoints mentioned above. Here's how you can test each operation:

Create a Record: Use the POST method with the JSON body to add a new user.
Get All Records: Use the GET method to retrieve a list of all users.
Get a Record by ID: Use the GET method with the user ID to fetch a specific user.
Update a Record: Use the PUT method with the user ID and the updated data to modify an existing user.
Delete a Record: Use the DELETE method with the user ID to remove a user.
