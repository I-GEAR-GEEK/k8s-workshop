# Build image that use ENV and put K8s ConfigMap

1. Build docker image

    a. Build docker images

      ```sh
      docker build -t ACCOUNT_ID.dkr.ecr.ap-southeast-1.amazonaws.com/kube-workshop-app:YOUR_NAME .
      ```

    b. Get AWS ECR Accesstoken

    ```sh
    aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin ACCOUNT_ID.dkr.ecr.ap-southeast-1.amazonaws.com
    ```

    c. Push image

    ```sh
    docker push ACCOUNT_ID.dkr.ecr.ap-southeast-1.amazonaws.com/kube-workshop-app:YOUR_NAME
    ```

2. Create config map

```sh
kubectl apply -f kubernetes/configmap.yml
```

3. Apply configmap to `myapp`

```sh
kubectl apply -f kubernetes/myapp.yml
```

4. Switch comment from `envFrom` to `env`

```yml
# envFrom:
#  - configMapRef:
#      name: myapp-config
env:
  - name: APP_NAME
    value: "Banyawat"
  - name: PORT
    value: "5000"
```

5. Reapply myapp

```sh
kubectl apply -f kubernetes/myapp.yml
```
