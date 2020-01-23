var count = 2;
var new_chq_no = 2;
var langct = 2;
var new_lang_no = 2;

var state = false;
var cerkont=0;
var sectionKont = 0;




$(document).ready(function () {

	
	var  firstName=document.getElementById("name1").innerHTML;
	
	
	
	var el = document.getElementById('cv');
	el.addEventListener('click', handleClick, true);

	
	$(".firstNotRemove").mouseleave(function(){
		sectionKont = 0;
	})

	function handleClick() {
		
		if (state) {
			$("#name").on("focusout", "#inputName", function (ev) {
				
				var cont = $(this).val();
				if(cont ==""){
					$(this).replaceWith('<h1>' + firstName + '</h1>');
				}
				if (cont.length != 0)
					$(this).replaceWith('<h1>' + cont + '</h1>');					
			});
			$("ul").on("focusout", "#forh2", function (eve) {					
					var s = $(eve.target).val();
					/*if(cont ==""){
						$(this).replaceWith('<h1>' + a + '</h1>');
					}		*/
					if (s.length != 0) {															
						if(sectionKont==0){
							
							console.log(sectionKont);
							
							$(this).replaceWith("<h2>" + s + "</h2>");
						}
						else{						
							$(this).replaceWith("<h2>"+s+"<span id='delfield' style='float: right' ><i class='fa fa-trash' style='font-size: 20px' ></i></span></h2>");
						}									
				}
			});
		}
	}

	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function (e) {
				$('#blah').attr('src', e.target.result);
			}

			reader.readAsDataURL(input.files[0]);
		}
	}

	$("#blah").click(function () {
		$("#imgInp").click();
		$("#headshot").on("change", "#imgInp", function () {
			readURL(this);
		});
	});



	$("#pluso").click(function () {
		
		$("#forkey ul").append("<li><div class='input-group mb-3'><div class='input-group-prepend'><span class='input-group-text' id='" + count + "'>" + new_chq_no + "</span></div><input type='text' class='form-control' id='total_chq' ><span onClick='clk(this);' id='trash1'><i class='fa fa-trash' ></i></span></div></li>");

		new_chq_no++;
		count++;
	});

	$("#Addexp").click(function () {
		if(sectionKont=0){
			$("#Addli ul").append("<li><article><h2 class='form-group has-success'>Job Title at Company </h2><p class='subDetails'>April 2011 - Present</p><textarea class='form-control' placeholder='About your Experience| Employer's contact info:' rows='3'></textarea></article></li>");
			
		}
		else{
			$("#Addli ul").append("<li><article><h2 class='form-group has-success'>Job Title at Company <span id='delfield' style='float: right' ><br><i class='fa fa-trash' style='font-size: 20px'  ></i></span></h2><p class='subDetails'>April 2011 - Present</p><textarea class='form-control' placeholder='About your Experience| Employer's contact info:' rows='3'></textarea></article></li>");
		}
		sectionKont++;	

		
	});
	$("#addEd").click(function () {
		sectionKont++;	
		$("#ulEd ul").append("<li><article><h2>Enter your College/University Name <span id='delfield' style='float: right' ><br><i class='fa fa-trash' style='font-size: 20px'  ></i></h2><p class='subDetails'>April 2011 - Present</p><div class='form-group'><select class='form-control' id='exampleFormControlSelect1'><option></option></select></div><div class='form-group'><select class='form-control' id='exampleFormControlSelect2'><option></option></select></div></article></li>");
	});





	$("ul").on("click", "h2", function (e) {
		state = true;
		c = $(e.target).text();
		
		$(e.target).replaceWith("<input id='forh2' placeholder='Fill in this field and hit return' type='text'>");
		
		
	});
	$("ul").on("keypress", "#forh2", function (eve) {
		
		if (eve.which === 13) {
			var s = $(eve.target).val();

			if (s.length != 0) {
				$(this).replaceWith("<h2>" + s + "<span id='delfield' style='float: right' ><i class='fa fa-trash' style='font-size: 20px' ></i></span></h2>");
			}
			else
				$(this).replaceWith("<h2>Fill in this field <span id='delfield' style='float: right' ><i class='fa fa-trash' style='font-size: 20px' ></i></span></h2>");



				
		}
	});

	$("ul").on("click", ".subDetails", function (e) {

		$(e.target).replaceWith("<input class='form-group has-success' id='forsub' placeholder='Enter dates and hit return' type='text'>");
	});

	$("ul").on("keypress", "#forsub", function (eve) {
		if (eve.which === 13) {
			var s = $(eve.target).val();

			if (s.length != 0) {
				$(this).replaceWith("<p class='subDetails'>" + s + "</p>");
			}
			else
				$(this).replaceWith("<p class='subDetails'>April 2011 - Present</p>");

		}

	});

	


	$("ul").on("click", "#delfield", function (ev) {
		$(ev.target).parent().parent().parent().remove();
	});

	$("#addCert").click(function () {
		sectionKont++;	
		$("#ulCert ul").append('<li><article><h2 class="form-group has-success">Certification Title <span id="delfield" style="float: right" ><i class="fa fa-trash" style="font-size: 20px" ></i></span></h2><p class="subDetails">Date Issued</p><input type="text" class="form-control" placeholder="Issuing Authority"><textarea class="form-control" placeholder="About the course" rows="1"></textarea></article></li>');
	});

	$("#addProj").click(function () {
		sectionKont++;
		$("#ulProj ul").append('<li><article><h2 class="form-group has-success">Project Title<span id="delfield" style="float: right" ><i class="fa fa-trash" style="font-size: 20px" ></i></span></h2><p class="subDetails">Duration | Start Date - End Date</p><input type="text" class="form-control" placeholder="Supervising Authority (if any)"><textarea class="form-control" placeholder="About the project/ links" rows="1"></textarea></article></li>');
	});



	$("#plusLang").click(function () {
		$("#ulLang ul").append("<li><div class='input-group mb-3'><div class='input-group-prepend'><span class='input-group-text' id='" + langct + "'>" + new_lang_no + "</span></div><input type='text' class='form-control' id='total_chq' ><span onClick='langclk(this);' id='trash1'><i class='fa fa-trash' ></i></span></div></li>");

		new_lang_no++;
		langct++;
	});

	$("#editic").on("click", function (e) {

		$(this).parent().find("a").replaceWith("<input class='form-group has-success' placeholder='Fill out this field' id='inputContact' type='text'>");
	});

	$("#contactDetails").on("keypress", "#inputContact", function (ev) {
		if (ev.which === 13) {
			var cont = $(this).val();
			if (validateEmail(cont)) {
				if (cont.length != 0)
					$(this).replaceWith("<a href='mailto:" + cont + "'</a>" + cont + " ");
				else
					$(this).replaceWith('Your email Id ');
			}
			else
				alert("Enter a valid email id");
		}
	});

	$("#editic1").on("click", function (e) {
		// c=$(e.target).text();	 	
		$(this).parent().find("a").replaceWith("<input class='form-group has-success' placeholder='Fill out this field' id='inputContact1' type='text'>");
	});

	$("#contactDetails").on("keypress", "#inputContact1", function (ev) {
		if (ev.which === 13) {
			var cont = $(this).val();
			if (cont.length != 0)
				$(this).replaceWith("<a href='http://" + cont + "'</a>" + cont + " ");
			else
				$(this).replaceWith('Website Url ');
		}
	});

	$("#contactDetails").on("click", "#editic2", function (e) {

		$(this).parent().replaceWith("<input class='form-group has-success' placeholder='Fill out this field' id='inputContact2' type='Number'>");
	});

	$("#contactDetails").on("keypress", "#inputContact2", function (ev) {
		if (ev.which === 13) {
			var cont = $(this).val();
			if (cont.length != 0)
				$(this).replaceWith('<li> m: ' + cont + ' <i id="editic2" class="far fa-edit"></i><li>');
			else
				$(this).replaceWith('m: Contact No. <i id="editic2" class="far fa-edit"></i>');
		}
	});

	$("#name").on("click", "h1", function () {
		state = true;
		$(this).replaceWith("<input class='form-group has-success' id='inputName' placeholder='Your name' type='text'>");
	});



	$("#name").on("keypress", "#inputName", function (ev) {
		if (ev.which === 13) {
			var cont = $(this).val();
			if (cont.length != 0)
				$(this).replaceWith('<h1>' + cont + '</h1>');
			else
				$(this).replaceWith('<h1>Your Name<h1>');
		}
	});


});

function clk(event) {

	var t = Number($(event).parent().parent().find("div div span").attr("id")) + 1;

	for (var i = t; i < new_chq_no; i++) {

		$("#" + i).html(i - 1);

		$("#" + i).attr("id", i - 1);

	}
	$(event).parent().parent().remove();
	new_chq_no--;
	count--;
}
function langclk(event) {
	var t = Number($(event).parent().parent().find("div div span").attr("id")) + 1;

	for (var i = t; i < new_lang_no; i++) {

		$("#" + i).html(i - 1);

		$("#" + i).attr("id", i - 1);

	}

	$(event).parent().parent().remove();
	new_lang_no--;
	langct--;
}


function validateEmail($email) {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	return emailReg.test($email);
}

function SortByName(x, y) {
    return ((x.province == y.province) ? 0 : ((x.province >	 y.province) ? 1 : -1));
}
function SortByName2(x, y) {
    return ((x.name == y.name) ? 0 : ((x.name > y.name) ? 1 : -1));
}
    

