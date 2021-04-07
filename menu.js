// JavaScript Document
$(document).ready(function(){

	$("ul.subnav").parent().append("<span></span>");	
	$("ul.subnav-left").parent().append("<span></span>");	
	$("ul.menu li span").click(function() {		
			$(this).parent().find("ul.subnav").slideDown('fast').show();
		$(this).parent().hover(function() {
		}, function(){	
			$(this).parent().find("ul.subnav").slideUp('slow');		});

			}).hover(function() { 
			$(this).addClass("subhover");		}, function(){			$(this).removeClass("subhover");	});
	
	$("ul.menu-left li span").click(function() {		
			$(this).parent().find("ul.subnav-left").slideDown('fast').show();
		$(this).parent().hover(function() {
		}, function(){	
			$(this).parent().find("ul.subnav-left").slideUp('slow');		});

			}).hover(function() { 
			$(this).addClass("subhover");		}, function(){			$(this).removeClass("subhover");	});

});