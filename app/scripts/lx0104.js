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
