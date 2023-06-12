# Service Account

1. Create service account

```sh
kubectl apply -f service-account/john-doe/account.yml
```

2. Create token as a secret for service account

```sh
kubectl apply -f service-account/john-doe/secret.yml
```

3. Check `Service Account` section in Lens

4. Download Service Account configuration file and check path `~/.kube/config`

    There are 3 parts of them that you need to determine: `clusters`, `users`, `contexts`

    ```yml
    clusters:
      - name: igg-dev
        cluster:
            server: http://somecluster.com
    users:
      users:
      - name: igg-john-doe
        user:
          token: >-
            xxx
    contexts:
      - name: igg-john-doe-dev
        context:
          user: igg-john-doe
          cluster: igg-dev
          namespace: default
    ```

5. Copy these 3 parts from donwloaded service account to `~/.kube/config`

6. Now you can check all account config existing in your computer

    ```sh
    kubectl config get-contexts
    ```

7. Change context to the new one you just added

```sh
kubectl config use-context igg-john-doe-dev
```

8. Now you're using kubernetes CLI that act as `igg-john-doe` service account
