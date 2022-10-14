# Readme
* tbd

## Common commands:
Build and launch development with docker-compose
```bash
docker-compose -f dev.docker-compose.yml build
docker-compose -f dev.docker-compose.yml up
```

Build latest docker production image

```bash
docker build -t docker.io/rockitengine/web:latest -f prod.Dockerfile .
```

Login & push to Docker Hub

```bash
docker login docker.io
docker push docker.io/rockitengine/web:latest
```
Update container on remote host
```bash
ansible-playbook -i inventory.yml update.container.prod.yml
```


## Notes

* Vagrant on Windows: `npm install` symlinks won't work unless Vagrant is launched as admin
