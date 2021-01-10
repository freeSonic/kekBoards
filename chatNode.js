function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function connect(userPassword){
	/*what the fuck javascript
	var alea = require('alea');
	var randGen = alea(userPassword);
	console.log(randGen.next());
	*/
	postMessage(['connected']);
}

onmessage = function(e){
	if(e.data[0] == 'connect'){
		connect(e.data[1]);
	}
}