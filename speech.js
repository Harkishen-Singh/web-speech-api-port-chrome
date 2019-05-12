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

var element = document.getElementById('language-selection-area');
var selectElement = document.createElement('select');
selectElement.style.maxWidth = '100%';
element.appendChild(selectElement);

var languages = {
    'af-ZA': 'Afrikaans',
    'id-ID': 'Bahasa Indonesia',
    'ms-MY': 'Bahasa Melayu',
    'ca-ES': 'Català',
    'cs-CZ': 'Čeština',
    'de-DE': 'Deutsch',
    'en-AU': 'English - Australia',
    'en-CA': 'English - Canada',
    'en-IN': 'English - India',
    'en-NZ': 'English - New Zealand',
    'en-ZA': 'English - South Africa',
    'en-GB': 'English - United Kingdom',
    'en-US': 'English - United States',
    'es-AR': 'Español - Argentina',
    'es-BO': 'Español - Bolivia',
    'es-CL': 'Español - Chile',
    'es-CO': 'Español - Colombia',
    'es-CR': 'Español - Costa Rica',
    'es-EC': 'Español - Ecuador',
    'es-SV': 'Español - El Salvador',
    'es-ES': 'Español - España',
    'es-US': 'Español - Estados Unidos',
    'es-GT': 'Español - Guatemala',
    'es-HN': 'Español - Honduras',
    'es-MX': 'Español - México',
    'es-NI': 'Español - Nicaragua',
    'es-PA': 'Español - Panamá',
    'es-PY': 'Español - Paraguay',
    'es-PE': 'Español - Perú',
    'es-PR': 'Español - Puerto Rico',
    'es-DO': 'Español - República Dominicana',
    'es-UY': 'Español - Uruguay',
    'es-VE': 'Español - Venezuela',
    'gu-IN': 'ગુજરાતી',
    'kn-IN': 'ಕನ್ನಡ',
    'km-KH': 'ភាសាខ្មែរ',
    'lv-LV': 'Latviešu',
    'lt-LT': 'Lietuvių',
    'ml-IN': 'മലയാളം',
    'mr-IN': 'मराठी',
    'hu-HU': 'Magyar',
    'lo-LA': 'ລາວ',
    'nl-NL': 'Nederlands',
    'ne-NP': 'नेपाली भाषा',
    'nb-NO': 'Norsk bokmål',
    'si-LK': 'සිංහල',
    'sl-SI': 'Slovenščina',
    'su-ID': 'Basa Sunda',
    'sw-TZ': 'Kiswahili - Tanzania',
    'sw-KE': 'Kiswahili - Kenya',
    'ka-GE': 'ქართული',
    'hy-AM': 'Հայերեն',
    'ta-IN': 'தமிழ் - இந்தியா',
    'ta-SG': 'தமிழ் - சிங்கப்பூர்',
    'ta-LK': 'தமிழ் - இலங்கை',
    'ta-MY': 'தமிழ் - மலேசியா',
    'te-IN': 'తెలుగు',
    'vi-VN': 'Tiếng Việt',
    'tr-TR': 'Türkçe',
    'ur-PK': 'اُردُو - پاکستان',
    'ur-IN': 'اُردُو - بھارت',
    'el-GR': 'Ελληνικά',
    'uk-UA': 'Українська',
    'hi-IN': 'हिन्दी',
    'th-TH': 'ภาษาไทย',
    'eu-ES': 'Euskara',
    'fr-FR': 'Français',
    'gl-ES': 'Galego',
    'hr_HR': 'Hrvatski',
    'zu-ZA': 'IsiZulu',
    'is-IS': 'Íslenska',
    'it-IT': 'Italiano-Italia',
    'it-CH': 'Italiano-Svizzera',
    'pl-PL': 'Polski',
    'pt-BR': 'Português-Brasil',
    'pt-PT': 'Português-Portugal',
    'ro-RO': 'Română',
    'sk-SK': 'Slovenčina',
    'fi-FI': 'Suomi',
    'sv-SE': 'Svenska',
    'bg-BG': 'български',
    'ru-RU': 'Pусский',
    'sr-RS': 'Српски',
    'ko-KR': '한국어',
    'cmn-Hans-CN': '中文 - 普通话 (中国大陆)',
    'cmn-Hans-HK': '中文 - 普通话 (香港)',
    'cmn-Hant-TW': '中文 - 中文 (台灣)',
    'yue-Hant-HK': '中文 - 粵語 (香港)',
    'ja-JP': '日本語',
    'la': 'Lingua latīna',
    'jv-ID': 'Basa Jawa',
    'fil-PH': 'Filipino'
};

for( var lang in languages) {
    let optionELement = document.createElement('option');
    console.log('lang is ', lang);
    optionELement.value = lang;
    optionELement.text = languages[lang];
    optionELement.id = '__' + lang;
    optionELement.onclick = function () {
        speech.lang = this.value;
        console.warn('this language was ', this.value);
    };
    selectElement.appendChild(optionELement);
}
setTimeout(() => {

    for( let langg in languages) {
        console.log(document.getElementById('__' + langg))
        document.getElementById('__' + langg).addEventListener('click', function (eve) {
            console.log('loging ', eve.target.id, ' ', eve.target.value);
            speech.lang = eve.target.value;
        }, false);
    }
}, 500);

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
