# Build your image and push to registry

Things to prepare

1. Build docker images

```sh
docker build -t myapp:YOUR_NAME .
```

x. Get AWS ECR Accesstoken

```sh
aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin ACCOUNT_ID.dkr.ecr.ap-southeast-1.amazonaws.com
```

2. Tag docker
```sh
docker tag IMAGE_ID ACCOUNT_ID.dkr.ecr.REGION.amazonaws.com/REPO_NAME:TAG
```