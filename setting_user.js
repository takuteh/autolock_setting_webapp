const add_btn=document.getElementById("addBtn");
const reset_button=document.getElementById("reset_button");
const apply_button=document.getElementById("apply_button");
const table = document.getElementById("user-table-body");

table.addEventListener("click",(e)=>{
  console.log(e.target.tagName);
  if(e.target.tagName==="BUTTON" && e.target.name==="remove_button"){
    const res=confirm("データベースからも削除されます");
    if(res){
      const row=e.target.closest("tr");
      row.remove();
    }
  }
});

reset_button.addEventListener("click",()=>{
  const res=confirm("現在の設定値に戻します");
});

apply_button.addEventListener("click",()=>{
  const res=confirm("設定を適用します");
});

add_btn.addEventListener("click",()=>{
  const newRow=document.createElement("tr");
  newRow.innerHTML=`
  <td><input type="text" name="user_name"></td>
  <td><input type="text" name="line_id"></td>
  <td><input type="text" name="slack_id"></td>
  <td><input type="date" name="start_day"></td>
  <td><input type="date" name="end_date"></td>
  <td><button name="remove_button">削除</btn></td>
  `;
      table.appendChild(newRow);
});