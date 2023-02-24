# POC

To build application...
1. You must run shell script which inside /angular/angular-v... to build&deploy image
2. After deploy, use the shell script inside k8s to build an application

How to build angular inside k8s using cmd

cd POC
sh /angular/angular-v1/script.sh
sh /angular/angular-v2/script.sh
sh /k8s/script.sh

notes: this is the demo version, further develop will use the helm chart instead of shell script.
