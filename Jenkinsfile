#!groovy
pipeline {
    agent any

    parameters {
        string(name: 'current build release')
        string(name: 'next snapshot version')
    }
    stages {

        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }

        stage('Deploy') {
            steps {
               input(parameters:{string(name: 'current build release') string(name: 'next snapshot version')})
                echo 'Deploying....'
            }
        }
    }
}
