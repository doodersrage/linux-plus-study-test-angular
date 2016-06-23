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
