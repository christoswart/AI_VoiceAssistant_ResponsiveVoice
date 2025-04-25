import sys
from gtts import gTTS
import playsound
import os
import signal

def speak(text):
    tts = gTTS(text=text, lang='en')
    filename = "temp.mp3"
    tts.save(filename)
    playsound.playsound(filename)
    os.remove(filename)

def pause_audio():
    os.kill(os.getpid(), signal.SIGSTOP)

def resume_audio():
    os.kill(os.getpid(), signal.SIGCONT)

if __name__ == "__main__":
    text = sys.argv[1]
    speak(text)

    while True:
        command = sys.stdin.readline().strip()
        if command == "pause":
            pause_audio()
        elif command == "resume":
            resume_audio()
        elif command == "exit":
            break