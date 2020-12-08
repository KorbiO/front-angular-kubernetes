pipeline {
	agent any
	
	stages {
		stage('SCM Checkout'){
			steps{
        	git credentialsId: 'gitPwd', url: 'https://github.com/KorbiO/discovery-service'
        		}
    }
		
		stage('NPM Install') {
			steps {
			
				
				
				bat 'npm install'
				
			
				  }
		}
		stage('Build Docker Image'){
			steps{
        		bat 'docker build -t omarkorbi/front-angular:latest .'
        		}
    }
    stage('Push Docker Image'){
     	steps{
	        bat 'docker login -u omarkorbi -p gotktpas123'
	  		bat 'docker tag omarkorbi/front-angular:latest omarkorbi/front-angular '
	  		bat 'docker push omarkorbi/front-angular'
	  		}
    }
     stage('Run Kubernetes'){
    	steps{
    	
   	   		bat 'kubectl --kubeconfig ./config apply -f deployment.yaml'
   	   		}
    }
     
    
		
	}
}