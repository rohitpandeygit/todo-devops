# 📝 TaskFlow — Full-Stack Todo App with DevOps Deployment

A full-stack **Todo application** built with a **raw Node.js HTTP server** (no framework) and a **Vue.js** frontend, deployed on **AWS EC2**. This project demonstrates core backend fundamentals and a real-world DevOps deployment workflow — from local development to cloud hosting.

---

## 🚀 Live Demo

> _Add your EC2 public IP or domain here, e.g.: `http://your-ec2-ip:3000`_

---

## 🛠️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | Vue.js, HTML, CSS                 |
| Backend    | Node.js (native `http` module)    |
| Deployment | AWS EC2 (Ubuntu)                  |
| Access     | SSH (`.pem` key pair)             |

---

## 📁 Project Structure
```
todo-devops/
├── backend/            # Node.js HTTP server (no framework)
│   ├── server.js
│   └── package.json
├── frontend/           # Vue.js frontend
│   ├── index.html
│   ├── app.js
│   └── style.css
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started (Local Development)

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- npm

### 1. Clone the repository
```bash
git clone https://github.com/rohitpandeygit/todo-devops.git
cd todo-devops
```

### 2. Start the backend
```bash
cd backend
npm install
node server.js
```

The backend API will run on `http://localhost:3000`.

### 3. Open the frontend

Open `frontend/index.html` directly in your browser, or serve it with a simple static server:
```bash
npx serve frontend
```

---

## ☁️ Deployment on AWS EC2

### Step 1 — Launch an EC2 Instance

- **AMI:** Ubuntu 22.04 LTS
- **Instance type:** `t2.micro` (free tier eligible)
- **Security group inbound rules:**
  - Port **22** — SSH
  - Port **3000** — Node.js app

### Step 2 — SSH into your instance
```bash
chmod 400 todo-key-pair.pem
ssh -i "todo-key-pair.pem" ubuntu@<your-ec2-public-ip>
```

### Step 3 — Install Node.js on the server
```bash
sudo apt update
sudo apt install -y nodejs npm
```

### Step 4 — Clone and run the app
```bash
git clone https://github.com/rohitpandeygit/todo-devops.git
cd todo-devops/backend
npm install
node server.js
```

### Step 5 — Access the app

Open your browser and visit:
```
http://<your-ec2-public-ip>:3000
```

> 💡 **Tip:** Keep your server running after closing the SSH session using `pm2`:
> ```bash
> npm install -g pm2
> pm2 start server.js --name taskflow
> pm2 save
> pm2 startup
> ```

---

## 🧩 Features

- ✅ Add new todos
- ✅ Mark todos as complete
- ✅ Delete todos
- ✅ Vue.js reactive UI
- ✅ Pure Node.js REST API (no framework)
- ✅ Deployed on AWS EC2

---

## 🔒 Security Warning

> ⚠️ **The `todo-key-pair.pem` file should never be committed to a public repository.**
> If you see it in your repo, remove it immediately and **rotate your AWS key pair**.
>
> Add it to `.gitignore`:
> ```
> *.pem
> ```
>
> To remove it from git history:
> ```bash
> git rm --cached todo-key-pair.pem
> git commit -m "Remove exposed PEM key"
> git push
> ```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Rohit Pandey**  
[GitHub](https://github.com/rohitpandeygit/todo-devops)
