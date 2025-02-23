const gameBtn = document.querySelectorAll(".gameBtn");
const bodyDiv = document.getElementById("bodyDiv");
const refreshBtn = document.getElementById("refreshBtn");
// const hisBtn = document.getElementById("historyBtn");

let player = 1;
let arr = [];

const resetArr = () => {
  for (let i = 0; i < 9; i++) {
    // arr[i] = Math.random();
    arr[i] = i + 10;
  }
};
resetArr();

function winnerCheck(arr) {
  if (arr[0] === arr[1] && arr[1] === arr[2] && arr[2] === arr[0]) {
    if (arr[0] === 1) {
      bodyDiv.innerHTML = `<h1>Player X Win</h1`;
    } else {
      bodyDiv.innerHTML = `<h1>Player O Win</h1>`;
      console.log("done");
    }
  } else if (arr[0] === arr[3] && arr[3] === arr[6] && arr[6] === arr[0]) {
    if (arr[0] === 1) {
      bodyDiv.innerHTML = `<h1>Player X Win</h1>`;
    } else {
      bodyDiv.innerHTML = `<h1>Player O Win</h1>`;
    }
  } else if (arr[0] === arr[4] && arr[4] === arr[8] && arr[8] === arr[0]) {
    if (arr[0] === 1) {
      bodyDiv.innerHTML = `<h1>Player X Win</h1>`;
    } else {
      bodyDiv.innerHTML = `<h1>Player O Win</h1>`;
    }
  } else if (arr[8] === arr[7] && arr[7] === arr[6] && arr[6] === arr[8]) {
    if (arr[8] === 1) {
      bodyDiv.innerHTML = `<h1>Player X Win</h1>`;
    } else {
      bodyDiv.innerHTML = `<h1>Player O Win</h1>`;
    }
  } else if (arr[8] === arr[5] && arr[5] === arr[2] && arr[2] === arr[8]) {
    if (arr[8] === 1) {
      bodyDiv.innerHTML = `<h1>Player X Win</h1>`;
    } else {
      bodyDiv.innerHTML = `<h1>Player O Win</h1>`;
    }
  } else if (arr[6] === arr[4] && arr[4] === arr[2] && arr[2] === arr[6]) {
    if (arr[6] === 1) {
      bodyDiv.innerHTML = `<h1>Player X Win</h1>`;
    } else {
      bodyDiv.innerHTML = `<h1>Player O Win</h1>`;
    }
  } else if (arr[1] === arr[4] && arr[4] === arr[7] && arr[7] === arr[1]) {
    if (arr[1] === 1) {
      bodyDiv.innerHTML = `<h1>Player X Win</h1>`;
    } else {
      bodyDiv.innerHTML = `<h1>Player O Win</h1>`;
    }
  } else if (arr[3] === arr[4] && arr[4] === arr[5] && arr[5] === arr[3]) {
    if (arr[3] === 1) {
      bodyDiv.innerHTML = `<h1>Player X Win</h1>`;
    } else {
      bodyDiv.innerHTML = `<h1>Player O Win</h1>`;
    }
  } else {
    console.log("nothing");
    console.log(bodyDiv);
    return 0;
  }
}

// gameBtn[0].addEventListener("click", (e) => {
//   if (player === 1) {
//     e.target.innerHTML = `<h1>x</h1>`;
//     player = 0;
//     arr[0] = 1;
//   } else {
//     e.target.innerHTML = `<h1>O</h1>`;
//     player = 1;
//     arr[0] = 0;
//   }
//   e.target.classList.add("clicked");
//   winnerCheck(arr);
// });
// gameBtn[1].addEventListener("click", (e) => {
//   if (player === 1) {
//     e.target.innerHTML = `<h1>x</h1>`;
//     player = 0;
//     arr[1] = 1;
//     console.log(arr);
//   } else {
//     e.target.innerHTML = `<h1>O</h1>`;
//     player = 1;
//     arr[1] = 0;
//   }
//   e.target.classList.add("clicked");
//   winnerCheck(arr);
// });
// gameBtn[2].addEventListener("click", (e) => {
//   if (player === 1) {
//     e.target.innerHTML = `<h1>x</h1>`;
//     player = 0;
//     arr[2] = 1;
//   } else {
//     e.target.innerHTML = `<h1>O</h1>`;
//     player = 1;
//     arr[2] = 0;
//   }
//   e.target.classList.add("clicked");
//   winnerCheck(arr);
// });
// gameBtn[3].addEventListener("click", (e) => {
//   if (player === 1) {
//     e.target.innerHTML = `<h1>x</h1>`;
//     player = 0;
//     arr[3] = 1;
//   } else {
//     e.target.innerHTML = `<h1>O</h1>`;
//     player = 1;
//     arr[3] = 0;
//   }
//   e.target.classList.add("clicked");
//   winnerCheck(arr);
// });
// gameBtn[4].addEventListener("click", (e) => {
//   if (player === 1) {
//     e.target.innerHTML = `<h1>x</h1>`;
//     player = 0;
//     arr[4] = 1;
//   } else {
//     e.target.innerHTML = `<h1>O</h1>`;
//     player = 1;
//     arr[4] = 0;
//   }
//   e.target.classList.add("clicked");
//   winnerCheck(arr);
// });
// gameBtn[5].addEventListener("click", (e) => {
//   if (player === 1) {
//     e.target.innerHTML = `<h1>x</h1>`;
//     player = 0;
//     arr[5] = 1;
//   } else {
//     e.target.innerHTML = `<h1>O</h1>`;
//     player = 1;
//     arr[5] = 0;
//   }
//   e.target.classList.add("clicked");
//   winnerCheck(arr);
// });
// gameBtn[6].addEventListener("click", (e) => {
//   if (player === 1) {
//     e.target.innerHTML = `<h1>x</h1>`;
//     player = 0;
//     arr[6] = 1;
//   } else {
//     e.target.innerHTML = `<h1>O</h1>`;
//     player = 1;
//     arr[6] = 0;
//   }
//   e.target.classList.add("clicked");
//   winnerCheck(arr);
// });
// gameBtn[7].addEventListener("click", (e) => {
//   if (player === 1) {
//     e.target.innerHTML = `<h1>x</h1>`;
//     player = 0;
//     arr[7] = 1;
//   } else {
//     e.target.innerHTML = `<h1>O</h1>`;
//     player = 1;
//     arr[7] = 0;
//   }
//   e.target.classList.add("clicked");
//   winnerCheck(arr);
// });
// gameBtn[8].addEventListener("click", (e) => {
//   if (player === 1) {
//     e.target.innerHTML = `<h1>x</h1>`;
//     player = 0;
//     arr[8] = 1;
//   } else {
//     e.target.innerHTML = `<h1>O</h1>`;
//     player = 1;
//     arr[8] = 0;
//   }
//   e.target.classList.add("clicked");
//   winnerCheck(arr);
// });

for (let i = 0; i < gameBtn.length; i++) {
  gameBtn[i].addEventListener("click", () => {
    if (player === 1) {
      gameBtn[i].innerHTML = `<h1>x</h1>`;
      player = 0;
      arr[i] = 1;
    } else {
      gameBtn[i].innerHTML = `<h1>O</h1>`;
      player = 1;
      arr[i] = 0;
    }
    gameBtn[i].classList.add("clicked");
    winnerCheck(arr);
  });
}

refreshBtn.addEventListener("click", () => {
  for (let index = 0; index < 9; index++) {
    gameBtn[index].innerHTML = "";
    gameBtn[index].classList.remove("clicked");
  }
  resetArr();
  player = 1;
});