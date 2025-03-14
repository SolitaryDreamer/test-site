const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/青雀摸鱼.jpg") {
    myImage.setAttribute("src", "images/摸鱼被盯.jpg");
  } else {
    myImage.setAttribute("src", "images/青雀摸鱼.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `摸鱼快乐，${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `摸鱼快乐， ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};



