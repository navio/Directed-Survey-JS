function redirectUser(answers,options,quetion_prefix,callback) {
	var a = options[0],
		b = options[1],
		c = options[2],
		d = options[3];

	var text = [];


	function vq(selections,questions,validator,response){

		if(response !== null && typeof response === 'object'){

			response = function(response){
							window.location.href = response.link;
						};
		}

		if(validator){
			if(validator.v.indexOf(answers[quetion_prefix+validator.q]) == -1) return response;
		}

		for(var i = 0; questions.length > i ; i=i+1){ 
			if(selections.indexOf(answers[quetion_prefix+questions[1]]) != -1 ){
				return ;
			}
		}

		return false;

	}

  	function verify(a) {
	  	if(a.length < 4) return false;

	  	var result = vq(a[0],a[1],a[2],a[3]);

	  	if(!result) return false;

  		if(typeof(result) === 'function'){
  			result();
  		}else{
  			text.push(result);	
  		} 
  	}

	callback();
}

	/*	
	# Heard in the train,
	Well, God is in His heaven
	And we all want what’s his
	But power and greed and corruptible seed
	Seem to be all that there is 
	*/

