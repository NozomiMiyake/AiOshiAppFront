// ①普通のフォームを作成する
// ②フォームの入力があると次のフォームが表示されるようにする
// ③最後のフォームまで入力すると、入力内容が送信される
// ④フォームの見た目をチャット風にする

$(document).ready(function () {
  $("#q1").fadeIn(1000, function () {
    $("#a1").fadeIn(500);
  });

  $("#a1").on("input", function () {
    if ($(this).val().length > 0) {
      $("#q2").fadeIn(1000, function () {
        $("#a2").fadeIn(500);
      });
    }
  });

  $("#a2").on("input", function () {
    if ($(this).val().length > 0) {
      $("#q3").fadeIn(1000, function () {
        $("#a3").fadeIn(500);
      });
    }
  });

  $("#a3").on("input", function () {
    if ($(this).val().length > 0) {
      $("#q4").fadeIn(1000, function () {
        $("#a4").fadeIn(500);
      });
    }
  });

  $("#a4").on("input", function () {
    if ($(this).val().length > 0) {
      $("#q5").fadeIn(1000, function () {
        $("#a5").fadeIn(500);
      });
    }
  });
});
