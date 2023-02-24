cd angular/angular-v2

docker build . -t zolidlime988/angular-v2
docker push zolidlime988/angular-v2

kubectl delete po -n angular-poc -l app=angular-2