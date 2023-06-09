# Replicaset

1. Create Replicaset

```sh
kubectl apply -f replicaset.yml
```

2. Uncomment old replicaset number to increase pod

```yml
# replicas: 1
replicas: 2
```

3. Reapply configuration file and recheck at pod list

```sh
kubectl apply -f replicaset.yml
```

4. Uncomment new image and comment the old image tag

```yml
# image: crccheck/hello-world
image: hello-world
```

5. Reapply configuration file and recheck at pod list

```sh
kubectl apply -f replicaset.yml
```

6. Delete pod and see pod changes
