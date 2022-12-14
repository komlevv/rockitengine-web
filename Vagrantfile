# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

# setup ansible human-readable stdout
$set_env_vars = <<SCRIPT
tee "/etc/profile.d/env_vars.sh" > "/dev/null" <<EOF
# ansible human-readable stdout/stderr results display
export ANSIBLE_STDOUT_CALLBACK=yaml
EOF
SCRIPT

# load local inventory
require 'yaml'
inventory_local = YAML.load_file('./provision/inventory.yml')["local_machines"]["hosts"]

nodes = {
  :local => inventory_local["local"]["ansible_host"],
}

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  nodes.each do |node_name, node_ip|
    config.vm.define node_name do |node_config|
      node_config.vm.box = "almalinux/8" # todo replace with own build here
      node_config.vm.synced_folder "./provision", "/provision/", mount_options: ["dmode=755"]
      node_config.vm.synced_folder "./.vagrant/machines/local/virtualbox",
                                   "/key/", mount_options: ["dmode=755,fmode=600"]
      node_config.vm.network :private_network, ip: node_ip
      node_config.vm.hostname = "#{node_name}"
      node_config.vm.base_mac = nil # each machine should have unique mac
      node_config.vm.provider :virtualbox do |vb|
        vb.linked_clone = true
        vb.name = "#{node_name}"
        vb.memory = 2048
        vb.cpus = 2
        vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
        vb.customize ["modifyvm", :id, "--ioapic", "on"]
        # vbox enable symlinks in default shared folder /vagrant
        # vagrant up should be launched as admin (win 7)
        vb.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/vagrant", "1"]
      end
      # enable epel for latest ansible version
      node_config.vm.provision :shell, inline: "yum -y install epel-release"
      node_config.vm.provision :shell, inline: $set_env_vars
      # ansible_local needs known_hosts populated or private_key auth will fail
      node_config.vm.provision :shell, privileged: false,
                               inline: "ssh-keyscan #{node_ip} >> /home/vagrant/.ssh/known_hosts"
      node_config.vm.provision :ansible_local, run: "always" do |ansible|
        ansible.compatibility_mode = "2.0"
        ansible.inventory_path = '/provision/inventory.yml'
        ansible.playbook = "/provision/provision.dev.yml"
      end
      # ssh starts in /vagrant dir
      node_config.ssh.extra_args = ["-t", "cd /vagrant; bash --login"]
    end
  end
end
