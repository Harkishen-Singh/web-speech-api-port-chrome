var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var speech = new SpeechRecognition(),
    iteration = 0,
    messageUserSpeech = document.getElementById('messageUserSpeechID');

speech.continuous = true;
speech.onresult = function (eve) {
    if (eve.results.length > 0) { // marks presence of transcripted words
        messageUserSpeech.value += eve.results[eve.results.length - 1][0].transcript;
    }
};

function initiateRecording(val) {
    iteration += val;
    if (!(iteration % 2 === 0)) {
        speech.start();
    } else {
        speech.stop();
        messageUserSpeech.value = '';
        alert('cleared');
    }
}
