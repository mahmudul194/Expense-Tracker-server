# Expense Tracker (Backend)

This is the backend REST API for the Expense Tracker project. It handles all data storage, retrieval, and processing for the application.

## Tech Stack
- **Environment:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB
- **ODM:** Mongoose

## Features
- **RESTful Endpoints:** Full CRUD (Create, Read, Update, Delete) operations for expenses.
- **Persistent Storage:** Safely stores expense data in a MongoDB Atlas cluster.
- **CORS Enabled:** Configured to accept requests from the frontend client.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed.
- A MongoDB database (local or MongoDB Atlas).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mahmudul194/Expense-Tracker-server.git
   ```
2. Navigate into the project directory:
   ```bash
   cd Expense-Tracker-server
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Configuration
Create a `.env` file in the root directory and add your MongoDB connection string and preferred port:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string_here
```

### Running Locally
To start the server using `tsx`, run:
```bash
npm start
```
The server will start on `http://localhost:5000` (or the port specified in your `.env` file).

## API Endpoints

- `GET /api/expenses` - Retrieve all expenses
- `POST /api/expenses` - Create a new expense
- `PUT /api/expenses/:id` - Update an existing expense
- `DELETE /api/expenses/:id` - Delete an expense
