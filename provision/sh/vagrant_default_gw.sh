#!/usr/bin/env bash
# $1 - interface to rename
# $2 - interface to rename to

if [[ "$1" == "" ]]; then
  echo "Error: missing arguments"
  exit 1
else
  route del default
  route add default gw $1
fi
