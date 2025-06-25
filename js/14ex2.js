// 드래그로 위치 이동 기능
const calculator = document.getElementById("calculator");
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

calculator.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - calculator.offsetLeft;
  offsetY = e.clientY - calculator.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    calculator.style.left = `${e.clientX - offsetX}px`;
    calculator.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

console.log('나눈 결과 소수점:', result.toFixed(2))

switch (op) {
  case '+': result = num1 + num2; break;
  case '-': result = num1 - num2; break;
  case '*': result = num1 * num2; break;
  case '/': 
    result = num2 !== 0 ? num1 / num2 : 'Cannot be divided by 0!';
    break;
  default:
    result = 'Wrong calculation.';
}

// 숫자인 경우만 소수점 둘째 자리에서 올림
if (typeof result === "number") {
  result = Math.ceil(result * 100) / 100;
}

document.getElementById('result').textContent = `Result: ${result}`;