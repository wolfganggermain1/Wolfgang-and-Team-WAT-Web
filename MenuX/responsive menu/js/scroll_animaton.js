 	
(function() {
	var aboutEl = $('div.about'),
            aboutElOffset = aboutEl.offset().top/2,
            documentEl = $(document);


	var aboutEl2 = $('div.about2'),
            aboutElOffset2 = aboutEl.offset().top/2,
            documentEl2 = $(document);
	var i, ind = 0, max = 50;
		var hArray = [
    	'Looking for a place to stay?',
	'Why would I want to stay there?',
	'Whats available there?',
	'Why Should i should here?',
];

var pArray = [
 	'Belle vacance is the the place you should.',
	'Being in a tranquile haven area, all the needed amenties are in walking distance from our location',
	'From free parking space to all day access to our swimming to Free Wi-Fi. We feel confident that we can provide meet you expectation.',
	'The better question is why not choose us, we make the commitement of ensuring that you will not be disappointed',
];

	    documentEl.on('scroll', function(){
			if( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden')) 
				aboutEl.removeClass('hidden');
			
				setTimeout(function(){
				$('#stage > h2').empty();
				$('#stage > h2').append(hArray[0]);
				$('#stage > p').empty();
				$('#stage > p').append(pArray[0]);
				}, 5000);
				
				setTimeout(function(){
				$('#stage > h2').empty();
				$('#stage > h2').append(hArray[1]);
				$('#stage > p').empty();
				$('#stage > p').append(pArray[1]);
				}, 5000);
				
				/*setTimeout(function(){
				$('#stage > h2').empty();
				$('#stage > h2').append(hArray[2]);
				$('#stage > p').empty();
				$('#stage > p').append(pArray[2]);
				
				}, 3000);

				//ind += 1;
				setTimeout(function(){
				$('#stage > h2').empty();
				$('#stage > h2').append(hArray[3]);
				$('#stage > p').empty();
				$('#stage > p').append(pArray[3]);
				
				}, 3000);*/
			
			
				//if(ind >= 3)ind=0;
			
			
		});




	})();




