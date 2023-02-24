alias k=kubectl

cd k8s

k delete -f angular-1-deployment.yaml
k delete -f angular-2-deployment.yaml
k delete -f angular-1-svc.yaml
k delete -f angular-2-svc.yaml
k delete -f ingress-angular.yaml

k get po -o wide
k get deployment -o wide
k get svc -o wide
k get ing -o wide