const FullName = document.querySelector("#full-name");
const FullNameIcon = document.querySelector(".fa-user");
const FullNameText = document.querySelector(".info__Name");

const email = document.querySelector("#email");
const emailIcon = document.querySelector(".email__icon");
const emailText = document.querySelector(".info__email");

const message = document.querySelector("#contactMessages");
const messageIcon = document.querySelector(".message__icon");
const messageText = document.querySelector(".info__message");


const inputBar = document.querySelectorAll(".underline__focus");
FullName.onfocus = ()=>{
  FullNameIcon.style.color = "#3fc1c9";
  FullNameText.style.transform = "translateY(-20px)";
  FullNameText.style.fontSize = "12px";
  inputBar[0].style.left ="0";
  inputBar[0].style.right= "0";
};
FullName.onblur = ()=>{
  if(FullName.value !==""){
    FullNameText.innerHTML="";
  }else{
    FullNameText.innerHTML = "Full Name";
    FullNameText.style.transform = "";
    FullNameText.style.fontSize = "";
  }
   FullNameIcon.style.color = "";
   inputBar[0].style.left = "50%";
   inputBar[0].style.right = "50%";
 
};

email.onfocus = () => {
  emailIcon.style.color = "#3fc1c9";
  emailText.style.transform = "translateY(-20px)";
  emailText.style.fontSize = "12px";
  inputBar[1].style.left = "0";
  inputBar[1].style.right = "0";
};
email.onblur = () => {
  if (email.value !== "") {
    emailText.innerHTML = "";
  } else {
    emailText.innerHTML = "Email Address";
    emailText.style.transform = "";
    emailText.style.fontSize = "";
  }
  emailIcon.style.color = "";
  inputBar[1].style.left = "50%";
  inputBar[1].style.right = "50%";
};

message.onfocus = () => {
  messageIcon.style.color = "#3fc1c9";
  messageText.style.transform = "translateY(-23px)";
  messageText.style.fontSize = "12px";
  inputBar[2].style.left = "0";
  inputBar[2].style.right = "0";
};

message.onblur = () => {

   if (message.value !== "") {
     messageText.innerHTML = "";
   } else {
     messageText.innerHTML = "Messages";
     messageText.style.transform = "";
     messageText.style.fontSize = "";
   }
  messageIcon.style.color = "";
  inputBar[2].style.left = "";
  inputBar[2].style.right = "";
};