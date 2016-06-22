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
lx0103.push({
  'type': 'text',
  'text': 'Which world-writable directory should be placed on a separate partition in order to prevent users from being able to fill up the / filesystem? (Specify the full path to the directory.)',
  'answers': [
    '/tmp',
    'tmp',
    '/var/tmp',
    '/tmp/',
    '/var/tmp/'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which RPM command will output the name of the package which supplied the file /etc/exports?',
  'options': {
    'A': 'rpm -F /etc/exports',
    'B': 'rpm -qf /etc/exports',
    'C': 'rpm -Kl /etc/exports',
    'D': 'rpm -qp /etc/exports',
    'E': 'rpm -qi /etc/exports'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'text',
  'text': 'In which directory must definition files be placed to add additional repositories to yum?',
  'answers': [
    '/etc/yum.repos.d',
    '/etc/yum.repos.d/',
    'yum.repos.d',
    'yum.repos.d/'
  ]
});
lx0103.push({
  'type': 'text',
  'text': 'What is the name of the main configuration file for GNU GRUB? (Specify the file name only without any path.)',
  'answers': [
    'menu.lst',
    'grub.conf',
    'grub.cfg'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'When removing a package, which of the following dpkg options will completely remove the files including configuration files?',
  'options': {
    'A': '--clean',
    'B': '--delete',
    'C': '--purge',
    'D': '–remove'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which file should be edited to select the network locations from which Debian installation package files are loaded?',
  'options': {
    'A': '/etc/dpkg/dpkg.cfg',
    'B': '/etc/apt/apt.conf',
    'C': '/etc/apt/apt.conf.d',
    'D': '/etc/apt/sources.list',
    'E': '/etc/dpkg/dselect.cfg'
  },
  'answers': [
    'D'
  ]
});
lx0103.push({
  'type': 'text',
  'text': 'Which option to the yum command will update the entire system? (Specify ONLY the option name without any additional parameters.)',
  'answers': [
    'update',
    'upgrade'
  ]
});
lx0103.push({
  'type': 'text',
  'text': 'Which command will disable swapping on a device? (Specify ONLY the command without any path or parameters.)',
  'answers': [
    'swapoff',
    '/sbin/swapoff'
  ]
});
lx0103.push({
  'type': 'text',
  'text': 'Which Debian package management tool asks the configuration questions for a specific already installed package just as if the package were being installed for the first time? (Specify ONLY the command without any path or parameters.)',
  'answers': [
    'dpkg-reconfigure'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands overwrites the bootloader located on /dev/sda without overwriting the partition table or any data following it?',
  'options': {
    'A': 'dd if=/dev/zero of=/dev/sda bs=512',
    'B': 'dd if=/dev/zero of=/dev/sda bs=512 count=1',
    'C': 'dd if=/dev/zero of=/dev/sda bs=440 count=1',
    'D': 'dd if=/dev/zero of=/dev/sda bs=440'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands can be used to create a USB storage media from a disk image?',
  'options': {
    'A': 'gdisk',
    'B': 'dd',
    'C': 'cc',
    'D': 'fdisk',
    'E': 'mount'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'In Bash, inserting 1>&2 after a command redirects',
  'options': {
    'A': 'standard error to standard input.',
    'B': 'standard input to standard error.',
    'C': 'standard output to standard error.',
    'D': 'standard error to standard output.',
    'E': 'standard output to standard input.'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'What command will generate a list of user names from /etc/passwd along with their login shell?',
  'options': {
    'A': 'column -s : 1,7 /etc/passwd',
    'B': 'chop -c 1,7 /etc/passwd',
    'C': 'colrm 1,7 /etc/passwd',
    'D': 'cut -d: -f1,7 /etc/passwd'
  },
  'answers': [
    'D'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'In a nested directory structure, which find command line option would be used to restrict the command to searching down a particular number of subdirectories?',
  'options': {
    'A': '-dirmax',
    'B': '-maxdepth',
    'C': '-maxlevels',
    'D': '-n',
    'E': '-s'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following statements is correct regarding the command foo 1> bar?',
  'options': {
    'A': 'The stdout from the command foo is appended to the file bar.',
    'B': 'The stdout from the command foo overwrites the file bar.',
    'C': 'The command foo receives its stdin from the file bar.',
    'D': 'The command foo receives its stdin from the stdout of the command bar.',
    'E': 'The stderr from the command foo is saved to the file bar.'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands kills the process with the PID 123 but allows the process to "clean up" before exiting?',
  'options': {
    'A': 'kill -PIPE 123',
    'B': 'kill -KILL 123',
    'C': 'kill -STOP 123',
    'D': 'kill -TERM 123'
  },
  'answers': [
    'D'
  ]
});
lx0103.push({
  'type': 'text',
  'text': 'Which signal is missing from the following command that is commonly used to instruct a daemon to reinitialize itself, including reading configuration files? killall -s _______ daemon',
  'answers': [
    'HUP',
    'SIGHUP',
    '1'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'What is the maximum niceness value that a regular user can assign to a process with the nice command when executing a new process?',
  'options': {
    'A': '9',
    'B': '19',
    'C': '49',
    'D': '99'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Immediately after deleting 3 lines of text in vi and moving the cursor to a different line, which single character command will insert the deleted content below the current line?',
  'options': {
    'A': 'i (lowercase)',
    'B': 'P (uppercase)',
    'C': 'p (lowercase)',
    'D': 'U (uppercase)',
    'E': 'u (lowercase)'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'A user accidentally created the subdirectory \dir in his home directory. Which of the following commands will remove that directory?',
  'options': {
    'A': "rmdir '~/\dir'",
    'B': 'rmdir "~/\dir"',
    'C': "rmdir ~/'dir'",
    'D': 'rmdir ~/\dir',
    'E': 'rmdir ~/\\dir'
  },
  'answers': [
    'E'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'In compliance with the FHS, in which of the directories are man pages found?',
  'options': {
    'A': '/usr/share/man',
    'B': '/opt/man',
    'C': '/usr/doc/',
    'D': '/var/pkg/man',
    'E': '/var/man'
  },
  'answers': [
    'A'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands will send output from the program myapp to both standard output (stdout) and the file file1.log?',
  'options': {
    'A': 'cat < myapp | cat > file1.log',
    'B': 'myapp 0>&1 | cat > file1.log',
    'C': 'myapp | cat > file1.log',
    'D': 'myapp | tee file1.log',
    'E': 'tee myapp file1.log'
  },
  'answers': [
    'D'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'What is the purpose of the Bash built-in export command?',
  'options': {
    'A': 'It allows disks to be mounted remotely.',
    'B': 'It runs a command as a process in a subshell.',
    'C': 'It makes the command history available to subshells.',
    'D': 'It sets up environment variables for applications.',
    'E': 'It shares NFS partitions for use by other systems on the network.'
  },
  'answers': [
    'D'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'What is the output of the following command? echo "Hello World" | tr -d aieou',
  'options': {
    'A': 'Hello World',
    'B': 'eoo',
    'C': 'Hll Wrld',
    'D': 'eoo Hll Wrld'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following characters can be combined with a separator string in order to read from the current input source until the separator string, which is on a separate line and without any trailing spaces, is reached?',
  'options': {
    'A': '<<',
    'B': '<|',
    'C': '!<',
    'D': '&<'
  },
  'answers': [
    'A'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands will NOT update the modify timestamp on the file /tmp/myfile.txt?',
  'options': {
    'A': 'file /tmp/myfile.txt',
    'B': 'echo "Hello" >/tmp/myfile.txt',
    'C': 'sed -ie "s/1/2/" /tmp/myfile.txt',
    'D': 'echo -n "Hello" >>/tmp/myfile.txt',
    'E': 'touch /tmp/myfile.txt'
  },
  'answers': [
    'A'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'What is the default nice level when a process is started using the nice command?',
  'options': {
    'A': '-10',
    'B': '10',
    'C': '20',
    'D': '0'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'What is the default action of the split command on an input file?',
  'options': {
    'A': 'It will break the file into new files of 1,024 byte pieces each.',
    'B': 'It will break the file into new files of 1,000 line pieces each.',
    'C': 'It will break the file into new files of 1,024 kilobyte pieces each.',
    'D': 'It will break the file into new files that are no more than 5% of the size of the original file.'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'What is the difference between the i and a commands of the vi editor?',
  'options': {
    'A': 'i (interactive) requires the user to explicitly switch between vi modes whereas a (automatic) switches modes automatically.',
    'B': 'i (insert) inserts text before the current cursor position whereas a (append) inserts text after the cursor.',
    'C': 'i (independent rows) starts every new line at the first character whereas a (aligned rows) keeps the indentation of the previous line.',
    'D': 'i (interrupt) temporarily suspends editing of a file to the background whereas a (abort) terminates editing.'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'text',
  'text': 'Which command displays a list of all background tasks running in the current shell? (Specify ONLY the command without any path or parameters.)',
  'answers': [
    'jobs'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands moves and resumes in the background the last stopped shell job?',
  'options': {
    'A': 'run',
    'B': 'bg',
    'C': 'fg',
    'D': 'back'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'What is the effect of the egrep command when the -v option is used?',
  'options': {
    'A': 'It enables color to highlight matching parts.',
    'B': 'It only outputs non-matching lines.',
    'C': 'It shows the command\'s version information.',
    'D': 'It changes the output order showing the last matching line first.'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'What does the ? symbol within regular expressions represent?',
  'options': {
    'A': 'Match the preceding qualifier one or more times.',
    'B': 'Match the preceding qualifier zero or more times.',
    'C': 'Match the preceding qualifier zero or one times.',
    'D': 'Match a literal ? character.'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'In the vi editor, how can commands such as moving the cursor or copying lines into the buffer be issued multiple times or applied to multiple rows?',
  'options': {
    'A': 'By using the command :repeat followed by the number and the command.',
    'B': 'By specifying the number right in front of a command such as 4l or 2yj.',
    'C': 'By selecting all affected lines using the shift and cursor keys before applying the command.',
    'D': 'By issuing a command such as :set repetition=4 which repeats every subsequent command 4 times.'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following files, located in the user home directory, is used to store the Bash history?',
  'options': {
    'A': 'bash_history',
    'B': 'bash_histfile',
    'C': 'history',
    'D': 'bashrc_history',
    'E': 'history_bash'
  },
  'answers': [
    'A'
  ]
});
lx0103.push({
  'type': 'text',
  'text': 'Which Bash environment variable defines in which file the user history is stored when exiting a Bash process? (Specify ONLY the variable name.)',
  'answers': [
    'HISTFILE'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands displays the contents of a gzip compressed tar archive?',
  'options': {
    'A': 'gzip archive.tgz | tar xvf -',
    'B': 'tar ztf archive.tgz',
    'C': 'gzip -d archive.tgz | tar tvf -',
    'D': 'tar cf archive.tgz'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which grep command will print only the lines that do not end with a / in the file foo?',
  'options': {
    'A': 'grep \'/$\' foo',
    'B': 'grep \'/#\' foo',
    'C': 'grep -v \'/$\' foo',
    'D': 'grep -v \'/#\' foo'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands is used to change options and positional parameters for a running Bash?',
  'options': {
    'A': 'history',
    'B': 'set',
    'C': 'bashconf',
    'D': 'setsh',
    'E': 'envsetup'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands replaces each occurrence of \'bob\' in the file letter with \'Bob\' and writes the result to the file newletter?',
  'options': {
    'A': 'sed \'/bob/Bob\' letter > newletter',
    'B': 'sed s/bob/Bob/ letter < newletter',
    'C': 'sed \'s/bob/Bob\' letter > newletter',
    'D': 'sed \'s/bob/Bob/g\' letter > newletter',
    'E': 'sed \'s/bob, Bob/\' letter > newletter'
  },
  'answers': [
    'D'
  ]
});
lx0103.push({
  'type': 'multiple',
  'text': 'From a Bash shell, which of the following commands directly executes the instruction from the file /usr/local/bin/runme.sh without starting a subshell? (Please select TWO answers.)',
  'options': {
    'A': 'source /usr/local/bin/runme.sh',
    'B': '. /usr/local/bin/runme.sh',
    'C': '/bin/bash /usr/local/bin/runme.sh',
    'D': '/usr/local/bin/runme.sh',
    'E': 'run /usr/local/bin/runme.sh'
  },
  'answers': [
    'A',
    'B'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Regarding the command: <br> nice -5 /usr/bin/prog <br> Which of the following statements is correct?': {
    'A': '/usr/bin/prog is executed with a nice level of -5.',
    'B': '/usr/bin/prog is executed with a nice level of 5.',
    'C': '/usr/bin/prog is executed with a priority of -5.',
    'D': '/usr/bin/prog is executed with a priority of 5.'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which shell command is used to continue background execution of a suspended command?': {
    'A': '&',
    'B': 'bg',
    'C': 'cont',
    'D': 'exec',
    'E': ':&'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following shell redirections will write standard output and standard error output to a file named filename?': {
    'A': '2>&1 >filename',
    'B': '>filename 2>&1',
    'C': '1>&2>filename',
    'D': '>>filename',
    'E': '1&2>filename'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'In the vi editor, which of the following commands will copy the current line into the vi buffer?': {
    'A': 'c',
    'B': 'cc',
    'C': '1c',
    'D': 'yy',
    'E': '1y'
  },
  'answers': [
    'D'
  ]
});
lx0103.push({
  'type': 'multiple',
  'text': 'Which of the following sequences in the vi editor saves the opened document and exits the editor? (Choose TWO correct answers.)',
  'options': {
    'A': 'esc ZZ',
    'B': 'ctrl :w!',
    'C': 'esc zz',
    'D': 'esc :wq!',
    'E': 'ctrl XX'
  },
  'answers': [
    'A',
    'D'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'When starting a program with the nice command without any additional parameters, which nice level is set for the resulting process?': {
    'A': '-10',
    'B': '0',
    'C': '10',
    'D': '20'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands will reduce all consecutive spaces down to a single space?',
  'options': {
    'A': 'tr \'\s\' \' \' < a.txt > b.txt',
    'B': 'tr -c \' \' < a.txt > b.txt',
    'C': 'tr -d \' \' < a.txt > b.txt',
    'D': 'tr -r \' \' \'\n\' < a.txt > b.txt',
    'E': 'tr -s \' \' < a.txt > b.txt'
  },
  'answers': [
    'E'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which character, added to the end of a command, runs that command in the background as a child process of the current shell?',
  'options': {
    'A': '!',
    'B': '+',
    'C': '&',
    'D': '%',
    'E': '#'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands will print the last 10 lines of a text file to the standard output?',
  'options': {
    'A': 'cat -n 10 filename',
    'B': 'dump -n 10 filename',
    'C': 'head -n 10 filename',
    'D': 'tail -n 10 filename'
  },
  'answers': [
    'D'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands prints a list of usernames (first column) and their primary group (fourth column) from the /etc/passwd file?',
  'options': {
    'A': 'fmt -f 1,4 /etc/passwd',
    'B': 'split -c 1,4 /etc/passwd',
    'C': 'cut -d : -f 1,4 /etc/passwd',
    'D': 'paste -f 1,4 /etc/passwd'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following signals is sent to a process when the key combination CTRL+C is pressed on the keyboard?',
  'options': {
    'A': 'SIGTERM',
    'B': 'SIGINT',
    'C': 'SIGSTOP',
    'D': 'SIGKILL'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'What happens after issuing the command vi without any additional parameters?',
  'options': {
    'A': 'vi starts and loads the last file used and moves the cursor to the position where vi was when it last exited.',
    'B': 'vi starts and requires the user to explicitly either create a new or load an existing file.',
    'C': 'vi exits with an error message as it cannot be invoked without a file name to operate on.',
    'D': 'vi starts in command mode and opens a new empty file.',
    'E': 'vi starts and opens a new file which is filled with the content of the vi buffer if the buffer contains text.'
  },
  'answers': [
    'D'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following command sets the Bash variable named TEST with the content FOO?',
  'options': {
    'A': 'set TEST="FOO"',
    'B': 'TEST = "FOO"',
    'C': 'var TEST="FOO"',
    'D': 'TEST="FOO"'
  },
  'answers': [
    'D'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which variable defines the directories in which a Bash shell searches for executable commands?',
  'options': {
    'A': 'BASHEXEC',
    'B': 'BASHRC',
    'C': 'PATH',
    'D': 'EXECPATH',
    'E': 'PATHRC'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands determines the type of a file by using a definition database file which contains information about all common file types?',
  'options': {
    'A': 'magic',
    'B': 'type',
    'C': 'file',
    'D': 'pmagic',
    'E': 'hash'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'text',
  'text': 'Which command is used in a Linux environment to create a new directory? (Specify ONLY the command without any path or parameters.)',
  'answers': [
    'mkdir',
    '/usr/bin/mkdir'
  ]
});
lx0103.push({
  'type': 'multiple',
  'text': 'Which of the following commands prints all files and directories within the /tmp directory or its subdirectories which are also owned by the user root? (Choose TWO correct answers.)',
  'options': {
    'A': 'find /tmp -uid root -print',
    'B': 'find -path /tmp -uid root',
    'C': 'find /tmp -user root -print',
    'D': 'find /tmp -user root',
    'E': 'find -path /tmp -user root–print'
  },
  'answers': [
    'C',
    'D'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'When running the command<br> sed -e "s/a/b/" /tmp/file >/tmp/file<br> While /tmp/file contains data, why is /tmp/file empty afterwards?',
  'options': {
    'A': 'The file order is incorrect. The destination file must be mentioned before the command to ensure redirection.',
    'B': 'The command sed did not match anything in that file therefore the output is empty.',
    'C': 'When the shell establishes the redirection it overwrites the target file before the redirected command starts and opens it for reading.',
    'D': 'Redirection for shell commands do not work using the > character. It only works using the | character instead.'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'When given the following command line.<br> echo "foo bar" | tee bar | cat<br> Which of the following output is created?',
  'options': {
    'A': 'cat',
    'B': 'foo bar',
    'C': 'tee bar',
    'D': 'bar',
    'E': 'foo'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'multiple',
  'text': 'Which of the following commands can be used to determine how long the system has been running? (Choose TWO correct answers.)',
  'options': {
    'A': 'uptime',
    'B': 'up',
    'C': 'top',
    'D': 'uname -u',
    'E': 'time–up'
  },
  'answers': [
    'A',
    'C'
  ]
});
lx0103.push({
  'type': 'multiple',
  'text': 'Which of the following are valid stream redirection operators within Bash? (Choose THREE correct answers.)',
  'options': {
    'A': '<',
    'B': '<<<',
    'C': '>',
    'D': '>>>',
    'E': '%>'
  },
  'answers': [
    'A',
    'B',
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'After successfully creating a hard link called bar to the ordinary file foo, foo is deleted from the filesystem. Which of the following describes the resulting situation?',
  'options': {
    'A': 'foo and bar would both be removed.',
    'B': 'foo would be removed while bar would remain accessible.',
    'C': 'foo would be removed. bar would still exist but would be unusable.',
    'D': 'Both foo and bar would remain accessible.',
    'E': 'The user is prompted whether bar should be removed, too.'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'multiple',
  'text': 'After moving data to a new filesystem, how can the former path of the data be kept intact in order to avoid reconfiguration of existing applications? (Choose TWO correct answers.)',
  'options': {
    'A': 'By creating an ACL redirection from the old to the new path of the data.',
    'B': 'By creating a hard link from the old to the new path of the data.',
    'C': 'By creating a symbolic link from the old to the new path of the data.',
    'D': 'By running the command touch on the old path.',
    'E': 'By mounting the new filesystem on the original path of the data.'
  },
  'answers': [
    'C',
    'E'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands changes the ownership of file.txt to the user dan and the group staff?',
  'options': {
    'A': 'chown dan/staff file.txt',
    'B': 'chown dan:staff file.txt',
    'C': 'chown -u dan -g staff file.txt',
    'D': 'chown dan -g staff file.txt'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands makes /bin/foo executable by everyone but writable only by its owner?',
  'options': {
    'A': 'chmod u=rwx,go=rx /bin/foo',
    'B': 'chmod o+rwx,a+rx /bin/foo',
    'C': 'chmod 577 /bin/foo',
    'D': 'chmod 775 /bin/foo'
  },
  'answers': [
    'A'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands can be used to search for the executable file foo when it has been placed in a directory not included in $PATH?',
  'options': {
    'A': 'apropos',
    'B': 'which',
    'C': 'find',
    'D': 'query',
    'E': 'whereis'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'What does the command mount -a do?',
  'options': {
    'A': 'It ensures that all file systems listed with the option noauto in /etc/fstab are mounted.',
    'B': 'It shows all mounted file systems that have been automatically mounted.',
    'C': 'It opens an editor with root privileges and loads /etc/fstab for editing.',
    'D': 'It ensures that all file systems listed with the option auto in /etc/fstab are mounted.',
    'E': 'It ensures that all file systems listed in /etc/fstab are mounted regardless of their options.'
  },
  'answers': [
    'D'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following settings for umask ensures that new files have the default permissions -rwr----- ?',
  'options': {
    'A': '0017',
    'B': '0640',
    'C': '0038',
    'D': '0027'
  },
  'answers': [
    'D'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following is the device file name for the second partition on the only SCSI drive?',
  'options': {
    'A': '/dev/hda1',
    'B': '/dev/sda2',
    'C': '/dev/sd0a2',
    'D': '/dev/sd1p2'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'multiple',
  'text': 'In order to display all currently mounted filesystems, which of the following commands could be used? (Choose TWO correct answers.)',
  'options': {
    'A': 'cat /proc/self/mounts',
    'B': 'free',
    'C': 'mount',
    'D': 'lsmounts',
    'E': 'cat /proc/filesystems'
  },
  'answers': [
    'A',
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands can be used to locate programs and their corresponding man pages and configuration files?',
  'options': {
    'A': 'dirname',
    'B': 'which',
    'C': 'basename',
    'D': 'query',
    'E': 'whereis'
  },
  'answers': [
    'E'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands changes the number of days before the ext3 filesystem on /dev/sda1 has to run through a full filesystem check while booting?',
  'options': {
    'A': 'tune2fs -d 200 /dev/sda1',
    'B': 'tune2fs -c 200 /dev/sda1',
    'C': 'tune2fs -i 200 /dev/sda1',
    'D': 'tune2fs -n 200 /dev/sda1',
    'E': 'tune2fs --days 200 /dev/sda1'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which type of filesystem is created by mkfs when it is executed with the block device name only and without any additional parameters?',
  'options': {
    'A': 'ext2',
    'B': 'ext3',
    'C': 'ext4',
    'D': 'XFS',
    'E': 'VFAT'
  },
  'answers': [
    'A'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'How many fields are in a syntactically correct line of /etc/fstab?',
  'options': {
    'A': '3',
    'B': '4',
    'C': '5',
    'D': '6',
    'E': '7'
  },
  'answers': [
    'D'
  ]
});
lx0103.push({
  'type': 'text',
  'text': 'Which command is used to create and initialize the files used to store quota information? (Specify ONLY the command without any path or parameters.)',
  'answers': [
    'quotacheck'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following file permissions belong to a symbolic link?',
  'options': {
    'A': '-rwxrwxrwx',
    'B': '+rwxrwxrwx',
    'C': 'lrwxrwxrwx',
    'D': 'srwxrwxrwx'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Creating a hard link to an ordinary file returns an error. What could be the reason for this?',
  'options': {
    'A': 'The source file is hidden.',
    'B': 'The source file is read-only.',
    'C': 'The source file is a shell script.',
    'D': 'The source file is already a hard link.',
    'E': 'The source and the target are on different filesystems.'
  },
  'answers': [
    'E'
  ]
});
lx0103.push({
  'type': 'multiple',
  'text': 'Which of the following commands creates an ext3 filesystem on /dev/sdb1? (Choose TWO correct answers.)',
  'options': {
    'A': '/sbin/mke2fs -j /dev/sdb1',
    'B': '/sbin/mkfs -t ext3 /dev/sdb1',
    'C': '/sbin/mkfs -c ext3 /dev/sdb1',
    'D': '/sbin/mke3fs -j /dev/sdb1'
  },
  'answers': [
    'A',
    'B'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands will change the quota for a specific user?',
  'options': {
    'A': 'edquota',
    'B': 'repquota',
    'C': 'quota -e',
    'D': 'quota'
  },
  'answers': [
    'A'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which utility would be used to change how often a filesystem check is performed on an ext2 filesystem without losing any data stored on that filesystem?',
  'options': {
    'A': 'mod2fs',
    'B': 'fsck',
    'C': 'tune2fs',
    'D': 'mke2fs',
    'E': 'fixe2fs'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'multiple',
  'text': 'Which of the following Linux filesystems preallocates a fixed number of inodes at the filesystem\'s make/creation time and does NOT generate them as needed? (Choose TWO correct answers.)',
  'options': {
    'A': 'ext3',
    'B': 'JFS',
    'C': 'ext2',
    'D': 'XFS',
    'E': 'procfs'
  },
  'answers': [
    'A',
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'What is the purpose of the Filesystem Hierarchy Standard?',
  'options': {
    'A': 'It is a security model used to ensure files are organized according to their permissions and accessibility.',
    'B': 'It provides unified tools to create, maintain and manage multiple filesystems in a common way.',
    'C': 'It defines a common internal structure of inodes for all compliant filesystems.',
    'D': 'It is a distribution neutral description of locations of files and directories.'
  },
  'answers': [
    'D'
  ]
});
lx0103.push({
  'type': 'text',
  'text': 'Which umask value will result in the default access permissions of 600 (rw-------) for files and 700 (rwx------) for directories? (Specify only the numerical umask value.)',
  'answers': [
    '0077',
    '077'
  ]
});
lx0103.push({
  'type': 'multiple',
  'text': 'Instead of supplying an explicit device in /etc/fstab for mounting, what other options may be used to identify the intended partition? (Choose TWO correct answers.)',
  'options': {
    'A': 'FIND',
    'B': 'ID',
    'C': 'LABEL',
    'D': 'NAME',
    'E': 'UUID'
  },
  'answers': [
    'C',
    'E'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'After running the command umount /mnt, the following error message is displayed:<br> umount: /mnt: device is busy.<br> What is a common reason for this message?',
  'options': {
    'A': 'The kernel has not finished flushing disk writes to the mounted device.',
    'B': 'A user has a file open in the /mnt directory.',
    'C': 'Another file system still contains a symlink to a file inside /mnt.',
    'D': 'The files in /mnt have been scanned and added to the locate database.',
    'E': 'The kernel thinks that a process is about to open a file in /mnt for reading.'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'What does the command mount -a do?',
  'options': {
    'A': 'It mounts all available filesystems onto the current directory.',
    'B': 'It shows all mounted filesystems.',
    'C': 'It mounts all user mountable filesystems for the current user.',
    'D': 'It mounts all filesystems listed in /etc/fstab which have the option auto set.',
    'E': 'It mounts all filesystems listed in /etc/fstab which have the option noauto set.'
  },
  'answers': [
    'D'
  ]
});
lx0103.push({
  'type': 'multiple',
  'text': 'Which of the following commands set the sticky bit for the directory /tmp? (Choose TWO correct answers.)',
  'options': {
    'A': 'chmod +s /tmp',
    'B': 'chmod +t /tmp',
    'C': 'chmod 1775 /tmp',
    'D': 'chmod 4775 /tmp',
    'E': 'chmod 2775 /tmp'
  },
  'answers': [
    'B',
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands can be used to display the inode number of a given file?',
  'options': {
    'A': 'inode',
    'B': 'ls',
    'C': 'ln',
    'D': 'cp'
  },
  'answers': [
    'B'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following commands shows the definition of a given shell command?',
  'options': {
    'A': 'where',
    'B': 'stat',
    'C': 'type',
    'D': 'case'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'What do the permissions -rwSr-xr-x mean for a binary file when it is executed as a command?',
  'options': {
    'A': 'The command is SetUID and it will be executed with the effective rights of the owner.',
    'B': 'The command will be executed with the effective rights of the group instead of the owner.',
    'C': 'The execute flag is not set for the owner. Therefore the SetUID flag is ignored.',
    'D': 'The command will be executed with the effective rights of the owner and group.'
  },
  'answers': [
    'C'
  ]
});
lx0103.push({
  'type': 'single',
  'text': 'Which of the following pieces of information of an existing file is changed when a hard link pointing to that file is created?',
  'options': {
    'A': 'File size',
    'B': 'Modify timestamp',
    'C': 'Link count',
    'D': 'Inode number',
    'E': 'Permissions'
  },
  'answers': [
    'C'
  ]
});
