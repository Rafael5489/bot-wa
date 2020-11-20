const sastrawi = require('sastrawijs');

const kataKasar = [
    'anjing',
    'kontol',
    'memek',
	'bacot lu monyet',
	'berisik ajg',
	'ngapa? gak suka?',
	'gelud sini ajg',
	'pantek',
	'asu',
	'kontol bapak kao pecah',
	'lah ko ngamok!!',
	'dih ajg ga jelas',
	'hai puckboy:>',
	'ngapa jamet?',
	'dih bocah',
	'cuih lawak',
	'bajingan',
	'admin tytyd',
	'lu semua kek tai:>',
	'oawkeoawkeoaw anak dhajal',
	'boong bro jgn dengerin dia:v',
	'ngapa? by1?',
	'hah lucu lu',
	'meki',
	'lu semua bct ajg',
	'yodhiya',
	'dih asu',
	'Raimu Ra ketek',
    'jembut'
    //Tambahin Sendiri
];

const inArray = (needle, haystack) => {
    let length = haystack.length;
    for(let i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

module.exports = cariKasar = (kata) => new Promise((resolve) => {
    let sentence = kata;
    let stemmer = new sastrawi.Stemmer();
    let tokenizer = new sastrawi.Tokenizer();
    let words = tokenizer.tokenize(sentence);
    for (word of words) {
        if(inArray(stemmer.stem(word), kataKasar)){
            resolve(true)
        }
    }
    resolve(false)
})
