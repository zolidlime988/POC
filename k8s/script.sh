alias k=kubectl

cd k8s

k apply -f angular-1-deployment.yaml
k apply -f angular-2-deployment.yaml
k apply -f angular-1-svc.yaml
k apply -f angular-2-svc.yaml
k apply -f ingress-angular.yaml

k get po -o wide
k get deployment -o wide
k get svc -o wide
k get ing -o wide