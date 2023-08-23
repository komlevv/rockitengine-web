# -*- mode: ruby -*-
# vi: set ft=ruby :
VAGRANTFILE_API_VERSION = "2"

# load local inventory
require 'yaml'
inventory_local = YAML.load_file('./provision/inventory.yml')["local_machines"]["hosts"]

# generate project id from working dir string
require 'digest'
id = Digest::SHA1.hexdigest(Dir.pwd)[-10..-1]

nodes = {
  "local-#{id}": inventory_local["local"]["ansible_host"],
}

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  nodes.each do |node_name, node_ip|
    config.vm.define node_name do |node_config|
      node_config.vm.box = "almalinux/8" # todo replace with own build here
      node_config.vm.box_version = "8.6.20220830"
      node_config.vm.box_check_update = false
      node_config.vm.synced_folder "./provision", "/provision/", mount_options: ["dmode=755"]
      node_config.vm.synced_folder "./.vagrant/machines/local-#{id}/virtualbox",
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
      node_config.vm.provision :shell, inline: "dnf -y install epel-release"
      node_config.vm.provision :shell, inline: "dnf -y install ansible-core-2.14.*"
      # ansible_local needs known_hosts populated or private_key auth will fail
      node_config.vm.provision :shell, privileged: false,
                               inline: "ssh-keyscan #{node_ip} >> /home/vagrant/.ssh/known_hosts"
      # enable ansible yaml output
      node_config.vm.provision :shell, privileged: false,
                               inline: "ansible-galaxy collection install community.general"
      node_config.vm.provision :ansible_local, run: "always" do |ansible|
        ansible.install = false
        ansible.compatibility_mode = "auto"
        ansible.limit = 'local'
        ansible.config_file ='/provision/ansible.cfg'
        ansible.inventory_path = '/provision/inventory.yml'
        ansible.playbook = "/provision/provision.dev.yml"
      end
      # ssh starts in /vagrant dir
      node_config.ssh.extra_args = ["-t", "cd /vagrant; bash --login;"]
    end
  end
end
