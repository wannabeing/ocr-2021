const MAIN_SELECT_WHAT = ".main__select__what";
const HIDDEN_CLASS = "hidden";
const SELECT_TEXT= ".text";
const btn = document.querySelector(".btn"); //버튼 클릭시 리스너 생성해야됨

// 민증 or 운면 폼 미리 가려놓음
document.querySelector(SELECT_TEXT).classList.add(HIDDEN_CLASS);









// 민증, 운면 선택시 호출되는 함수
function selectFunc() {
    let select = document.querySelector(MAIN_SELECT_WHAT).value;
    console.log(select); //x
    if(select === "min"){
        //show min
        showMin();
    }  else {
        //show woon
        showWoon();
    }
}
function showMin() {
    document.querySelector(SELECT_TEXT).classList.remove(HIDDEN_CLASS); //hidden class 삭제
    document.querySelector(`${SELECT_TEXT} h1`).innerHTML = "주민등록증";
    document.querySelector(".textName").innerHTML = "이름";
    document.querySelector(".inputName").placeholder = "이름";
    document.querySelector(".textNum").innerHTML = "주민등록번호";
    document.querySelector(".inputNum").placeholder = "주민등록번호";
    document.querySelector(".textDate").innerHTML = "발급일";
}
function showWoon() {
    document.querySelector(SELECT_TEXT).classList.remove(HIDDEN_CLASS); //hidden class 삭제
    document.querySelector(`${SELECT_TEXT} h1`).innerHTML = "운전면허증";
    document.querySelector(".textName").innerHTML = "이름";
    document.querySelector(".inputName").placeholder = "이름";
    document.querySelector(".textNum").innerHTML = "운전면허번호";
    document.querySelector(".inputNum").placeholder = "운전면허번호";
    document.querySelector(".textDate").innerHTML = "기간";
}

// 제출버튼 클릭 시 호출
btn.addEventListener("submit", btnFunc);
function btnFunc(event){
    alert("제출완료");
}
