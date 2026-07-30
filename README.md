
This is a simple full-stack web application built using node , express
and next .

The project includes a backend API and a frontend that fetches and displays tasks data.

## Technologies Used

- Node.js
- Express.js
- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend
- Express server
- Health check route
- Tasks API
- Returns JSON responses

### Frontend
- Home page
- About page
- Tasks page
- Reusable components
- Fetches tasks from the backend
- Loading and error handling


## Project Structure

```
project
│
├── backend
│   ├── server.ts
│   └── package.json
│
├── frontend
│   ├── app
│   ├── components
│   └── package.json
│
└── README.md
```

---

## API Routes

### Health Check

```
GET /health
```

### Get Tasks

```
GET /tasks
```

---

## How to Run the Project

### 1. Start the Backend

```bash
cd backend
npm install
npm run dev
```

Backend:

```
http://localhost:3002
```

---

### 2. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend:

```
http://localhost:3000
```

---

## What I Learned

- Setting up a Node.js project
- Building an Express server
- Creating GET routes
- Returning JSON data
- Using HTTP status codes
- Creating React components
- Passing props
- Using children
- Fetching data from an API
- Displaying loading and error states

---

## Future Improvements

- Add new tasks
- Edit tasks
- Delete tasks
- Connect to a database
- Add user login
