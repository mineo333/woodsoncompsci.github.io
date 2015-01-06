function makeCitation(){
	authorfirstname = document.getElementById('authorfirstname').value
	authorlastname = document.getElementById('authorlastname').value
	title = document.getElementById('title').value
	city = document.getElementById('city').value
	publisher = document.getElementById('publisher').value
	year = document.getElementById('year').value
	document.getElementById("citation").innerHTML = "<p>" + authorlastname + ", " + authorfirstname + ". <i>" + title + 
													"</i>. " + city + ": " + publisher + ", " + year + ". Print." + "</p>";
}