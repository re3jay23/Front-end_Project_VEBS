
$(document).ready(function(){
	
})

var temp_number =[];
const numerical_position=[1,2,3,5,6,7,9,10,11,12];


function verifyZip(input){
	console.log("input length",input.value.length);
	if(input.value.length < 5 || input.value.length > 5){
		//console.log("here!")
		var err_disp = document.getElementById("err_notification1");
		err_disp.setAttribute("style","display: block; color:red")
	}
	else{
		document.getElementById("err_notification1").style.display="none";
	}

}
function verifyPhone(i){

	var notification = document.getElementById("Telephone_notification");
	//console.log("hello I am here", i.value);
	// var type1 = (/\(\d{3}\)\d{3}-\d{4}/).test(i.value);
	// var type2 = (/\d{10}/).test(i.value);
	//console.log("type1: ", type1);
	//console.log("type2: ", type2);
	var telephoneFormat =(/\(?\d{3}[\)|-](\d{3})-(\d{4})/).test(i.value);

	//console.log("telephoneFormat: ", telephoneFormat);
	//console.log("length input", i.value.length);
	try{
		if(telephoneFormat == false || i.value.length >13) throw "Please type 10 digit phone number in the following format (123)456-7891";
		//else if(type2) throw "Please type as in this format (XXX)XXX-XXXX";
		else notification.style.display ="none";

	}
	catch(err){
		notification.innerHTML = err;
		notification.setAttribute("style","display: block; color:red")
	}

}
function verifyDOB(i,DOB_span){
	var correctDOB = (/^(0?[1-9]|1[012])[\/](0?[1-9]|[12][0-9]|3[01])[\/](19\d{2}|20[012][1-8])/).test(i.value);
	var DB_errorspan= document.getElementById(DOB_span);
	try{
		if(correctDOB == false) throw "incorrect";
		else{
			DB_errorspan.style.display ="none";
		}
	}
	catch(err){
		DB_errorspan.innerHTML = "Input is "+ err;
		DB_errorspan.setAttribute("style","display: block; color:red")
	}
}

function displaySpouseForm(a){
	if(a){
		document.getElementById('SpouseForm_col').style.display = "block";
	}else{
		document.getElementById('SpouseForm_col').style.display = "none";
	}

}

function verifyAge(i,Age_span){
	var ageFormat =(/\d{2}/).test(i.value);
	//console.log("i value", i.value);
	//console.log("ageformat: ", ageFormat)
	var age_errorspan = document.getElementById(Age_span);
	try{
		if(ageFormat == false || i.value.length >2) throw "Please revise and enter your age";
		else age_errorspan.style.display ="none";
	}
	catch(err){
		age_errorspan.innerHTML = err;
		age_errorspan.setAttribute("style","display: block; color:red")

	}
}
