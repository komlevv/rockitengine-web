# Readme

## Stack

- AlmaLinux / Node 16
- React 18 with SSR / SCSS / Express.js
- Docker (via Podman) / Nginx Reverse Proxy with Static File Server
- Ansible
- Vagrant / Virtualbox / Webpack
- Eslint / Stylelint / Prettier

## Project Structure

`.idea/` - Shared settings for Intellij \
`.vagrant/` - Vagrant local settings. Only available after `vagrant up`,
stores private key to dev machine required by Ansible \
`dist/` - Compiled code\
`node_modules/` - available after `npm install`, used in local dev\
`provision/` - Ansible scripts to provision dev / prod\
`src` - React/Express source code
`tools` - development helper scripts

## Development workflow

1. Use either of development environments to make changes: `Vagrant(AlmaLinux) + Bare Node + Webpack -> build prod Docker image`\
   or `Vagrant(AlmaLinux) + Docker-compose + Containerized Node + Webpack -> build prod Docker image`
2. Build production docker image
3. Push the image to Docker.io
4. Docker host pulls latest image

## Project Setup

1. Clone this repo
2. Install `Vagrant ^2.3.0` and `Virtualbox ^6.1`, run `vagrant up` in project folder and you're all set
3. Run `npm run express-dev` for bare setup, or `docker-compose up` for dev inside docker.
   Both setups work with Webpack hot reload.

## Setup Notes:

- Intellij IDE has issues with remote Node environments, remote linting will not work.
  To make it work ssh into vagrant machine `vagrant ssh` and run `npm install`
- SSH is authenticated by key, so passwordless login should be setup on production machine before
  any Ansible scr are ran
- Client and Server will get out of sync with Hot Reload, no solution working out-of-box atm, \
  and fixing this is out of scope for this repo
- Vagrant on Windows: `npm install` symlinks won't work.
  To make them work you need to run `vagrant up` as admin

## Common commands:

Vagrant build and ssh into development machine

```bash
# in project folder
vagrant up
vagrant ssh
```

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

Run development with Webpack

```bash
npm run clean;npm run express-dev
```

Clean /dist folder

```bash
npm run clean
```

Lint JS / SCSS

```bash
npm run lint-js;npm run lint-css
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
