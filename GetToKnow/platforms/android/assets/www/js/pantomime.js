$(document).bind('pageinit', function() {
	var zaehlerPantomime;
	var openPantomime = false;
	var arrayPantomime = ["Armdr&uuml;cken", 
				  "Auto", 
				  "Bademeister", 
				  "Besenkammer",
				  "Dosen&ouml;ffner",
				  "Eisverk&auml;ufer",
				  "Eisenbahn",
				  "Elefantenhaut",
				  "Freiheitsstatue",
				  "Federkissen",
				  "G&uuml;rteltasche",
				  "Gummiboot",
				  "H&auml;ngematte",
				  "Hippie",
				  "Lichterkette",
				  "Luftmatratze",
				  "M&uuml;nzautomat",
				  "Navi",
				  "Osterhaase",
				  "Pfandflasche",
				  "Plattenspieler",
				  "Qualle",
				  "Querfl&ouml;te",
				  "Raub&uuml;berfall",
				  "Rosengarten",
				  "Schachbrett",
				  "Sandkasten",
				  "Teebeutel",
				  "USB-Kabel",
				  "Vorhang",
				  "Waffeleisen",
				  "Yoga"];

	$("#begriffPantomime").click(function() {
		zaehlerPantomime = Math.floor(Math.random() * arrayPantomime.length);
		$("#begriffPantomime").html(arrayPantomime[zaehlerPantomime]);
		$(this).css("border-color", "#F8FBE9");
			setTimeout(function(){
		$('#begriffPantomime').css('border-color','#E2EFA9');}, 100);
	});
	
	$("#begriffPantomime2").click(function() {
		zaehlerPantomime = Math.floor(Math.random() * arrayPantomime.length);
		$("#begriffPantomime2").html(arrayPantomime[zaehlerPantomime]);
		$(this).css("border-color", "#FFF1E6");
		setTimeout(function(){
			$('#begriffPantomime2').css('border-color','#FFC999');}, 100);
	});
	
	$("#gameNamePantomime").click(function () {
	  	if ($("#divTextPantomime" ).is(":hidden") && !openPantomime) {
	  		openPantomime = true;
	    	$("#divTextPantomime").slideDown("slow");
	    	$(".fragezeichenIcons").attr("src","../img/ausrufezeichen.png");
	  	} 
	  	else if ($("#divTextPantomime" ).is(":visible") && openPantomime){
	  		openPantomime = false;
	    	$("#divTextPantomime").slideUp("slow");
	    	$(".fragezeichenIcons").attr("src","../img/fragezeichen.png");
	  	}
	});
});