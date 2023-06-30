let audioturn = new Audio("ting.mp3");
let turn = "X";
let isgameover = false;
let fullBoard = false;

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
  wins.forEach((ele) => {
    if (boxtext[ele[0]].innerText === boxtext[ele[1]].innerText && boxtext[ele[2]].innerText === boxtext[ele[1]].innerText && boxtext[ele[0]].innerText !== "") {
      document.querySelector(".info").innerText =boxtext[ele[0]].innerText + " Won";
      isgameover = true;
      document.querySelector('.imgplace').getElementsByTagName('img')[0].style.width = "200px";
    }
  });
};

const boardCheck = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let isEmpty = false;
  Array.from(boxtext).forEach((ele) => {
    if (ele.innerText === "") {
      isEmpty = true;
      return;
    }
  });
  checkWin();
  if (!isEmpty && !isgameover) {
    fullBoard = true;
    document.getElementsByClassName("info")[0].innerText = "The game is draw";
  }
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((ele) => {
  let boxtext = ele.querySelector(".boxtext");
  ele.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioturn.play();
      checkWin();
      boardCheck();
      if (!isgameover && !fullBoard) {
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
      }
    }
  });
});

reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  fullBoard = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector('.imgplace').getElementsByTagName('img')[0].style.width = "0px";
});
