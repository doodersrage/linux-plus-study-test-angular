'use strict';
var lx0104 = [];
lx0104.push({
  'type': 'single',
  'text': 'What is true regarding the statement beginning with #! that is found in the first line of a script?',
  'options': {
    'A': 'It prevents the script from being executed until the ! is removed.',
    'B': 'It specifies the path and the arguments of the interpreter used to run the script.',
    'C': 'It is a comment that is ignored by the script.',
    'D': 'It specifies the character encoding of the script.'
  },
  'answers': [
    'B'
  ]
});
var lx0104 = [];
lx0104.push({
  'type': 'single',
  'text': 'Which Bash option prevents a user from accidentally overwriting a file with a ">"?',
  'options': {
    'A': 'set -o safe',
    'B': 'set -o noglob',
    'C': 'set -o noclobber',
    'D': 'set -o append',
    'E': 'set -o nooverwrite'
  },
  'answers': [
    'C'
  ]
});
var lx0104 = [];
lx0104.push({
  'type': 'single',
  'text': 'Which of the following commands prints the exit value of the most recently executed program in Bash?',
  'options': {
    'A': 'echo $?',
    'B': 'echo $#',
    'C': 'echo $exit',
    'D': 'echo $status',
    'E': 'echo $&'
  },
  'answers': [
    'A'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'What word will complete an if statement in bash such as the following: if [ -x "$file" ]; then echo $file _____ (Please provide the missing word only)',
  'answers': [
    'fi'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'What word is missing from the following SQL statement? update tablename ____ fieldname=\'value\' where id=909; (Please specify the missing word using lower\_case letters only.)',
  'answers': [
    'set'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following SQL statements will select the fields name and address from the contacts table?',
  'options': {
    'A': 'SELECT (name, address) FROM contacts;',
    'B': 'SELECT (name address) FROM contacts;',
    'C': 'SELECT name, address FROM contacts;',
    'D': 'SELECT name address FROM contacts;'
  },
  'answers': [
    'C'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following configuration files should be modified to globally set shell variables for all users?',
  'options': {
    'A': '/etc/bashrc',
    'B': '/etc/profile',
    'C': '~/.bash_profile',
    'D': '/etc/.bashrc'
  },
  'answers': [
    'B'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'Which of the following commands are used to manage the environment and shell variables within a shell process? (Choose TWO correct answers.)',
  'options': {
    'A': 'export',
    'B': 'init',
    'C': 'reset',
    'D': 'set',
    'E': 'tset'
  },
  'answers': [
    'A',
    'D'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'Which of the following are operators used for comparisons by the test command? (Choose TWO correct answers.)',
  'options': {
    'A': 'equals',
    'B': '=',
    'C': '-is',
    'D': '-eq',
    'E': 'null'
  },
  'answers': [
    'B',
    'D'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following commands creates a function in Bash that outputs the sum of two numbers?',
  'options': {
    'A': 'function sumitup { echo $(($1 + $2)) ; }',
    'B': 'command sumitup { echo $(($1 + $2)) ; }',
    'C': 'function sumitup { echo $1 + $2 ; }',
    'D': 'method sumitup { echo $1 + $2 ; }',
    'E': 'command sumitup { echo $1 + $2 ; }'
  },
  'answers': [
    'A'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'What output will the following command sequence produce?<br> echo \'1 2 3 4 5 6\' | while read a b c; do echo result: $c $b $a; done',
  'options': {
    'A': 'result: 3 4 5 6 2 1',
    'B': 'result: 1 2 3 4 5 6',
    'C': 'result: 6 5 4',
    'D': 'result: 6 5 4 3 2 1',
    'E': 'result: 3 2 1'
  },
  'answers': [
    'A'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'When the command echo $? outputs 1, which of the following statements are true?',
  'options': {
    'A': 'It is the process ID of the echo command.',
    'B': 'It is the process ID of the current shell.',
    'C': 'It is the exit value of the command executed immediately before echo.',
    'D': 'It is the exit value of the echo command.'
  },
  'answers': [
    'C'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'What word is missing from the following SQL statement? insert into tablename ________(909, \'text\'); (Please specify the missing word using lower-case letters only.)',
  'answers': [
    'VALUES',
    'values'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which command makes the shell variable named VARIABLE visible to subshells?',
  'options': {
    'A': 'export $VARIABLE',
    'B': 'export VARIABLE',
    'C': 'set $VARIABLE',
    'D': 'set VARIABLE',
    'E': 'env VARIABLE'
  },
  'answers': [
    'B'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'What output will the command seq 10 produce?',
  'options': {
    'A': 'A continuous stream of numbers increasing in increments of 10 until stopped.',
    'B': 'The numbers 1 through 10 with one number per line.',
    'C': 'The numbers 0 through 9 with one number per line.',
    'D': 'The number 10 to standard output.'
  },
  'answers': [
    'B'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'By default, the contents of which directory will be copied to a new user\'s home directory when the account is created by passing the -m option to the useradd command? (Specify the full path to the directory.)',
  'answers': [
    '/etc/skel',
    '/etc/skel/'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'What word is missing from the following SQL statement?<br> __________ count(*) from tablename;<br> (Please specify the missing word using lower-case letters only.)',
  'answers': [
    'select'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'Which of the following files, when existing, affect the behavior of the Bash shell? (Choose TWO correct answers.)',
  'options': {
    'A': '~/.bashconf',
    'B': '~/.bashrc',
    'C': '~/.bashdefaults',
    'D': '~/.bash_etc',
    'E': '~/.bash_profile'
  },
  'answers': [
    'B',
    'E'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'After issuing:<br> function myfunction { echo $1 $2 ; }<br> in Bash, which output does:<br> myfunction A B C<br> Produce?',
  'options': {
    'A': 'A B',
    'B': 'A B C',
    'C': 'A C',
    'D': 'B C',
    'E': 'C B A'
  },
  'answers': [
    'A'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following commands puts the output of the command date into the shell variable mydate?',
  'options': {
    'A': 'mydate="$(date)"',
    'B': 'mydate="exec date"',
    'C': 'mydate="$((date))"',
    'D': 'mydate="date"',
    'E': 'mydate="${date}"'
  },
  'answers': [
    'A'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'What is the purpose of the sticky keys feature in X?',
  'options': {
    'A': 'To assist users who have difficulty holding down multiple keys at once.',
    'B': 'To prevent repeated input of a single character if the key is held down.',
    'C': 'To ignore brief keystrokes according to a specified time limit.',
    'D': 'To repeat the input of a single character.'
  },
  'answers': [
    'A'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'On a machine running several X servers, how are the different instances of the X11 server identified?',
  'options': {
    'A': 'By a fixed UUID that is defined in the X11 configuration file.',
    'B': 'By a unique IPv6 address from the fe80::/64 subnet.',
    'C': 'By the name of the user that runs the X server like x11:bob.',
    'D': 'By a device name like /dev/X11/xservers/1.',
    'E': 'By a display name like:1.'
  },
  'answers': [
    'E'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'What is the purpose of the xhost program?',
  'options': {
    'A': 'Grant or revoke access to a X11 session.',
    'B': 'Install all packages and video drivers required to run X11 on a host.',
    'C': 'Start the X11 server and announce its availability within the local network.',
    'D': 'Send informational messages to all users logged into a host using X11.',
    'E': 'Display the MOTD and other important information when a user logs in via X11.'
  },
  'answers': [
    'A'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'What of the following statements is true regarding a display manager?',
  'options': {
    'A': 'A display manager handles remote X11 logins only and has no purpose on a system that is not attached to a network.',
    'B': 'The display manager is configured in the X11 configuration file xorg.conf.',
    'C': 'There is only one display manager X11DM that must be started on all systems running X11.',
    'D': 'After system startup, the display manager handles the login of a user.',
    'E': 'Without a display manager, no graphical programs can be run.'
  },
  'answers': [
    'D'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'How is a display manager started?',
  'options': {
    'A': 'It is started by a user using the command startx.',
    'B': 'It is started like any other system service by the init system.',
    'C': 'It is started by inetd when a remote hosts connects to the X11 port.',
    'D': 'It is started automatically when a X11 user logs in to the system console.'
  },
  'answers': [
    'B'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'What is the default name of the configuration file for the Xorg X11 server? (Specify the file name only without any path.)',
  'answers': [
    'xorg.conf'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following commands shows the current color depth of the X Server?',
  'options': {
    'A': 'xcd',
    'B': 'xcdepth',
    'C': 'xwininfo',
    'D': 'xcolordepth',
    'E': 'cat /etc/X11'
  },
  'answers': [
    'C'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'For accessibility assistance, which of the following programs is an on-screen keyboard?',
  'options': {
    'A': 'xkb',
    'B': 'atkb',
    'C': 'GOK',
    'D': 'xOSK'
  },
  'answers': [
    'C'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'What is the name of the simple graphical login manager that comes with a vanilla X11 installation? (Specify ONLY the command without any path or parameters.)',
  'answers': [
    'xdm'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'Which of the following are tasks handled by a display manager like XDM or KDM? (Choose TWO correct answers.)',
  'options': {
    'A': 'Start and prepare the desktop environment for the user.',
    'B': 'Configure additional devices like new monitors or projectors when they are attached.',
    'C': 'Handle the login of a user.',
    'D': 'Lock the screen when the user was inactive for a configurable amount of time.',
    'E': 'Create an X11 configuration file for the current graphic devices and monitors.'
  },
  'answers': [
    'A',
    'C'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'Which of the following commands can modify or set the password expiration for a user? (Choose TWO correct answers.)',
  'options': {
    'A': 'chage',
    'B': 'chexpiration',
    'C': 'shadowconfig',
    'D': 'passwd',
    'E': 'userconf'
  },
  'answers': [
    'A',
    'D'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following statements is true regarding the /etc/shadow file?',
  'options': {
    'A': '/etc/shadow may not be readable or writable by user root.',
    'B': 'Only root is allowed to read and write /etc/shadow.',
    'C': 'All users have full read and write access to /etc/shadow.',
    'D': 'All users have full read access to /etc/shadow.'
  },
  'answers': [
    'B'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following commands will convert files from one character encoding to another?',
  'options': {
    'A': 'convert',
    'B': 'enc2utf',
    'C': 'iconv',
    'D': 'transcode'
  },
  'answers': [
    'C'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which environment variable will override all LC_* variables?',
  'options': {
    'A': 'LANG',
    'B': 'LC_ALL',
    'C': 'LC_COLLATE',
    'D': 'LOCALE'
  },
  'answers': [
    'B'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which command will set the local machine\'s timezone to UTC?',
  'options': {
    'A': 'cat UTC > /etc/timezone',
    'B': 'ln -s /usr/share/zoneinfo/UTC /etc/localtime',
    'C': 'date --timezone=UTC',
    'D': 'mv /usr/timezone/UTC /etc'
  },
  'answers': [
    'B'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following actions prevents a specific user from scheduling tasks using at or batch?',
  'options': {
    'A': 'Add the specific user to the /etc/at.allow file.',
    'B': 'Add the specific user to the [deny] section in the /etc/atd.conf file.',
    'C': 'Add the specific user to the /etc/at.deny file.',
    'D': 'Add the specific user to the nojobs group.',
    'E': 'Run atd --deny followed by the name of the specific user.'
  },
  'answers': [
    'C'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'What is the main difference between the batch and at commands?',
  'options': {
    'A': 'The batch command will run multiple times. The at command will only run once.',
    'B': 'The commands of a batch job run sequentially one after another while the commands in at jobs may run in parallel.',
    'C': 'The at command reads commands from standard input. The batch command requires a command line argument.',
    'D': 'The at command e-mails results to the user. The batch command logs results to syslog.'
  },
  'answers': [
    'B'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Why should a regular user edit his personal crontab by using the command crontab instead of just editing his crontab file manually?',
  'options': {
    'A': 'Because user specific crontab entries are stored in a common database and must be extracted before editing.',
    'B': 'Because crontab starts the cron daemon in case it is not running due to no other crontab entries existing.',
    'C': 'Because user specific crontab entries are stored in a special directory which is maintained by the cron daemon and not writable for regular users.',
    'D': 'Because crontab collects information about all users crontabs and recommends similar commands used by other users of the system.'
  },
  'answers': [
    'C'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'What is true about groups in a Linux system? (Choose TWO correct answers.)',
  'options': {
    'A': 'Each user may be a member of several groups. However, only one group is the user\'s primary group.',
    'B': 'Groups may have a password that allows users to join that group temporarily.',
    'C': 'Each user can only be a member of one group at a time.',
    'D': 'Group memberships are optional such that there may be users that do not belong to any group.',
    'E': 'Groups can be nested meaning that one group can be a member of another group.'
  },
  'answers': [
    'A',
    'B'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'What is true about UIDs and GIDs?',
  'options': {
    'A': 'UIDs and GIDs share a common number space. Each time a new user or group is created, the next free ID is assigned.',
    'B': 'The first four digits of each UID are the GID of the primary group of that user.',
    'C': 'The GID of a group is always the sum of the UIDs of its members.',
    'D': 'The number space is split up. UIDs usually reside in the range from 0 to 32767 while GIDs reside in the range from 32768 to 65535.',
    'E': 'There are distinct number spaces for UIDs and GIDs, i.e. the same number may be used as both a UID and a GID.'
  },
  'answers': [
    'E'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'What happens if the password of a user in the /etc/shadow file is prepended with the ! character?',
  'options': {
    'A': 'When logging in, the user automatically gets root privileges in addition to his regular privileges.',
    'B': 'The password is inverted which allows the user to log in with any password other than the current password.',
    'C': 'The user is disabled and all login methods, including but not limited to password based logins, are disabled.',
    'D': 'Upon the next log in, the user is forced to change his password.',
    'E': 'The password becomes invalid which disables password based logins although other login methods remain usable.'
  },
  'answers': [
    'E'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'Which of the following details can be found in an entry of a user specific crontab? (Choose TWO correct answers.)',
  'options': {
    'A': 'The verbal description of the job.',
    'B': 'The syslog facility to where the output of the job should be sent.',
    'C': 'The time when the cron job should run.',
    'D': 'The command that should be started by the cron job.',
    'E': 'The name of the user which should run the job.'
  },
  'answers': [
    'C',
    'D'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Each entry in a crontab must end with what character?',
  'options': {
    'A': 'Tab',
    'B': 'Space',
    'C': 'Backslash',
    'D': 'Newline'
  },
  'answers': [
    'D'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'To prevent a specific user from scheduling tasks with at, what should the administrator do?',
  'options': {
    'A': 'Add the specific user to /etc/at.allow file.',
    'B': 'Add the specific user to [deny] section in the /etc/atd.conf file.',
    'C': 'Add the specific user to /etc/at.deny file.',
    'D': 'Add the specific user to nojobs group.',
    'E': 'Run the following: atd --deny [user].'
  },
  'answers': [
    'C'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following crontab entries will execute myscript at 30 minutes past every hour on Sundays?',
  'options': {
    'A': '0 * * * 30 myscript',
    'B': '30 * * * 6 myscript',
    'C': '30 0 * * 0 myscript',
    'D': '30 0-23 * * 0 myscript',
    'E': '0 0-23 * * 30 myscript'
  },
  'answers': [
    'D'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following files assigns a user to its primary group?',
  'options': {
    'A': '/etc/pgroup',
    'B': '/etc/shadow',
    'C': '/etc/group',
    'D': '/etc/passwd',
    'E': '/etc/gshadow'
  },
  'answers': [
    'D'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following commands should be added to /etc/bash_profile in order to change the language of messages for an internationalized program to Portuguese (pt)?',
  'options': {
    'A': 'export LANGUAGE="pt"',
    'B': 'export MESSAGE="pt"',
    'C': 'export UI_MESSAGES="pt"',
    'D': 'export LC_MESSAGES="pt"',
    'E': 'export ALL_MESSAGES="pt"'
  },
  'answers': [
    'D'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'In which file, if present, must all users be listed that are allowed to use the cron scheduling system? (Specify the full name of the file, including path.)',
  'answers': [
    '/etc/cron.allow'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'Which commands can be used to change a user\'s account aging information? (Choose THREE correct answers.)',
  'options': {
    'A': 'usermod',
    'B': 'passwd',
    'C': 'chattr',
    'D': 'chage',
    'E': 'chsh'
  },
  'answers': [
    'A',
    'B',
    'D'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'Which command is used to add an empty group to the system? (Specify ONLY the command without any path or parameters.)',
  'answers': [
    'groupadd',
    '/usr/sbin/groupadd'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'What is not contained in the locale setting of the operating system?',
  'options': {
    'A': 'currency symbol',
    'B': 'language',
    'C': 'timezone',
    'D': 'thousands separator'
  },
  'answers': [
    'C'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'What is true about the file /etc/localtime?',
  'options': {
    'A': 'It is a plain text file containing a string such as Europe/Berlin.',
    'B': 'It is created and maintained by the NTP service based on the geolocation of the system\'s IP address.',
    'C': 'It is a symlink to /sys/device/clock/ltime and always contains the current local time.',
    'D': 'It is either a symlink to or a copy of a timezone information file such as /usr/share/zoneinfo/Europe/Berlin.'
  },
  'answers': [
    'D'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'What is true regarding the command userdel --force --remove bob? (Choose TWO correct answers.)',
  'options': {
    'A': 'The user bob is removed from the system\'s user database.',
    'B': 'The user bob\'s home directory is removed.',
    'C': 'The locate database is updated to drop files owned by bob.',
    'D': 'All files owned by bob are remove from all mounted filesystems.',
    'E': 'In case bob was the last member of a group, that group is deleted.'
  },
  'answers': [
    'A',
    'B'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'Which of the following fields can be found in the /etc/group file? (Choose THREE correct answers.)',
  'options': {
    'A': 'The list of users that belong to the group.',
    'B': 'The home directory of the group.',
    'C': 'The name of the group.',
    'D': 'The description of the group.',
    'E': 'The password of the group.'
  },
  'answers': [
    'A',
    'C',
    'E'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which file, when using Sendmail or a compatible MTA system, will allow a user to redirect all of their mail to another address and is configurable by the user themselves?',
  'options': {
    'A': '/etc/alias',
    'B': '/etc/mail/forwarders',
    'C': '~/.alias',
    'D': '~/.forward'
  },
  'answers': [
    'D'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following commands pauses the CUPS printer LaserPrinter?',
  'options': {
    'A': 'cupsreject LaserPrinter',
    'B': 'cupsreject -d LaserPrinter',
    'C': 'cupsdisable -d LaserPrinter',
    'D': 'cupsdisable LaserPrinter'
  },
  'answers': [
    'D'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'Which of the following are commonly used Mail Transfer Agent (MTA) applications? (Choose THREE correct answers.)',
  'options': {
    'A': 'Postfix',
    'B': 'Procmail',
    'C': 'Sendmail',
    'D': 'Exim',
    'E': 'SMTPd'
  },
  'answers': [
    'A',
    'C',
    'D'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following commands lists all queued print jobs?',
  'options': {
    'A': 'lpd',
    'B': 'lpr',
    'C': 'lp',
    'D': 'lpq'
  },
  'answers': [
    'D'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'What is NTP?',
  'options': {
    'A': 'A more secure protocol replacement for FTP.',
    'B': 'A protocol for synchronizing time on computers.',
    'C': 'A routing aid for finding next hops on a network.',
    'D': 'A simple tunnelling protocol for computers behind firewalls.'
  },
  'answers': [
    'B'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'What is true regarding the time in a Linux system?',
  'options': {
    'A': 'The BIOS clock of a computer always indicates the current local time and time zone.',
    'B': 'Each application must convert the Unix time to the current time zone which is usually done by using standard libraries.',
    'C': 'When the system is on the network, each query for the current time leads to a new network connection to a time server.',
    'D': 'When the system time changes, running processes must be restarted in order to get the correct time.'
  },
  'answers': [
    'B'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'Which of the following is true regarding the mail queue of a mail server? (Choose TWO correct answers.)',
  'options': {
    'A': 'The messages in the queue must be readable by all users as the queue may contain messages for several users.',
    'B': 'According to the Filesystem Hierarchy Standard (FHS) the queue is located at /var/mail/spool.',
    'C': 'There is exactly one mail queue per user which holds all new messages for that user before they are moved to other folders by the user\'s mail client.',
    'D': 'The queue holds all messages that are processed by the mail server but have not yet been completely delivered.',
    'E': 'The content of the mail queue can be queried by the command mailq.'
  },
  'answers': [
    'D',
    'E'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Why should an NTP client maintain connections to several NTP servers?',
  'options': {
    'A': 'To receive NTP information every second as each server transmits NTP pings every five seconds only.',
    'B': 'To improve the precision of the time by comparing responses from several servers.',
    'C': 'To not overload the remote server in case the local NTP time cache is not enabled.',
    'D': 'To not lose contact with all NTP servers in case the client changes networks.'
  },
  'answers': [
    'B'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'With syslog, what is a facility?',
  'options': {
    'A': 'Facilities are different connection interfaces to syslog. Each facility has its own device in /dev/syslog/.',
    'B': 'From syslog\'s point of view, each Unix process that issues messages is a facility.',
    'C': 'Facilities describe the severity of a log message such as emerg or info.',
    'D': 'When using remote logging, the hostname of the server that generated a message is called facility.',
    'E': 'Facilities describe categories or groups of messages such as mail or auth.'
  },
  'answers': [
    'E'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following files holds the configuration for journald when running systemd?',
  'options': {
    'A': '/etc/systemd/journalctl.conf',
    'B': '/etc/systemd/journald.conf',
    'C': '/etc/systemd/systemd-journald.conf',
    'D': '/etc/systemd/systemd-journalctl.conf',
    'E': '/usr/lib/systemd/journalctl.conf'
  },
  'answers': [
    'B'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'Which of the following are commonly used Mail Transfer Agent (MTA) applications? (Choose THREE correct answers.)',
  'options': {
    'A': 'Postfix',
    'B': 'Procmail',
    'C': 'Sendmail',
    'D': 'Exim',
    'E': 'SMTPd'
  },
  'answers': [
    'A',
    'C',
    'D'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following is observed and corrected by a NTP client?',
  'options': {
    'A': 'The skew in time between the system clock and the hardware clock.',
    'B': 'The skew in time between the system clock and the reference clock.',
    'C': 'Changes in the time zone of the current computer\'s location.',
    'D': 'Adjustments needed to support Daylight Saving Time.'
  },
  'answers': [
    'B'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'Which command is used to sync the hardware clock to the system clock? (Specify ONLY the command without any path or parameters.)',
  'answers': [
    'hwclock',
    '/sbin/hwclock',
    '/usr/sbin/hwclock'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'Which command, available with all MTAs, is used to list the contents of the MTA\'s mail queue? (Specify ONLY the command without any path or parameters.)',
  'answers': [
    'mailq',
    '/usr/bin/mailq',
    'sendmail -bp',
    '/usr/sbin/sendmail -bp',
    '/usr/lib/sendmail -bp',
    'sendmail',
    '/usr/sbin/sendmail',
    '/usr/lib/sendmail'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'Please specify the top directory containing the configuration files for the CUPS printing system. (Specify the full path to the directory.)',
  'answers': [
    '/etc/cups',
    '/etc/cups/'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following is a legacy program provided by CUPS for sending files to the printer queues on the command line?',
  'options': {
    'A': 'lpd',
    'B': 'lpp',
    'C': 'lpq',
    'D': 'lpr'
  },
  'answers': [
    'D'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'What entry can be added to the syslog.conf file to have all syslog messages generated by a system displayed on console 12?',
  'options': {
    'A': '*.* /dev/tty12',
    'B': '/var/log/messages | /dev/tty12',
    'C': '| /dev/tty12',
    'D': 'syslog tty12',
    'E': 'mail.* /dev/tty12'
  },
  'answers': [
    'A'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'What is true about the ntpdate command?',
  'options': {
    'A': 'It is the primary management command for the NTP time server.',
    'B': 'It updates the local system\'s date (i.e. day, month and year) but not the time (i.e. hours, minutes, seconds).',
    'C': 'It queries one or more NTP time servers and adjusts the system time accordingly.',
    'D': 'It sends the local system time to one or many remote NTP time servers for redistribution.',
    'E': 'It can be used by any user to set the user clock independently of the system clock.'
  },
  'answers': [
    'C'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'What is true regarding the file ~/.forward?',
  'options': {
    'A': 'As it is owned by the MTA and not writable by the user, it must be edited using the editaliases command.',
    'B': 'After editing ~/.forward the user must run newaliases to make the mail server aware of the changes.',
    'C': 'Using ~/.forward, root may configure any email address whereas all other users may configure only their own addresses.',
    'D': 'When configured correctly, ~/.forward can be used to forward each incoming mail to more than one other recipient.'
  },
  'answers': [
    'D'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following commands is used to rotate, compress, and mail system logs?',
  'options': {
    'A': 'rotatelog',
    'B': 'striplog',
    'C': 'syslogd --rotate',
    'D': 'logrotate',
    'E': 'logger'
  },
  'answers': [
    'D'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'How many bits make up an IPv6 address?',
  'options': {
    'A': '32',
    'B': '48',
    'C': '64',
    'D': '128',
    'E': '256'
  },
  'answers': [
    'D'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'Which command is used to manually assign an IP address to a network interface? (Specify ONLY the command without any path or parameters.)',
  'answers': [
    'ifconfig',
    '/sbin/ifconfig',
    'ip',
    '/sbin/ip'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following files is consulted when programs like netstat try to match port numbers to names?',
  'options': {
    'A': '/etc/networks',
    'B': '/etc/portmapper',
    'C': '/etc/protocols',
    'D': '/etc/resolv.conf',
    'E': '/etc/services'
  },
  'answers': [
    'E'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following statements is valid in the file /etc/resolv.conf?',
  'options': {
    'A': 'order hosts,bind',
    'B': '192.168.168.4 dns-server',
    'C': 'hosts: files,dns',
    'D': 'domain example.com'
  },
  'answers': [
    'D'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following is a correct entry in the /etc/hosts file?',
  'options': {
    'A': 'localhost 127.0.0.1 localhost.localdomain',
    'B': 'localhost.localdomain localhost 127.0.0.1',
    'C': 'localhost localhost.localdomain 127.0.0.1',
    'D': '127.0.0.1 localhost.localdomain localhost',
    'E': 'localhost.localdomain 127.0.0.1 localhost'
  },
  'answers': [
    'D'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'What is the assigned port number for the HTTP service? (Specify the port number using digits.)',
  'answers': [
    '80'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'What is the purpose of the dig command?',
  'options': {
    'A': 'It can be used as a tool for querying DNS servers.',
    'B': 'It can be used for searching through indexed file content.',
    'C': 'It can be used to look for open ports on a system.',
    'D': 'It can be used to ping all known hosts on the current subnet.'
  },
  'answers': [
    'A'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'Given the following line from /etc/nsswitch.conf:<br> hosts: files mdns4_minimal [NOTFOUND=return] dns mdns4<br> By default, which file will be queried first for hostname lookups? (Specify the full name of the file, including path.)',
  'answers': [
    '/etc/hosts'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'When issuing the command ifconfig eth0 192.168.1.20/24 up, which of the following happens? (Choose TWO correct answers.)',
  'options': {
    'A': 'The address 192.168.1.20 is associated with the interface eth0.',
    'B': 'A network route to 192.168.1.0 with the netmask 255.255.255.0 pointing directly to eth0 is created.',
    'C': '192.168.1.1 is probed for router functionality and, in case of success, it is added to the list of default routers.',
    'D': 'The addresses from 192.168.1.20 to 192.168.1.24 are activated on the interface eth0.',
    'E': 'If eth0 was configured with a previous IP address, it is retained in addition to adding the new address.'
  },
  'answers': [
    'A',
    'B'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'What is the name of the file that defines the sources (like DNS or local configuration files) and the order in which they are consulted when resolving hostnames? (Specify the full name of the file, including path.)',
  'answers': [
    '/etc/nsswitch.conf'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Given the following routing table<br> Kernel IP routing table<br> Destination Gateway Genmask Flags Metric Ref Use Iface<br> 192.168.178.0 0.0.0.0 255.255.255.0 U 9 0 0 wlan0<br> Why does the command route add default gw 192.168.1.1 fail?',
  'options': {
    'A': 'Because there is no route to 192.168.1.1.',
    'B': 'Because only one route can exist at a time.',
    'C': 'Because there is already a default route.',
    'D': 'Because default routes can not be set manually.',
    'E': 'Because default routes must be set with ifconfig.'
  },
  'answers': [
    'A'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'In order to discover the link layer address of the device that owns a specific IPv4 or IPv6 address, which mechanism is used?',
  'options': {
    'A': 'Both IPv4 and IPv6 use ARP.',
    'B': 'Both IPv4 and IPv6 use Neighbor Discovery.',
    'C': 'IPv4 uses ARP while IPv6 uses Neighbor Discovery.',
    'D': 'IPv4 uses Neighbor Discovery while IPv6 uses ARP.',
    'E': 'Both IPv4 and IPv6 can use either ARP or Neighbor Discovery depending on the network.'
  },
  'answers': [
    'C'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'Which of the following are valid IPv4 network masks? (Choose TWO correct answers.)',
  'options': {
    'A': '255.255.0.0',
    'B': '255.255.255.65',
    'C': '255.255.0.255',
    'D': '0.0.0.1',
    'E': '255.255.255.248'
  },
  'answers': [
    'A',
    'E'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'How does the ping command work by default?',
  'options': {
    'A': 'It sends a UDP packet to port 0 of the remote host and waits to receive a UDP error response in return.',
    'B': 'It sends an ARP request to a remote host and waits to receive an ARP response in return.',
    'C': 'It sends a TCP SYN packet to a remote host and waits to receive an TCP ACK response in return.',
    'D': 'It sends a broadcast packet to all hosts on the net and waits to receive, among others, a response from the target system.',
    'E': 'It sends an ICMP Echo Request to a remote host and waits to receive an ICMP Echo Response in return.'
  },
  'answers': [
    'E'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'How many IP-addresses can be used for unique hosts inside the IPv4 subnet 192.168.2.128/28? (Specify the number only without any additional information.)',
  'answers': [
    '14'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'What is the lowest numbered unprivileged TCP port? (Specify the number in digits only.)',
  'answers': [
    '1024'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following statements is valid in the file /etc/nsswitch.conf?',
  'options': {
    'A': 'multi on',
    'B': '192.168.168.4 dns-server',
    'C': 'hosts: files dns',
    'D': 'include /etc/nsswitch.d/'
  },
  'answers': [
    'C'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'Which command, depending on its options, can display the open network connections, the routing tables, as well as network interface statistics. (Specify ONLY the command without any path or parameters.)',
  'answers': [
    'netstat',
    '/bin/netstat',
    'ss',
    '/usr/bin/ss'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'Which port is the default server port for the HTTPS protocol? (Specify the port number using digits.)',
  'answers': [
    '443'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'Which of the following IPv4 networks are reserved by IANA for private address assignment and private routing? (Choose THREE correct answers.)',
  'options': {
    'A': '127.0.0.0/8',
    'B': '10.0.0.0/8',
    'C': '169.255.0.0/16',
    'D': '172.16.0.0/12',
    'E': '92.168.0.0/16'
  },
  'answers': [
    'B',
    'D',
    'E'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following tools used for DNS debugging, reports not only the response from the name server but also details about the query?',
  'options': {
    'A': 'dnsq',
    'B': 'dig',
    'C': 'hostname',
    'D': 'dnslookup',
    'E': 'zoneinfo'
  },
  'answers': [
    'B'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'What of the following can be done by the command ifconfig? (Choose TWO correct answers.)',
  'options': {
    'A': 'Set a network interface active or inactive.',
    'B': 'Specify the kernel module to be used with a network interface.',
    'C': 'Allow regular users to change the network configuration of a network interface.',
    'D': 'Change the netmask used on a network interface.',
    'E': 'Specify which network services are available on a network interface.'
  },
  'answers': [
    'A',
    'D'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following programs can be used to determine the routing path to a given destination?',
  'options': {
    'A': 'dig',
    'B': 'netstat',
    'C': 'ping',
    'D': 'route',
    'E': 'traceroute'
  },
  'answers': [
    'E'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Given the following routing table:<br> Kernel IP routing table<br> Destination Gateway Genmask Flags Metric Ref Use Iface<br> 0.0.0.0 192.168.178.1 0.0.0.0 UG 0 0 0 wlan0<br> 192.168.1.0 0.0.0.0 255.255.255.0 U 0 0 0 eth0<br> 192.168.2.0 192.168.1.1 255.255.255.0 U 0 0 0 eth0<br> 192.168.178.0 0.0.0.0 255.255.255.0 U 9 0 0 wlan0<br> How would an outgoing packet to the destination 192.168.2.150 be handled?',
  'options': {
    'A': 'It would be passed to the default router 192.168.178.1 on wlan0.',
    'B': 'It would be directly transmitted on the device eth0.',
    'C': 'It would be passed to the default router 255.255.255.0 on eth0.',
    'D': 'It would be directly transmitted on the device wlan0.',
    'E': 'It would be passed to the router 192.168.1.1 on eth0.'
  },
  'answers': [
    'E'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following is a valid IPv6 address?',
  'options': {
    'A': '2001:db8:3241::1',
    'B': '2001::db8:4581::1',
    'C': '2001:db8:0g41::1',
    'D': '2001%db8%9990%%1',
    'E': '2001.db8.819f..1'
  },
  'answers': [
    'A'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'Which of the following keywords can be used in the file /etc/resolv.conf? (Choose TWO correct answers.)',
  'options': {
    'A': 'substitute',
    'B': 'nameserver',
    'C': 'search',
    'D': 'lookup',
    'E': 'method'
  },
  'answers': [
    'B',
    'C'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'On a regular users workstation the route command takes a long time before printing out the routing table. Which of the following errors does that indicate?',
  'options': {
    'A': 'The local routing information may be corrupted and must be re-validated using a routing protocol.',
    'B': 'One of the routers in the routing table is not available which causes the automatic router failure detection mechanism (ARF-D) to wait for a timeout.',
    'C': 'There may accidentally be more than one default router in which case a default router election has to be done on the network in order to choose one router as the default.',
    'D': 'DNS resolution may not be working as route by default tries to resolve names of routers and destinations and may run into a timeout.'
  },
  'answers': [
    'D'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'Which keyword must be listed in the hosts option of the Name Service Switch configuration file in order to make host lookups consult the /etc/hosts file?',
  'answers': [
    'files'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'In an xinetd configuration file, which attribute specifies the network address that will be used to provide the service?',
  'answers': [
    'bind',
    'interface'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'What argument to the -type option of find will match files that are symbolic links? (Specify only the argument and no other options or words.)',
  'answers': [
    '|'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'With X11 forwarding in ssh, what environment variable is automatically set in the remote host shell that is not set when X11 forwarding is not enabled? (Specify only the environment variable without any additional commands or values.)',
  'answers': [
    'DISPLAY',
    '$DISPLAY'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'The presence of what file will temporarily prevent all users except root from logging into the system? (Specify the full name of the file, including path.)',
  'answers': [
    '/etc/nologin'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which configuration file would be edited to change the default options for outbound SSH sessions?',
  'options': {
    'A': '/etc/ssh/sshd_config',
    'B': '/etc/ssh/ssh',
    'C': '/etc/ssh/client',
    'D': '/etc/ssh/ssh_config',
    'E': '/etc/ssh/ssh_client'
  },
  'answers': [
    'D'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following programs uses the hosts.allow file to perform its main task of checking for access control restrictions to system services?',
  'options': {
    'A': 'tcpd',
    'B': 'inetd',
    'C': 'fingerd',
    'D': 'mountd',
    'E': 'xinetd'
  },
  'answers': [
    'A'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which command is used to set restrictions on the size of a core file that is created for a user when a program crashes?',
  'options': {
    'A': 'core',
    'B': 'edquota',
    'C': 'ulimit',
    'D': 'quota'
  },
  'answers': [
    'C'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'When trying to unmount a device it is reported as being busy. Which of the following commands could be used to determine which process is causing this?',
  'options': {
    'A': 'debug',
    'B': 'lsof',
    'C': 'nessus',
    'D': 'strace',
    'E': 'traceroute'
  },
  'answers': [
    'B'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which configuration file would be edited to change default options for the OpenSSH server?',
  'options': {
    'A': '/etc/ssh/sshd_config',
    'B': '/etc/ssh/ssh',
    'C': '/etc/ssh/server',
    'D': '/etc/ssh/ssh_config',
    'E': '/etc/ssh/ssh_server'
  },
  'answers': [
    'A'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which configuration file does sudo read when determining if a user is permitted to run applications with root privileges?',
  'options': {
    'A': '/etc/security.conf',
    'B': '/etc/supasswd',
    'C': '/etc/sudoers',
    'D': '/etc/sudo.conf'
  },
  'answers': [
    'C'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following commands can be used to associate open TCP ports with the processes that opened the ports?',
  'options': {
    'A': 'ptrace',
    'B': 'strace',
    'C': 'debug',
    'D': 'nessus',
    'E': 'lsof'
  },
  'answers': [
    'E'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'Instead of using specific host names or IP addresses, which string can be used in /etc/hosts.allow entries to cover any remote host no matter of its name or address? (Specify the relevant string only without any additional options or arguments.)',
  'answers': [
    'ALL'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'Which of the following resources can be directly limited for a given user using ulimit? (Choose THREE correct answers.)',
  'options': {
    'A': 'Maximum seconds of CPU time spent.',
    'B': 'Maximum number of open file descriptors.',
    'C': 'Maximum number of processes available.',
    'D': 'Maximum number of concurrent login sessions.',
    'E': 'Maximum seconds of login duration per session.'
  },
  'answers': [
    'A',
    'B',
    'C'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'Depending on the host\'s configuration, which of the following files can be used to turn on and off network services running on a host? (Choose TWO correct answers.)',
  'options': {
    'A': '/etc/profile',
    'B': '/etc/services',
    'C': '/etc/inetd.conf',
    'D': '/etc/xinetd.conf',
    'E': '/etc/host.conf'
  },
  'answers': [
    'C',
    'D'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'How do shadow passwords improve the password security in comparison to standard passwd passwords?',
  'options': {
    'A': 'Shadow passwords are stored in plain text and can be checked for weak passwords.',
    'B': 'Every shadow password is valid for 45 days and must be changed afterwards.',
    'C': 'The system\'s host key is used to strongly encrypt all shadow passwords.',
    'D': 'Shadow passwords are always combined with a public key that has to match the user\'s private key.',
    'E': 'Regular users do not have access to the password hashes of shadow passwords.'
  },
  'answers': [
    'E'
  ]
});
lx0104.push({
  'type': 'multiple',
  'text': 'What is true regarding public and private SSH keys? (Choose TWO correct answers.)',
  'options': {
    'A': 'Several different public keys may be generated for the same private key.',
    'B': 'The private key must never be revealed to anyone.',
    'C': 'For each user account, there is exactly one key pair that can be used to log into that account.',
    'D': 'To maintain the private key\'s confidentiality, the SSH key pair must be created by its owner.',
    'E': 'To allow remote logins, the user\'s private key must be copied to the remote server.'
  },
  'answers': [
    'B',
    'D'
  ]
});
lx0104.push({
  'type': 'text',
  'text': 'Which command is used to add OpenSSH private keys to a running ssh-agent instance? (Specify the file name only without any path.)',
  'answers': [
    'ssh-add',
    '/usr/bin/ssh-add'
  ]
});
lx0104.push({
  'type': 'single',
  'text': 'Which of the following commands gets the GnuPG public key with the id 63B4835B from the keyserver example.com?',
  'options': {
    'A': 'gpg --keyserver hkp://example.com --recv-key 63B4835B',
    'B': 'gpg --search-key hkp://63B4835B@example.com',
    'C': 'gpg --keyserver gpg://example.com --get-key 63B4835B',
    'D': 'gpg --keyserver hkp://example.com --add-key 63B4835B',
    'E': 'gpg --keyserver gpg://example.com --key 63B4835B'
  },
  'answers': [
    'A'
  ]
});
