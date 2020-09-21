// var config = {
//     apiKey: "AIzaSyAi04HoGT46-1s0S18Yf21f05Kbn-mWYNs",
//     authDomain: "quiz-f19f6.firebaseapp.com",
//     databaseURL: "https://quiz-f19f6.firebaseio.com",
//     projectId: "quiz-f19f6",
//     storageBucket: "quiz-f19f6.appspot.com",
//     messagingSenderId: "397514763088",
//     appId: "1:397514763088:web:c476ef5231cfa6da005a55",
//     measurementId: "G-LLQ692MHGZ"
//  };
//   // Initialize Firebase
//  firebase.initializeApp(config);
//
//
//  var con = firebase.database().ref('user');
//
//  document.getElementById("form").addEventListener("submit",(e)=>{
//     e.preventDefault();
//     var questionInfo = con.push();
//     questionInfo.set({
//         question: getId("question"),
//         option1: getId("option1"),
//         option2: getId("option2"),
//         option3: getId("option3"),
// 		ans: getId("answer")
//     });
//     alert("sent");
//     console.log("sent");
//     document.getElementById("form").reset();
//   });
//  function getId(id){
//      return document.getElementById(id).value;
//   }

// function next(){
//         var  ques = document.getElementById("question").value;
//         var  opt1= document.getElementById("option1").value;
//         var opt2 = document.getElementById("option2").value;
//         var opt3 = document.getElementById("option3").value;
//          var ans = document.getElementById("answer").value;
//         document.write(ques+opt1+opt2+opt3+ans);
// }
var questionArray =[];
function addQuestion(){
 	addQuestiontoArray();
	console.log(questionArray);
	$('#form').trigger("reset");
 }
function displaydata(){
 	addQuestiontoArray();
 	$('#form').hide();
 	document.body.innerHTML = questionArray;
 }
function addQuestiontoArray()
{
	var questionObject = {};
    var $inputs = $('#form :input');
    $inputs.each(function() {
		 if(this.name != "")
		 	{
		  		questionObject[this.name] = $(this).val();
		 	}
         });
		 questionArray.push(JSON.stringify(questionObject))
}






