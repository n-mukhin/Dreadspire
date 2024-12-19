pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://example.com/your-repo.git'
      }
    }
    stage('Build and Test Backend') {
      steps {
        sh 'cd backend && npm install && npm test'
      }
    }
    stage('Build Frontend') {
      steps {
        sh 'cd frontend && npm install && npm run build'
      }
    }
    stage('Build Images') {
      steps {
        sh 'docker build -t your-registry/dreadspire-backend:$BUILD_NUMBER backend'
        sh 'docker build -t your-registry/dreadspire-frontend:$BUILD_NUMBER frontend'
      }
    }
    stage('Push Images') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'docker-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
          sh 'echo $PASS | docker login your-registry -u $USER --password-stdin'
          sh 'docker push your-registry/dreadspire-backend:$BUILD_NUMBER'
          sh 'docker push your-registry/dreadspire-frontend:$BUILD_NUMBER'
        }
      }
    }
    stage('Deploy') {
      steps {
        sh 'kubectl set image deployment/dreadspire-backend dreadspire-backend=your-registry/dreadspire-backend:$BUILD_NUMBER --record'
        sh 'kubectl set image deployment/dreadspire-frontend dreadspire-frontend=your-registry/dreadspire-frontend:$BUILD_NUMBER --record'
      }
    }
  }
}
