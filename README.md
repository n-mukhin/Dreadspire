# Dreadspire

Dreadspire is a fully functional, production-ready web application that aggregates and displays trending GitHub repositories with over 50,000 stars. It periodically fetches top repositories from the GitHub API, caches them, and presents them via a clean frontend interface. The application is containerized, tested, and ready to be deployed into a Kubernetes environment using CI/CD pipelines integrated with Jenkins and GitLab CI.

## Overview

### Backend
- A Node.js Express server that periodically fetches trending repositories from GitHub’s API, caches results, and serves them to the frontend.

### Frontend
- A React-based web interface that displays the trending repositories fetched by the backend.

### Caching
- The backend caches results for one minute to reduce unnecessary API calls.

### Scalability
- Easily scalable via Docker images and Kubernetes deployments.

### Automated CI/CD
- Jenkins and GitLab CI pipelines included for building, testing, image creation, pushing to a registry, and deployment updates to Kubernetes.

## Tech Stack
- **Backend**: Node.js, Express, Axios, Jest
- **Frontend**: React, React DOM, Nginx (for production builds)
- **CI/CD**: Jenkins, GitLab CI
- **Containerization**: Docker, Docker Compose
- **Orchestration**: Kubernetes (Deployments, Services)
- **Languages & Build Tools**: JavaScript, Node.js, npm
- **Version Control**: Git

## Prerequisites
- **Node.js & npm**: For local development and testing
- **Docker & Docker Compose**: For containerization and local environment setup
- **Kubernetes & kubectl**: For deployment to a Kubernetes cluster
- **Git**: For version control and CI/CD pipeline integration

## Getting Started Locally

### Clone the Repository
```bash
git clone https://example.com/your-repo.git
cd dreadspire
```

### Run with Docker Compose
```bash
docker-compose up --build
```
- The backend will be accessible on `http://localhost:3001/trending`.
- The frontend will be accessible on `http://localhost:3000`.

### Run Tests (Backend)
```bash
cd backend
npm install
npm test
```

### Frontend Build (Optional)
```bash
cd frontend
npm install
npm run build
```

## Deployment to Kubernetes

### Build and Push Images
Before deploying, ensure you have pushed the images to your registry. An example using Docker:

```bash
docker build -t your-registry/dreadspire-backend:latest backend
docker build -t your-registry/dreadspire-frontend:latest frontend
docker push your-registry/dreadspire-backend:latest
docker push your-registry/dreadspire-frontend:latest
```

### Apply Kubernetes Manifests
```bash
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/backend-service.yaml
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/frontend-service.yaml
```

### Access the Application
Once deployed, the frontend Service exposes a NodePort. Retrieve the NodePort:
```bash
kubectl get svc dreadspire-frontend
```
Open `http://<node-ip>:<nodeport>` in a browser to view the frontend interface.

## CI/CD Integration

### Jenkinsfile
- Provides a CI pipeline for Jenkins, including steps to checkout code, test, build images, push them, and deploy updates to Kubernetes.

### .gitlab-ci.yml
- Provides a CI/CD pipeline for GitLab, performing similar steps as Jenkins.

By integrating with Jenkins or GitLab CI, the application can be automatically tested, built, containerized, and deployed upon each commit or pull request merge.

## Customization

### GitHub Trending Criteria
- The backend fetches repositories with over 50,000 stars sorted by star count. Adjust the query in `backend/src/github.js` if you need different criteria.

### Cache Duration
- Results are cached for one minute. Adjust the time-to-live in `github.js` as needed.

### Scaling
- Modify the `replicas` field in Kubernetes deployments to scale horizontally.

