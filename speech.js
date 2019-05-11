var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var speech = new SpeechRecognition(),
    iteration = 0,
    messageUserSpeech = document.getElementById('messageUserSpeechID');

speech.continuous = true;
speech.onresult = function (eve) {
    if (eve.results.length > 0) { // marks presence of transcripted wcomforting ords
        messageUserSpeech.value += eve.results[eve.results.length - 1][0].transcript;
    }
};

var languages = {
    'af-ZA': 'Afrikaans',
    'id-ID': 'Bahasa Indonesia',
    'ms-MY': 'Bahasa Melayu',
    'ca-ES': 'Català',
    'cs-CZ': 'Čeština',
    'de-DE': 'Deutsch',
    'en-AU': 'En-Australia',
    'en-CA': 'English-Canada',
    'en-IN': 'India',
    'en-NZ': 'New Zealand',
    'en-ZA': 'South Africa',
    'en-GB': 'United Kingdom',
    'en-US': 'United States',
    'es-AR': 'Argentina',
    'es-BO': 'Bolivia',
    'es-CL': 'Chile',
    'es-CO': 'Colombia',
    'es-CR': 'Costa Rica',
    'es-EC': 'Ecuador',
    'es-SV': 'El Salvador',
    'es-ES': 'España',
    'es-US': 'Estados Unidos',
    'es-GT': 'Guatemala',
    'es-HN': 'Honduras',
    'es-MX': 'México',
    'es-NI': 'Nicaragua',
    'es-PA': 'Panamá',
    'es-PY': 'Paraguay',
    'es-PE': 'Perú',
    'es-PR': 'Puerto Rico',
    'es-DO': 'República Dominicana',
    'es-UY': 'Uruguay',
    'es-VE': 'Venezuela',
    'eu-ES': 'Euskara',
    'fr-FR': 'Français',
    'gl-ES': 'Galego',
    'hr_HR': 'Hrvatski',
    'zu-ZA': 'IsiZulu',
    'is-IS': 'Íslenska',
    'it-IT': 'Italiano-Italia',
    'it-CH': 'Italiano-Svizzera',
    'hu-HU': 'Magyar',
    'nl-NL': 'Nederlands',
    'nb-NO': 'Norsk bokmål',
    'pl-PL': 'Polski',
    'pt-BR': 'Português-Brasil',
    'pt-PT': 'Português-Portugal',
    'ro-RO': 'Română',
    'sk-SK': 'Slovenčina',
    'fi-FI': 'Suomi',
    'sv-SE': 'Svenska',
    'tr-TR': 'Türkçe',
    'bg-BG': 'български',
    'ru-RU': 'Pусский',
    'sr-RS': 'Српски',
    'ko-KR': '한국어',
    'cmn-Hans-CN': '中文 - 普通话 (中国大陆)',
    'cmn-Hans-HK': '中文 - 普通话 (香港)',
    'cmn-Hant-TW': '中文 - 中文 (台灣)',
    'yue-Hant-HK': '中文 - 粵語 (香港)',
    'ja-JP': '日本語',
    'la': 'Lingua latīna'
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
