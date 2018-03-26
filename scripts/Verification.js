


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
	var telephoneFormat =(/\(?\d{3}[\)|-](\d{3})-(\d{4})/).test(i.value);
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

//** to display/ hide Spouse form
function displaySpouseForm(a){
	if(a){
		document.getElementById('SpouseForm_col').style.display = "block";
	}else{
		document.getElementById('SpouseForm_col').style.display = "none";
	}

}

//** to display/ hide Child form
function displayChildForm(a){
	if(a){
		$('#ChildForm_col').css("display","block");
	}else{
		$('#ChildForm_col').css("display","none");
	}

}

//** verifyAge function is to check for 2 digits numerical input.
function verifyAge(i,Age_span){
	var ageFormat =(/\S{2}/).test(i.value);
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

//** initialize State dropdown list
function initializeState(){
	const states=["---","Alabama","Alaska","Arizona","Arkansas",
								"California","Colorado","Connecticut","Delaware","District of Columbia",
								"Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana",
								"Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts",
								"Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada",
								"New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota",
								"Northern Marianas Islands","Ohio","Oklahoma","Oregon","Pennsylvania","Puerto Rico",
								"Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
								"Virginia","Virgin Islands","Washington","West Virginia","Wisconsin","Wyoming"];
	var textholder;
	for(var i = 0; i < states.length; i++){
			textholder += "<option value='"+states[i]+"'>"+states[i]+"</option>"
	}
	$('#State').append(textholder);
}


//** Functions to initialize dropdown lists for D.O.B
function initializeDayMonthYear(){
	var appendDay, appendMonth, appendYear;
	for(var i = 1; i<=31;i++){
		 appendDay +="<option value='"+i+"'>"+i+"</option>";

	}
	var months =["January","February","March","April",
								"May","June","July","August","September",
								"October","November","December"];
	for(var x = 0; x<months.length;x++){
			appendMonth +="<option value='"+months[x]+"'>"+months[x]+"</option>";

	}
	for(var y = 2018; y>=1950;y--){
		appendYear +="<option value='"+y+"'>"+y+"</option>";

	}
	$('#DOBDay_select, #DOBSpouseDay_select').append(appendDay);
	$('#DOBMonth_select, #DOBSpouseMonth_select').append(appendMonth);
	$('#DOBYear_select, #DOBSpouseYear_select').append(appendYear);
}



//** aggregate and append Child ages form dynamically
var childCounter =2;
function appendChildAgeList(){
//console.log("in appendChildAgeList function");

	var textholder ="<tr id='child_tr-"+childCounter+"'><td> Child "+childCounter+"</td><td><input type='number' min='1' max='17' class='Childtd-input'></input> years old</td></tr>"
	childCounter +=1;
	$('#ChildAge_tbl').append(textholder);
}

function removeChildAgeList(){
	try{
		if(childCounter == 2) throw "Cannot remove."
		else{
			var lastID = "#child_tr-"+(childCounter-1);

			$(lastID).remove();
			childCounter -=1;

		}
	}catch(err){
		$('#Childcount_span').fadeIn(3000,function(){
			$('#Childcount_span').text(err);
			$('#Childcount_span').fadeOut(2000);
		});
	}

}

$(document).ready(function(){
	initializeDayMonthYear();
	initializeState();
})
