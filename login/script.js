document.querySelector(".start-button").addEventListener("click", () => {
  alert("확인 버튼이 클릭되었습니다!");

  // 이름과 생년월일이 맞으면 메인 페이지로 이동
  let name = document.querySelector("#name").value;
  let birth = document.querySelector("#birth").value;
  if (name === "고길동" && birth === "900101") {
    alert("로그인 성공!");
    location.href = "/main/main.html";
  } else {
    alert("로그인 실패!");
  }
});
