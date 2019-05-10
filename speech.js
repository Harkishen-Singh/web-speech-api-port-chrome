var speech = new SpeechRecognition(),
    iteration = 0,
    messageUserSpeech = document.getElementById('messageUserSpeech');

speech.onresult = function (eve) {
    if (eve.results.length > 0) { // marks presence of transcripted words
        messageUserSpeech.value = eve.results[0][0].transcript;
    }
};

function initiateRecording(val) {
    iteration += val;
    if (!iteration % 2) {
        speech.start();
    } else {
        speech.stop();
    }
}
