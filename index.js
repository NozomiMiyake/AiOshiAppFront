// HTMLが読み込まれるのを待って、liffの初期化を実行
$(document).ready(function () {
  const liffId = "2003988792-b4BLAeqw";
  initializeLiff(liffId);
});

function initializeLiff(liffId) {
  console.log("initializeLiff");
  liff
    .init({
      liffId: liffId,
    })
    .then(() => {
      console.log("LIFF Initialization succeeded");
      initializeApp();

      // liffにログイン
      if (!liff.isLoggedIn()) {
        console.log("ログインしていません");
        liff.login();
      }
    })
    .catch((err) => {
      console.log("LIFF Initialization failed ", err);
    });
}

// LINEにメッセージを送信
function sendText(text) {
  liff
    .sendMessages([
      {
        type: "text",
        text: text,
      },
    ])
    .then(function () {
      liff.closeWindow();
    })
    .catch(function (error) {
      window.alert("Failed to send message " + error);
    });
}

const params = new URL(document.location).searchParams;
const key = params.get("key");

$(function () {
  $("form").submit(function () {
    const setlist = $('input[name="setlist"]').val();
    const bestSong = $('input[name="best_song"]').val();
    const impression = $('input[name="impression"]').val();
    const memorableEvent = $('input[name="memorable_event"]').val();

    // メッセージに投げるテキストを作成
    // ⭐️ここはchatGPTとかに投げたいね…
    const msg = `今日のイベントレポ！
    \n${setlist}
    \n${bestSong}
    \n${impression}
    \n${memorableEvent}`;

    window.alert("登録が完了しました。");
    sendText(msg);
    return false;
  });
});
