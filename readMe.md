# Simple Express To-Do App

A basic REST API for managing tasks stored in memory.

## Run Instructions
1. Install dependencies:
   `npm install`
2. Start the server:
   `node app.js`

## API Endpoints
- `GET /tasks`: List all tasks.
- `POST /tasks?title=YourTask`: Create a task.
- `POST /tasks/:id/complete`: Mark a task as completed.
- `DELETE /tasks/:id`: Delete a task.