# NESTjs PostgreSQL CRUD Application

## Setup

1. Install dependencies:
   ```sh
   npm install

2. Set up PostgreSQL database and update app.module.ts with your database credentials.

3. Run the application:
   npm run start
API Endpoints
   Users
POST /users - Create a new user
GET /users - Get all users
GET /users/:id - Get a user by ID
PATCH /users/:id - Update a user by ID
DELETE /users/:id - Delete a user by ID
   WalletAddresses
POST /wallet-addresses - Create a new wallet address
GET /wallet-addresses - Get all wallet addresses
GET /wallet-addresses/:id - Get a wallet address by ID
PATCH /wallet-addresses/:id - Update a wallet address by ID
DELETE /wallet-addresses/:id - Delete a wallet address by ID
   Validation
Uses class-validator for input validation.
Error Handling
Basic error handling is implemented to provide appropriate responses.
   Testing
Use Postman or curl to test the API endpoints.

This guide should help you create a basic NESTjs application with CRUD operations for a PostgreSQL database.
"# CRUD-Operations" 
