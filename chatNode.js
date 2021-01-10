
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
this.onmessage = function(e){
	//sleep(400);
	postMessage('connected');
}