'use strict';

const socket = io();

const outputYou = document.querySelector('.output-you');
const outputBot = document.querySelector('.output-bot');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


function synthVoice(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  utterance.rate = 1;
    if(recognition.lang != "en" ){
  utterance.lang = "hi";}
    else{
        utterance.lang = "en";
        var voices = window.speechSynthesis.getVoices();
        utterance.voice = voices[3];
    }
    if(recognition.lang == "mr"){
        utterance.rate = 0.75;
    }
  synth.speak(utterance);
}

function dista(){
        recognition.lang = "ta";
        responsiveVoice.speak("ஹலோ நான் அறுவடை செய்கிறேன். நான் எப்படி உங்களுக்கு உதவ முடியும்?", "Tamil Male", {rate:0.4});
        x.style.display = "block";
        y.style.display = "block";
        var language = document.querySelector(".dropdown");
        language.style.display = "none";
        var loutput = document.querySelector(".lang");
        loutput.textContent = "Tamil";
        outputBot.textContent = "You selected tamil"
    }
function disgu(){
        x.style.display = "block";
        y.style.display = "block";
        var language = document.querySelector(".dropdown");
        language.style.display = "none";
        var loutput = document.querySelector(".lang");
        loutput.textContent = "ગુજરતી";
        outputBot.textContent = "You selected gujrati"
        recognition.lang = "gu";
        synthVoice("हेल्लो हूँ पका छुन| हूँ आपनी शुऊं मदद करी सकु|");
    }
function disen(){
    recognition.lang = "en";
    synthVoice("hello i am crop. Your language is english. How i can help you?");
    x.style.display = "block";
    y.style.display = "block";
    var language = document.querySelector(".dropdown");
    language.style.display = "none";
    var loutput = document.querySelector(".lang");
    loutput.textContent = "English";
    outputBot.textContent = "You selected english"
    
}
function dishi(){
    recognition.lang = "hi";
    synthVoice("नमस्ते मैं फसल हूँ आपकी भाषा हिंदी है बताइए मैं आपकी कैसे मदद कर सकती हूँ");
    x.style.display = "block";
    y.style.display = "block";
    var language = document.querySelector(".dropdown");
    language.style.display = "none";
    var loutput = document.querySelector(".lang");
    loutput.textContent = "Hindi";
    outputBot.textContent = "You selected hindi"
    
}
function dispu(){
    recognition.lang = "hi";
    synthVoice("हेल्लो मैं फसल हाँ| मैं किवे मदद क्रर सकदी हाँ?");
    x.style.display = "block";
    y.style.display = "block";
    var language = document.querySelector(".dropdown");
    language.style.display = "none";
    var loutput = document.querySelector(".lang");
    loutput.textContent = "Punjabi";
    outputBot.textContent = "You selected punjabi"
    
}
function disma(){
    recognition.lang = "mr";
    synthVoice("नमस्कार मी कापणी करतो. तुमची भाषा मराठी आहे. सांगा मी तुम्हाला कशी मदत करू शकते.");
    x.style.display = "block";
    y.style.display = "block";
    var language = document.querySelector(".dropdown");
    language.style.display = "none";
    var loutput = document.querySelector(".lang");
    loutput.textContent = "Marathi";
    outputBot.textContent = "You selected marathi"
    
}
function rel(){
    location.reload();
}

outputBot.textContent = "Please tell or select your language";
synthVoice("Please tell or select your language");

recognition.lang = "en";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

document.getElementById("fimg").style.display = "none";

document.querySelector('button').addEventListener('click', () => {
  recognition.start();
    document.getElementById("fimg").style.display = "none";
    document.getElementById("faimg").style.display = "inline";
});

recognition.addEventListener('speechstart', () => {
  console.log('Speech has been detected.');
});

recognition.addEventListener('result', (e) => {
  console.log('Result has been detected.');

  let last = e.results.length - 1;
  let text = e.results[last][0].transcript;
    var lati;
    var longi;
    var text1;
    var filename;
    var blob;
  outputYou.textContent = text;
  console.log(text);
  if(text == "namaste"){
      dishi();
      outputBot.textContent = "नमस्ते मैं फसल हूँ आपकी भाषा हिंदी है बताइए मैं आपकी कैसे मदद कर सकती हूँ";
  }else if(text == "hello"){
      disen();
      outputBot.textContent = "hello i am crop. Your language is english. How i can help you?";
  }else if(text == "namaskar"){
      disma();
      outputBot.textContent = "नमस्कार मी कापणी करतो. तुमची भाषा मराठी आहे. सांगा मी तुम्हाला कशी मदत करू शकते.";
  }else if(text == "मुझे मौसम की जानकारी चाहिए" || text == "मुझे मौसम की जानकारी दो" || text == "मौसम का हाल-चाल बताओ"){
      navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
    lati  = position.coords.latitude;
    longi = position.coords.longitude;
    var weather = "http://api.openweathermap.org/data/2.5/weather?lat="+String(lati) + "&lon=" + String(longi) + "&appid=fa2a31f7a69006b255cfd3db91d149e2";
    $.getJSON(weather, weathercallback);
        function weathercallback(weatherdata){
            synthVoice("तापमान: " + weatherdata.main.temp + "दबाव: " + weatherdata.main.pressure + "नमी: " + weatherdata.main.humidity + "विवरण: "+ weatherdata.weather[0].description);
            outputBot.textContent = "तापमान: " + weatherdata.main.temp + "दबाव: " + weatherdata.main.pressure + "नमी: " + weatherdata.main.humidity + "विवरण: "+ weatherdata.weather[0].description;
            
        }
    }
  }else if(text == "change to weather mod"){
      window.open("http://localhost:5050/","_self");
  }else if(text == "change to normal mode"){
      window.open("http://localhost:5000","_self")
  }else if(text == "गन्ना करो कि कितनी फसल पैदा होगी" || text == "गन्ना करो की कितनी फसल पैदा होगी"){
      synthVoice("आप किस फसल के बारे में जानना चाहते हैं");
      recognition.lang = "en";
      outputBot.textContent = "आप किस फसल के बारे में जानना चाहते हैं";
      
  }else if(['Uttar Pradesh','Karnataka','Gujarat','Andhra Pradesh','Maharashtra','Punjab','Haryana','Rajasthan','Madhya Pradesh','Tamil Nadu','Bihar','Orissa','West Bengal'].indexOf(text)>=0){
      recognition.lang = "hi";
      synthVoice("खेती और श्रम की कुल लागत बताएं");
      outputBot.textContent = "खेती और श्रम की कुल लागत बताएं";
      text1 = text;
      filename = "test2";
      blob = new Blob([text1], {type: "text/plain;charset=utf-8"});
      saveAs(blob, filename+".txt");
      
  } else if(['ARHAR',"cotton",'gram','groundnut','maize','moong','PADDY','RAPESEED AND MUSTARD','sugarcane','wheat'].indexOf(text)>=0){
      recognition.lang = "hi";
      synthVoice("आप यह फसल किस राज्य में उगानाा चाहते हैं");
      recognition.lang = "en";
      outputBot.textContent = "आप यह फसल किस राज्य में उगानाा चाहते हैं";
      text1 = text;
      filename = "test1";
      blob = new Blob([text1], {type: "text/plain;charset=utf-8"});
      saveAs(blob, filename+".txt");
      
  } else if(outputBot.textContent == "खेती और श्रम की कुल लागत बताएं"){
      synthVoice("खेती की लागत बताएं");
      outputBot.textContent = "खेती की लागत बताएं";
      text1 = text;
      filename = "test3";
      blob = new Blob([text1], {type: "text/plain;charset=utf-8"});
      saveAs(blob, filename+".txt");
  }else if(outputBot.textContent == "खेती की लागत बताएं"){
      synthVoice("बाजार तक ले जाने की कीमत बताएं");
      outputBot.textContent = "बाजार तक ले जाने की कीमत बताएं";
      text1 = text;
      filename = "test4";
      blob = new Blob([text1], {type: "text/plain;charset=utf-8"});
      saveAs(blob, filename+".txt");
  }else if(outputBot.textContent == "बाजार तक ले जाने की कीमत बताएं"){
      text1 = text;
      filename = "test5";
      blob = new Blob([text1], {type: "text/plain;charset=utf-8"});
      saveAs(blob, filename+".txt");
  }
    else{
  console.log('Confidence: ' + e.results[0][0].confidence);

  socket.emit('chat message', text);}
});

recognition.addEventListener('speechend', () => {
  recognition.stop();
});

recognition.addEventListener('error', (e) => {
  outputBot.textContent = 'Error: ' + e.error;
});


socket.on('bot reply', function(replyText) {
    if(recognition.lang != "ta"){
  var reply = replyText.split("?");
  synthVoice(reply[0]);
        console.log(reply[1]);
document.getElementById("fimg").src = reply[1];
document.getElementById("fimg").style.display = "block";
  document.getElementById("faimg").style.display = "none"; 
}
    else{
        responsiveVoice.speak(replyText, "Tamil Male", {rate:0.5});
    }

  if(replyText == '') replyText = '(No answer...)';
  outputBot.textContent = reply[0];
});
