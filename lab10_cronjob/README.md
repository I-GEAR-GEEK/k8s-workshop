# Execute kubernetes job

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

2. Apply current service

```sh
kubectl apply -f kubernetes/myapp.yml
```

3. Try to execute job within the container.

```sh
yarn migrate-db
```

3. This time both of CPU / Memory usage are rising up.

4. Try to run migration script with seprate container with this command

```sh
kubectl apply -f kubernetes/job.yml
```

5. Look at pods

```sh
kubectl get pods -n kube-workshop
```