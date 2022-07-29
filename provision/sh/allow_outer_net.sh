#!/usr/bin/env bash


# https://www.tecmint.com/use-linux-awk-command-to-filter-text-string-in-files/
# switch default gateway to router (192.168.0.1) gateway
# https://www.vagrantup.com/docs/networking/public_network.html#default-router


ROUTER_IP=192.168.0.1
echo "Adding default gateway ${ROUTER_IP}"
route add default gw ${ROUTER_IP}
# TODO simplify this: if interface == eth0 and gateway != ROUTER_IP, delete gateway
# awk will go through each line of route -n
# route -n | awk '{print echo "interface: " $8 " gateway: " $2}'
# inline: "eval `route -n | awk '{ if ($8 ==\"eth0\" && $2 != \"0.0.0.0\") print \"route del default gw \" $2; }'`"
