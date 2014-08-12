Directed Survey 
================

This is a Javascript Plugin that receives a serialized array of inputs fields and lets you create rules depending on the answers.

```javascript

	verifier($( "form.wizard" ).serializeArray(),'answer',function(verify,getVals){

		var a = 'answer1',   // Set Possible Answers
			b = 'answer2',
			c = 'answer3',
			d = 'answer4';

		verify([[c,d],[3,6,11,13],null,'Value To Return (String or Function) ']);  // 
		
	});

```
This is how it is populated:


```javascript
	
	verifier(
			@Array = Serialized_Array,
			@String = Answers_Prefix,
			@fn_callback = function(verify,getVals){
	
	
								verify( [
										['c','d'], 							//Answers to Match
										[3,6,11,13],	    						//Answers to Check
										{'q':[1,2],'a':['c','d']},			//If question/s match an Answer, the procced to first bach 
										'If Any Match'                       //Return Value, String of Function
										]
									   );  // 
		
								}
			);


```
For a working example you can check /example.html.


@navio
