#!groovy
pipeline {
    agent any
    parameters {
        string(name: '当前release版本')
        string(name: '下一个snapshot版本')
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
                echo 'Deploying....'
            }
        }
    }
}
