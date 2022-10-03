const countDown = document.getElementsByClassName("countDown")[0];

const startingMinutes = 10;

// let's calculate the total seconds(time)
let time = startingMinutes * 60;

let updateTime = () => {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countDown.innerHTML = `
      ${minutes}:${seconds}
    `;
  time--;
};
setInterval(updateTime, 1000);
