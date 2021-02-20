function validateForm() {
    var mail = document.forms["myForm"]["email"].value;
    var name = document.forms["myForm"]["name"].value;
    var org = document.forms["myForm"]["org"].value;
    let validateId=['email','name','org'];
    if (mail == ""||name==""||org=="") {
      document.getElementById("required-error").style.display="block";
      for(let i=0;i<validateId.length;i++)
      validateField(validateId[i]);
      return false;
    }
}
function validateField(id)
{
  var name=document.getElementById(id).getAttribute('name');
  console.log(name);
  var field= document.getElementById(id).value;
  document.getElementById(id+"-required").innerText=
  (field=="")?name+" is required":"*";
  var pattern=document.getElementById(id).getAttribute('pattern');
   if(pattern&&field!="")
  {
    pattern=new RegExp(pattern);        
    document.getElementById('email-required').innerText=
    (pattern.test(myForm.email.value))?"*":"invalid email";
  } 
}
function promoCode(){
  var state=document.getElementById("province").value;
  document.getElementById("promo-code").value=(state!=0)?state+"-PROMO":"";
}
function resetForm() {
  document.getElementById("myForm").reset();
 var impField=document.querySelectorAll(".imp-field");
 for(let i=0;i<impField.length;i++)
 {
   impField[i].innerText="*";
 }
}
function greetingUser(gender){
  alert("Hello "+gender);
}