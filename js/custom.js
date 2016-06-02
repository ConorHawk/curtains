function curtainOpen(){
	$(window).on("click",function(){

		if ($(".curtain-right").hasClass("closed")){

			$(".curtain-right").removeClass("closed");
			$(".curtain-right").css('-webkit-transform','translateX(110%)'); 
			$(".curtain-left").css('-webkit-transform','translateX(-110%)'); 
		} else {

			$(".curtain-right").addClass("closed");
			$(".curtain-right").css('-webkit-transform','translateX(0%)'); 
			$(".curtain-left").css('-webkit-transform','translateX(0%)'); 
		}
	});
}

curtainOpen();
