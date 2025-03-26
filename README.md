# Job Portal

## Description

A job portal web application built with **Node.js**, **Express.js**, and **EJS** as the templating engine. This platform allows users to search for jobs, post job listings, and apply for jobs by submitting resumes.

## Features

- User authentication (Login & Registration)
- Job posting and listing functionality
- Search jobs based on criteria
- Apply for jobs with resume upload
- View and manage job applications
- Session-based authentication

## Technologies Used

- **Node.js**
- **Express.js**
- **EJS (Embedded JavaScript Templates)**
- **Express-session** for session management
- **Multer** for file uploads
- **Path** for managing file paths

## Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/dipesh2511/easily.git
cd easily
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Server

```bash
node index.js
```

The server will start listening on port **2106**.

## Project Structure

```
|-- src/
|   |-- controller/
|   |   |-- userlogin.controller.js
|   |   |-- register.controller.js
|   |   |-- jobs.controller.js
|   |   |-- jobposts.controller.js
|   |   |-- applicant.controller.js
|   |
|   |-- middleware/
|   |   |-- loginauth.middleware.js
|   |   |-- multer.middleware.js
|   |   |-- restrictupdate/delete.middleware.js
|   |
|   |-- views/
|   |   |-- firstpage.ejs
|   |
|-- public/
|-- index.js
|-- package.json
|-- README.md
```

## API Routes

### 🔹 Public Routes

| Method | Route           | Description              |
| ------ | --------------- | ------------------------ |
| GET    | `/`             | Home page                |
| GET    | `/login-page`   | Login page               |
| POST   | `/login`        | Login request            |
| GET    | `/logout`       | Logout request           |
| POST   | `/register`     | Register new user        |
| GET    | `/jobs`         | View all job listings    |
| GET    | `/jobpost/:pid` | View a specific job post |

### 🔹 Protected Routes (Require Authentication)

| Method | Route                     | Description                    |
| ------ | ------------------------- | ------------------------------ |
| GET    | `/newjob`                 | Render job posting form        |
| POST   | `/newjob`                 | Submit a new job               |
| GET    | `/jobs/:uid`              | View jobs posted by a user     |
| GET    | `/jobpost/:pid/update`    | Render update job form         |
| POST   | `/jobpost/:pid/update`    | Update a job post              |
| DELETE | `/jobpost/:pid/delete`    | Delete a job post              |
| POST   | `/jobpost/:pid`           | Apply for a job                |
| GET    | `/jobpost/:pid/applicant` | View applicants for a job post |

## Author

[Dipesh Pohanekar](https://github.com/dipesh2511)

