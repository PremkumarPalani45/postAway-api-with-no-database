# 📝 PostAway API (No Database)

**PostAway** is a lightweight RESTful API built with **Node.js** and **Express.js**, designed for managing posts and user interactions — entirely without a database.  
It uses in-memory storage and includes full CRUD functionality for posts along with support for likes and comments.

---

## 🚀 Features

- 📝 Create, update, and delete posts  
- ❤️ Like and unlike posts  
- 💬 Add and delete comments  
- ⚡ All data is stored in memory — no database used

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Storage:** In-memory JavaScript objects/arrays  
- **Routing:** Modular `routes/` folder (no MVC)

---

## 📁 Project Structure

postAway-api-with-no-database/
│
├── routes/ # All API routes (postRoutes.js, etc.)
├── data/ # Temporary in-memory data (e.g., posts.js)
├── index.js # Entry point of the server
└── package.json


---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/PremkumarPalani45/postAway-api-with-no-database.git
cd postAway-api-with-no-database
Install dependencies


npm install
Run the server


node index.js
