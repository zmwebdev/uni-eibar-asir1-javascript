/*
https://www.npmjs.com/package/speak-tts

npm init
npm install --save speak-tts
*/

import Speech from 'speak-tts' // es6
// var Speech = require('speak-tts') //if you use es5

const speech = new Speech() // will throw an exception if not browser supported
if(speech.hasBrowserSupport()) { // returns a boolean
    console.log("speech synthesis supported")
}

const speech = new Speech()
speech.init().then((data) => {
    // The "data" object contains the list of available voices and the voice synthesis params
    console.log("Speech is ready, voices are available", data)
}).catch(e => {
    console.error("An error occured while initializing : ", e)
})

// Example with full conf 
Speech.init({
    'volume': 1,
     'lang': 'en-GB',
     'rate': 1,
     'pitch': 1,
     'voice':'Google UK English Male',
     'splitSentences': true,
     'listeners': {
         'onvoiceschanged': (voices) => {
             console.log("Event voiceschanged", voices)
         }
     }
})

speech.speak({
    text: 'Hello, how are you today ?',
}).then(() => {
    console.log("Success !")
}).catch(e => {
    console.error("An error occurred :", e)
})