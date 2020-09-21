from firebase import firebase
import pyrebase
firebase = firebase.FirebaseApplication("https://quizapp-2dcbc.firebaseio.com/")



config = {
    "apiKey": "AIzaSyDTrayPXJPswj_iBGtq8ffH64DpCKH2NeQ",
    "authDomain": "quizapp-2dcbc.firebaseapp.com",
    "databaseURL": "https://quizapp-2dcbc.firebaseio.com",
    "projectId": "quizapp-2dcbc",
    "storageBucket": "quizapp-2dcbc.appspot.com",
    "messagingSenderId": "465382131687",
    appId: "1:465382131687:web:112abf503bfe9773d91f42"
}
firebase = pyrebase.initialize_app(config)
auth=firebase.auth()
email=input('Please enter your email\n')
password=input('Please enter your password\n')

user = auth.create_user(email, password)
print("Success.....")
auth.get_account_info(user['idToken'])