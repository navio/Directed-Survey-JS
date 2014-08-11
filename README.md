Directed Survey 
================

This is a Javascript Plugin that receives a Serialized array of inputs fields and lets you create rules for a wizard or form depending on the answers.

```javascript

function submitWizard() {
	$('#message').hide();
	if(!validate('.screen:visible')) return showMessage();
	$('.screen:visible').hide();
	$("#results").show();

	var values = []; 

	verifier($( "form.wizard" ).serializeArray(),'answer',function(verify,getVals){

		var a = 'answer1',
			b = 'answer2',
			c = 'answer3',
			d = 'answer4';

		verify([[c,d],[3,6,11,13],null,'Sensitive Skin']);	
		verify([[b,c,d],[2,5,8,10],{'q':[1],'v':a},{'link':'http://www.yahoo.com/'}]);


	});

}



```  


JavaScript Plugin, that recevwizard that direct users to more questions or specific url, depending on their answers.

XML specifying questions, answers, values and urls is required.
