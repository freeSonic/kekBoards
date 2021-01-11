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

function genGuid(key){
	var nums = new alea(key);
	var hash = "";
	for(i=0; i<4; i++){
		var num = nums();
		num = num*256;
		var str = num.toString();
		if(num<1) str = "000";
		if(num<10) str = "00"+num.toString();
		if(num<100) str = "0"+num.toString();
		hash += str;
	}
	return hash;
}

function connect(userPassword){
	var keyPair = cryptico.generateRSAKey(userPassword, 1024);
	var publicKey= cryptico.publicKeyString(keyPair);
	console.log(publicKey);
	var guid = genGuid(publicKey);
	console.log(guid);
	postMessage(['connected']);
}

onmessage = function(e){
	if(e.data[0] == 'connect'){
		connect(e.data[1]);
	}
}