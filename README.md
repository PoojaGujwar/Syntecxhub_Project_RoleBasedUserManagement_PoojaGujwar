# Role-Based User Management System

## 📌 Project Overview

This project is a Role-Based User Management API built using Node.js, Express, and MongoDB.
It provides secure authentication using JWT and allows different access levels based on user roles such as Admin and User.

The system also tracks important admin actions using an Audit Log system.

This project was created as part of an internship assignment to demonstrate backend development skills including authentication, authorization, middleware, and database management.

---

## 🚀 Features

* User Registration and Login with JWT Authentication
* Role-Based Authorization (Admin / User)
* Admin can:

  * View all users
  * Block or unblock users
  * Delete users
* Protected Routes using Middleware
* Audit Logs to track admin actions
* Secure password storage using bcrypt
* MongoDB database integration

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcrypt
* dotenv

---

## 📂 Project Structure

```
project-folder/
│── controllers/
│── middleware/
│── models/
│── routes/
│── config/
│── index.js
│── .env
│── package.json
```

---

## 🔐 API Endpoints

### Auth Routes

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/auth/register | Register new user |
| POST   | /api/auth/login    | Login user        |

### Admin Routes (Protected)

| Method | Endpoint              | Description   |
| ------ | --------------------- | ------------- |
| GET    | /api/admin/users      | Get all users |
| PATCH  | /api/admin/block/:id  | Block user    |
| DELETE | /api/admin/delete/:id | Delete user   |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone <repository-url>
cd project-folder
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Create .env File

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run Server

```
node index.js
```

Server will start on:

```
http://localhost:5000
```

---

## 🧪 Testing

You can test APIs using Postman or Thunder Client by sending requests with JWT token in Authorization header.

Example:

```
Authorization: your_token_here
```

---

## 📊 Audit Log System

The system stores logs for important admin actions such as:

* Blocking a user
* Deleting a user
* Role changes

Each log contains:

* Action performed
* Admin who performed action
* Target user
* Timestamp

---

## 👩‍💻 Author

**Pooja Gujwar**

* B.Tech Computer Science Graduate (2023)
* MERN Stack Developer
* Passionate about Backend Development

---

## ⭐ Learning Outcome

Through this project, I learned:

* JWT Authentication
* Role-Based Access Control
* Express Middleware
* MongoDB Relationships
* Backend Architecture Design

---

## 📎 Internship Assignment

This project was developed as part of the Syntecxhub Internship Program.

---

## 🙌 Thank You

Thank you for reviewing this project!
