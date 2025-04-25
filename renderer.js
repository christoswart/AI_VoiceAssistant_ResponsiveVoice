document.getElementById('read-button').addEventListener('click', () => {
  const text = document.getElementById('text-input').value;
  const voiceSelect = document.getElementById('voice-select');
  const selectedVoice = voiceSelect.value;
  responsiveVoice.speak(text, selectedVoice);
});

document.getElementById('pause-button').addEventListener('click', () => {
  responsiveVoice.pause();
});

document.getElementById('resume-button').addEventListener('click', () => {
  responsiveVoice.resume();
});
