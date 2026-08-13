# 🚀 RK Cloud DevOps

A modern React + Vite project demonstrating a complete **GitHub-based CI/CD deployment workflow** using GitHub Actions and GitHub Pages.

## 🌐 Live Demo

👉 https://rajendrakharade29.github.io/rk-cloud-devops/

---

## 📌 Project Overview

This project is created to demonstrate a practical DevOps workflow where application code is developed locally, pushed to GitHub, automatically built using GitHub Actions, and deployed to GitHub Pages.

### CI/CD Flow

```text
Developer
   │
   ▼
Local React/Vite Project
   │
   │ git push
   ▼
GitHub Repository
   │
   ▼
GitHub Actions
   │
   ├── Install Dependencies
   ├── Build Application
   └── Deploy
   │
   ▼
GitHub Pages
   │
   ▼
🌐 Live Application
```

---

## 🛠️ Technologies Used

* React
* Vite
* JavaScript
* HTML5
* CSS3
* Git
* GitHub
* GitHub Actions
* GitHub Pages
* Node.js
* npm

---

## ⚙️ CI/CD Pipeline

The project uses **GitHub Actions** for automatic deployment.

Whenever changes are pushed to the `main` branch:

1. GitHub Actions starts the workflow.
2. Repository code is checked out.
3. Node.js environment is configured.
4. npm dependencies are installed.
5. Vite builds the production application.
6. The generated `dist` folder is uploaded.
7. GitHub Pages deploys the latest version.

### Deployment Trigger

```bash
git add .
git commit -m "Update project"
git push
```

After the push, GitHub Actions automatically handles the deployment.

---

## 📁 Project Structure

```text
rk-cloud-devops/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 💻 Run Project Locally

### 1. Clone Repository

```bash
git clone https://github.com/RajendraKharade29/rk-cloud-devops.git
```

### 2. Enter Project Directory

```bash
cd rk-cloud-devops
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available on the local development server.

---

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

---

## 🚀 Deployment

Deployment is handled automatically through:

**GitHub Actions → GitHub Pages**

No manual server deployment is required.

---

## 🎯 DevOps Concepts Demonstrated

This project demonstrates:

* Git version control
* GitHub repository management
* Branch management
* GitHub Actions
* CI/CD automation
* Automated build process
* Static application deployment
* GitHub Pages hosting
* Vite production builds

---

## 👨‍💻 Author

**Rajendra Kharade**

DevOps / Linux Administrator

### Project

**RK Cloud DevOps**

🌐 Live Demo:
https://rajendrakharade29.github.io/rk-cloud-devops/

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
