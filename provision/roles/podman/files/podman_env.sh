# rootless https://docs.podman.io/en/latest/markdown/podman-system-service.1.html
export DOCKER_HOST=unix://$XDG_RUNTIME_DIR/podman/podman.sock
# https://github.com/containers/podman/issues/11717
export DOCKER_BUILDKIT=0
