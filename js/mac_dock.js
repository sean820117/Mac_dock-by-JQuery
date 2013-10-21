/*
 *  Mac_dock for menu 
 *  
 *  Copyright (c) 2013 SeanGo Chen
 *
**/
$(document).ready(
	function(){
		var glassWidth=40;
		parent1=$("a:first");
		prev2=parent1.prev().prev().find(" a ");
		prev1=parent1.prev().find(" a ");
		next1=parent1.next().find(" a ");
		next2=parent1.next().next().find(" a ");

		$('a.dock_item').mouseover(function (e) {
			parent1=$(this);
			prev1=parent1.prev();
			prev2=prev1.prev();
			next1=parent1.next();
			next2=next1.next();

			if (next1.hasClass("hide_dock")) 
				next1=$();
			if (next2.hasClass("hide_dock")) 
				next2=$();		
		});
		$('a.dock_item').mousemove(function (e) {
			curX = e.pageX + document.documentElement.scrollTop;
			curY = e.pageY + document.documentElement.scrollLeft;
			offsetX = $(this).offset().left;
			offsetY = $(this).offset().top;
			enlargeRate = curX-offsetX;
			smoothEnlarge = curY-offsetY;
			
			if(smoothEnlarge > 20)
				smoothEnlarge=20;

			$(this).width(smoothEnlarge/20*40+40);
			prev2.width((80-enlargeRate)*0.375*(smoothEnlarge/20)+40);
			prev1.width((80-enlargeRate)*0.125*(smoothEnlarge/20)+40+(smoothEnlarge/20)*30);
			next1.width(enlargeRate*(smoothEnlarge/20)*0.125+40+(smoothEnlarge/20)*30);
			next2.width(enlargeRate*(smoothEnlarge/20)*0.375+40);
			$("#position_of_mouse").text(curX+","+curY+"--"+smoothEnlarge);
		});

		$('div.dock_container').mouseleave(function(e){
			$('a.dock_item').animate({width: glassWidth},100);	
		});		
	});
	