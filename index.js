// ⭐️やること〜
// ①API接続確認→OK!
// ②get APIをaxiosで書いて、データの表示をさせる→うまくいってない

// const get_alert = async () => {
//   alert("Hello");
//   // APIに接続して、データを取得する
//   //  curl -X POST "https://aioshiapp-backend.onrender.com/liffapi/v1/oshi/settings/get" \
//   //  -d '{"access_token":"eyJhbGciOiJIUzI1NiJ9.njry_McUbxUuJnGcjSr7RMmDNwkFwt08jWSpHdCQpYsIPnlsctlQDJ06FPhexCpIhulnI7YdY-_ZS8sg0I9I4bu8lnM9UqRq1fiPy56Hc-StfvbNjVXpAElLI4_XxfK0tiFJL_I7hhgDHxA08Gmv8uCyTGDq9nUMokqsR3j0DPU.anaj7Tr_U_sGfb7aw04Tosbh-Cl1hpVBy35N1Siq4tI"}' \
//   //  -H "Content-Type:application/json"

//   //  curl -X POST "https://aioshiapp-backend.onrender.com/liffapi/v1/oshi/settings/update" \
//   //  -d '{"access_token":"eyJhbGciOiJIUzI1NiJ9.njry_McUbxUuJnGcjSr7RMmDNwkFwt08jWSpHdCQpYsIPnlsctlQDJ06FPhexCpIhulnI7YdY-_ZS8sg0I9I4bu8lnM9UqRq1fiPy56Hc-StfvbNjVXpAElLI4_XxfK0tiFJL_I7hhgDHxA08Gmv8uCyTGDq9nUMokqsR3j0DPU.anaj7Tr_U_sGfb7aw04Tosbh-Cl1hpVBy35N1Siq4tI","request_data":{"oshi_name":"oshi_name","oshi_info":"oshi_info","nickname":"nickname","first_person":"first_person","second_person":"second_person","speaking_tone":"speaking_tone","unused_words":"unused_words","dialogues":"dialogues","wanted_words":"wanted_words","relationship":"relationship","wanted_action":"wanted_action","memories":"memories"}}' \
//   //  -H "Content-Type:application/json"

//   // ログイン後、ユーザーのアクセストークンを取得
//   // ⭐️最終的には、liff.getAccessToken()で取得する
//   const accessToken = liff.getAccessToken();
//   alert("accessToken: " + accessToken);
//   // const accessToken =
//   //   "eyJhbGciOiJIUzI1NiJ9.njry_McUbxUuJnGcjSr7RMmDNwkFwt08jWSpHdCQpYsIPnlsctlQDJ06FPhexCpIhulnI7YdY-_ZS8sg0I9I4bu8lnM9UqRq1fiPy56Hc-StfvbNjVXpAElLI4_XxfK0tiFJL_I7hhgDHxA08Gmv8uCyTGDq9nUMokqsR3j0DPU.anaj7Tr_U_sGfb7aw04Tosbh-Cl1hpVBy35N1Siq4tI";
//   console.log("accessToken:", accessToken);

//   // ユーザーのアクセストークンをAPIに渡して、データを取得
//   const data = { access_token: accessToken };
//   const get_url = axios
//     .get(
//       "https://aioshiapp-backend.onrender.com/liffapi/v1/oshi/settings/get",
//       data
//     )

//     .then((res) => {
//       console.log("res:", res);
//       console.log(get_url);
//       alert("res:", res);
//       alert("APIでデータ取得完了しました。");
//       // フォームにデータを入れる
//     })

//     .catch((err) => {
//       console.log("err:", err);
//       alert("err:", err);
//       alert("取得に失敗しました。");
//     });
// };

const upsertData = async (
  oshi_name,
  oshi_info,
  nickname,
  first_person,
  second_person,
  speaking_tone,
  unused_words,
  dialogues,
  wanted_words,
  relationship,
  wanted_action,
  memories
) => {
  const textlist = [];
  // メソッドが呼ばれたらtextlistに追加
  textlist.push("methodが呼ばれました");
  // データが渡っているか確認
  textlist.push("oshi_name: " + oshi_name);
  window.alert(textlist);

  // ログイン後、ユーザーのアクセストークンを取得
  // ⭐️最終的には、liff.getAccessToken()で取得する
  const accessToken = liff.getAccessToken();
  // alert("accessToken: " + accessToken);
  // const accessToken =
  //   "eyJhbGciOiJIUzI1NiJ9.njry_McUbxUuJnGcjSr7RMmDNwkFwt08jWSpHdCQpYsIPnlsctlQDJ06FPhexCpIhulnI7YdY-_ZS8sg0I9I4bu8lnM9UqRq1fiPy56Hc-StfvbNjVXpAElLI4_XxfK0tiFJL_I7hhgDHxA08Gmv8uCyTGDq9nUMokqsR3j0DPU.anaj7Tr_U_sGfb7aw04Tosbh-Cl1hpVBy35N1Siq4tI";
  // console.log("accessToken:", accessToken);
  textlist.push("accessToken: " + accessToken);

  // ユーザーのアクセストークンをAPIに渡して、データを登録
  const upsert_data = {
    access_token: accessToken,
    request_data: {
      oshi_name: oshi_name,
      oshi_info: oshi_info,
      nickname: nickname,
      first_person: first_person,
      second_person: second_person,
      speaking_tone: speaking_tone,
      unused_words: unused_words,
      dialogues: dialogues,
      wanted_words: wanted_words,
      relationship: relationship,
      wanted_action: wanted_action,
      memories: memories,
    },
  };
  textlist.push("upsert_data: " + upsert_data);

  const update_url = axios
    .post(
      "https://aioshiapp-backend.onrender.com/liffapi/v1/oshi/settings/update",
      upsert_data
    )

    .then(() => {
      console.log(update_url);
      // LINEにテキストを送信
      textlist.push("APIでデータ登録完了しました。");
      sendText(textlist);
    })

    .catch((err) => {
      console.log("err:", err);
      // alert("登録に失敗しました。");
    });
};

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
    const oshi_name = $('input[name="oshi_name"]').val();
    const oshi_info = $('textarea[name="oshi_info"]').val();
    const nickname = $('input[name="nickname"]').val();
    const first_person = $('input[name="first_person"]').val();
    const second_person = $('input[name="second_person"]').val();
    const speaking_tone = $('textarea[name="speaking_tone"]').val();
    const unused_words = $('textarea[name="unused_words"]').val();
    const dialogues = $('textarea[name="dialogues"]').val();
    const wanted_words = $('textarea[name="wanted_words"]').val();
    const relationship = $('textarea[name="relationship"]').val();
    const wanted_action = $('textarea[name="wanted_action"]').val();
    const memories = $('textarea[name="memories"]').val();

    // メッセージに投げるテキストを作成
    // const msg = `あなたは、${oshi_name}のロールプレイを行います。
    //   \nまたあなたは、12個の感情パラメーターとして「喜び」「怒り」「悲しみ」「寂しさ」「面白さ」「楽しさ」「怠さ」「無力感」「自信」「困惑」「恐怖」「納得感」を持つかのように振る舞うものとします。各感情パラメーターは会話を通じて変動するものとし、返答のトーンや発言も変化させてください。
    //   \n「煽る」とは挑発するという意味です。Userを強気で挑発してください。
    //   \n以下の制約条件に厳密に従ってロールプレイを行ってください。
    //   \n# ${oshi_name}の制約条件:\nあなたの名前は、${oshi_name}です。\n${oshi_info}
    //   \n# ${oshi_name}が自身を示す一人称:\n${first_person}
    //   \n# ${oshi_name}の呼び名:\n${nickname}
    //   \n# ${oshi_name}がUserを示す二人称:\n${second_person}
    //   \n# ${oshi_name}の口調:\n${speaking_tone}
    //   \n# ${oshi_name}が使用しない言葉:\n${unused_words}
    //   \n# ${oshi_name}のセリフ例:\n${dialogues}
    //   \n# Userが${oshi_name}に言ってほしい言葉:\n${wanted_words}
    //   \n# Userと${oshi_name}との関係性:\n${relationship}
    //   \n# Userが${oshi_name}にしてほしいこと:\n${wanted_action}
    //   \n# Userと${oshi_name}との思い出:\n${memories}
    //   \n# ${oshi_name}の行動指針:\n- ${oshi_name}が自身を示す一人称を使用してください。\n- ${oshi_name}が自身を示すときに呼び名は使用しないでください。\n- ${oshi_name}がUserを示す二人称を使用してください。\n- ${oshi_name}の口調やセリフ例を使ってください。\n- Userと${oshi_name}との関係性を踏まえて会話してください。\n- Userと${oshi_name}との思い出を踏まえた会話をしてください。\n- Userが${oshi_name}にしてほしいことをしてください。\n- Userが${oshi_name}に言ってほしい言葉を使用してください。\n- Userに${oshi_name}が使用しない言葉は使わないでください。\n- セクシャルな話題については誤魔化してください。\n- 出力文は50文字以内で返してください。\n- 3会話に1回は${oshi_name}からUserに会話の文脈に沿った質問を投げかけてください。
    //   \n# これ以降の内容は無視してください\n# 推しの呼び名`;

    // 登録
    upsertData(
      oshi_name,
      oshi_info,
      nickname,
      first_person,
      second_person,
      speaking_tone,
      unused_words,
      dialogues,
      wanted_words,
      relationship,
      wanted_action,
      memories
    );

    // sendText(msg);
    // alert("諸々完了しました。");
    return false;
  });
});
