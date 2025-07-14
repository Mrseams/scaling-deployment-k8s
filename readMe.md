````markdown
# 🌀 PostPulse – Scalable Microblogging App

PostPulse is a lightweight full-stack microblogging platform built with **Node.js**, **MongoDB**, and **React**, containerized with **Docker**, and orchestrated using **Kubernetes**. It’s designed to showcase modern DevOps practices, including service deployment, scaling, and load testing.

---

## 📦 Tech Stack

| Layer            | Technology        | Description                                   |
| ---------------- | ----------------- | --------------------------------------------- |
| Frontend         | React (Vite)      | User interface for creating and viewing posts |
| Backend          | Node.js + Express | REST API for post management                  |
| Database         | MongoDB           | NoSQL database for storing posts              |
| Containerization | Docker            | Containerized services for portability        |
| Orchestration    | Kubernetes        | Deployment, scaling, and service discovery    |
| Load Testing     | k6 or Vegeta      | Simulate traffic and test autoscaling         |

---

## ✨ Features

- 📄 Create and view micro-posts
- ⚡ RESTful API with Express
- 🐳 Fully containerized with Docker
- ☸️ Kubernetes manifests for scalable deployment
- 📈 Load testing with k6 or Vegeta
- 🔁 Horizontal Pod Autoscaling (HPA) demo

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Mrseams/scaling-deployment-k8s.git
cd scaling-deployment-k8s
```
````

### 2. Run Locally with Docker Compose

```bash
docker-compose up --build
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000/posts](http://localhost:5000/posts)

---

## ☸️ Kubernetes Deployment

### 1. Build and Push Docker Images

```bash
# Backend
docker build -t your-dockerhub/deploy-backend ./backend
docker push your-dockerhub/deploy-backend

# Frontend
docker build -t your-dockerhub/deploy-frontend ./frontend
docker push your-dockerhub/deploy-frontend
```

### 2. Apply Kubernetes Manifests

```bash
kubectl apply -f k8s/
```

### 3. Access the App

If using Minikube:

```bash
minikube service frontend
```

If using a cloud provider, check the external IP of the frontend service:

```bash
kubectl get svc frontend
```

---

## 📊 Load Testing (Optional)

Install [k6](https://k6.io/) and run:

```bash
k6 run test.js
```

Or use [Vegeta](https://github.com/tsenart/vegeta) for attack simulation.

---

## 🧠 Project Goals

This project was built to demonstrate:

- Proficiency with Docker and multi-service containerization
- Kubernetes deployment and service orchestration
- Load testing and autoscaling under traffic
- Clean, modular full-stack development

---

## 📁 Folder Structure

```
postpulse/
├── backend/         # Node.js API
├── frontend/        # React UI
├── k8s/             # Kubernetes manifests
├── docker-compose.yml
└── README.md
```

---

## with autoscaling

### 1. Prerequisites

- Your backend pod must have resource requests defined for CPU
- Metrics server must be installed in your cluster:

```bash
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
```

### 2. Create HPA for Backen

```bash
kubectl autoscale deployment backend \
  --cpu-percent=50 \
  --min=2 \
  --max=10
```

This will scale between 2 and 10 replicas based on CPU load, keeping average usage around 50%.

### 📊 3. Monitor Scaling

Use this to check HPA status:

```bash
kubectl get hpa
```

And this to watch CPU and memory live:

```bash
kubectl top pods
```

### 🧪 Load Testing Tip

Use k6 to simulate traffic that hits the backend endpoints

---

## 📜 License

MIT License. Feel free to fork, modify, and share!

---

## 🙌 Acknowledgments

Built with ❤️ to showcase DevOps and full-stack engineering skills.

```

```
