
	var an =
	[
	  {
		name: "answer1",
		value: "answer1"
	  },
	  {
		name: "answer2",
		value: "answer2"
	  },
	  {
		name: "answer3",
		value: "answer1"
	  },
	  {
		name: "answer4",
		value: "answer1"
	  },
	  {
		name: "answer5",
		value: "answer2"
	  }
	];

redirectUser(an,'answer',function(verify,retriver){

  var a = 'answer1',
	  b = 'answer2',
	  c = 'answer3',
	  d = 'answer4';

  //console.log( verify([[a,c],[4,5],null,'Sensitive Skin']));
  console.log( verify([[b],[2,5],{'q':[1],'v':a},'SmellySkin']));

});


function redirectUser(answers,quetion_prefix,fn) {

	function cleanArray(dataArray){
	  dataObj = {};

		dataArray.forEach(function(field){
					dataObj[field.name] = field.value;
				  });
	  return dataObj;
	}

	var text = [];
	var cleanAnswers = cleanArray(answers);

	function getAnswers(){ return cleanAnswers; }  

	function vq(selections,questions,validator,response){

		var answers = getAnswers();

		if(response !== null && typeof response === 'object'){
			response = function(response){
							window.location.href = response.link;
						};
		}

		if(validator){
			if(validator.v.indexOf(answers[quetion_prefix+validator.q]) == -1) 
			  return false;
		}

		for(var i = 0; questions.length > i ; i=i+1){ 

			if(selections.indexOf(answers[quetion_prefix+questions[i]]) != -1 ){
				return response;
			}
		}

		return false;

	}

  	var vf = function verify(a) {

		  	if(a.length < 4) return false;

		  	var result = vq(a[0],a[1],a[2],a[3]);     

		  	if(!result) return false;

	  		if(typeof(result) === 'function'){
	  			result();
	  		  }else{
	  			text.push(result);
	  			return result;	
	  		} 
  	};

  	function getValues(){
	  	return text;
  	}

	fn(vf);

}

