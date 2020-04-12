var i=0;
function dropdown(){
	var menu = document.getElementById("down");
	if(i%2==0){
		menu.style.display="block";
		menu.style.animation="navin 1s";
	}
	else{
		menu.style.animation="navout 1s";
		setTimeout(function(){
		menu.style.display="none";},1000);
	}
	i++;
}
