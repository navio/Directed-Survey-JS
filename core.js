function verifier(answers,quetion_prefix,fn) {

	var text = [];
	var cleanAnswers = cleanArray(answers); 

	function vq(selections,questions,validator,response){

		var answers = getAnswers();

		if(response !== null && typeof response === 'object'){
			var redirect = function(link){ window.location.href = link};
			response =  [response.link, redirect];
		}

		if(!validator) return false;  // Validator function (true or false)

		for(var i = 0; questions.length > i ; i=i+1){ 

			if(selections.indexOf(answers[quetion_prefix+questions[i]]) != -1 ){
				return response;
			}
		}

		return false;

	}

  	 var vf = 
  	 function verify(a) {

		  	if(a.length < 4) return false;

		  	var result = vq(a[0],a[1],a[2],a[3]);     

		  	if(!result) return false;

	  		if(typeof(result[1]) === 'function'){
	  			result[1](result[0]);
	  		  }else{
	  			text.push(result);
	  			return result;	
	  		} 
  	};
	
	function cleanArray(dataArray){
	  var dataObj = {};
	
		dataArray.forEach(function(field){
					dataObj[field.name] = field.value;
				  });
	  return dataObj;
	}
	
	function getAnswers(){ return cleanAnswers; } 
  	
  	function getValues() { return text; }
	
	fn(vf);

}
	/*	
	#Heard in the train.
	Well, God is in His heaven
	And we all want what’s his
	But power and greed and corruptible seed
	Seem to be all that there is. 
	*/

