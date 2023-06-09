# Test healthcheck behavior

1. Build and push server image

```sh
aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin ACCOUNT_ID.dkr.ecr.ap-southeast-1.amazonaws.com

docker build -t ACCOUNT_ID.dkr.ecr.ap-southeast-1.amazonaws.com/kube-workshop-app:YOUR_NAME .
docker push ACCOUNT_ID.dkr.ecr.ap-southeast-1.amazonaws.com/kube-workshop-app:YOUR_NAME
```

2. Create myapp

```sh
kubectl apply -f kubernetes/myapp.yml
```

3. Simulate destructive event on the service by visit `/database/bomb` (use kube port proxy). This stand for event when database is down

```sh
curl http://localhost:5000/database/bomb
```

4. Check pods. It should restart when database online state is down when run healthcheck
