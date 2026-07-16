# Node.js Learning Notes

## What is Node.js?

Node.js is a **JavaScript runtime environment** that allows JavaScript code to run **outside the browser**.

Before Node.js, JavaScript could only run inside web browsers. With Node.js, developers can build:

- Backend applications
- REST APIs
- Real-time applications
- Command Line (CLI) tools
- Microservices
- Automation scripts

Node.js is built on **Google's V8 JavaScript Engine**, which compiles JavaScript into machine code, making it extremely fast.

---

# V8 Engine

The **V8 Engine** is the JavaScript engine developed by Google for Chrome.

### Responsibilities

- Parses JavaScript code
- Compiles JavaScript into machine code
- Executes the compiled code
- Optimizes performance

Node.js uses V8 internally to execute JavaScript outside the browser.

---

# Why Node.js?

Advantages:

- Fast execution using V8
- Non-blocking I/O
- Event-driven architecture
- Single-threaded with asynchronous programming
- Huge npm ecosystem
- Cross-platform

Used for:

- Backend Development
- APIs
- Chat Applications
- Streaming Services
- Real-time Dashboards
- Microservices

---

# NPM (Node Package Manager)

NPM is the default package manager for Node.js.

It helps developers:

- Install packages
- Remove packages
- Update packages
- Publish packages
- Manage project dependencies

Example:

```bash
npm init -y
```

Install a package:

```bash
npm install express
```

Install a development package:

```bash
npm install nodemon --save-dev
```

---

# Dependencies

Dependencies are packages required while the application is running.

Example:

- Express
- Mongoose
- Axios

Installed using:

```bash
npm install express
```

Stored inside:

```json
"dependencies": {
   "express": "^5.0.0"
}
```

---

# Dev Dependencies

These packages are only required during development or build time.

Examples:

- nodemon
- eslint
- prettier
- typescript

Installation:

```bash
npm install nodemon --save-dev
```

Stored inside:

```json
"devDependencies": {
   "nodemon": "^3.0.0"
}
```

---

# Runtime Packages

Runtime packages are libraries that your application needs while it is executing.

Examples:

- Express
- JWT
- bcrypt
- dotenv

Without these packages, your application cannot function correctly in production.

---

# Project Structure

A clean project structure makes applications easier to maintain.

Example:

```
src/
│
├── controllers/
├── services/
├── repositories/
├── routes/
├── middlewares/
├── utils/
├── config/
├── models/
├── app.js
└── server.js
```

---

# Folder Responsibilities

## Routes

Routes define API endpoints.

Example:

```
GET /users
POST /login
PUT /profile
```

Routes should only receive requests and forward them to controllers.

---

## Controllers

Controllers:

- Receive request
- Validate input
- Call services
- Return response

Controllers should not contain business logic.

---

## Services

Service layer contains the **business logic**.

Example:

```
Login user
Register user
Calculate order price
Generate JWT
```

Controllers call services.

Services call repositories.

---

## Repository Layer

Repository interacts with the database.

Responsibilities:

- Create data
- Read data
- Update data
- Delete data

No business logic should exist here.

---

## Utils

Utility functions that can be reused throughout the application.

Examples:

- Date formatter
- Logger
- Password generator
- Email sender
- Validators

Utilities should not contain routing or business logic.

---

## Config

Contains application configuration.

Examples:

```
Database connection
Environment variables
JWT Secret
Port
```

---

# Entry File (Root File)

Every Node.js project should have **one entry file**.

Common names:

```
index.js
app.js
server.js
main.js
```

Responsibilities:

- Start server
- Connect database
- Load middlewares
- Register routes
- Initialize application

This file acts as the starting point of the application.

---

# Process Object

The global `process` object provides information about the current Node.js process.

Examples:

```javascript
console.log(process.pid);

console.log(process.version);

console.log(process.cwd());

console.log(process.env);

console.log(process.argv);
```

Common uses:

- Environment variables
- Current directory
- Command-line arguments
- Exit process

---

# Path Module

The `path` module works with file and directory paths.

Example:

```javascript
const path = require("path");

console.log(path.basename(__filename));

console.log(path.dirname(__filename));

console.log(path.extname(__filename));

console.log(path.join("folder", "file.txt"));
```

Useful methods:

- join()
- resolve()
- basename()
- dirname()
- extname()

---

# File System (fs) Module

Used to interact with files.

Examples:

Create file

```javascript
fs.writeFile()
```

Read file

```javascript
fs.readFile()
```

Append file

```javascript
fs.appendFile()
```

Delete file

```javascript
fs.unlink()
```

Rename file

```javascript
fs.rename()
```

There are two versions:

- Synchronous (`fs`)
- Asynchronous (`fs.promises`)

---

# Event Loop

The Event Loop allows Node.js to perform asynchronous operations even though JavaScript is single-threaded.

Flow:

```
Call Stack

↓

Web APIs

↓

Callback Queue

↓

Event Loop

↓

Execution
```

The event loop continuously checks whether the call stack is empty before executing queued callbacks.

---

# Callbacks

A callback is a function passed as an argument to another function.

Example:

```javascript
fs.readFile("data.txt", (err, data) => {
    if (err) return console.log(err);

    console.log(data.toString());
});
```

---

# Promises

Promises solve callback nesting problems.

States:

- Pending
- Fulfilled
- Rejected

Example:

```javascript
fetchData()
.then(data => console.log(data))
.catch(err => console.log(err));
```

---

# Async / Await ⭐ (Interview Favorite)

Async/Await makes asynchronous code look synchronous.

Example:

```javascript
async function getUser() {
    try {
        const data = await fetchUser();

        console.log(data);

    } catch(err) {
        console.log(err);
    }
}
```

Benefits:

- Cleaner code
- Better error handling
- Easier debugging

---

# Event Emitter

Node.js uses an event-driven architecture.

Example:

```javascript
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("login", () => {
    console.log("User Logged In");
});

emitter.emit("login");
```

Methods:

- on()
- emit()
- once()
- removeListener()

---

# Buffers

Buffers store binary data.

Useful for:

- Images
- Videos
- Audio
- Network packets
- File uploads

Example:

```javascript
const buffer = Buffer.from("Hello");

console.log(buffer);
```

---

# Crypto Module

Used for cryptographic operations.

Examples:

- Password hashing
- Encryption
- Random tokens
- Digital signatures

Example:

```javascript
const crypto = require("crypto");

const id = crypto.randomUUID();

console.log(id);
```

Hash Example:

```javascript
crypto
.createHash("sha256")
.update("password")
.digest("hex");
```

---

# Error Handling

There are two main types of errors:

## Synchronous

```javascript
try {

} catch(err) {

}
```

---

## Asynchronous

```javascript
try {

    await fetchData();

} catch(err) {

}
```

Always handle errors gracefully instead of crashing the application.

---

# Streams

Streams process data **chunk by chunk** instead of loading the entire file into memory.

Advantages:

- Memory efficient
- Faster processing
- Suitable for large files

Types of streams:

- Readable Stream
- Writable Stream
- Duplex Stream
- Transform Stream

Example:

```javascript
const fs = require("fs");

const readStream = fs.createReadStream("largeFile.txt");

readStream.on("data", chunk => {
    console.log(chunk);
});
```

---

# Topics to Master

- Node.js Architecture
- Modules (CommonJS & ES Modules)
- Process Object
- Path Module
- File System Module
- Event Loop
- Callbacks
- Promises
- Async/Await
- Event Emitter
- Buffers
- Streams
- Crypto Module
- Error Handling
- Environment Variables
- HTTP Module
- Express.js
- REST APIs
- Authentication (JWT)
- Middleware
- Database Integration (MongoDB/PostgreSQL/MySQL)

---

# Learning Roadmap

1. JavaScript Fundamentals
2. Node.js Basics
3. Built-in Modules
4. npm & Packages
5. Asynchronous Programming
6. Event Loop
7. Express.js
8. REST APIs
9. Authentication (JWT)
10. Database (MongoDB/PostgreSQL/MySQL)
11. File Uploads
12. Deployment
13. Testing
14. Build a Full Backend Project

---

# Best Practices

- Keep one entry file.
- Follow separation of concerns.
- Use environment variables for secrets.
- Handle errors properly.
- Use async/await over callback hell.
- Organize code into routes, controllers, services, and repositories.
- Keep utility functions reusable.
- Write modular and maintainable code.
- Use ESLint and Prettier for consistent code formatting.
