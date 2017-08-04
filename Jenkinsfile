#!groovy
pipeline {
    agent any

//    parameters {
//        boolean(name: 'isRelease')
//        string(name: 'current_deploy_build_release')
//        string(name: 'next_dev_snapshot_version')
//    }
    stages {

        stage( 'pipeline confirm'){
            //执行确认
            steps{
                input(message: 'exceute stage',parameters:[string(name: 'stage')])
                echo "hello ${params.stage}"
            }

        }

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
                echo "Hello ${params.current_deploy_build_release}"
                echo 'Deploying....'
            }
        }
    }
}
