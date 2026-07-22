pipeline {

    agent any

    environment {
        LOGIN = credentials('admin_credentials')
        BASE_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    }

    tools {
        nodejs 'NodeJS18'
    }

    parameters {
        choice(
            name: 'Scripts',
            choices: ['smokeTest', 'regressionTest'],
            description: 'Select Test Suite'
        )

        string(
            name: 'URL',
            defaultValue: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            description: 'Application URL'
        )
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/srushhh86/srushtiDeltaHRM.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm install'
                    } else {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npx playwright install'
                    } else {
                        bat 'npx playwright install'
                    }
                }
            }
        }

        stage('Create Storage State') {
            steps {
                script {
                    if (isUnix()) {
                        sh """
                            export URL='${params.URL}'
                            export User_Name='${LOGIN_USR}'
                            export Password='${LOGIN_PSW}'

                            npx playwright test tests/auth.setup.js
                        """
                    } else {
                        bat """
                            set URL=${params.URL}
                            set User_Name=%LOGIN_USR%
                            set Password=%LOGIN_PSW%

                            npx playwright test tests\\auth.setup.js
                        """
                    }
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    if (isUnix()) {
                        sh """
                            export URL='${params.URL}'
                            export User_Name='${LOGIN_USR}'
                            export Password='${LOGIN_PSW}'

                            echo "Running Suite: ${params.Scripts}"
                            npm run ${params.Scripts}
                        """
                    } else {
                        bat """
                            set URL=${params.URL}
                            set User_Name=%LOGIN_USR%
                            set Password=%LOGIN_PSW%

                            echo Running Suite: ${params.Scripts}
                            npm run ${params.Scripts}
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
        }
    }
}