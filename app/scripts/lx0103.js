'use strict';
var lx0103 = [];
lx0103.push({
  'type': 'single',
  'text': 'Which SysV init configuration file should be modified to disable the ctrl-alt-delete key combination?',
  'options': {
    'A': '/etc/keys',
    'B': '/proc/keys',
    'C': '/etc/inittab',
    'D': '/proc/inittab',
    'E': '/etc/reboot'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'During a system boot cycle, what program is executed after the BIOS completes its tasks?',
  'options': {
    'A': 'The bootloader',
    'B': 'The inetd program',
    'C': 'The init program',
    'D': 'The kernel'
  },
  'answers': [
    'A'
  ]
});
lx0103.push({
  'type': 'multiple',
  'text': 'Which run levels should never be declared as the default run level when using SysV init? (Choose TWO correct answers.)',
  'options': {
    'A': 0,
    'B': 1,
    'C': 3,
    'D': 5,
    'E': 6
  },
  'answers': [
    'A',
    'E'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following statements is correct when talking about /proc/?',
  'options': {
    'A': 'All changes to files in /proc/ are stored in /etc/proc.d/ and restored on reboot.',
    'B': 'All files within /proc/ are read-only and their contents cannot be changed.',
    'C': 'All changes to files in /proc/ are immediately recognized by the kernel.',
    'D': 'All files within /proc/ are only readable by the root user.'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'multiple',
  'text': 'What of the following statements are true regarding /dev/ when using udev? (Choose TWO correct answers.)',
  'options': {
    'A': 'Entries for all possible devices get created on boot even if those devices are not connected.',
    'B': 'Additional rules for udev can be created by adding them to /etc/udev/rules.d/.',
    'C': 'When using udev, it is not possible to create block or character devices in /dev/ using mknod.',
    'D': 'The /dev/ directory is a filesystem of type tmpfs and is mounted by udev during system startup.',
    'E': 'The content of /dev/ is stored in /etc/udev/dev and is restored during system startup.'
  },
  'answers': [
    'B',
    'D'
  ]
});
lx0103.push({
  'type': 'multiple',
  'text': 'Which of the following information is stored within the BIOS? (Choose TWO correct answers.)',
  'options': {
    'A': 'Boot device order',
    'B': 'Linux kernel version',
    'C': 'Timezone',
    'D': 'Hardware configuration',
    'E': 'The system\'s hostname'
  },
  'answers': [
    'A',
    'D'
  ]
});
lx0103.push({
  'type': 'multiple',
  'text': 'Which of the following commands reboots the system when using SysV init? (Choose TWO correct answers.)',
  'options': {
    'A': 'shutdown -r now',
    'B': 'shutdown -r "rebooting"',
    'C': 'telinit 6',
    'D': 'telinit 0',
    'E': 'shutdown -k now "rebooting"'
  },
  'answers': [
    'A',
    'C'
  ]
});
lx0103.push({
  'type': 'multiple',
  'text': 'Which of the following are init systems used within Linux systems? (Choose THREE correct answers.)',
  'options': {
    'A': 'startd',
    'B': 'systemd',
    'C': 'Upstart',
    'D': 'SysInit',
    'E': 'SysV init'
  },
  'answers': [
    'B',
    'C',
    'E'
  ]
});
lx0103.push({
  'type': 'text',
  'text': 'Which file in the /proc filesystem lists parameters passed from the bootloader to the kernel? (Specify the file name only without any path.)',
  'answers': [
    'cmdline',
    '/proc/cmdline'
  ]
});
lx0103.push({
  'type': 'multiple',
  'text': 'What information can the lspci command display about the system hardware? (Choose THREE correct answers.)',
  'options': {
    'A': 'Device IRQ settings',
    'B': 'PCI bus speed',
    'C': 'System battery type',
    'D': 'Device vendor identification',
    'E': 'Ethernet MAC address'
  },
  'answers': [
    'A',
    'B',
    'D'
  ]
});
lx0103.push({
  'type': 'multiple',
  'text': 'Which of the following commands brings a system running SysV init into a state in which it is safe to perform maintenance tasks? (Choose TWO correct answers.)',
  'options': {
    'A': 'shutdown -R 1 now',
    'B': 'shutdown -single now',
    'C': 'init 1',
    'D': 'telinit 1',
    'E': 'runlevel 1'
  },
  'answers': [
    'C',
    'D'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'What is the first program that is usually started, at boot time, by the Linux kernel when using SysV init?',
  'options': {
    'A': '/lib/init.so',
    'B': '/sbin/init',
    'C': '/etc/rc.d/rcinit',
    'D': '/proc/sys/kernel/init',
    'E': '/boot/init'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'text',
  'text': 'Which command will display messages from the kernel that were output during the normal boot sequence?',
  'answers': [
    'dmesg',
    '/bin/dmesg'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands will write a message to the terminals of all logged in users?',
  'options': {
    'A': 'bcast',
    'B': 'mesg',
    'C': 'print',
    'D': 'wall',
    'E': 'yell'
  },
  'answers': [
    'D'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following kernel parameters instructs the kernel to suppress most boot messages?',
  'options': {
    'A': 'silent',
    'B': 'verbose=0',
    'C': 'nomesg',
    'D': 'quiet'
  },
  'answers': [
    'D'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following options for the kernel\'s command line changes the systemd boot target to rescue.target instead of the default target?',
  'options': {
    'A': 'systemd.target=rescue.target',
    'B': 'systemd.runlevel=rescue.target',
    'C': 'systemd.service=rescue.target',
    'D': 'systemd.default=rescue.target',
    'E': 'systemd.unit=rescue.target'
  },
  'answers': [
    'E'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'After modifying GNU GRUB\'s configuration file, which command must be run for the changes to take effect?',
  'options': {
    'A': 'kill -HUP $(pidof grub)',
    'B': 'grub-install',
    'C': 'grub',
    'D': 'No action is required'
  },
  'answers': [
    'D'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands is used to update the list of available packages when using dpkg based package management?',
  'options': {
    'A': 'apt-get update',
    'B': 'apt-get upgrade',
    'C': 'apt-cache update',
    'D': 'apt-get refresh',
    'E': 'apt-cache upgrade'
  },
  'answers': [
    'A'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands lists the dependencies of a given dpkg package?',
  'options': {
    'A': 'apt-cache depends-on package',
    'B': 'apt-cache dependencies package',
    'C': 'apt-cache depends package',
    'D': 'apt-cache requires package'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following options is used in a GRUB Legacy configuration file to define the amount of time that the GRUB menu will be shown to the user?',
  'options': {
    'A': 'hidemenu',
    'B': 'splash',
    'C': 'timeout',
    'D': 'showmenu'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'multiple',
  'text': 'What can the Logical Volume Manager (LVM) be used for? (Choose THREE correct answers.)',
  'options': {
    'A': 'To create RAID 9 arrays.',
    'B': 'To dynamically change the size of logical volumes.',
    'C': 'To encrypt logical volumes.',
    'D': 'To create snapshots.',
    'E': 'To dynamically create or delete logical volumes.'
  },
  'answers': [
    'B',
    'D',
    'E'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands updates the linker cache of shared libraries?',
  'options': {
    'A': 'mkcache',
    'B': 'soconfig',
    'C': 'mkldconfig',
    'D': 'lddconfig',
    'E': 'ldconfig'
  },
  'answers': [
    'E'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands lists all currently installed packages when using RPM package management?',
  'options': {
    'A': 'yum --query --all',
    'B': 'yum --list --installed',
    'C': 'rpm --query --all',
    'D': 'rpm --list–installed'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands can be used to download the RPM package kernel without installing it?',
  'options': {
    'A': 'yum download --no-install kernel',
    'B': 'yumdownloader kernel',
    'C': 'rpm --download --package kernel',
    'D': 'rpmdownload kernel'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'multiple',
  'text': 'When using rpm --verify to check files created during the installation of RPM packages, which of the following information is taken into consideration? (Choose THREE correct answers.)',
  'options': {
    'A': 'Timestamps',
    'B': 'MD5 checksums',
    'C': 'Inodes',
    'D': 'File sizes',
    'E': 'GnuPG signatures'
  },
  'answers': [
    'A',
    'B',
    'D'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following is correct when talking about mount points?',
  'options': {
    'A': 'Every existing directory can be used as a mount point.',
    'B': 'Only empty directories can be used as a mount point.',
    'C': 'Directories need to have the SetUID flag set to be used as a mount point.',
    'D': 'Files within a directory are deleted when the directory is used as a mount point.'
  },
  'answers': [
    'A'
  ]
});
// lx0103.push({
//   'type': 'single',
//   'text': 'Which function key is used to start Safe Mode in Windows NT?',
//   'options': {
//     'A': 'F10',
//     'B': 'F8',
//     'C': 'F6',
//     'D': 'Windows NT does not support Safe Mode'
//   },
//   'answers': [
//     'D'
//   ]
// });
lx0103.push({
  'type': 'single',
  'text': 'Which of the following environment variables overrides or extends the list of directories holding shared libraries?',
  'options': {
    'A': 'LD_LOAD_PATH',
    'B': 'LD_LIB_PATH',
    'C': 'LD_LIBRARY_PATH',
    'D': 'LD_SHARE_PATH',
    'E': 'LD_RUN_PATH'
  },
  'answers': [
    'C'
  ]
});
