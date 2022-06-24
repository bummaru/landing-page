//줄 바꿈 문자를 기준으로 textarea 문자열을 분리
// var txtBox = document.getElementById("Message");
// var lines = txtBox.value.split("\n");

//내용을 HTML 버전으로 변경
// var resultString = "<p>";
// for (var i = 0; i < lines.length; i++) {
//     resultString += lines[i] + "<br>";
// }
// resultString += "</p>";

//페이지에 출력
// var blk = document.getElementById("result");
// blk.innerHTML = resultString;

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      this.contact_number.value = (Math.random() * 100000) | 0;

      emailjs.sendForm("service_co4ep3m", "template_1rm15g7", this).then(
        function () {
          alert("전송했습니다!");
          reset();
        },
        function (error) {
          console.log("이메일 보내기 실패", error);
        }
      );
    });

  function reset() {
    $("textarea,input[type=text],input[type=number],input[type=email]").val("");
  }
};
