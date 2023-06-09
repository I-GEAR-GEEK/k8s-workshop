# Ingress and Service mapping

1. Apply ingress mapping

```sh
kubectl apply -f ingress.yml
```

2. Add loadbalancer's IP to the DNS provider (Cloudflare in case)

Example

```
myapp.igeargeek.com 137.1.2.3
```