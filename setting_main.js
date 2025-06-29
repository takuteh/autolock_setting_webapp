
      const reset=document.getElementById("rst_btn");
      reset.addEventListener("click",()=>{
        test();
      })

      const apply=document.getElementById("apply_btn");
      apply.addEventListener("click",async ()=>{
        const apply_ok=confirm("設定を適用して再始動します");
        if(apply_ok){
          const new_settings={
            autolock: document.querySelector("#autolock select").value,
            timeout_seq: document.querySelector("#timeout_seq input").value,
            rotate_direction: document.querySelector("#rotate_direction select").value,
         ignore_clsw: document.querySelector("#ignore_clsw select").value,   
          };
          console.log(new_settings);
            
try {
  const response = await fetch("https://margarita.shacknet.us/cgi/save_data.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(new_settings)
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
        
      async function test(){
        try {
          const response = await fetch("https://margarita.shacknet.us/get_data.php");
          const data = await response.json();
          console.log(data);
          
          //autolock
          const autolock_set=document.getElementById("autolock");
          const autolock_select=autolock_set.getElementsByTagName("select")[0];
          if(data.autolock){
            autolock_select.value=data.autolock;
          }
          
          //timeout_seq
          const timeout_seq_set=document.getElementById("timeout_seq");
          const timeout_seq_select=timeout_seq_set.getElementsByTagName("input")[0];
          if(data.timeout_seq){
            timeout_seq_select.value=data.timeout_seq;
          }
          
          const rotate_direction_set=document.getElementById("rotate_direction");
          const rotate_direction_select=rotate_direction_set.getElementsByTagName("select")[0];
          if(data.rotate_direction){
            rotate_direction_select.value=data.rotate_direction;
          }
          
          const ignore_clsw_set=document.getElementById("ignore_clsw");
          const ignore_clsw_select=ignore_clsw_set.getElementsByTagName("select")[0];
          if(data.ignore_clsw){
            ignore_clsw_select.value=data.ignore_clsw;
          }
        } catch (error) {
          console.error("Fetchエラー:", error);
        }
      }
      test();