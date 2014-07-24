var wizard = wizard || {};

wizard.prototype = {

	wizard: this,

	xmlReader: function() {
		return 1;
	},


	/*
	@description gather questions and trigger render for each questions.
	@param questions, object with questions. JSON
	*/
	
	wizardRenderer: function render( qs ) {
	
		var wizardHTML = document.createElement( "div" ); // create container
		wizardHTML.setAttribute( 'class', 'wizard' );
		
		if ( qs.length ) {
			qs.forEach(function(){
				wizardHTML.appendChild(wizard.q(this.question, this.answers));
			})
	
		} else {
			console.error( "Problems with questions json, no questions attached." );
		}
		
		return wizardHTML;
	},

  /*
	@description: Renders A question and its multiple answers.
	@param question String with the question to ask | Can receive HTML code.
	@param answers Object contains answers to display and value for the answer.
			Answer; contain an aswer can be HTML.
			Value; String contain the value or string to the answer.

	*/
	questionRender: function q( question, answers, qID ) {

		qID = qID ? null : Math.random();

		var htmlQuestion = document.createElement( "div" );
		htmlQuestion.setAttribute( 'id', "question" + qID );
		htmlQuestion.setAttribute( 'class', 'question' );
		
		var htmlText = document.createElement( "header" );
		htmlText.innerHTML = question;
		htmlQuestion.appendChild( htmlText );

		if ( answers.length ) {

			var htmlAnswers = document.createElement( "div" );
			htmlAnswers.setAttribute( 'id', "answers" + qID );
			htmlAnswers.setAttribute( 'class', 'answers' );


			answers.forEach( function( answer, iteration ) {

				var label = document.createElement( "Label" );
				label.for = (qID + "an" + iteration);
				label.innerHTML = answer.html;

				var input = document.createElement( "input" );
				input.setAttribute( "type", "radio" );
				input.id = qID + 'an' + iteration;
				input.value = answer.value;

				htmlAnswers.appendChild( label );
				htmlAnswers.appendChild( input );

			} );

		} else {
			console.error( "malformed question, no answers." );
		}


		htmlQuestion.appendChild( this.htmlAnswers );
		return htmlQuestion;
	}

};
