var i=0;
function dropdown(){
	var menu = document.getElementById("down");
	if(i%2==0){
		menu.style.display="block";
		menu.style.animation="navin 0.5s ease";
	}
	else{
		menu.style.animation="navout 0.5s ease";
		setTimeout(function(){
		menu.style.display="none";},500);
	}
	i++;
}
