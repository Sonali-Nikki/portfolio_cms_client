# Portfolio CMS Client

A **React-based frontend** for a **Portfolio Content Management System (CMS)**. This client displays portfolio content on the public home page and provides an **Admin Dashboard** to manage content like **About, Skills, Projects, Services, Experience, and Education** via secure login.

---

## 🚀 Features

* 🏠 Dynamic Home Page (content fetched from backend)
* 🔐 Admin Login & Logout
* 🧑‍💼 Admin Dashboard with Sidebar
* ✏️ CRUD Operations for all portfolio sections
* 🔄 Real-time content updates
* 🔒 Protected routes (Admin only)
* 📱 Responsive UI

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Routing:** React Router DOM
* **Styling:** Tailwind CSS
* **State Management:** Context API
* **HTTP Client:** Fetch API
* **Authentication:** JWT (stored in localStorage)

---

## 📁 Project Structure

```
portfolio-cms-client/
│
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Home, Login, Dashboard pages
│   ├── layouts/        # MainLayout, AdminLayout
│   ├── context/        # AuthContext
│   ├── api/            # API service files
│   ├── assets/         # Images & icons
│   └── App.jsx
│
├── public/
├── index.html
├── package.json
└── README.md
```

---

## 🔐 Authentication Flow

1. Admin logs in using email & password
2. JWT token is received from backend
3. Token is stored in `localStorage`
4. Protected routes verify login status
5. Logout clears token

---

## 🌐 API Integration

Set backend base URL inside API config file:

```js
const BASE_URL = "http://localhost:5000/api";
```


## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_URL=http://localhost:5000/api
```

(For Vite projects)

---

## ▶️ Run Locally

### 1️⃣ Install dependencies

```
npm install
```

### 2️⃣ Start development server

```
npm run dev
```

App will run on:

```
http://localhost:5173
```

---

## 🧭 Pages Overview

* `/` → Home (Public Portfolio)
* `/login` → Admin Login
* `/admin` → Dashboard
* `/admin/about`
* `/admin/skills`
* `/admin/projects`
* `/admin/services`

---

## 🚧 Common Issues

* **401 Unauthorized** → Token missing / expired
* **CORS Error** → Enable CORS on backend
* **Data not showing** → Check API base URL

---

## 🔗 Backend Repository

This client works with the **Portfolio CMS Server** (Node + Express + MongoDB).

Make sure backend is running before starting the client.

---

## 🙋 Author

**Sonali Priyadarshini**
Frontend & Full Stack Developer

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

Happy Coding 🚀
