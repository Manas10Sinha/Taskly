# Taskly - Task Management Application

## Overview

Taskly is a full-stack Task Management Application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

The application allows users to securely register, log in, and manage their personal tasks through a modern, responsive, and user-friendly interface.

---

## Live Demo

### Frontend

🔗 https://taskly-dusky-tau.vercel.app/

### Backend

Hosted on Render

### Database

MongoDB Atlas

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Secure HTTP-Only Cookie-Based Authentication
* Protected Routes
* User Logout

### Task Management

* Create Tasks
* View Tasks
* Update Tasks
* Delete Tasks
* Toggle Task Status (Pending / Completed)

### Search & Filter

* Search Tasks by Title
* Filter Tasks by Status

  * All Tasks
  * Pending Tasks
  * Completed Tasks

### Pagination

* Client-Side Pagination
* Configurable Tasks Per Page
* Improved User Navigation

### User Experience

* Responsive Design
* Toast Notifications
* Loading States
* Empty State Handling
* Component-Based Architecture
* Clean and Modern UI

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* React Toastify
* CSS Modules
* Vite

### Backend

* Node.js
* Express.js
* JWT (JSON Web Token)
* bcryptjs
* Cookie Parser
* CORS

### Database

* MongoDB Atlas
* Mongoose

---

## Project Structure

```text
task-manager/

├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── README.md
└── .gitignore
```

---

## Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Manas10Sinha/Taskly.git

cd Taskly
```

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## Deployment

### Frontend

* Hosted on Vercel
* URL: https://taskly-dusky-tau.vercel.app/

### Backend

* Hosted on Render

### Database

* Hosted on MongoDB Atlas

---

## Security Features

* Password Hashing using bcryptjs
* JWT Authentication
* HTTP-Only Cookies
* Protected API Routes
* CORS Configuration
* User-Specific Task Access
* Secure Cookie-Based Sessions

---

## API Endpoints

### Authentication

```http
POST /api/auth/register

POST /api/auth/login

POST /api/auth/logout

GET /api/auth/me
```

### Tasks

```http
GET /api/tasks

POST /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id

PATCH /api/tasks/:id/status
```



## Future Improvements

* Due Dates
* Task Categories
* Dark Mode
* Drag and Drop Task Management
* Email Notifications
* Server-Side Pagination
* Task Priority Levels
* Team Collaboration

---

## Author

**Manas Sinha**

Built as part of a MERN Stack Internship Assignment.

---

## License

This project is intended for educational and assessment purposes.
