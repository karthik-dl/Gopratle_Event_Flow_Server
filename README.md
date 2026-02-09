Tech Stack
1. Node.js
2. Express.js
3. MongoDB (Local)
4. Mongoose
5. Nodemon
6. dotenv

Project Objective
The backend is responsible for:
    1.Receiving requirement data from the frontend
    2.Storing requirements in MongoDB
    3.Categorizing each requirement using a hireType field
    4.Supporting different requirement types using a flexible schema
    5.Providing simple APIs for demonstration purposes


Installation & Setup
Follow the steps below to run the backend locally.
Prerequisites
Node.js (LTS version)
npm

MongoDB installed locally
Verify:
    node -v
    npm -v
    mongod --version

Clone the Repository
    git clone <your-github-repo-url>
    cd requirement-posting/backend

Install Dependencies
npm install

Configure Environment Variables
Create a .env file in the backend root directory:
MONGO_URI=<your mongo url>

Start MongoDB (Local)
Make sure MongoDB is running:
mongod Or ensure MongoDB service is already active.

Run the Backend Server
npm run dev