# Deployment

1. Apply kube deployment config

```sh
kubectl apply -f deployment.yml
```

2. Uncomment container image to change image

```yml
# image: crccheck/hello-world
image: hello-world
```

1. Reapply kube deployment config and check pod list

```sh
kubectl apply -f deployment.yml
```