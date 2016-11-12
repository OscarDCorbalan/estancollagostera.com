var hasContent = false;

function loadScreen(screen){
	cleanArticle();
	console.log( "loading "+screen );
	$('#wideImg').animate({opacity:0.5},1000);
	$.getJSON('/pag-'+screen+'.json', {})
		.done(function(data){
			hasContent = true;
			console.log(data);
			$('#titleImg').animate({opacity:0},500);
			$('#titleText').animate({opacity:0
				}, 500,function(){
					$('#titleText').empty().append(data.header);
					$('#container').append(data.content);				
					$('#titleImg').animate({opacity:1},500);
					$('#titleText').animate({opacity:1},500);
					$('article').animate({opacity:1},500);		
			});
			
		});	
};

function cleanArticle(){
	console.log( "cleanArticle");
	if(!hasContent) return;	
	console.log( "...cleaning");
	$('article').animate({opacity:0}, 300,function(){$('article').remove();});
	hasContent = false;	
}

function loadHome(){
	cleanArticle();
	$('#wideImg').animate({opacity:1},700);
}

$(document).ready(function() {
    $('<img/>')[0].src = '/images/mapas.jpg';
})