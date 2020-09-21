//Initalize Firebase 
var firebaseConfig = {
    apiKey: "AIzaSyDTrayPXJPswj_iBGtq8ffH64DpCKH2NeQ",
    authDomain: "quizapp-2dcbc.firebaseapp.com",
    databaseURL: "https://quizapp-2dcbc.firebaseio.com",
    projectId: "quizapp-2dcbc",
    storageBucket: "quizapp-2dcbc.appspot.com",
    messagingSenderId: "465382131687",
    appId: "1:465382131687:web:112abf503bfe9773d91f42",
    measurementId: "G-8PS3X75PPS"
  };
  // Initialize Firebase calls
  firebase.initializeApp(firebaseConfig);
  

//Reference messages collections

var messageref = firebase.database().ref('Entry');
console.log(messageref);
//Listen for form submit

document.getElementById('Login_form').addEventListener('submit', Login_form);


//Submit form
function Login_form(e){

    e.preventDefault();

    var username = getInputValues('uname');
    var password = getInputValues('psw');
    var student_check = Boolean(getInputValues('student'));
    var faculty_check = Boolean(getInputValues('faculty'));

    //To save meassage
    saveMessage(username, password, student_check, faculty_check);
    console.log(username)

}
  // Show alert
  //document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
 // setTimeout(function(){
   // document.querySelector('.alert').style.display = 'none';
  //},3000);

   //fucntion Login_form;
  document.getElementById('Login_form').reset();
   

     //if (faculty_check == true){
         //   var key = prompt("Please enter your key Sir!","");}
  //     else{
                
         //       continue;
     //  }
        
          -->   
        
  


//Function to get form values from
function getInputValues(id) {
    return document.getElementById(id).value;
}

//Save message to firebase

function saveMessage(username, password,student_check,faculty_check){
    var newMessage = messageref.push();
    newMessage.set({
        userName: username,
        password: password,
        student_check: student_check,
        faculty_check: faculty_check
    });
}