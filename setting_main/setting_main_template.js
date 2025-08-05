const reset = document.getElementById("rst_btn");
reset.addEventListener("click", () => {
  test();
});

const apply = document.getElementById("apply_btn");
apply.addEventListener("click", async () => {
  const apply_ok = confirm("設定を適用して再始動します");
  if (apply_ok) {
    const new_settings = {
      autolock: document.querySelector("#autolock select").value,
      timeout_seq: document.querySelector("#timeout_seq input").value,
      rotate_direction: document.querySelector("#rotate_direction select")
        .value,
      ignore_clsw: document.querySelector("#ignore_clsw select").value,
      authorize_external_users: document.querySelector(
        "#authorize_external_users select"
      ).value,
      authorize_internal_users: document.querySelector(
        "#authorize_internal_users select"
      ).value,
    };
    console.log(new_settings);

    try {
      const response = await fetch("BASE_URL/webapp_end/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(new_settings),
      });

      if (response.ok) {
        alert("設定を適用しました");
      } else {
        alert("設定の適用に失敗しました");
      }
      console.log(response);
    } catch (error) {
      alert("通信エラーが発生しました");
      console.error(error);
    }
  }
});

async function get_current_setting() {
  try {
    const response = await fetch("BASE_URL/webapp_end/get");
    const data = await response.json();
    console.log(data);

    //autolock
    const autolock_set = document.getElementById("autolock");
    const autolock_select = autolock_set.getElementsByTagName("select")[0];
    if (data.main.autolock != null) {
      autolock_select.value = String(data.main.autolock);
    }

    //timeout_seq
    const timeout_seq_set = document.getElementById("timeout_seq");
    const timeout_seq_select = timeout_seq_set.getElementsByTagName("input")[0];
    if (data.main.timeout_seq != null) {
      timeout_seq_select.value = data.main.timeout_seq;
    }

    const rotate_direction_set = document.getElementById("rotate_direction");
    const rotate_direction_select =
      rotate_direction_set.getElementsByTagName("select")[0];
    if (data.main.rotate_direction != null) {
      rotate_direction_select.value = data.main.rotate_direction;
    }

    const ignore_clsw_set = document.getElementById("ignore_clsw");
    const ignore_clsw_select =
      ignore_clsw_set.getElementsByTagName("select")[0];
    if (data.main.ignore_clsw != null) {
      ignore_clsw_select.value = data.main.ignore_clsw;
    }

    const authorize_external_users_set = document.getElementById(
      "authorize_external_users"
    );
    const authorize_external_users_select =
      authorize_external_users_set.getElementsByTagName("select")[0];
    if (data.main.authorize_external_users != null) {
      authorize_external_users_select.value =
        data.main.authorize_external_users;
    }

    const authorize_internal_users_set = document.getElementById(
      "authorize_internal_users"
    );
    const authorize_internal_users_select =
      authorize_internal_users_set.getElementsByTagName("select")[0];
    if (data.main.authorize_internal_users != null) {
      authorize_internal_users_select.value = String(
        data.main.authorize_internal_users
      );
    }
  } catch (error) {
    console.error("Fetchエラー:", error);
  }
}
get_current_setting();
