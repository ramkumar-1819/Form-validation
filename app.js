function myfun(){
    var usname=document.forms["formss"]["username"]  //getting User I/P button in the form
    var adrs=document.forms["formss"]["address"]     //getting Address I/P button in the form
    var eml=document.forms["formss"]["maill"]        //getting Mail I/P button in the form
    var passwd=document.forms["formss"]["password"]  //getting Password I/P button in the form
    var phoneno=document.forms["formss"]["phno"];    //getting PhoneNumber I/P button in the form
    
    var usn_txt=document.getElementById("name");     //getting the Username label for display when u enter wrong input
    var add_txt=document.getElementById("addrs");    //getting the Address label for display when u enter wrong input
    var mail_txt=document.getElementById("mails");   //getting the Mail label for display when u enter wrong input
    var passwd_text=document.getElementById("pass"); //getting the Password label for display when u enter wrong input
    var phn_txt=document.getElementById("phone");    //getting the Phone_number label for display when u enter wrong input
    
  if(usname.value.length<4){//username shouldn't less than 4
    usn_txt.innerHTML="!!! You need to enter atleast 4 Characters in the UserName !!!"
    usn_txt.style.color="White"
    usname.focus();
    return false;
  }
  usn_txt.innerHTML="";
   if(adrs.value==""){//Address shouldn't null
     add_txt.innerHTML="!!! Address field can't Empty !!!";
     add_txt.style.color="white"
     adrs.focus();
     return false;
   }
   add_txt.innerHTML=""
   pattern_eml=(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.+[a-zA-Z0-9-]+$/);
   if(eml.value==""){//Email shouldn't be null
       mail_txt.innerHTML="!!! Email can't be Empty !!!";
       mail_txt.style.color="white";
       eml.focus();
       return false;
   }
   else if(!pattern_eml.test(eml.value)){//Email should be in given form
    mail_txt.innerHTML="!!! Email should be in form of \"____@___.___\"";
    mail_txt.style.color="white"
    eml.focus();
    return false
   }
    mail_txt.innerHTML="";
    pattern_pass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(passwd.value==""){//Password shouldn't be None
      passwd_text.innerHTML="Password Shouldn't be None"
      passwd_text.style.color="white"
      passwd.focus()
      return false;
    }
    else if(!passwd.value.match(pattern_pass)){//Password should be in given form
        passwd_text.innerHTML="!!! Password Should be combo of [A-Z  a-z  0-9   one splc_character]\n && length is of more than 7 !!!"
        passwd_text.style.color="white"
        passwd.focus()
        return false
        }
    passwd_text.innerHTML="";
    pattern_phone=/^\d{10}$/
    if(phoneno.value==""){//Digit can't be Empty
      phn_txt.innerHTML="!!! Phone Number Can't be Empty !!!"
      phn_txt.style.color="white"
      phoneno.focus()
      return false
    }
    else if(!pattern_phone.test(phoneno.value)){//Digit should accept the pattern
      phn_txt.innerHTML="!!! Invalid Phone Number !!!"
      phn_txt.style.color="white"
      phoneno.focus()
      return false
    }
   return true;//form should be submitted to server when all inputs are correct
}