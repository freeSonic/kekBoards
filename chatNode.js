importScripts('alea.js');

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function connect(userPassword){
	var randGen = new alea(userPassword);
	console.log(randGen());
	postMessage(['connected']);
}

onmessage = function(e){
	if(e.data[0] == 'connect'){
		connect(e.data[1]);
	}
}