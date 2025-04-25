const responsiveVoice = require('responsivevoice');

function speak(text) {
  return new Promise((resolve, reject) => {
    try {
      responsiveVoice.speak(text, 'UK English Female', {
        onend: resolve,
        onerror: reject
      });
    } catch (error) {
      reject(error);
    }
  });
}

function pause() {
  responsiveVoice.pause();
}

function resume() {
  responsiveVoice.resume();
}

module.exports = { speak, pause, resume };