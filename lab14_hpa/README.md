# Horizontal Pod Autoscaling

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

2. Apply `deployment.yml` and `service.yml` to deploy this app

```sh
kubectl apply -f kubernetes/deployment.yml
kubectl apply -f kubernetes/service.yml
```

3. Forward service port to your computer

4. Apply `hpa.yml` to make **Horizontal Pod Autoscaling**

```sh
kubectl apply -f kubernetes/hpa.yml
```

5. Look at `Config > HPA` in Lens to see if metrics is not exceed the limit

6. Do some heavy lifting to your app by visit http://localhost:YOURPORT/heavy-lifting

7. Check pod metrics. Memory should ramp up by 20MB according to the example code

8. Repeat step 6 around 3 times.

9. HPA should automatically spawn more pods

10. Let you app rest by visit http://localhost:YOURPORT/relax. This will release allocated memory on your app, repeat it till the memory usage goes down

11. Some spawned pod will be remove within 10 seconds according to `stabilizationWindowSeconds`. Eventually, pod should be scaled down to minimum value.