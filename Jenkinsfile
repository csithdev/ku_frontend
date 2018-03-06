node {
  stage('Preparation') { // for display purposes
        git credentialsId: '86d4b877-4c4e-4960-9261-91c8af65f022', url: 'http://203.131.209.132:8000/CSI/MEDWebFrontend.git'
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], browser: [$class: 'GogsGit', repoUrl: 'http://203.131.209.132:8000/CSI/MEDWebFrontend.git'], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '86d4b877-4c4e-4960-9261-91c8af65f022', url: 'http://203.131.209.132:8000/CSI/MEDWebFrontend.git']]])

       
  }
  stage('Build') {
        sh '''jar -cvf TUMEDWeb.war *
/opt/wildfly/bin/jboss-cli.sh --user=root --password=csi@dmin --connect controller=127.0.0.1 --command="undeploy TUMEDWeb.war"
/opt/wildfly/bin/jboss-cli.sh --user=root --password=csi@dmin --connect controller=127.0.0.1 --command="deploy /var/lib/jenkins/workspace/deploy-frontend/TUMEDWeb.war"'''
  }
  stage('Results') {
      slackSend channel: '#deploy_service', color: '#D8E4F1', message: 'Build Success', teamDomain: 'medtu', tokenCredentialId: '20556933-5191-4a65-a74c-7feffaed606f'
  }
}