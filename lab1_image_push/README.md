# Build your image and push to registry

Things to prepare

1. Build docker images

```sh
docker build -t myapp:YOUR_NAME .
```

2. Get AWS ECR Accesstoken

```sh
aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin ACCOUNT_ID.dkr.ecr.ap-southeast-1.amazonaws.com
```

3. Tag docker

```sh
docker tag myapp:YOUR_NAME ap-southeast-1.dkr.ecr.REGION.amazonaws.com/kube-workshop-app:YOUR_NAME
```

4. Push image

```sh
docker push 167663088283.dkr.ecr.ap-southeast-1.amazonaws.com/kube-workshop-app:banyawat
```