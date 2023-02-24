cd angular/angular-v1

docker build . -t zolidlime988/angular-v1
docker push zolidlime988/angular-v1

kubectl delete po -n angular-poc -l app=angular-1