const FullName = document.querySelector("#full-name");
const FullNameIcon = document.querySelector(".fa-user");
const FullNameText = document.querySelector(".info__Name");

const email = document.querySelector("#email");
const emailIcon = document.querySelector(".email__icon");
const emailText = document.querySelector(".info__email");

const inputBar = document.querySelectorAll(".input__bar");
FullName.onfocus = ()=>{
  FullNameIcon.style.color = "#3fc1c9";
  FullNameText.style.transform = "translateY(-20px)";
  FullNameText.style.fontSize = "12px";
};
FullName.onblur = ()=>{
  FullNameIcon.style.color = "";
  FullNameText.style.transform = "";
  FullNameText.style.fontSize = "";
};

email.onfocus = () => {
  emailIcon.style.color = "#3fc1c9";
  emailText.style.transform = "translateY(-20px)";
  emailText.style.fontSize = "12px";
};
email.onblur = () => {
  emailIcon.style.color = "";
  emailText.style.transform = "";
  emailText.style.fontSize = "";
};

