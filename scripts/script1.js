

function addoption(){
	var xhrRequest = new XMLHttpRequest();
	xhrRequest.onload = function(){
		var responseJSON = JSON.parse(xhrRequest.response);
		var keys = Object.keys(responseJSON.message);
		console.log(keys);
		for(var k=0 ; k < keys.length ; k++){
			var text = keys[k];
			var val = keys[k];
			$('#dogchoice').append(new Option(text,val));
		}
		getphoto();
	};

	xhrRequest.open('get','https://dog.ceo/api/breeds/list/all',true);
	xhrRequest.send();

}

function whichOneisSelected(){
	var selected = $('#dogchoice').val();
	var imgURL = 'https://dog.ceo/api/breed/'+selected+'/images/random';
	return imgURL;
}


function getphoto(){
	var xhrRequest2 = new XMLHttpRequest();

	xhrRequest2.onload = function(){
		var responseJSON = JSON.parse(xhrRequest2.response);
		var image = responseJSON.message;
		$('#dogphoto').attr('src',image);

	};

	xhrRequest2.open('get',whichOneisSelected());
	xhrRequest2.send();
}

