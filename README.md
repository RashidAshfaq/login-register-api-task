# login-register-api-task

## Prerequisites

- **Node.js** (v14 or later recommended)
- **MongoDB**  
  Ensure you have a MongoDB instance running locally or have access to a MongoDB Atlas database.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/RashidAshfaq/login-register-api-task.git
   cd login-register-api-task

2. **Install dependencies:**
    npm install

3. **Configuration**
    Update the MongoDB connection string in "server.js" if needed. By default, it connects to:
    mongoose.connect('mongodb://127.0.0.1:27017/auth')

4. **Running the Project**
  1. Ensure MongoDB is running
     Start your local MongoDB service or connect to your MongoDB Atlas cluster.
  2. Start the Server
     node server.js

5. **API Endpoints & Testing**
        You can test the API endpoints using tools like Postman or curl.

        1. **User Registration**
        Endpoint: /api/auth/register

        Method: POST

        Request Body (JSON):
        {
            "username": "rashid_ashfaq_01",
            "password": "helloWorld123"
        }

        2. **User Login**
        Endpoint: /api/auth/login

        Method: POST

        Request Body (JSON):
        {
            "username": "rashid_ashfaq_01",
            "password": "helloWorld123"
        }

       3. Protected Route
        Endpoint: /api/protected

        Method: GET

        Headers:
        Include the JWT token in the Authorization header as follows:
        Authorization: Bearer token
