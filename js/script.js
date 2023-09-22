document.addEventListener("DOMContentLoaded", function() {
	var elem= document.getElementsByClassName("ticker_title");
	var elemhtml = elem[1].innerHTML
	console.log(elem);
	var repeatedtext = elemhtml.repeat(30);
	var cleanrepeatedtext = repeatedtext.replaceAll("&amp;", "&");
	elem[1].append(cleanrepeatedtext);
	var elemhtml1 = elem[0].innerHTML
	var repeatedtext1 = elemhtml1.repeat(30);
	let new_element = document.createRange()
		.createContextualFragment(repeatedtext1);

	// elem[0].append(repeatedtext1);
	elem[0].append(new_element);

	// var elem2= document.getElementsByClassName("ticker_item2");
	//
	// var elemhtml2 = elem2[0].innerHTML
	// var repeatedtext2 = elemhtml2.repeat(50);
	// elem2[0].append(repeatedtext2);
});
