importScripts('alea.js');
importScripts('cryptico.js');

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function stringToHash(string) {   
    var hash = 0; 
	if (string.length == 0) return hash; 
    for (i = 0; i < string.length; i++) { 
        char = string.charCodeAt(i); 
        hash = ((hash << 5) - hash) + char; 
        hash = hash & hash; 
    } 
    return hash; 
} 

function connect(userPassword){
	//var randGen = new alea(userPassword);
	//console.log(randGen());
	var rsaKeys = cryptico.generateRSAKey(userPassword, 1024);
	var publicKey= cryptico.publicKeyString(rsaKey);
	postMessage(['connected']);
}

onmessage = function(e){
	if(e.data[0] == 'connect'){
		connect(e.data[1]);
	}
}