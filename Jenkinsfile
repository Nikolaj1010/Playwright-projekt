pipeline {
  agent any
  stages {
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
