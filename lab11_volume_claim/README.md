# Make volume storage that associates container

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

2. Create Persistent Volume Claim

```sh
kubectl apply -f kubernetes/volume.yml
```

3. Look at `PersistentVolumeClaim` and see if it works

4. Apply myapp service

```sh
kubectl apply -f kubernetes/myapp.yml
```

5. Execute command in pods. Path `/usr/container-volume/` should be available

```sh
ls -la
```

6. Do port forwarding to `http://localhost:5000`. visit http://localhost:5000/generate-report

7. Check file in `/usr/container-volume`. There should have `report.txt` exists.

```sh
cat /usr/container-volume/report.txt
```

8. Delete your pod

9. Recheck file at `/usr/container-volume/report.txt` for the new pod

```sh
cat /usr/container-volume/report.txt
```

The previous file should exist in this path

8. Try uncomment volume section. Reapply deployment

```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
  namespace: kube-workshop
spec:
  replicas: 1
  revisionHistoryLimit: 2
  selector:
    matchLabels:
      name: myapp
  template:
    metadata:
      labels:
        name: myapp
    spec:
      containers:
        - name: myapp-container
          image: 167663088283.dkr.ecr.ap-southeast-1.amazonaws.com/kube-workshop-app:banyawat
          imagePullPolicy: Always
          ports:
            - containerPort: 5000
          resources:
            requests:
              memory: 50Mi
              cpu: 10m
            limits:
              memory: 100Mi
              cpu: 20m
      #     volumeMounts:
      #       - name: myapp-persistent-storage
      #         mountPath: /usr/container-volume
      # volumes:
      #   - name: myapp-persistent-storage
      #     persistentVolumeClaim:
      #       claimName: myapp-pv-claim
      imagePullSecrets:
        - name: bitbucket-secret
```

9. Delete your pod

10. Check file `/usr/container-volume/report.txt`