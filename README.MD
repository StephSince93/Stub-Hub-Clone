Microservices APP using Docker,Kubernetes, Skaffold

Run - skaffold Dev 

[https://kubernetes.github.io/ingress-nginx/deploy/] - kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/cloud/deploy.yaml

- Google Cloud - kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/cloud/deploy.yaml

- Kubernetes Secret ENV Variables command: kubectl create secret generic jwt-secret --from-literal='Name of variable'='Name of secret'

- Kubernetes get secrets command: kubectl get secrets

- Kubernetes get last deployment: kubectl get deployment -o yaml