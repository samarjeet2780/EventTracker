# 🌟 Event Tracker

📌 **Full-Stack Event Management Application**

Welcome to **Event Tracker** – a powerful and intuitive full-stack application designed to help users track, manage, and organize events seamlessly. With secure authentication, MongoDB integration, file uploads, and a customizable theme, this application enhances the event management experience. 🚀

---

## 🔥 Features

- ✅ **User Authentication** – Secure login system with password hashing for enhanced security.  
- ✅ **MongoDB Integration** – Store and retrieve event details with a robust NoSQL database.  
- ✅ **Event Management** – Add, edit, and manage upcoming events with ease.  
- ✅ **File Uploads** – Attach relevant documents to events for quick access.  
- ✅ **Dark/Light Theme** – Switch between themes for a personalized experience.  
- ✅ **Protected Routes** – Ensuring authorized access to user data.

---

## 🏗️ Tech Stack

- **Frontend**: Nunjucks for templating, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB, Mongoose  
- **Authentication**: bcrypt for password hashing, Express-Session for user sessions  
- **File Uploads**: Multer for handling file attachments  
- **Environment Configuration**: .env for sensitive credentials and secrets

---

## 🚀 Getting Started

1️⃣ **Clone the Repository**

```bash
git clone https://github.com/your-username/event-tracker.git
cd event-tracker

```

2️⃣ **Install Dependencies**

```bash
npm install # For both frontend and backend

```
3️⃣ Configure Environment Variables


``` bash

MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
Copy and Edit: Replace your_mongodb_connection_string and your_session_secret with your actual MongoDB URI and session secret key.
```
4️⃣ Start the Application

``` bash
npm start # Runs both frontend & backend
Copy and Edit: This command will start both frontend and backend applications.
```
---
## 📸 Screenshots

- **Light Mode**
- **Dark Mode**

---

## 🔐 Security

- User passwords are hashed using **bcrypt** before being stored in MongoDB.  
- **Protected routes** ensure that only authorized users can access their events.

---

## 🤝 Contributing

We welcome contributions! Feel free to fork the repo and submit pull requests.

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

💡 Have questions? Feel free to reach out! 😊

