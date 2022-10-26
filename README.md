# Readme

- tbd

## Common commands:

Build and run development with docker-compose

```bash
docker-compose -f dev.docker-compose.yml build
docker-compose -f dev.docker-compose.yml up
```

Build & run latest docker production image

```bash
docker build -t docker.io/rockitengine/web:latest -f prod.Dockerfile .
docker run -d -p 8080:8080 docker.io/rockitengine/web:latest
```

Build and run production locally

```bash
npm run build-all;npm run express-prod
```

Login & push to Docker Hub

```bash
docker login docker.io
docker push docker.io/rockitengine/web:latest
```

Update container on remote host

```bash
# while in /provision/ folder
ansible-playbook -i inventory.yml update.container.prod.yml
```

Upload/update files on remote host

```bash
# while in /provision/ folder
ansible-playbook -i inventory.yml update.upload.static.files.yml --ask-become-pass
```

Update nginx config

```bash
# while in /provision/ folder
ansible-playbook -i inventory.yml update.nginx.config.yml --ask-become-pass
```

## Notes

- Vagrant on Windows: `npm install` symlinks won't work unless Vagrant is launched as admin
