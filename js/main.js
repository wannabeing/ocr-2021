const MAIN_SELECT_WHAT = ".main__select__what";
const HIDDEN_CLASS = "hidden";
const SELECT_TEXT= ".text";
const SELECT_PIC = ".main__picture";
const SELECT_FILE = ".main__file";
const btn = document.querySelector(".btn"); //버튼 클릭시 리스너 생성해야됨
const fileName = document.querySelector(".fileName");
const IMG = document.querySelector("#img");

// 민증 or 운면 폼 미리 가려놓음
document.querySelector(SELECT_TEXT).classList.add(HIDDEN_CLASS);






// 사진첨부시 호출되는 함수, 잘모르겟
function selectPic(event) {
    let reader = new FileReader();
    reader.onload = function(event){
        IMG.setAttribute("src", event.target.result);
        document.querySelector(SELECT_PIC).appendChild(IMG);
    };
    reader.readAsDataURL(event.target.files[0]);
}

// 민증, 운면 선택시 호출되는 함수
function selectFunc() {
    IMG.setAttribute("src",""); //이미지 초기화
    let select = document.querySelector(MAIN_SELECT_WHAT).value;
    if(select === "min"){
        // 민증 입력폼
        showMin();
    }  else if (select === "woon"){
        // 운전면허 입력폼
        showWoon();
    } else {
        // 폼 초기화
        showDefault();
    }
}
function showMin() {
    document.querySelector(SELECT_FILE).classList.remove(HIDDEN_CLASS);
    document.querySelector(SELECT_PIC).classList.remove(HIDDEN_CLASS);
    document.querySelector(SELECT_TEXT).classList.remove(HIDDEN_CLASS); //hidden class 삭제
    document.querySelector(`${SELECT_TEXT} h1`).innerHTML = "주민등록증";
    document.querySelector(".textName").innerHTML = "이름";
    document.querySelector(".inputName").placeholder = "이름";
    document.querySelector(".textNum").innerHTML = "주민등록번호";
    document.querySelector(".inputNum").placeholder = "주민등록번호";
    document.querySelector(".textDate").innerHTML = "발급일";
}
function showWoon() {
    document.querySelector(SELECT_FILE).classList.remove(HIDDEN_CLASS);
    document.querySelector(SELECT_PIC).classList.remove(HIDDEN_CLASS);
    document.querySelector(SELECT_TEXT).classList.remove(HIDDEN_CLASS); //hidden class 삭제
    document.querySelector(`${SELECT_TEXT} h1`).innerHTML = "운전면허증";
    document.querySelector(".textName").innerHTML = "이름";
    document.querySelector(".inputName").placeholder = "이름";
    document.querySelector(".textNum").innerHTML = "운전면허번호";
    document.querySelector(".inputNum").placeholder = "운전면허번호";
    document.querySelector(".textDate").innerHTML = "기간";
}
function showDefault() {
    document.querySelector(SELECT_FILE).classList.add(HIDDEN_CLASS);
    document.querySelector(SELECT_PIC).classList.add(HIDDEN_CLASS);
    document.querySelector(SELECT_TEXT).classList.add(HIDDEN_CLASS);
}

// 제출버튼 클릭 시 호출
btn.addEventListener("button", btnFunc);
function btnFunc(event){
    event.preventDefault();
    alert("제출완료");
}
