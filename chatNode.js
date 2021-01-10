function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function connect(password){
	
	postMessage('connected');
}
onmessage = function(e){
	if(e.data[0] == 'connect'){
		connect(e.data[1]);
	}
}