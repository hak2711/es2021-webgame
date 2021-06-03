const candidate = Array(45)
.fill()
.map((v, i) => i + 1);

const shuffle = [];
while (candidate.length > 0) {
const random = Math.floor(Math.random() * candidate.length);
const spliceArray = candidate.splice(random, 1);
const value = spliceArray[0];
shuffle.push(value);
}
console.log(shuffle);
const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonus = shuffle[6];

const $result = document.querySelector("#result");
const $bonus = document.querySelector("#bonus");
const showBall = (number, $target) => {
const $ball = document.createElement("div");
$ball.className = "ball";
$ball.textContent = number;
$target.appendChild($ball);
};

winBalls.forEach((el, i) => {
setTimeout(() => {
  showBall(el, $result);
}, 1000 * (i + 1));
});

setTimeout(() => {
showBall(bonus, $bonus);
}, 1000 * 7);