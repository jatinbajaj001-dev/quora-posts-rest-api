const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");


app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "jatinbajaj",
        content: "REST APIs use HTTP methods intentionally: GET to read, POST to create, PUT/PATCH to update, and DELETE to remove. Keeping routes resource-based (like /posts/:id) makes APIs predictable and easier to maintain."
    },
    {
        id: uuidv4(),
        username: "jatinbajaj",
        content: "HTML gives structure, CSS handles presentation, and JavaScript adds behavior. Separating these concerns is one of the most important habits in frontend web development."
    },
    {
        id: uuidv4(),
        username: "jatinbajaj",
        content: "In Express, middleware runs in order. Body parsers, static file serving, and route handlers should be registered before your routes so requests are processed correctly."
    },
    {
        id: uuidv4(),
        username: "jatinbajaj",
        content: "Git is not just backup — it is collaboration. Commit often, write clear messages, and use branches when experimenting so your main code stays stable."
    },
    {
        id: uuidv4(),
        username: "jatinbajaj",
        content: "Responsive design is not only about media queries. Use flexible layouts, relative units, and test on real devices to build interfaces that work everywhere."
    },
    {
        id: uuidv4(),
        username: "jatinbajaj",
        content: "Debugging is a core developer skill. Read error messages carefully, reproduce the bug consistently, and isolate the problem before changing random parts of your code."
    },
    {
        id: uuidv4(),
        username: "jatinbajaj",
        content: "Async JavaScript (callbacks, promises, and async/await) is essential for web apps. Understanding the event loop helps you write faster, non-blocking backend and frontend code."
    },
    {
        id: uuidv4(),
        username: "jatinbajaj",
        content: "Clean code beats clever code. Use meaningful variable names, keep functions small, and refactor early — future you (and your teammates) will thank you."
    },
];

app.get("/", (req, res) => {
    res.redirect("/posts");
});

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs")
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({username, content, id});
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    let{ id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let{ id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.delete("/posts/:id", (req, res) => {
    let{ id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`listening to port : ${port}`);
});