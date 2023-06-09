# Expose you pod by service

1. Create pod.

```sh
kubectl apply -f myapp.yml
```

2. Create service to expose myapp to the network.

```sh
kubectl apply -f myapp-service.yml
```

3. Run mytool. This container contains all tool you need to prove this lab.

```sh
kubectl apply -f mytool.yml
```

4. Execute bash via CLI or Lens.

```sh
kubectl exec -n kube-workshop -it hisapp -- /bin/bash
```

5. Now you should stay on the terminal like this `utils@mytoo:~$`. It's time to check if `myapp` is available on your network.

```sh
http://myapp-service:8000
```

6. Repeat step 5 and try to check pod logs if there has a request

```log
[::ffff:10.244.0.141]:33126: response:200
[::ffff:10.244.0.141]:33126: response:200
[::ffff:10.244.0.141]:33126: response:200
[::ffff:10.244.0.141]:33126: response:200
[::ffff:10.244.0.141]:33126: response:200
```