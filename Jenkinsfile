pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git 'https://github.com/Nikolaj1010/Playwright-projekt.git'
      }
    }
    stage('install playwright') {
      steps {
        bat '''
          npm ci
          npx playwright install --with-deps
        '''
      }
    }
    stage('help') {
      steps {
        bat 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        bat '''
          npx playwright test --list
          npx playwright test
        '''
      }
    }
  }
}
