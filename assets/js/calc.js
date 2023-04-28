//alert("start js");

		window.onload = function(){
			var d = new Date();
			document.getElementById('y').innerHTML=d.getFullYear();
			recordAverage();
		}

		function recordAverage(){
			var srednoStr =''+calculate().toFixed(2);
			document.getElementById("srOc").innerHTML = srednoStr;
		}

		function calculate(){
			p_ocenki= document.getElementsByClassName("ocenka");
			size = p_ocenki.length;
			f_sr = 0.00;
			for(var i = 0; i < size; i++){
				f_sr += parseFloat(p_ocenki[i].innerHTML);
			}
			return f_sr/size;
		}

		function addAndCalc(){
			var subject = document.getElementById("subject").value;
			var note = parseFloat(document.getElementById("note").value);
			if(findSubject(subject)){
				alert("Предметът "+subject+" вече е въведен!");
				return;
			}
			if(isNaN(note)){
				alert("Оценката трябва да е число!");
				return;
			}
			if(note<2||note>6){
				alert("Оценката трябва да е в интервала [2;6]")
				return;
			}
			if(note>2&&note<3)
				note=2.00;
			var strToAddSubj = "<hr>\n<p class='predmet'>"+subject+"</p>";
			document.getElementById("predmeti").innerHTML+= strToAddSubj;
			var strToAddNote ="<hr>\n<p class='ocenka'>"+note.toFixed(2)+"</p>";
			document.getElementById("ocenki").innerHTML+= strToAddNote;
			recordAverage();
		}

		function findSubject(s){
			var subjectArray = document.getElementsByClassName("predmet");
			var size = subjectArray.length;
			for(var i = 0; i<size; i++){
				if(s==subjectArray[i].innerHTML){
					return true;
				}
			}
			return false;
		}
		
//alert("end js");
