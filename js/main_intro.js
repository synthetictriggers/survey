jQuery(document).ready(function($){

	/////////////////FORM VALIDATION////////////////////////////

	$('input[type="radio"]').on('input change', function() {
		//	console.log("clicking a radiobutton");

		var current_type = $(this).attr('name');
		//	console.log("This is the current type of radiobutton: ", current_type);

		var rb_siblings = $('body').find('input[name="' + current_type +'"]');
		//	console.log("These are the siblings of the same type: ", rb_siblings);

		var formsection = $(this).closest('.formsection');

		var closest_form_section = formsection.find('.errorenabler');
		closest_form_section.removeClass('errortext');

		formsection.removeClass('missing');

		var element = document.getElementById("next");
		var submitBlue = $('body').find('.formsection');
		var submitBlueStatus = checkFormBlue(submitBlue);

		if (submitBlueStatus == true) {
			element.classList.add("submitready");
			//console.log("Nu ska knappen bli blå")


		} else {
			element.classList.remove("submitready");
			//console.log("Nu ska knappen inte bli blå");
		}
	});

	function checkFormBlue(formsections) {
		var missing = [];
		var errorMessageContainers = $('body').find('.errormessage').hide();
		for (var i = 0; i < formsections.length; i++) {
			var currentFormSection = formsections.eq(i);

			if (currentFormSection.is(':visible'))	{
				if (currentFormSection.hasClass('missing')) {
					var errorMessageContainer = currentFormSection.next('.errormessage');
					errorMessageContainer.show();
					missing.push(formsections[i]);
				}
			}
		}

		if (!missing.length) {
			return true;
		} else {
			return false;
		}
	}


	$('#next').on('click', function(e) {
		e.preventDefault();
		var formSections = $('body').find('.formsection');
		var formSectionStatus = checkFormSections(formSections);

		if (formSectionStatus == true) {
			// Göra din google-grej! :D

			sendForm();

		} else {
			console.log("Can't send the form due to some field errors");
		}

	});

	function checkFormSections(formsections) {
		var missing = [];
		var headings = $('body').find('.errorenabler').removeClass('errortext');
		for (var i = 0; i < formsections.length; i++) {
			var currentFormSection = formsections.eq(i);

			if (currentFormSection.is(':visible'))	{
				if (currentFormSection.hasClass('missing')) {
					//console.log("thizzz", currentFormSection);
					currentFormSection.find('.errorenabler').addClass('errortext');
					missing.push(formsections[i]);
					//console.log("Missing array:",  missing);
				}
			}
		}

		if (!missing.length) {
			return true;
		} else {
			return false;
		}
	}

	function sendForm() {
		if(document.experience.experience[0].checked == true)
		{
			window.location.href = 'object01_experienced.html';
			console.log("EXPERIENCED")
		}
		else
		if(document.experience.experience[1].checked == true)
		{
			window.location.href = 'object01_inexperienced.html';
			console.log("NOT EXPERIENCED")
		}
		return true;
	}

});
