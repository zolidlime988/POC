alias k=kubectl

cd k8s

k config set-contexts -n angular-poc

k delete -f angular-1-deployment.yaml -n angular-poc
k delete -f angular-2-deployment.yaml -n angular-poc
k delete -f angular-1-svc.yaml -n angular-poc
k delete -f angular-2-svc.yaml -n angular-poc
k delete -f ingress-angular.yaml -n angular-poc

k get po -o wide
k get deployment -o wide
k get svc -o wide
k get ing -o wide