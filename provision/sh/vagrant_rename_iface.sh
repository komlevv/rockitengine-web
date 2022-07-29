#!/usr/bin/env bash
# $1 - interface to rename
# $2 - interface to rename to

if [[ "$1" == "" || "$2" == "" ]]; then
  echo "Error: missing arguments"
  exit 1
else
   ip link set $1 down
   ip link set $1 name $2
   ip link set $2 up
  # todo add udev rule to persist device naming
  # https://serverfault.com/questions/910406/persistently-rename-a-linux-network-interface-without-udev-reboot
fi
