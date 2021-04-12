// 이벤트 리스너 함수타입 사용방법 3 : 선언적 함수

//함수생성
function getElementNum() {
  document.getElementById("box_1").innerHTML = "test";
}

//.addEventListener 인자로 전달
document.getElementById("btn_1").addEventListener("click", getElementNum);

// 이벤트 리스너 함수타입 사용방법 2 : 익명함수
document.getElementById("btn_2").addEventListener("click", function () {
  document.getElementById("box_2").innerHTML = "hello";
});

function clickBtn(btn, elem, text) {
  let btnSelect = document.getElementById(btn);
  let elemSelect = document.getElementById(elem);
  btnSelect.addEventListener("click", function () {
    elemSelect.innerHTML = text;
  });
}

clickBtn("btn_1", "box_1", "제가요?");
clickBtn("btn_2", "box_2", "여기서요?");
clickBtn("btn_3", "box_3", "지금요?");

function dblBtn(btn, elem, text) {
  let btnSelect = document.getElementById(btn);
  let elemSelect = document.getElementById(elem);
  btnSelect.addEventListener("dblclick", function () {
    elemSelect.innerHTML = text;
  });
}

dblBtn("btn_1", "box_1", "null");
dblBtn("btn_2", "box_2", "null");
dblBtn("btn_3", "box_3", "null");
