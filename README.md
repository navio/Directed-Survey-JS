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
			@function = function(verify,getVals){
	
	
								verify( [
			/*Answers to Match*/			['c','d'], 							
			/*Answers to Check*/			[3,6,11,13],	    						
			/*function to verify*/		fn_other_verifier,	//If true then do the batch.		 
			/*Return Bool,String,Fn*/   true                   
										]
									   );  // 
		
								}
			);


```
For a working implementation, you can check /example.html.


@navio
