pipeline{
    agent any

    stages {
        stage ('Build Image') {
            steps {
               script {
                    dockerapp = docker.build("neliochume/login-chumeras:${env.BUILD_ID}", '-f ./src/Dockerfile ./src')
               } 
            }
        }
    }
}