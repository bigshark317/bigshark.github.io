function getCurrentTime () {
    let now = new Date ();
    let hh = now.getHours();
    let mm = now.getMinutes() > 10 ? now.getMinutes() : '0'+now.getMinutes();
    let ss = now.getSeconds() > 10 ? now.getSeconds() : '0'+ now.getSeconds();  
    var currentTime = hh + ':' + mm + ':' + ss;
	document.getElementById("Color").innerHTML=currentTime;
}
setInterval(getCurrentTime, 1000)