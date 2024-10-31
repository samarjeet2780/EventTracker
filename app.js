const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Setting up Nunjucks templating engine
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// Middleware for parsing form data and serving static files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));  // Serve static files

// Multer setup for handling file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');  // Uploaded files go to uploads folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);  // Unique filename by adding time tot it
    }
});
const upload = multer({ storage: storage });

// Array storage for tasks
let tasks = []; 


app.get('/', (req, res) => {
    res.render('index.njk', { tasks });
});
    

app.post('/add-task', upload.single('file'), (req, res) => {
    const { title, description, dueDate } = req.body;
    const file = req.file ? req.file.filename : null;
    const newTask = { id: Date.now(), title, description, dueDate, file };
    tasks.push(newTask);
    res.json(newTask);
 
});

// Route to show details of a specific task
app.get('/task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        res.render('task.njk', { task });
    } else {
        res.status(404).render('404.njk');
    }
});  

// Route to download attached file
app.get('/download/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'uploads', req.params.filename);
    res.download(filePath);
});

// Custom 404 error handler
app.use((req, res, next) => {
    res.status(404).render('404.njk');
});

// Custom 500 error handler 
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500.njk');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
