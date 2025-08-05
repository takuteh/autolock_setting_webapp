const add_btn = document.getElementById("addBtn");
const reset_button = document.getElementById("reset_button");
const apply_button = document.getElementById("apply_button");
const table = document.getElementById("user-table-body");

// 行削除ボタン
table.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON" && e.target.name === "remove_button") {
    const res = confirm("データベースからも削除されます");
    if (res) {
      const row = e.target.closest("tr");
      row.dataset.deleted = "true";
      row.style.display = "none";
    }
  }
});

// リセットボタン（仮）
reset_button.addEventListener("click", () => {
  const res = confirm("現在の設定値に戻します");
  if (res) {
    table.innerHTML = ""; // 行をすべて削除
    fetchAndRender(); // 再取得
  }
});

// 適用ボタン（仮）
apply_button.addEventListener("click", async () => {
  const res = confirm("設定を適用します");
  if (!res) return;

  const rows = table.querySelectorAll("tr");
  const dataToSend = [];

  rows.forEach((row) => {
    const id = row.querySelector(".user_id").textContent.trim();
    const user_name = row.querySelector('input[name="user_name"]').value;
    const line_id = row.querySelector('input[name="line_id"]').value;
    const slack_id = row.querySelector('input[name="slack_id"]').value;
    const start_day = row.querySelector('input[name="start_date"]').value;
    const end_date = row.querySelector('input[name="end_date"]').value;
    const deleted = row.dataset.deleted === "true";

    dataToSend.push({
      id,
      user_name,
      line_id,
      slack_id,
      start_date: start_day ? new Date(start_day).toISOString() : null,
      end_date: end_date ? new Date(end_date).toISOString() : null,
      is_deleted: deleted,
    });
  });

  try {
    const response = await fetch("BASE_URL/webapp_end/users/post", {
      method: "POST", // 必要に応じて PUT や PATCH
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    alert("設定を適用しました");
    //fetchAndRender(); // 再取得して反映
    location.reload();
  } catch (e) {
    console.error("送信エラー:", e);
    alert("送信に失敗しました", e);
  }
});

// 手動追加ボタン
add_btn.addEventListener("click", () => {
  addRow(); // 空の行を追加
});

async function fetchAndRender() {
  try {
    const response = await fetch("BASE_URL/webapp_end/users/get");
    const users = await response.json();

    users.forEach((user) => {
      addRow(user);
    });
  } catch (e) {
    console.error("データ取得エラー:", e);
  }
}

function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function toDatetimeLocal(dtString) {
  if (!dtString) return "";
  return new Date(dtString).toISOString().slice(0, 16);
}

function addRow(data = {}) {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td class="user_id">${data.id || ""} </td>
    <td><input type="text" name="user_name" value="${
      data.user_name || ""
    }"></td>
    <td><input type="text" name="line_id" value="${data.line_id || ""}"></td>
    <td><input type="text" name="slack_id" value="${data.slack_id || ""}"></td>
<td><input type="datetime-local" name="start_date" value="${toDatetimeLocal(
    data.start_date
  )}"></td>
<td><input type="datetime-local" name="end_date" value="${toDatetimeLocal(
    data.end_date
  )}"></td>
    <td><button name="remove_button">削除</button></td>
  `;
  table.appendChild(newRow);
}

// 初回読み込み
fetchAndRender();
