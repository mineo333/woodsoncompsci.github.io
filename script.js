function makeCitation(){
	authorfirstname = document.getElementById('authorfirstname').value
	authorlastname = document.getElementById('authorlastname').value
	title = document.getElementById('title').value
	city = document.getElementById('city').value
	publisher = document.getElementById('publisher').value
	year = document.getElementById('year').value

    var cit = "<p>";

    if(authorlastname){
        cit += authorlastname;
    }

    if (authorfirstname) {
        cit = cit + ", " + authorfirstname;
    }

    if (title) {
        cit = cit + ". <i>" + title + "</i>. ";
    }

    if(city) {
        cit = cit + city;
    }

    if(publisher){
        cit = cit + ": " + publisher;
    }

    if(year){
        cit = cit + ", " + year;
    }

    cit += ".</p>";

    document.getElementById("citation").innerHTML = cit;
	//document.getElementById("citation").innerHTML = "<p>" + authorlastname + ", " + authorfirstname + ". <i>" + title +
	//												"</i>. " + city + ": " + publisher + ", " + year + ". Print." + "</p>";
}

function copy(){
    text = "hi"
    text.execCommand("Copy");
}
