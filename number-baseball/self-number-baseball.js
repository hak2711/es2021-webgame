const $input = document.querySelector("#input");
const $form = document.querySelector("#form");
const $logs = document.querySelector("#logs");
let out = 0;

const numbers = Array(9).fill(0).map((element,i) => {
  return i+1;
});

const answer = [];
for (let n = 0; n < 4; n += 1) {
  const index = Math.floor(Math.random() * numbers.length);
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}
console.log(answer);

const tries = [];
function checkInput(input) {
  if (input.length !== 4) {
    return alert("4자리 숫자를 입력해주세요.");
  }
  if (new Set(input).size !== 4) {
    return alert("숫자가 중복되지 않게 입력해주세요.");
  }
  if (tries.includes(input)) {
    return alert("이미 시도한 값입니다.");
  }
  return true;
}

function defeated() {
  $logs.append(`패배! 정답은 ${answer.join("")}`);
}

//form 안의 버튼 click되면 submit 이벤트 발생
$form.addEventListener("submit", (event) => {
  // 기본 동작(새로고침) 막기
  event.preventDefault();
  const value = $input.value;
  $input.value = "";
  if (!checkInput(value)) {
    return;
  }
  //입력값 문제 없음
  if (answer.join("") === value) {
    $logs.textContent = "홈런!";
    return;
  }
  if (tries.length >= 9) {
    defeated();
    return;
  }
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index > -1) {
      if (index === i) {
        strike += 1;
      } else {
        ball += 1;
      }
    }
  }
  if (!ball && !strike) {
    out += 1;
    $logs.append(`${value}: ${out} 아웃`, document.createElement("br"));
  } else {
    $logs.append(
      `${value}: ${strike} 스트라이크 ${ball} 볼`,
      document.createElement("br")
    );
  }
  if (out === 3) {
    defeated();
  }
  tries.push(value);
});