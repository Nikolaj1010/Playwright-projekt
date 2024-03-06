pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        sh '''
          actions/checkout@v3
        '''
      }
    }
    stage('setup node') {
      steps {
        sh '''
          actions/setup-node@v3
        '''
      }
    }
    stage('install playwright') {
      steps {
        sh '''
          npm ci
          npx playwright install --with-deps
        '''
      }
    }
    stage('help') {
      steps {
        sh 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        sh '''
          npx playwright test --list
          npx playwright test
        '''
      }
    }
  }
}
