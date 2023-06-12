# Role and Cluster Role

You can test service account's permission by get pods in namespace `kube-workshop` by the certain command

```sh
kubectl get pods -n kube-workshop
```

Now we're going to assign cluster role to `igg-john-doe` service account. Admin permission is need to perform this action.

1. Create cluster role with command

```sh
kubectl apply -f cluster-role/cluster-role.yml
```

2. Apply certain cluster role to `igg-john-doe` service account

```sh
kubectl apply -f cluster-role/cluster-role-binding.yml
```

3. List all pod in `kube-workshop` namespace

```sh
kubectl get pods -n kube-workshop
```

4. Delete all cluster role to reset permission

5. Create role in namespace `kube-workshop` by command

```sh
kubectl apply -f role/role.yml
```

6. Apply certain role to `igg-john-doe` service account

```sh
kubectl apply -f role/role-binding.yml
```

7. List all pod in `kube-workshop` namespace

```sh
kubectl get pods -n kube-workshop
```