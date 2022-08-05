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

nodes = {
    :node01 => "192.168.56.40",
    # :packer02 => "192.168.34.41"
}

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  nodes.each do |node_name, node_ip|
    config.vm.define node_name do |node_config|
      node_config.vm.box = "bento/centos-stream-8" # todo replace with own build here
      node_config.vm.synced_folder "./provision", "/provision/"
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
      node_config.vm.provision :ansible_local, run: "always" do |ansible|
        ansible.compatibility_mode = "2.0"
        ansible.playbook = "/provision/provision.rockitengine.yml"
      end
      # ssh starts in /vagrant dir
      node_config.ssh.extra_args = ["-t", "cd /vagrant; bash --login"]
    end
  end
end