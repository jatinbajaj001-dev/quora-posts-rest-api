# Quora Posts — REST CRUD App

A Quora-style posts application built with **Node.js** and **Express** to practice REST APIs and full CRUD operations.

## Features

- View all posts on a clean, responsive UI
- Create new posts with username and content
- View a single post in detail
- Edit existing posts
- Delete posts
- RESTful routes with proper HTTP methods
- HTML forms using `method-override` for PATCH and DELETE

## Tech Stack

- **Node.js**
- **Express.js** — web server and routing
- **EJS** — server-side templating
- **UUID** — unique post IDs
- **method-override** — simulate PATCH/DELETE from HTML forms
- **CSS** — custom styling (no framework)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/rest-class.git
cd rest-class
npm install
```

### Run the app

```bash
npm start
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

## API Routes

| Method | Route              | Description        |
|--------|--------------------|--------------------|
| GET    | `/`                | Redirect to posts  |
| GET    | `/posts`           | List all posts     |
| GET    | `/posts/new`       | New post form      |
| POST   | `/posts`           | Create a post      |
| GET    | `/posts/:id`       | View one post      |
| GET    | `/posts/:id/edit`  | Edit post form     |
| PATCH  | `/posts/:id`       | Update a post      |
| DELETE | `/posts/:id`       | Delete a post      |

## Project Structure

```
REST_CLASS/
├── index.js              # Express server and routes
├── package.json
├── public/
│   └── style.css         # App styles
└── views/
    ├── index.ejs         # All posts page
    ├── new.ejs           # Create post form
    ├── edit.ejs          # Edit post form
    ├── show.ejs          # Single post view
    └── partials/         # Shared layout (head, header, footer)
```

## Notes

- Posts are stored **in memory** — data resets when the server restarts.
- This is a **learning project** focused on REST concepts and Express fundamentals.

## Author

**Jatin Bajaj** — [@jatinbajaj](https://github.com/jatinbajaj)

## License

ISC
