import sys
from time import sleep
import time
def printLyrics():
lines = [
("I know, I know", 0.1),
("And thinking all you need is there", 0.08),
("Building faith on love and words", 0.05),
("Empty promises will wear", 0.08),
("I know", 0.08),
("I know and now", 0.06),
("When all is done, there is nothing to say", 0.04),
("And if you're done", 0.07),
("With embarrassing me", 0.04),
("On your own you can go ahead", 0.06),
("Tell them", 0.05),
("Tell them all I know now", 0.08)
]
delays = [0.3, 0.5, 0.4, 0.2, 1.1, 0.7, 0.8, 0.1, 0.8, 0.0, 0.7, 0.0]
for i, (line, char_delay) in enumerate(lines):
for char in line:
print(char, end='')
sys.stdout.flush()
sleep(char_delay)
print()
time.sleep(delays[i])
printLyrics()