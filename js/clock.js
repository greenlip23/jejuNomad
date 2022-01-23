const storageForm2 = document.querySelector(".localStorageForm2");
const storageInput2 = storageForm2.querySelector("input");
const storageH12 = document.querySelector(".localH12");

const HIDDEN2 = "hidden";
const USER_NAME2 = "userName2";

const storedName = localStorage.getItem(USER_NAME2);

if (storedName === null) {
  storageForm2.classList.remove(HIDDEN2);
  storageForm2.addEventListener("submit", saveName2);
} else {
  welcome2(storedName);
}

function saveName2(event) {
  const storageName2 = storageInput2.value;
  event.preventDefault();
  localStorage.setItem(USER_NAME2, storageName2);
  storageForm2.classList.add(HIDDEN2);
  welcome2(storageName2);
}

function welcome2(storageName2) {
  storageH12.innerText = `Greeting ${storageName2} awesome have you here`;
  storageH12.classList.remove(HIDDEN2);
}

const clock = document.querySelector(".clock");

function clockWise() {
  const dateInput = new Date();
  const hours = String(dateInput.getHours()).padStart(2, "0");
  const minutes = String(dateInput.getMinutes()).padStart(2, "0");
  const seconds = String(dateInput.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

clockWise();
setInterval(clockWise, 1000);

const wiseTerm = [
  {
    term: "오른손만 자꾸 쓰면 사람들 눈치챈다. 사회생활 불가. 양손을 쓰자. ",
    person: "Nomad, the great",
  },
  {
    term: "매너 멘트. 난 바라는건 하나밖에 없어요. ",
    person: "Nomad, the great",
  },
  {
    term: "2022, 섹시가이로 거듭나자. ",
    person: "Nomad, the great",
  },
  {
    term: "아이에게 매를 아끼면, 아이를 망친다 ",
    person: "Nomad, the great",
  },
  {
    term: "서울대 외에는 대학은 없다. ",
    person: "Nomad, the great",
  },
  {
    term: "조금만 치사해지면 인생이 즐거워진다. ",
    person: "Nomad, the great",
  },
  {
    term: "하늘이 그렇게 살아라고 하면 그렇게 살면 된다. ",
    person: "Nomad, the great",
  },
  {
    term: "세상에 옳은 선택이란 없다. ",
    person: "Nomad, the great",
  },
  {
    term: "Stay hungry, Stay foolish ",
    person: "Nomad, the great",
  },
  {
    term: "2022, 전세계가 가즈아 열풍에 빠지는 그 날까지 ",
    person: "Nomad, the great",
  },
];

const term = document.querySelector(".wiseTerm span:first-child");
const nomad = document.querySelector(".wiseTerm span:last-child");

////wiseTerm.length 대신 10을 써줘도 되고. 혹은 놔두면 됨.
const randomTerm = wiseTerm[Math.floor(Math.random() * wiseTerm.length)];

term.innerText = randomTerm.term;
nomad.innerText = randomTerm.person;

const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
const bgImage2 = bgImage.classList.add("bImage");
bgImage.src = `img/${randomImage}`;

document.body.appendChild(bgImage);

const jToDo = document.querySelector(".hToDo");
const jToDoList = document.querySelector("#hToDoList");
const jToDoInput = jToDo.querySelector("input");

let jToDoStore = [];

function fAddList(jToDoOBJ) {
  const addLi = document.createElement("li");
  addLi.id = jToDoOBJ.id;
  const addSpan = document.createElement("span");
  addSpan.innerText = jToDoOBJ.text;
  const addButton = document.createElement("button");
  addButton.innerText = "✔";
  addLi.appendChild(addSpan);
  addLi.appendChild(addButton);
  jToDoList.appendChild(addLi);
  addButton.addEventListener("click", fRemoveList);
}

function fRemoveList(event) {
  const removeList = event.target.parentElement;
  removeList.remove();
  console.log(removeList.id);
  jToDoStore = jToDoStore.filter(
    (newList) => newList.id !== parseInt(removeList.id)
  );
  saveToDo();
}

function saveToDo() {
  localStorage.setItem("ToDo", JSON.stringify(jToDoStore));
}

function fToDo(event) {
  event.preventDefault();
  const jValueToDo = jToDoInput.value;
  jToDoInput.value = "";
  const jToDoOBJ = {
    id: Date.now(),
    text: jValueToDo,
  };
  jToDoStore.push(jToDoOBJ);
  fAddList(jToDoOBJ);
  saveToDo();
}

jToDo.addEventListener("submit", fToDo);

const jToDoListStringfy = localStorage.getItem("ToDo");
const jToDoStoreParse = JSON.parse(jToDoListStringfy);

if (jToDoListStringfy !== null) {
  console.log(jToDoStoreParse);
  jToDoStoreParse.forEach(fAddList);
  jToDoStore = jToDoStoreParse;
}

navigator.geolocation.getCurrentPosition(geoOk, getNo);

const API_KEY = "1e328807b2baf0f4cd47b10cd1219e5b";

function geoOk(location) {
  const lat = location.coords.latitude;
  const long = location.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather1 = document.querySelector(".weather span:first-child");
      const weather2 = document.querySelector(".weather span:last-child");
      const name = data.name;
      const weather = data.weather[0].main;
      weather1.innerText = name;
      weather2.innerText = weather;
    });
}

function getNo() {
  alert("wrong");
}
